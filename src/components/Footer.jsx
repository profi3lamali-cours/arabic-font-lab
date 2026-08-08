import InstagramBadge from './InstagramBadge.jsx';
import './footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__title">Arabic Font Lab</p>
          <p className="site-footer__desc">أداة مجانية لاكتشاف ومعاينة الخطوط العربية</p>
        </div>
        <InstagramBadge />
      </div>
      <p className="site-footer__copy">© {year} prof.i3lam_ali</p>
    </footer>
  );
}
