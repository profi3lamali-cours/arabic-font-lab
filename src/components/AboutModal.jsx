import InstagramBadge from './InstagramBadge.jsx';
import './modal.css';

export default function AboutModal({ open, onClose, totalFonts }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="حول المشروع">
        <button className="modal__close" onClick={onClose} aria-label="إغلاق">✕</button>
        <h2>حول المشروع</h2>
        <p>
          <strong>Arabic Font Lab</strong> أداة مجانية بالكامل تتيح لك اكتشاف ومعاينة أكثر من {totalFonts} خطًا
          عربيًا حقيقيًا مباشرة في المتصفح، دون الحاجة لتنزيل أو تثبيت أي برنامج.
        </p>
        <p>
          جميع الخطوط المستخدمة مستضافة رسميًا على Google Fonts، وهي مجانية للاستخدام الشخصي والتجاري،
          ومرخّصة بشكل واضح — بشكل أساسي بموجب <em>SIL Open Font License 1.1</em>. يمكنك مراجعة ترخيص كل
          خط ومصدره من قسم «تراخيص الخطوط» أدناه، أو من صفحته الرسمية.
        </p>
        <p>
          المشروع مفتوح للتطوير، ويمكن تثبيته كتطبيق على هاتفك أو حاسوبك، والعمل به دون إنترنت بعد أول زيارة.
        </p>
        <div className="modal__footer">
          <InstagramBadge />
        </div>
      </div>
    </div>
  );
}
