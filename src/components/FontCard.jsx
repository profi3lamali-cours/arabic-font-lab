import { useEffect, useRef } from 'react';
import { fontSpecimenUrl } from '../data/fonts.js';
import { loadFont } from '../utils/fontLoader.js';
import './font-card.css';

export default function FontCard({ font, isActive, isFavorite, isLoaded, onSelect, onToggleFavorite, onLoaded }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isLoaded || !cardRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const base = font.weights.includes(400) ? 400 : font.weights[0];
          loadFont(font.fontName, [base]).then(() => onLoaded?.(font.fontName));
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [font, isLoaded, onLoaded]);

  return (
    <div ref={cardRef} className={`font-card ${isActive ? 'font-card--active' : ''}`}>
      <button className="font-card__main" onClick={() => onSelect(font)}>
        <div className="font-card__top">
          <span className="font-card__name" dir="ltr">{font.fontName}</span>
          {!isLoaded && <span className="font-card__badge">…</span>}
        </div>
        <p
          className="font-card__preview"
          style={{ fontFamily: isLoaded ? `'${font.fontName}', sans-serif` : 'inherit' }}
        >
          {font.previewText}
        </p>
        <div className="font-card__tags">
          {font.category.slice(0, 2).map((c) => (
            <span key={c} className="font-card__tag">{c}</span>
          ))}
        </div>
      </button>

      <div className="font-card__footer">
        <button
          className={`font-card__star ${isFavorite ? 'font-card__star--active' : ''}`}
          onClick={() => onToggleFavorite(font.id)}
          aria-label={isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
        <button className="font-card__link" onClick={() => onSelect(font)}>معاينة</button>
        <a
          className="font-card__link"
          href={fontSpecimenUrl(font.fontName)}
          target="_blank"
          rel="noopener noreferrer"
        >
          تحميل
        </a>
      </div>
    </div>
  );
}
