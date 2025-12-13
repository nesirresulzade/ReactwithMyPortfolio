# My Portfolio - Nasir Rasulzada

Modern, responsive və interaktiv portfolio veb-saytı. React, Vite və müasir web texnologiyaları ilə qurulmuşdur.

## 📋 Məzmun

- [Xüsusiyyətlər](#xüsusiyyətlər)
- [Texnologiyalar](#texnologiyalar)
- [Qurulum](#qurulum)
- [İstifadə](#istifadə)
- [Layihə Strukturu](#layihə-strukturu)
- [Komponentlər](#komponentlər)
- [Animasiyalar](#animasiyalar)
- [Çoxdilli Dəstək](#çoxdilli-dəstək)
- [Responsive Dizayn](#responsive-dizayn)
- [Deployment](#deployment)
- [Lisenziya](#lisenziya)

## ✨ Xüsusiyyətlər

- 🎨 **Modern UI/UX**: Gözəl və istifadəçi dostu interfeys
- 🌍 **Çoxdilli Dəstək**: Azərbaycan və İngilis dilləri
- 📱 **Tam Responsive**: Bütün cihazlarda mükəmməl görünüş
- 🎭 **Animasiyalar**: AOS (Animate On Scroll) və custom animasiyalar
- ⌨️ **Typewriter Effekti**: Dinamik mətn animasiyaları
- 🎠 **Carousel Komponentləri**: Layihə şəkilləri üçün carousel
- 📧 **EmailJS İnteqrasiyası**: Əlaqə forması ilə email göndərmə
- 🎯 **Smooth Scrolling**: Yumşaq scroll animasiyaları
- 🧭 **Side Navigator**: Sürətli naviqasiya üçün yan menyu
- 📄 **CV Yükləmə**: PDF CV yükləmə funksiyası

## 🛠 Texnologiyalar

### Əsas Texnologiyalar
- **React 19.1.0** - UI framework
- **Vite 6.3.5** - Build tool və development server
- **React Router DOM 7.6.0** - Routing
- **React Scroll 1.9.3** - Smooth scrolling

### Styling
- **CSS3** - Custom CSS modulları
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Bootstrap Icons 1.11.1** - İkonlar
- **React Icons 5.5.0** - Əlavə ikonlar

### Animasiyalar
- **AOS 2.3.4** - Animate On Scroll library
- **Framer Motion 12.23.26** - Advanced animasiyalar
- **React Intersection Observer 10.0.0** - Scroll-triggered animasiyalar

### Digər
- **EmailJS Browser 4.4.1** - Email göndərmə xidməti
- **React Responsive Carousel 3.2.23** - Carousel komponenti

## 🚀 Qurulum

### Tələblər
- Node.js (v18 və ya daha yeni)
- npm və ya yarn

### Addımlar

1. **Repository-ni klonlayın:**
```bash
git clone https://github.com/nesirresulzade/partfolio.git
cd MyPortfalio
```

2. **Dependencies quraşdırın:**
```bash
npm install
```

3. **Development server-i işə salın:**
```bash
npm run dev
```

4. **Browser-də açın:**
```
http://localhost:5173
```

### Build üçün
```bash
npm run build
```

### Preview üçün
```bash
npm run preview
```

## 📖 İstifadə

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 📁 Layihə Strukturu

```
MyPortfalio/
├── public/
│   ├── Nasir Rasulzadeh.pdf    # CV faylı
│   └── vite.svg
├── src/
│   ├── assets/                  # SVG asset-lər
│   ├── companentler/            # React komponentləri
│   │   ├── About.jsx
│   │   ├── Button.jsx
│   │   ├── Carousel.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── Loading.jsx
│   │   ├── MobileProjects.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── RealProjects.jsx
│   │   ├── RealProjectsCarousel.jsx
│   │   ├── RecentPro.jsx
│   │   ├── SideNavigator.jsx
│   │   ├── Skills.jsx
│   │   └── SliderComponent.jsx
│   ├── components/              # Əlavə komponentlər
│   ├── hooks/                   # Custom React hooks
│   │   └── useTypewriter.js
│   ├── image/                   # Şəkil asset-ləri
│   ├── RealProjAllimgs/         # Real layihə şəkilləri
│   ├── style/                   # CSS faylları
│   ├── translations/            # Çoxdilli mətnlər
│   │   └── translations.js
│   ├── App.jsx                  # Əsas App komponenti
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global CSS
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🧩 Komponentlər

### Əsas Komponentlər

#### **About.jsx**
- Şəxsi məlumatlar və bio
- Typewriter animasiyası ilə "Frontend Developer" mətni
- CV yükləmə düyməsi
- Sosial media linkləri
- Responsive: mobil ekranlarda şəkil gizlədilir

#### **Navbar.jsx**
- Fixed navigation bar
- Smooth scroll linkləri
- Dil dəyişdirici
- Responsive hamburger menyu

#### **Experience.jsx**
- İş təcrübəsi və təhsil
- Timeline dizaynı
- AOS animasiyaları

#### **Skills.jsx**
- Texniki bacarıqlar
- İkonlar və progress bar-lar
- Kateqoriyalara görə qruplaşdırılmış

#### **RecentPro.jsx**
- Son layihələr
- ProjectCard komponenti ilə kartlar
- Live demo və GitHub linkləri

#### **Contact.jsx**
- Əlaqə forması
- EmailJS inteqrasiyası
- Form validasiyası
- Success/error mesajları

#### **Footer.jsx**
- Footer məlumatları
- Sosial media linkləri
- Copyright məlumatı

### Xüsusi Komponentlər

#### **Carousel.jsx**
- Yenidən istifadə olunan carousel komponenti
- Touch swipe dəstəyi
- Avtomatik scroll
- Responsive dizayn

#### **RealProjectsCarousel.jsx**
- Stripe.com-style card carousel
- Infinite loop
- Keyboard navigation
- Touch swipe
- Accessibility dəstəyi (ARIA)
- Responsive: 3 kart (desktop), 2.5 (tablet), 2 (mobil), 1 (kiçik mobil)

#### **ProjectCard.jsx**
- Layihə kartı komponenti
- Şəkil, başlıq, təsvir
- Live demo və GitHub düymələri

#### **SideNavigator.jsx**
- Yan naviqasiya paneli
- Sürətli section keçidləri
- Tooltip-lər

#### **LanguageSwitcher.jsx**
- Dil dəyişdirici komponenti
- Azərbaycan/İngilis keçidləri
- LocalStorage-də saxlanılır

#### **Button.jsx**
- Yenidən istifadə olunan button komponenti
- Variant-lar: filled, outlined
- Size-lar: sm, md, lg
- Color-lar: dark, light

### Səhifələr

#### **Ana Səhifə (/)**
- About
- Experience
- Skills
- Recent Projects
- Contact
- Footer

#### **Mobile Projects (/mobile-projects)**
- Mobil tətbiq layihələri
- Carousel ilə şəkil qalereyaları
- Notes App, Tap Game, Fitness App

#### **Real Projects (/real-projects)**
- Professional layihələr
- RealProjectsCarousel ilə
- HRA Admin, KhazarSoft və s.

## 🎬 Animasiyalar

### AOS (Animate On Scroll)
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- Optimizasiya: `once: true`, `mirror: false`
- Debounced resize və throttled scroll handlers

### Typewriter Animation
- Custom `useTypewriter` hook
- "Frontend Developer" mətni üçün
- Delay və speed konfiqurasiyası
- Blinking cursor effekti

### Character Animation
- Hərflərin ardıcıl animasiyası
- "Nasir Rasulzada" adı üçün

### CSS Animations
- Smooth transitions
- Hover effektləri
- Loading animasiyaları

## 🌍 Çoxdilli Dəstək

### Dəstəklənən Dillər
- 🇦🇿 **Azərbaycan (az)**
- 🇬🇧 **İngilis (en)**

### Tərcümə Sistemi
- `LanguageContext` ilə global state
- `translations.js` faylında bütün mətnlər
- LocalStorage-də seçilmiş dil saxlanılır
- Komponentlərdə `useContext(LanguageContext)` ilə istifadə

### Tərcümə Strukturu
```javascript
translations = {
  az: { ... },
  en: { ... }
}
```

## 📱 Responsive Dizayn

### Breakpoints
- **Desktop**: >= 1280px
- **Tablet**: 768px - 1279px
- **Mobile**: < 768px
- **Small Mobile**: < 400px

### Responsive Xüsusiyyətlər
- Flexbox və Grid layout
- Media queries
- Mobile-first approach
- Touch-friendly interfeys
- Optimized images
- Hidden elements on mobile (About section image)

## 🚀 Deployment

### Vercel
Layihə Vercel-də deploy edilə bilər. `vercel.json` konfiqurasiyası mövcuddur.

```bash
vercel
```

### GitHub Pages
```bash
npm run build
# dist/ folder-ini GitHub Pages-ə deploy edin
```

## 📝 Əlavə Qeydlər

### Performance Optimizations
- React.memo() istifadəsi
- useCallback və useMemo hooks
- Debounced/throttled event handlers
- Lazy loading images
- AOS optimizasiyaları
- SVG filter-lərin mobile-də deaktiv edilməsi

### Accessibility
- ARIA attributes
- Keyboard navigation
- Screen reader dəstəyi
- Semantic HTML
- Focus management

### Browser Dəstəyi
- Chrome (son versiyalar)
- Firefox (son versiyalar)
- Safari (son versiyalar)
- Edge (son versiyalar)

## 👤 Müəllif

**Nasir Rasulzada**
- GitHub: [@nesirresulzade](https://github.com/nesirresulzade/partfolio)
- LinkedIn: [Nasir Rasulzada](https://www.linkedin.com/in/nasir-rasulzada-28a6b7392/)

## 📄 Lisenziya

Bu layihə şəxsi portfolio məqsədi ilə yaradılmışdır.

## 🙏 Təşəkkürlər

- [AOS](https://michalsnik.github.io/aos/) - Scroll animasiyaları üçün
- [EmailJS](https://www.emailjs.com/) - Email göndərmə xidməti üçün
- [React Icons](https://react-icons.github.io/react-icons/) - İkonlar üçün
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Əlavə ikonlar üçün

---

⭐ Bu layihəni bəyəndinizsə, star verməyi unutmayın!
