# Arabic Font Lab | مختبر الخطوط العربية

أداة ويب مجانية بالكامل (PWA حقيقي وقابل للتثبيت) لمعاينة واكتشاف أكثر من **50 خطًا عربيًا حقيقيًا ومجانيًا**، مبنية بـ React + Vite.

بواسطة: **prof.i3lam_ali** — [Instagram](https://www.instagram.com/prof.i3lam_ali/)

---

## 1. المميزات

- معاينة مباشرة فورية للنص بأي خط دون إعادة تحميل الصفحة.
- أكثر من 50 خطًا عربيًا حقيقيًا، جميعها مستضافة رسميًا على Google Fonts (انظر قسم «الخطوط والتراخيص» أدناه).
- تحكم كامل: حجم الخط، الوزن، لون النص، لون الخلفية، المحاذاة، تباعد الأحرف والأسطر.
- بحث وتصنيف الخطوط (كوفي، نسخ، رقعة، حديث، زخرفي...).
- مفضلة تُحفظ في `localStorage`.
- نسخ كود CSS جاهز للاستخدام.
- مشاركة المعاينة عبر رابط (URL parameters).
- تصدير المعاينة كصورة PNG.
- Dark / Light mode.
- PWA حقيقي: قابل للتثبيت على Android وDesktop، ويعمل Offline بعد أول زيارة.
- تصميم عربي RTL كامل، ومتوافق مع الهاتف أولًا (Mobile First).

---

## 2. التشغيل محليًا

يتطلب [Node.js](https://nodejs.org) نسخة 18 أو أحدث.

```bash
npm install
npm run dev
```

افتح المتصفح على الرابط الذي يظهر في الطرفية (عادة `http://localhost:5173`).

### البناء للإنتاج

```bash
npm run build
npm run preview   # لمعاينة نسخة الإنتاج محليًا
```

يتم إنشاء الملفات النهائية داخل مجلد `dist/`.

---

## 3. النشر

### أ) GitHub Pages (تلقائي عبر GitHub Actions)

1. أنشئ مستودعًا جديدًا على GitHub وارفع محتوى هذا المشروع إليه:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
2. من إعدادات المستودع: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. الملف `.github/workflows/deploy.yml` المُضمَّن سيقوم تلقائيًا ببناء المشروع ونشره عند كل `push` إلى `main`.
4. الموقع سيكون متاحًا على: `https://<username>.github.io/<repo-name>/`

> ملاحظة: الـ workflow يضبط `base path` تلقائيًا وفق اسم المستودع. إذا كنت تستخدم دومينًا مخصصًا، غيّر `VITE_BASE_PATH` في `vite.config.js` إلى `'/'`.

### ب) Netlify

1. اربط المستودع في Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variable: `VITE_BASE_PATH` = `/`

### ج) Vercel

1. استورد المستودع في Vercel (يتعرف تلقائيًا على Vite).
2. Environment variable: `VITE_BASE_PATH` = `/`
3. Build command: `npm run build` — Output directory: `dist`

---

## 4. تثبيت التطبيق على الهاتف (Android) والحاسوب

### Android (Chrome)
1. افتح الموقع المنشور في متصفح Chrome.
2. اضغط زر **📲 تثبيت التطبيق** الذي يظهر أسفل الشاشة (يظهر تلقائيًا عند دعم المتصفح).
3. أو من قائمة Chrome (⋮) اختر **"تثبيت التطبيق"** / **"Add to Home screen"**.
4. سيظهر التطبيق على الشاشة الرئيسية بأيقونته الخاصة، ويعمل بملء الشاشة دون شريط المتصفح.

### الحاسوب (Chrome / Edge)
1. افتح الموقع.
2. اضغط أيقونة التثبيت ⊕ في شريط العنوان، أو الزر العائم في الصفحة.

### العمل بدون إنترنت
بعد أول زيارة (وتحميل الخطوط التي استعرضتها)، يقوم Service Worker بتخزين واجهة التطبيق وأنماط/ملفات الخطوط المخزّنة مؤقتًا، فيمكنك فتح التطبيق وإعادة معاينة الخطوط التي زرتها سابقًا دون اتصال.

---

## 5. الخطوط والتراخيص

جميع الخطوط الـ 54 المستخدمة في المشروع:
- **حقيقية وموجودة فعليًا** — لا توجد أسماء وهمية أو placeholders.
- **مجانية** للاستخدام الشخصي والتجاري.
- **مستضافة رسميًا على Google Fonts** (`fonts.google.com`)، وتم التحقق من دعمها الفعلي للغة العربية عبر بيانات "subsets" الرسمية لـ Google Fonts.
- مرخّصة بموجب **SIL Open Font License 1.1** (الترخيص القياسي لأغلب خطوط Google Fonts)، وهو ترخيص يسمح بالاستخدام والتعديل والتوزيع الحر، بما فيه الاستخدام التجاري.

القائمة الكاملة مع اسم كل خط، ترخيصه، ورابط مصدره الرسمي متوفرة:
- داخل التطبيق نفسه في قسم **«تراخيص الخطوط»** (أسفل الصفحة الرئيسية).
- في ملف البيانات المصدري: [`src/data/fonts.js`](./src/data/fonts.js)

بعض الخطوط البارزة: Cairo, Tajawal, Amiri, Noto Naskh Arabic, Noto Kufi Arabic, Noto Sans Arabic, Reem Kufi, Aref Ruqaa, Scheherazade New, Lateef, Almarai, Alexandria, IBM Plex Sans Arabic, Readex Pro, Vazirmatn, Mada, Changa, El Messiri, Rakkas, Lalezar, Katibeh, Markazi Text, Mirza, Marhey, Lemonada, Gulzar, Noto Nastaliq Urdu، وغيرها (القائمة الكاملة داخل التطبيق).

الخطوط تُحمَّل مباشرة من CDN الرسمي لـ Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`)، وزر «تحميل الخط» يوجّه دائمًا إلى الصفحة الرسمية للخط على `fonts.google.com` — لا توجد روابط تحميل وهمية أو ملفات غير موجودة.

---

## 6. إضافة خط جديد (للمطورين)

إضافة خط جديد لا تتطلب تعديل أي مكوّن واجهة — فقط أضف عنصرًا جديدًا في المصفوفة داخل:

```
src/data/fonts.js
```

مثال:

```js
{
  id: 'اسم-الخط-في-Google-Fonts',
  fontName: 'Font Name',
  arabicName: 'الاسم بالعربية',
  category: ['حديث'],
  license: 'OFL 1.1',
  designer: 'اسم المصمم',
  weights: [400, 700],
  previewText: 'مبادئ أولية إعلام آلي'
}
```

تأكد أولًا من أن الخط:
- موجود فعليًا على `fonts.google.com` ويدعم اللغة العربية.
- الأوزان المدرجة مطابقة للأوزان الفعلية المتوفرة للخط.

---

## 7. هيكل المشروع

```
arabic-font-lab/
├── index.html
├── vite.config.js
├── package.json
├── scripts/
│   └── generate_icons.py     # توليد أيقونات PWA من خط Cairo الحقيقي
├── assets/fonts/              # خط مصدري يُستخدم فقط لتوليد الأيقونات
├── public/
│   └── icons/                 # أيقونات التطبيق (192/512 + maskable + favicon + OG)
├── .github/workflows/
│   └── deploy.yml             # نشر تلقائي على GitHub Pages
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/fonts.js           # مصدر بيانات كل الخطوط (نقطة الإضافة المستقبلية)
    ├── utils/
    │   ├── fontLoader.js       # تحميل ذكي/كسول لخطوط Google Fonts
    │   ├── storage.js          # localStorage (المفضلة + المظهر)
    │   └── share.js            # ترميز/فك حالة المعاينة في رابط
    ├── components/             # كل مكونات الواجهة (Header, PreviewStage, FontGrid...)
    └── styles/global.css       # نظام التصميم (الألوان، الخطوط، القياسات)
```

---

## 8. الفحص النهائي

| البند | الحالة |
|---|---|
| 50+ خط عربي حقيقي | ✅ 54 خطًا |
| خطوط مجانية بترخيص واضح | ✅ SIL OFL 1.1 |
| روابط تحميل حقيقية | ✅ صفحات Google Fonts الرسمية |
| معاينة مباشرة فورية | ✅ |
| دعم RTL كامل | ✅ |
| بحث وتصفية | ✅ |
| مفضلة (localStorage) | ✅ |
| Dark / Light mode | ✅ |
| نسخ CSS | ✅ |
| مشاركة برابط | ✅ |
| حفظ كصورة PNG | ✅ |
| PWA + تثبيت Android/Desktop | ✅ |
| عمل بدون إنترنت | ✅ |
| `npm run build` بدون أخطاء | ✅ تم التحقق |
| بدون روابط وهمية | ✅ |
| أيقونة Instagram حقيقية (SVG، ليست Emoji) | ✅ |
| اسم Instagram ظاهر في الرئيسية والفوتر | ✅ |
| تصميم Responsive / Mobile First | ✅ |

---

© prof.i3lam_ali — مشروع مجاني ومفتوح للتطوير.
