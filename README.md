# Cove Choice Dental - Next.js (App Router + TypeScript)

This project has been completely migrated from static HTML to **Next.js 16 (App Router)** with **TypeScript**, preserving 100% of the original design, aesthetics, SEO metadata, and assets.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
texas-choice-next/
├── public/
│   ├── assets/
│   │   ├── images/      # All high-resolution images, logos, banners
│   │   ├── font/        # Self-hosted Fontello webfonts (.woff2, .woff, .ttf)
│   │   └── fontello.css # Local icon font stylesheet
│   └── sitemap.xml      # SEO sitemap
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Global root layout (Header, FixedTabs, Footer, Schema markup)
│   │   ├── globals.css  # Global CSS with mobile responsive drawers
│   │   ├── page.tsx     # Homepage with Hero, Coupons, Doctors, Services, Reviews
│   │   ├── about-us/    # What Sets Us Apart
│   │   ├── contact/     # Office Info, Hours & Map
│   │   ├── request-an-appointment/ # Interactive appointment booking
│   │   ├── reviews/     # Patient Testimonials & Google reviews
│   │   ├── dental-services/ # Services overview
│   │   └── ... (50+ sub-pages for every service, doctor, and insurance)
│   ├── components/
│   │   ├── Header.tsx   # Responsive header with desktop dropdowns & mobile drawer
│   │   ├── FixedTabs.tsx# Quick access tabs (Call, Map, Appointments, Facebook)
│   │   ├── Footer.tsx   # Interactive footer contact form, hours, social links
│   │   ├── PageBanner.tsx # Dynamic subpage banner with rotation
│   │   ├── HomeHero.tsx # Hero slider with interactive coupon modal
│   │   ├── HomeServicesSlider.tsx # Interactive dental services carousel
│   │   ├── HomeReviewsSlider.tsx  # Patient reviews carousel
│   │   ├── GoogleMapSection.tsx   # Responsive Google Maps embed
│   │   └── ClientInteractivity.tsx# Native React accordions and section toggles
│   └── styles/
│       ├── _ui.css      # Base UI & utility styling
│       ├── styles.css   # Main theme styling
│       ├── styles-2.css # Extended responsive styling
│       ├── loc-styles.css # Local page styling
│       └── fontello.css # Fontello icon font definitions
```

---

## 🌟 Key Improvements in Next.js

1. **App Router & Server-Side Prerendering (SSG)**: All 58 routes are prerendered as fast, lightweight static pages.
2. **Zero jQuery Dependency for Core Interactivity**: Replaced jQuery `meanmenu`, `leanModal`, and toggles with pure React state (`useState`, `useEffect`).
3. **Interactive Coupon Claims**: Clicking any coupon on the hero banner opens a pop-up modal dialog with form submission.
4. **Self-Hosted Webfonts & Icons**: Downloaded Fontello font assets into `/assets/font/` so the website operates completely offline and independent of external CDN bottlenecks.
5. **SEO & Structured Data**: Built-in JSON-LD Dentist schema markup, unique `<title>` and `<meta name="description">` on every page.
6. **Clean URL Routing**: Replaced `.html` URLs with clean paths (`/about-us`, `/dental-services`, `/contact`).
"# texas-choice" 
