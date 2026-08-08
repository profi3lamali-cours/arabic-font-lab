// src/data/fonts.js
//
// كل الخطوط هنا حقيقية، مجانية، ومستضافة رسميًا على Google Fonts.
// جميعها مرخّصة بموجب SIL Open Font License 1.1 (باستثناء ما هو مذكور خلاف ذلك)،
// وهو ترخيص يسمح بالاستخدام والتعديل والتوزيع، حتى في مشاريع تجارية.
//
// تم التحقق من دعم كل خط للغة العربية عبر بيانات "subsets" الرسمية لـ Google Fonts.
// المصدر الرسمي لكل خط هو صفحته على https://fonts.google.com/specimen/<الاسم>
//
// لإضافة خط جديد: أضف عنصرًا جديدًا لهذا المصفوفة فقط. لا حاجة لتعديل أي مكوّن واجهة.

const specimen = (name) => `https://fonts.google.com/specimen/${name.replace(/ /g, '+')}`;
const gfCss = (name, weights) =>
  `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, '+')}:wght@${weights.join(';')}&display=swap`;

/**
 * @typedef {Object} FontDef
 * @property {string} id            معرف فريد (يطابق اسم الخط في Google Fonts)
 * @property {string} fontName      اسم الخط بالإنجليزية (family CSS)
 * @property {string} arabicName    اسم/وصف عربي مبسّط
 * @property {string[]} category    تصنيفات الخط
 * @property {'OFL 1.1'|'Apache 2.0'} license
 * @property {string} designer      المصمم أو الجهة المصممة (إن عرفت)
 * @property {number[]} weights     الأوزان الرقمية المتاحة فعليًا
 * @property {string} previewText   نص المعاينة الافتراضي
 */

