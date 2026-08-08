import { useState } from 'react';
import './toolbar.css';

export default function Toolbar({ onCopyCss, onShare, onDownloadImage, onDownloadFont, exporting }) {
  const [toast, setToast] = useState('');

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2200);
  };

  const handle = (fn, successMsg) => async () => {
    try {
      await fn();
      flash(successMsg);
    } catch {
      flash('حدث خطأ، حاول مجددًا');
    }
  };

  return (
    <div className="toolbar">
      <button className="btn" onClick={handle(onCopyCss, 'تم نسخ CSS بنجاح ✓')}>
        📋 نسخ CSS
      </button>
      <button className="btn" onClick={handle(onShare, 'تم نسخ رابط المشاركة ✓')}>
        🔗 مشاركة
      </button>
      <button className="btn" onClick={handle(onDownloadImage, 'تم حفظ الصورة ✓')} disabled={exporting}>
        {exporting ? 'جاري الحفظ…' : '🖼️ حفظ كصورة'}
      </button>
      <button className="btn btn--outline" onClick={onDownloadFont}>
        ⬇️ تحميل الخط
      </button>

      {toast && <div className="toolbar__toast" role="status">{toast}</div>}
    </div>
  );
}
