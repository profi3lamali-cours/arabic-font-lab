#!/usr/bin/env python3
"""
توليد أيقونات PWA لمشروع Arabic Font Lab.
يستخدم خط Cairo (متغيّر) الحقيقي المستضاف على Google Fonts لرسم حرف "ع"
بأسلوب عصري ضمن تدرّج بُنّي/ذهبي (Brass) يطابق هوية المشروع.

الاستخدام:
    python3 scripts/generate_icons.py
يتطلب: pip install Pillow
"""
import os
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_PATH = os.path.join(BASE_DIR, 'assets', 'fonts', 'Cairo-Variable.ttf')
OUT_DIR = os.path.join(BASE_DIR, 'public', 'icons')

INK = (18, 16, 14)
BRASS_LIGHT = (221, 187, 110)
BRASS_DARK = (168, 130, 47)


def make_gradient(size):
    img = Image.new('RGB', (size, size), INK)
    draw = ImageDraw.Draw(img)
    for y in range(size):
        t = y / size
        r = int(BRASS_LIGHT[0] * (1 - t) + BRASS_DARK[0] * t)
        g = int(BRASS_LIGHT[1] * (1 - t) + BRASS_DARK[1] * t)
        b = int(BRASS_LIGHT[2] * (1 - t) + BRASS_DARK[2] * t)
        draw.line([(0, y), (size, y)], fill=(r, g, b))
    return img


def draw_icon(size, maskable=False, out_name=None):
    img = make_gradient(size)
    draw = ImageDraw.Draw(img)

    if maskable:
        # منطقة أمان لأيقونات maskable: نص أصغر في وسط الصورة مع خلفية كاملة
        letter_scale = 0.42
    else:
        # زوايا دائرية للأيقونة العادية
        letter_scale = 0.55
        mask = Image.new('L', (size, size), 0)
        mdraw = ImageDraw.Draw(mask)
        radius = int(size * 0.22)
        mdraw.rounded_rectangle([0, 0, size, size], radius=radius, fill=255)
        rounded = Image.new('RGB', (size, size), INK)
        rounded.paste(img, (0, 0), mask)
        img = rounded
        draw = ImageDraw.Draw(img)

    font_size = int(size * letter_scale)
    font = ImageFont.truetype(FONT_PATH, font_size)
    text = 'ع'
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pos = ((size - tw) / 2 - bbox[0], (size - th) / 2 - bbox[1])
    draw.text(pos, text, font=font, fill=INK)

    path = os.path.join(OUT_DIR, out_name)
    img.save(path, 'PNG')
    print('✓', path)


def draw_favicon_svg():
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgb{BRASS_LIGHT}"/>
      <stop offset="1" stop-color="rgb{BRASS_DARK}"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <text x="32" y="44" font-family="Cairo, sans-serif" font-weight="700"
        font-size="34" fill="rgb{INK}" text-anchor="middle">ع</text>
</svg>'''
    with open(os.path.join(OUT_DIR, 'favicon.svg'), 'w', encoding='utf-8') as f:
        f.write(svg)
    print('✓ favicon.svg')


def draw_og_cover():
    W, H = 1200, 630
    img = make_gradient(H)
    img = img.resize((W, H))
    draw = ImageDraw.Draw(img)
    title_font = ImageFont.truetype(FONT_PATH, 90)
    sub_font = ImageFont.truetype(FONT_PATH, 34)

    title = 'مختبر الخطوط العربية'
    bbox = draw.textbbox((0, 0), title, font=title_font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((W - tw) / 2 - bbox[0], H / 2 - th - 10), title, font=title_font, fill=INK)

    sub = 'Arabic Font Lab · 50+ خطًا حقيقيًا'
    bbox2 = draw.textbbox((0, 0), sub, font=sub_font)
    sw, sh = bbox2[2] - bbox2[0], bbox2[3] - bbox2[1]
    draw.text(((W - sw) / 2 - bbox2[0], H / 2 + 20), sub, font=sub_font, fill=INK)

    img.save(os.path.join(OUT_DIR, 'og-cover.png'), 'PNG')
    print('✓ og-cover.png')


if __name__ == '__main__':
    os.makedirs(OUT_DIR, exist_ok=True)
    draw_icon(192, maskable=False, out_name='icon-192.png')
    draw_icon(512, maskable=False, out_name='icon-512.png')
    draw_icon(192, maskable=True, out_name='icon-maskable-192.png')
    draw_icon(512, maskable=True, out_name='icon-maskable-512.png')
    draw_favicon_svg()
    draw_og_cover()
    print('تم توليد جميع الأيقونات بنجاح.')