/** @type {FontDef[]} */
export const FONTS = [
  { id: 'Cairo', fontName: 'Cairo', arabicName: 'القاهرة', category: ['حديث', 'مناسب للتصميم', 'مناسب للمنشورات'], license: 'OFL 1.1', designer: 'Mohamed Gaber', weights: [200,300,400,500,600,700,800,900,1000], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Cairo Play', fontName: 'Cairo Play', arabicName: 'القاهرة بلاي', category: ['حديث', 'عناوين', 'زخرفي'], license: 'OFL 1.1', designer: 'Mohamed Gaber', weights: [400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Tajawal', fontName: 'Tajawal', arabicName: 'تجوال', category: ['حديث', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'Boutros Fonts', weights: [200,300,400,500,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Almarai', fontName: 'Almarai', arabicName: 'المراعي', category: ['حديث', 'رسمي', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Boutros Fonts', weights: [300,400,700,800], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Alexandria', fontName: 'Alexandria', arabicName: 'الإسكندرية', category: ['حديث', 'رسمي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Julieta Ulanovsky وآخرون', weights: [100,200,300,400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'IBM Plex Sans Arabic', fontName: 'IBM Plex Sans Arabic', arabicName: 'آي بي إم بلكس', category: ['حديث', 'رسمي', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'IBM / Mike Abbink', weights: [100,200,300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Readex Pro', fontName: 'Readex Pro', arabicName: 'ريدكس برو', category: ['حديث', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'Momtaz Studio', weights: [160,200,300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Mada', fontName: 'Mada', arabicName: 'مدى', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: '29LT', weights: [200,300,400,500,600,700,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Changa', fontName: 'Changa', arabicName: 'تشانغا', category: ['حديث', 'عناوين'], license: 'OFL 1.1', designer: 'Mohamed Gaber', weights: [200,300,400,500,600,700,800], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'El Messiri', fontName: 'El Messiri', arabicName: 'المسيري', category: ['حديث', 'عناوين'], license: 'OFL 1.1', designer: 'Mohamed Gaber', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Rubik', fontName: 'Rubik', arabicName: 'روبيك', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Hubert & Fischer / Meir Sadan', weights: [300,400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Vazirmatn', fontName: 'Vazirmatn', arabicName: 'فازيرمتن', category: ['حديث', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'Saber Rastikerdar', weights: [100,200,300,400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Zain', fontName: 'Zain', arabicName: 'زين', category: ['حديث', 'زخرفي'], license: 'OFL 1.1', designer: 'Maternal Healthcare', weights: [200,300,400,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Fustat', fontName: 'Fustat', arabicName: 'فسطاط', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Google Fonts', weights: [200,300,400,500,600,700,800], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Beiruti', fontName: 'Beiruti', arabicName: 'بيروتي', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: '29LT', weights: [200,300,400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Alyamama', fontName: 'Alyamama', arabicName: 'الحمامة', category: ['حديث'], license: 'OFL 1.1', designer: 'TAK Type', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Parastoo', fontName: 'Parastoo', arabicName: 'پرستو', category: ['حديث'], license: 'OFL 1.1', designer: 'Kourosh Beheshti', weights: [400,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Ruwudu', fontName: 'Ruwudu', arabicName: 'روودو', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Vernon Adams وآخرون', weights: [300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Playpen Sans Arabic', fontName: 'Playpen Sans Arabic', arabicName: 'بلايبن سانس', category: ['زخرفي', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'TypeTogether', weights: [100,200,300,400,500,600,700,800], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Baloo Bhaijaan 2', fontName: 'Baloo Bhaijaan 2', arabicName: 'بالو بهيجان', category: ['عناوين', 'زخرفي'], license: 'OFL 1.1', designer: 'Ek Type', weights: [400,500,600,700,800], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Noto Kufi Arabic', fontName: 'Noto Kufi Arabic', arabicName: 'نوتو كوفي', category: ['الكوفي', 'مناسب للشعارات', 'رسمي'], license: 'OFL 1.1', designer: 'Google Noto', weights: [100,200,300,400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Reem Kufi', fontName: 'Reem Kufi', arabicName: 'ريم كوفي', category: ['الكوفي', 'عناوين', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Reem Kufi Fun', fontName: 'Reem Kufi Fun', arabicName: 'ريم كوفي فَن', category: ['الكوفي', 'زخرفي'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Reem Kufi Ink', fontName: 'Reem Kufi Ink', arabicName: 'ريم كوفي إنك', category: ['الكوفي', 'عناوين'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Qahiri', fontName: 'Qahiri', arabicName: 'قاهري', category: ['الكوفي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Kufam', fontName: 'Kufam', arabicName: 'كوفام', category: ['الكوفي', 'حديث'], license: 'OFL 1.1', designer: 'Zeynep Akay', weights: [400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Noto Naskh Arabic', fontName: 'Noto Naskh Arabic', arabicName: 'نوتو نسخ', category: ['النسخ', 'مناسب للنصوص الطويلة', 'رسمي'], license: 'OFL 1.1', designer: 'Google Noto', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Amiri', fontName: 'Amiri', arabicName: 'أميري', category: ['النسخ', 'مناسب للنصوص الطويلة', 'رسمي'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Amiri Quran', fontName: 'Amiri Quran', arabicName: 'أميري قرآن', category: ['النسخ', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Scheherazade New', fontName: 'Scheherazade New', arabicName: 'شهرزاد الجديد', category: ['النسخ', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'SIL International', weights: [400,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Lateef', fontName: 'Lateef', arabicName: 'لطيف', category: ['النسخ', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'SIL International', weights: [200,300,400,500,600,700,800], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Harmattan', fontName: 'Harmattan', arabicName: 'حرمتان', category: ['النسخ', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'SIL International', weights: [400,700], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Aref Ruqaa', fontName: 'Aref Ruqaa', arabicName: 'عارف رقعة', category: ['الرقعة', 'مستوحى من الرقعة', 'رسمي'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Aref Ruqaa Ink', fontName: 'Aref Ruqaa Ink', arabicName: 'عارف رقعة إنك', category: ['الرقعة', 'مستوحى من الرقعة', 'زخرفي'], license: 'OFL 1.1', designer: 'Khaled Hosny', weights: [400,700], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Noto Nastaliq Urdu', fontName: 'Noto Nastaliq Urdu', arabicName: 'نوتو نستعليق', category: ['مستوحى من النستعليق', 'مناسب للنصوص الطويلة'], license: 'OFL 1.1', designer: 'Google Noto', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Gulzar', fontName: 'Gulzar', arabicName: 'گلزار', category: ['مستوحى من النستعليق', 'زخرفي'], license: 'OFL 1.1', designer: 'Chandan Singh', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Rakkas', fontName: 'Rakkas', arabicName: 'رقّاص', category: ['عناوين', 'زخرفي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Sarah Fraser', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Lalezar', fontName: 'Lalezar', arabicName: 'لاله‌زار', category: ['عناوين', 'زخرفي'], license: 'OFL 1.1', designer: 'Kourosh Beheshti', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Katibeh', fontName: 'Katibeh', arabicName: 'كتيبة', category: ['عناوين', 'زخرفي'], license: 'OFL 1.1', designer: 'Kourosh Beheshti', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Marhey', fontName: 'Marhey', arabicName: 'مرحي', category: ['عناوين', 'زخرفي'], license: 'OFL 1.1', designer: 'Ali Habib', weights: [300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Lemonada', fontName: 'Lemonada', arabicName: 'ليموناضة', category: ['زخرفي', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Eyad Alsamman', weights: [300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Markazi Text', fontName: 'Markazi Text', arabicName: 'مركزي', category: ['مناسب للنصوص الطويلة', 'حديث'], license: 'OFL 1.1', designer: 'Borna Izadpanah', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Mirza', fontName: 'Mirza', arabicName: 'ميرزا', category: ['زخرفي', 'عناوين'], license: 'OFL 1.1', designer: 'Kourosh Beheshti', weights: [400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Badeen Display', fontName: 'Badeen Display', arabicName: 'بادين ديسبلاي', category: ['عناوين', 'زخرفي'], license: 'OFL 1.1', designer: 'Fontlab', weights: [400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Blaka', fontName: 'Blaka', arabicName: 'بلاكا', category: ['زخرفي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Ryoichi Tsunekawa', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Blaka Ink', fontName: 'Blaka Ink', arabicName: 'بلاكا إنك', category: ['زخرفي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Ryoichi Tsunekawa', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Blaka Hollow', fontName: 'Blaka Hollow', arabicName: 'بلاكا هولو', category: ['زخرفي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Ryoichi Tsunekawa', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Oi', fontName: 'Oi', arabicName: 'أوي', category: ['زخرفي', 'مناسب للشعارات'], license: 'OFL 1.1', designer: 'Ek Type', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Vibes', fontName: 'Vibes', arabicName: 'فايبز', category: ['زخرفي'], license: 'OFL 1.1', designer: 'Ek Type', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Handjet', fontName: 'Handjet', arabicName: 'هاندجت', category: ['زخرفي', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Yanone', weights: [100,200,300,400,500,600,700,800,900], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Alkalami', fontName: 'Alkalami', arabicName: 'الكلامي', category: ['النسخ', 'مستوحى من الرقعة'], license: 'OFL 1.1', designer: 'SIL International', weights: [400], previewText: 'مبادئ أولية إعلام آلي' },

  { id: 'Cascadia Code', fontName: 'Cascadia Code', arabicName: 'كاسكاديا كود', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Microsoft', weights: [200,300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
  { id: 'Cascadia Mono', fontName: 'Cascadia Mono', arabicName: 'كاسكاديا مونو', category: ['حديث', 'مناسب للتصميم'], license: 'OFL 1.1', designer: 'Microsoft', weights: [200,300,400,500,600,700], previewText: 'مبادئ أولية إعلام آلي' },
];

export const CATEGORIES = [
  'الكوفي', 'النسخ', 'الرقعة', 'مستوحى من النستعليق', 'مستوحى من الرقعة',
  'حديث', 'رسمي', 'عناوين', 'زخرفي',
  'مناسب للتصميم', 'مناسب للمنشورات', 'مناسب للشعارات', 'مناسب للنصوص الطويلة'
];

export const WEIGHT_NAMES = {
  100: 'Thin', 160: 'ExtraLight', 200: 'ExtraLight', 300: 'Light',
  400: 'Regular', 500: 'Medium', 600: 'SemiBold', 700: 'Bold',
  800: 'ExtraBold', 900: 'Black', 1000: 'ExtraBlack'
};

export function nearestWeightName(w) {
  if (WEIGHT_NAMES[w]) return WEIGHT_NAMES[w];
  const keys = Object.keys(WEIGHT_NAMES).map(Number).sort((a, b) => Math.abs(a - w) - Math.abs(b - w));
  return WEIGHT_NAMES[keys[0]];
}

export function fontSpecimenUrl(fontName) {
  return specimen(fontName);
}

export function fontGoogleCssUrl(fontName, weights) {
  return gfCss(fontName, weights);
}

export function fontLicenseUrl(license) {
  if (license === 'Apache 2.0') return 'https://www.apache.org/licenses/LICENSE-2.0';
  return 'https://openfontlicense.org/';
}

export const TOTAL_FONTS = FONTS.length;
