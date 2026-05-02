# devfolio — CLAUDE.md

## Project Overview
Personal developer portfolio built with React + Vite. Single-page application with smooth scroll, animations, and 3D elements.

## Tech Stack
- **Framework**: React 18, Vite 5
- **Styling**: Tailwind CSS v3 + DaisyUI v4, dark mode via `class` strategy
- **Animations**: Framer Motion, GSAP
- **3D**: React Three Fiber / Drei, Spline
- **Scroll**: Lenis (smooth scroll), `SmoothScroll` component wraps the app
- **UI**: MUI v5 (Material UI + Icons), Lucide React, React Icons
- **Email**: EmailJS (`@emailjs/browser`)
- **Routing**: React Router DOM v6 (single route `/`)

## Project Structure
```
src/
  App.jsx              # Root: SmoothScroll wrapper, scroll progress bar, preloader
  main.jsx
  index.css
  styles.js
  pages/
    Index.jsx          # Main page — composes all sections
  sections/            # Page sections (HeroSection, AboutSection, WorkSection, etc.)
  components/          # Reusable UI components
  widgets/             # CustomCursor, UseSmoothScroll
  hoc/                 # SectionWrapper HOC
  constants/           # data.jsx, index.js — content/data
  assets/              # Images and asset exports
  utils/motion.js      # Framer Motion animation variants
```

## Commands
```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (max-warnings: 0)
```

## Key Conventions
- Dark mode: `dark:` Tailwind prefix, controlled via `class` on root element
- Fonts: custom font classes `excalidraw`, `new-font` defined in CSS
- Responsive: `useMediaQuery("(min-width:1000px)")` from MUI for JS-side breakpoints
- Tailwind breakpoints used in JSX for CSS-side responsiveness
- Sections use `id` attributes for anchor navigation (e.g. `id="about"`)
- Animation variants defined in `src/utils/motion.js`

## Known Issues / Vulnerabilities (as of 2026-05-02)
- `swiper` v11 has a critical prototype pollution vulnerability (CVE: GHSA-hmx5-qpq5-p643). Fix requires upgrading to v12 (breaking change).
- `vite` / `esbuild` has a moderate dev-server exposure issue. Fix requires upgrading to Vite v8+ (breaking change).
- Several packages have major versions available but were not auto-upgraded to avoid breaking changes:
  - React 18 → 19, MUI v5 → v9, Tailwind v3 → v4, Vite v5 → v8
  - framer-motion v11 → v12, react-router-dom v6 → v7, swiper v11 → v12
  - daisyui v4 → v5, lucide-react v0 → v1, eslint v8 → v10
