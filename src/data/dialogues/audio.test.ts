import {describe, expect, it} from "vitest";

import {dialogueTurnAudioSrc} from "./audio";
import {DAILY_DIALOGUES} from "./index";

function getDialogue(id: string) {
  const dialogue = DAILY_DIALOGUES.find((item) => item.id === id);
  if (!dialogue) throw new Error(`Missing dialogue fixture: ${id}`);
  return dialogue;
}

describe("dialogue audio alignment safeguards", () => {
  it("uses browser speech synthesis instead of known mismatched B2 passport clips", () => {
    const dialogue = getDialogue("b2-05-pass-verloren");
    expect(dialogueTurnAudioSrc(dialogue, 2)).toBe("/audio/dialogues-b2/b2-05-pass-verloren-2.mp3");
    for (const turn of [3, 4, 5]) expect(dialogueTurnAudioSrc(dialogue, turn)).toBeUndefined();
    expect(dialogue.audioNoteAr).toContain("عُطّلت ملفات MP3");
  });

  it("suppresses only the contract and heating clips with large repeatable ASR mismatches", () => {
    const employment = getDialogue("b2-07-bewerbung-vertrag");
    expect(dialogueTurnAudioSrc(employment, 4)).toBe("/audio/dialogues-b2/b2-07-bewerbung-vertrag-4.mp3");
    expect(dialogueTurnAudioSrc(employment, 5)).toBeUndefined();

    const heating = getDialogue("b2-09-wohnungsvertrag");
    expect(dialogueTurnAudioSrc(heating, 2)).toBe("/audio/dialogues-b2/b2-09-wohnungsvertrag-2.mp3");
    expect(dialogueTurnAudioSrc(heating, 3)).toBeUndefined();
    expect(dialogueTurnAudioSrc(heating, 5)).toBeUndefined();
  });

  it("keeps conventional paths and rejects invalid turns", () => {
    const a1 = getDialogue("a1-01-begruessung");
    expect(dialogueTurnAudioSrc(a1, 1)).toBe("/audio/dialogues-a1/a1-01-begruessung-1.mp3");
    const explicit = {...a1, turns: a1.turns.map((turn, index) => index === 0 ? {...turn, audioSrc: "/audio/custom.mp3"} : turn)};
    expect(dialogueTurnAudioSrc(explicit, 1)).toBe("/audio/custom.mp3");
    expect(dialogueTurnAudioSrc(a1, 0)).toBeUndefined();
    expect(dialogueTurnAudioSrc(a1, a1.turns.length + 1)).toBeUndefined();
  });
});
