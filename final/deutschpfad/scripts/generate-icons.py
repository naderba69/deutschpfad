#!/usr/bin/env python3
"""
توليد أيقونات PWA لـ «درب الألمانية» — بالاعتماد على PIL فقط (بدون ملفات خارجية)
المخرجات:
  public/icons/icon-192.png
  public/icons/icon-512.png
  public/icons/icon-512-maskable.png
  public/icons/apple-touch-icon.png  (180×180)
  src/app/icon.png                    (512×512 — أيقونة المفضلة عبر Next.js)
  public/logo.svg                     (مصدر المتجهات للعرض في الواجهة)
"""

import math
import os

from PIL import Image, ImageDraw, ImageFont

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PUBLIC_ICONS = os.path.join(BASE, "public", "icons")
SRC_APP = os.path.join(BASE, "src", "app")
os.makedirs(PUBLIC_ICONS, exist_ok=True)

SIZE = 512

# ── الألوان ──
C_TOP_LEFT = (14, 165, 233)    # sky-500
C_BOTTOM_RIGHT = (79, 70, 229)  # indigo-600
FLAG = [(10, 10, 10), (221, 0, 0), (255, 204, 0)]  # أسود / أحمر / ذهبي


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def find_font(size):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def build_icon(size, rounded=True):
    """رسم الأيقونة بحجم معيّن (تكبير من 512 للجودة)"""
    # رسم على مقياس 1024 للحصول على حواف ناعمة عند التصغير
    S = 1024
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = img.load()

    # تدرّج قطري
    for y in range(S):
        t = y / (S - 1)
        for x in range(S):
            s = x / (S - 1)
            c = lerp(lerp(C_TOP_LEFT, C_BOTTOM_RIGHT, s), lerp(C_TOP_LEFT, C_BOTTOM_RIGHT, s), t)
            px[x, y] = (*c, 255)

    draw = ImageDraw.Draw(img)

    # زوايا دائرية (قناع)
    radius = 232 if rounded else 0
    if radius:
        mask = Image.new("L", (S, S), 0)
        md = ImageDraw.Draw(mask)
        md.rounded_rectangle([0, 0, S - 1, S - 1], radius=radius, fill=255)
        img.putalpha(mask)

    # نص "De"
    font = find_font(430)
    text = "De"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = (S - tw) / 2 - bbox[0]
    ty = (S - th) / 2 - bbox[1] - 60
    draw.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))

    # أشرطة العلم الألماني
    bar_w = 460
    bar_h = 46
    bar_x = (S - bar_w) / 2
    bar_y = 730
    for i, color in enumerate(FLAG):
        draw.rounded_rectangle(
            [bar_x, bar_y + i * (bar_h + 6), bar_x + bar_w, bar_y + i * (bar_h + 6) + bar_h],
            radius=23,
            fill=(*color, 255),
        )

    # تصغير للهدف
    return img.resize((size, size), Image.LANCZOS)


def save_icon(size, rounded=True):
    icon = build_icon(size, rounded=rounded)
    path = os.path.join(PUBLIC_ICONS, f"icon-{size}.png")
    icon.save(path, "PNG")
    print(f"✓ {path} ({size}x{size})")
    return path


# أيقونة maskable: بدون زوايا دائرية (تملأ كامل المساحة الآمنة)
maskable = build_icon(512, rounded=False)
maskable.save(os.path.join(PUBLIC_ICONS, "icon-512-maskable.png"), "PNG")
print("✓ public/icons/icon-512-maskable.png (512x512, maskable)")

save_icon(512, rounded=True)
save_icon(192, rounded=True)
save_icon(180, rounded=True)

# أيقونة المفضلة (app/icon.png) — نسخة من 512
app_icon = build_icon(512, rounded=True)
app_icon.save(os.path.join(SRC_APP, "icon.png"), "PNG")
print("✓ src/app/icon.png (512x512, favicon)")

print("تم توليد كل الأيقونات بنجاح ✅")
