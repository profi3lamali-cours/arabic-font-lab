import { useMemo, useState } from 'react';
import FontCard from './FontCard.jsx';
import { CATEGORIES } from '../data/fonts.js';
import './font-grid.css';

export default function FontGrid({ fonts, activeFontId, favorites, loadedFonts, onSelect, onToggleFavorite, onLoaded }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('الكل');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const filtered = useMemo(() => {
    let list = fonts;
    if (showFavoritesOnly) list = list.filter((f) => favorites.includes(f.id));
    if (category !== 'الكل') list = list.filter((f) => f.category.includes(category));
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (f) =>
          f.fontName.toLowerCase().includes(q) ||
          f.arabicName.includes(query.trim()) ||
          f.category.some((c) => c.includes(query.trim()))
      );
    }
    return list;
  }, [fonts, query, category, showFavoritesOnly, favorites]);

  return (
    <section className="font-grid-section">
      <div className="font-grid-toolbar">
        <input
          type="search"
          className="font-search"
          placeholder="ابحث عن خط… (مثال: Cairo أو القاهرة)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="ابحث عن خط"
        />
        <button
          className={`fav-tab ${showFavoritesOnly ? 'fav-tab--active' : ''}`}
          onClick={() => setShowFavoritesOnly((v) => !v)}
        >
          ⭐ المفضلة ({favorites.length})
        </button>
      </div>

      <div className="category-chips">
        <button
          className={`chip ${category === 'الكل' ? 'chip--active' : ''}`}
          onClick={() => setCategory('الكل')}
        >
          الكل ({fonts.length})
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`chip ${category === c ? 'chip--active' : ''}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-grid-empty">لا توجد خطوط مطابقة لبحثك. جرّب كلمة أخرى أو غيّر التصنيف.</p>
      ) : (
        <div className="font-grid">
          {filtered.map((font) => (
            <FontCard
              key={font.id}
              font={font}
              isActive={font.id === activeFontId}
              isFavorite={favorites.includes(font.id)}
              isLoaded={loadedFonts.has(font.fontName)}
              onSelect={onSelect}
              onToggleFavorite={onToggleFavorite}
              onLoaded={onLoaded}
            />
          ))}
        </div>
      )}
    </section>
  );
}
