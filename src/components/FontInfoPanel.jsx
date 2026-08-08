import { fontSpecimenUrl, fontLicenseUrl, nearestWeightName } from '../data/fonts.js';
import './font-info-panel.css';

export default function FontInfoPanel({ font }) {
  if (!font) return null;
  return (
    <div className="font-info">
      <div className="font-info__head">
        <div>
          <h3 className="font-info__name" dir="ltr">{font.fontName}</h3>
          <p className="font-info__arabic">{font.arabicName}</p>
        </div>
        <div className="font-info__tags">
          {font.category.map((c) => (
            <span key={c} className="font-info__tag">{c}</span>
          ))}
        </div>
      </div>

      <dl className="font-info__grid">
        <div>
          <dt>الأوزان المتاحة</dt>
          <dd>{font.weights.map((w) => nearestWeightName(w)).join(' · ')}</dd>
        </div>
        <div>
          <dt>المصمم / الجهة</dt>
          <dd>{font.designer}</dd>
        </div>
        <div>
          <dt>الترخيص</dt>
          <dd>
            <a href={fontLicenseUrl(font.license)} target="_blank" rel="noopener noreferrer">
              {font.license === 'OFL 1.1' ? 'SIL Open Font License 1.1' : font.license}
            </a>
          </dd>
        </div>
        <div>
          <dt>المصدر</dt>
          <dd>Google Fonts</dd>
        </div>
      </dl>

      <div className="font-info__actions">
        <a className="btn btn--outline" href={fontSpecimenUrl(font.fontName)} target="_blank" rel="noopener noreferrer">
          المصدر الرسمي
        </a>
        <a className="btn btn--outline" href={fontSpecimenUrl(font.fontName)} target="_blank" rel="noopener noreferrer">
          ⬇️ تحميل الخط
        </a>
      </div>
    </div>
  );
}
