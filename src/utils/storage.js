// src/utils/storage.js
// أدوات صغيرة للتعامل مع localStorage بأمان (تفشل بهدوء في حال عدم توفره)

const FAVORITES_KEY = 'afl:favorites';
const THEME_KEY = 'afl:theme';

export function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(list) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
  } catch {
    /* التخزين غير متاح — يتم تجاهل الخطأ بصمت */
  }
}

export function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* تجاهل */
  }
}
