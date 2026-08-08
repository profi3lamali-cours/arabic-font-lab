import { FONTS, fontSpecimenUrl, fontLicenseUrl } from '../data/fonts.js';
import './licenses-section.css';

export default function LicensesSection() {
  return (
    <section className="licenses" id="licenses">
      <h2 className="licenses__title">تراخيص الخطوط</h2>
      <p className="licenses__intro">
        كل خط في هذه القائمة حقيقي، مجاني، ومستضاف رسميًا على Google Fonts. اضغط على اسم الخط
        لزيارة صفحته الرسمية، أو على الترخيص لقراءة نصه الكامل.
      </p>
      <div className="licenses__table-wrap">
        <table className="licenses__table">
          <thead>
            <tr>
              <th>الخط</th>
              <th>الترخيص</th>
              <th>المصدر</th>
              <th>تحميل</th>
            </tr>
          </thead>
          <tbody>
            {FONTS.map((f) => (
              <tr key={f.id}>
                <td dir="ltr">{f.fontName}</td>
                <td>
                  <a href={fontLicenseUrl(f.license)} target="_blank" rel="noopener noreferrer">
                    {f.license === 'OFL 1.1' ? 'SIL OFL 1.1' : f.license}
                  </a>
                </td>
                <td>Google Fonts</td>
                <td>
                  <a href={fontSpecimenUrl(f.fontName)} target="_blank" rel="noopener noreferrer">
                    الصفحة الرسمية
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
