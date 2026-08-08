import InstagramBadge from './InstagramBadge.jsx';
import './header.css';

export default function Header({ theme, onToggleTheme, onOpenAbout, totalFonts }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">ع</span>
          <div className="brand__text">
            <h1 className="brand__title">Arabic Font Lab</h1>
            <p className="brand__subtitle">مختبر الخطوط العربية · {totalFonts}+ خطًا حقيقيًا</p>
          </div>
        </div>

        <div className="site-header__actions">
          <InstagramBadge compact />
          <button className="icon-btn" onClick={onOpenAbout} aria-label="حول المشروع" title="حول المشروع">
            ℹ︎
          </button>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الليلي'}
            title="تبديل المظهر"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
