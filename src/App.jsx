import { useEffect, useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';

import Header from './components/Header.jsx';
import PreviewStage from './components/PreviewStage.jsx';
import TextEditor from './components/TextEditor.jsx';
import ControlsPanel from './components/ControlsPanel.jsx';
import Toolbar from './components/Toolbar.jsx';
import FontGrid from './components/FontGrid.jsx';
import FontInfoPanel from './components/FontInfoPanel.jsx';
import LicensesSection from './components/LicensesSection.jsx';
import AboutModal from './components/AboutModal.jsx';
import InstallButton from './components/InstallButton.jsx';
import Footer from './components/Footer.jsx';

import { FONTS, TOTAL_FONTS, fontGoogleCssUrl } from './data/fonts.js';
import { loadFont } from './utils/fontLoader.js';
import { loadFavorites, saveFavorites, loadTheme, saveTheme } from './utils/storage.js';
import { encodeStateToUrl, decodeStateFromUrl, clearUrlParams } from './utils/share.js';

const DEFAULT_TEXT = 'مبادئ أولية إعلام آلي';

function findFont(id) {
  return FONTS.find((f) => f.id === id) || FONTS[0];
}

export default function App() {
  const shared = useMemo(() => decodeStateFromUrl(), []);

  const [activeFontId, setActiveFontId] = useState(shared?.fontId && findFont(shared.fontId) ? shared.fontId : FONTS[0].id);
  const [text, setText] = useState(shared?.text ?? DEFAULT_TEXT);
  const [fontSize, setFontSize] = useState(shared?.fontSize ?? 56);
  const [weight, setWeight] = useState(shared?.weight ?? 400);
  const [color, setColor] = useState(shared?.color ?? '#EDE6D8');
  const [bgColor, setBgColor] = useState(shared?.bgColor ?? '#14110E');
  const [align, setAlign] = useState(shared?.align ?? 'right');
  const [letterSpacing, setLetterSpacing] = useState(shared?.letterSpacing ?? 0);
  const [lineHeight, setLineHeight] = useState(shared?.lineHeight ?? 1.5);

  const [favorites, setFavorites] = useState(() => loadFavorites());
  const [theme, setTheme] = useState(() => loadTheme() || 'dark');
  const [loadedFonts, setLoadedFonts] = useState(new Set());
  const [fontLoading, setFontLoading] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [exporting, setExporting] = useState(false);

  const stageRef = useRef(null);
  const activeFont = findFont(activeFontId);

  // تطبيق المظهر (Dark/Light) على عنصر html
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  // تحميل الخط النشط كل مرة يتغيّر
  useEffect(() => {
    setFontLoading(true);
    loadFont(activeFont.fontName, activeFont.weights).then(() => {
      setLoadedFonts((prev) => new Set(prev).add(activeFont.fontName));
      setFontLoading(false);
    });
  }, [activeFontId]); // eslint-disable-line react-hooks/exhaustive-deps

  // ضبط الوزن الافتراضي عند تبديل الخط إن كان الوزن الحالي غير متاح
  useEffect(() => {
    if (!activeFont.weights.includes(weight)) {
      setWeight(activeFont.weights.includes(400) ? 400 : activeFont.weights[0]);
    }
  }, [activeFontId]); // eslint-disable-line react-hooks/exhaustive-deps

  // تنظيف رابط المشاركة من شريط العنوان بعد القراءة الأولى
  useEffect(() => {
    if (shared) clearUrlParams();
  }, [shared]);

  const handleSelectFont = (font) => setActiveFontId(font.id);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      saveFavorites(next);
      return next;
    });
  };

  const controlsState = { fontSize, weight, color, bgColor, align, letterSpacing, lineHeight };
  const handleControlsChange = (next) => {
    setFontSize(next.fontSize);
    setWeight(next.weight);
    setColor(next.color);
    setBgColor(next.bgColor);
    setAlign(next.align);
    setLetterSpacing(next.letterSpacing);
    setLineHeight(next.lineHeight);
  };

  const handleCopyCss = async () => {
    const importUrl = fontGoogleCssUrl(activeFont.fontName, activeFont.weights);
    const css = `/* استورد الخط أولًا */
@import url('${importUrl}');

/* ثم استخدمه في CSS */
.your-element {
  font-family: '${activeFont.fontName}', sans-serif;
  font-weight: ${weight};
  font-size: ${fontSize}px;
  color: ${color};
  letter-spacing: ${letterSpacing}px;
  line-height: ${lineHeight};
  text-align: ${align};
}`;
    await navigator.clipboard.writeText(css);
  };

  const handleShare = async () => {
    const url = encodeStateToUrl({
      fontId: activeFontId, text, fontSize, weight, color, bgColor, align, letterSpacing, lineHeight
    });
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Arabic Font Lab', url });
        return;
      } catch {
        /* المستخدم أغلق نافذة المشاركة، نكمل بالنسخ */
      }
    }
    await navigator.clipboard.writeText(url);
  };

  const handleDownloadImage = async () => {
    if (!stageRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(stageRef.current, { pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `arabic-font-lab-${activeFont.id}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  };

  const handleDownloadFont = () => {
    window.open(`https://fonts.google.com/specimen/${activeFont.fontName.replace(/ /g, '+')}`, '_blank', 'noopener');
  };

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onOpenAbout={() => setAboutOpen(true)}
        totalFonts={TOTAL_FONTS}
      />

      <main className="container">
        <p className="tagline">اكتب عبارتك واكتشف أجمل الخطوط العربية</p>

        <PreviewStage
          ref={stageRef}
          text={text}
          fontFamily={activeFont.fontName}
          fontSize={fontSize}
          weight={weight}
          color={color}
          bgColor={bgColor}
          align={align}
          letterSpacing={letterSpacing}
          lineHeight={lineHeight}
          loading={fontLoading}
        />

        <TextEditor text={text} onChange={setText} />

        <Toolbar
          onCopyCss={handleCopyCss}
          onShare={handleShare}
          onDownloadImage={handleDownloadImage}
          onDownloadFont={handleDownloadFont}
          exporting={exporting}
        />

        <ControlsPanel state={controlsState} availableWeights={activeFont.weights} onChange={handleControlsChange} />

        <FontInfoPanel font={activeFont} />

        <FontGrid
          fonts={FONTS}
          activeFontId={activeFontId}
          favorites={favorites}
          loadedFonts={loadedFonts}
          onSelect={handleSelectFont}
          onToggleFavorite={handleToggleFavorite}
          onLoaded={(name) => setLoadedFonts((prev) => new Set(prev).add(name))}
        />

        <LicensesSection />
      </main>

      <Footer />

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} totalFonts={TOTAL_FONTS} />
      <InstallButton />
    </>
  );
}
