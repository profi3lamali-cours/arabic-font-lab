import InstagramIcon from './InstagramIcon.jsx';
import './instagram-badge.css';

export default function InstagramBadge({ compact = false }) {
  return (
    <a
      href="https://www.instagram.com/prof.i3lam_ali/"
      target="_blank"
      rel="noopener noreferrer"
      className={`ig-badge ${compact ? 'ig-badge--compact' : ''}`}
      aria-label="زيارة حساب Instagram: prof.i3lam_ali"
    >
      <InstagramIcon size={compact ? 15 : 18} />
      <span>prof.i3lam_ali</span>
    </a>
  );
}
