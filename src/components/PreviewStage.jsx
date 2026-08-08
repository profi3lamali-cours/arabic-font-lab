import { forwardRef } from 'react';
import './preview-stage.css';

const PreviewStage = forwardRef(function PreviewStage(
  { text, fontFamily, fontSize, weight, color, bgColor, align, letterSpacing, lineHeight, loading },
  ref
) {
  return (
    <section className="stage">
      <div className="stage__eyebrow">المعاينة المباشرة</div>
      <div
        ref={ref}
        className="stage__canvas"
        style={{ background: bgColor }}
      >
        {loading && <div className="stage__loading">جاري تحميل الخط…</div>}
        <p
          className="stage__text"
          style={{
            fontFamily: `'${fontFamily}', sans-serif`,
            fontSize: `${fontSize}px`,
            fontWeight: weight,
            color,
            textAlign: align,
            letterSpacing: `${letterSpacing}px`,
            lineHeight,
            opacity: loading ? 0.35 : 1
          }}
        >
          {text || 'اكتب نصك هنا لمعاينته…'}
        </p>
        <div className="stage__underline" style={{ background: color }} aria-hidden="true" />
      </div>
    </section>
  );
});

export default PreviewStage;
