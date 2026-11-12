#!/usr/bin/env python3
"""Decode MP3 assets and check basic signal health (not speech quality/transcription)."""
from __future__ import annotations

import argparse
import math
import shutil
import struct
import subprocess
import sys
from pathlib import Path

SAMPLE_RATE = 16_000
WINDOW_SAMPLES = 320  # 20 ms at 16 kHz


def dbfs(value: float) -> float:
    return 20 * math.log10(value / 32768) if value > 0 else -120.0


def analyze(path: Path, ffmpeg: str, args: argparse.Namespace) -> tuple[bool, str]:
    result = subprocess.run(
        [ffmpeg, "-nostdin", "-v", "error", "-i", str(path), "-vn", "-ac", "1",
         "-ar", str(SAMPLE_RATE), "-f", "s16le", "pipe:1"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if result.returncode:
        detail = result.stderr.decode("utf-8", errors="replace").strip().splitlines()
        return False, f"decode failed: {detail[-1] if detail else 'ffmpeg returned an error'}"
    usable = result.stdout[: len(result.stdout) - (len(result.stdout) % 2)]
    if len(usable) < WINDOW_SAMPLES * 2:
        return False, "decoded audio is empty or shorter than 20 ms"

    samples = struct.unpack("<" + "h" * (len(usable) // 2), usable)
    duration = len(samples) / SAMPLE_RATE
    rms = math.sqrt(sum(sample * sample for sample in samples) / len(samples))
    peak = max(abs(sample) for sample in samples)
    peak_db = dbfs(peak)
    rms_db = dbfs(rms)
    clip_pct = 100 * sum(abs(sample) >= 32760 for sample in samples) / len(samples)

    threshold = 32768 * (10 ** (args.silence_threshold_db / 20))
    windows: list[bool] = []
    for start in range(0, len(samples), WINDOW_SAMPLES):
        frame = samples[start : start + WINDOW_SAMPLES]
        frame_rms = math.sqrt(sum(sample * sample for sample in frame) / len(frame))
        windows.append(frame_rms > threshold)
    leading_silence = next((i for i, active in enumerate(windows) if active), len(windows)) * 0.02
    trailing_silence = next((i for i, active in enumerate(reversed(windows)) if active), len(windows)) * 0.02
    quiet_pct = 100 * sum(not active for active in windows) / len(windows)

    failures = []
    if duration < args.min_duration or duration > args.max_duration:
        failures.append("duration outside configured limits")
    if rms_db < args.min_rms_db or rms_db > args.max_rms_db:
        failures.append("RMS level outside configured limits")
    if leading_silence > args.max_edge_silence or trailing_silence > args.max_edge_silence:
        failures.append("leading/trailing silence exceeds configured limit")
    if clip_pct > args.max_clipped_pct:
        failures.append("clipped-sample ratio exceeds configured limit")

    status = "FAIL" if failures else "PASS"
    report = (
        f"{status} {path}: {duration:.2f}s, RMS {rms_db:.1f} dBFS, peak {peak_db:.1f} dBFS, "
        f"edge silence {leading_silence:.2f}/{trailing_silence:.2f}s, "
        f"quiet windows {quiet_pct:.1f}%, clipped {clip_pct:.4f}%"
    )
    if failures:
        report += " — " + "; ".join(failures)
    return not failures, report


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="+", type=Path, help="MP3 files and/or directories (searched recursively)")
    parser.add_argument("--ffmpeg", default=shutil.which("ffmpeg"), help="ffmpeg executable (default: PATH)")
    parser.add_argument("--min-duration", type=float, default=0.4)
    parser.add_argument("--max-duration", type=float, default=20.0)
    parser.add_argument("--min-rms-db", type=float, default=-40.0)
    parser.add_argument("--max-rms-db", type=float, default=-3.0)
    parser.add_argument("--silence-threshold-db", type=float, default=-42.0)
    parser.add_argument("--max-edge-silence", type=float, default=1.2)
    parser.add_argument("--max-clipped-pct", type=float, default=0.1)
    args = parser.parse_args()

    if not args.ffmpeg:
        parser.error("ffmpeg was not found; install ffmpeg or pass --ffmpeg /path/to/ffmpeg")
    files: set[Path] = set()
    for path in args.paths:
        if path.is_dir():
            files.update(p for p in path.rglob("*.mp3") if p.is_file())
        elif path.is_file() and path.suffix.lower() == ".mp3":
            files.add(path)
        else:
            print(f"FAIL {path}: not an MP3 file or readable directory", file=sys.stderr)
            return 1
    if not files:
        parser.error("no MP3 files found")

    failed = False
    for path in sorted(files):
        ok, report = analyze(path, args.ffmpeg, args)
        print(report)
        failed |= not ok
    print(
        f"Signal audit: {'FAIL' if failed else 'PASS'} — {len(files)} file(s). "
        "This checks decoding and coarse signal limits only; it does not judge pronunciation, "
        "prosody, naturalness, speaker identity, or transcript alignment."
    )
    return int(failed)


if __name__ == "__main__":
    raise SystemExit(main())
