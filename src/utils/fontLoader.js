// src/utils/fontLoader.js
// يحمّل ورقة أنماط Google Fonts الخاصة بخط معيّن عند الحاجة فقط (Lazy loading)،
// ويتجنب تحميل نفس الخط مرتين.

import { fontGoogleCssUrl } from '../data/fonts.js';

const loadedFonts = new Set();
const loadingPromises = new Map();

export function loadFont(fontName, weights) {
  if (loadedFonts.has(fontName)) return Promise.resolve();
  if (loadingPromises.has(fontName)) return loadingPromises.get(fontName);

  const promise = new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontGoogleCssUrl(fontName, weights);
    link.onload = () => {
      loadedFonts.add(fontName);
      resolve();
    };
    link.onerror = () => reject(new Error(`فشل تحميل الخط: ${fontName}`));
    document.head.appendChild(link);
  });

  loadingPromises.set(fontName, promise);
  return promise;
}

export function isFontLoaded(fontName) {
  return loadedFonts.has(fontName);
}

// تحميل مسبق خفيف لأول عدد قليل من الخطوط الظاهرة في الشبكة (لتحسين الأداء)
export function preloadFonts(fontDefs, count = 8) {
  fontDefs.slice(0, count).forEach((f) => {
    // نحمّل فقط الوزن الأساسي (400 أو أقرب وزن متاح) لتخفيف الحمل
    const baseWeight = f.weights.includes(400) ? 400 : f.weights[Math.floor(f.weights.length / 2)];
    loadFont(f.fontName, [baseWeight]);
  });
}
