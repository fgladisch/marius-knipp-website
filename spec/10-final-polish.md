# Step 10: Final Polish

## 10.1 Animations & Interactions

### Hover Effects

**Buttons:**
```css
.button {
  transition:
    background-color var(--transition-normal),
    color var(--transition-normal);
}

.button:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

.button:hover .button__arrow {
  transform: translateX(4px);
}
```

**Navigation Links:**
```css
.header__nav a {
  position: relative;
}

.header__nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width var(--transition-normal);
}

.header__nav a:hover::after {
  width: 100%;
}
```

**Project Cards:**
```css
.project-card__image img {
  transition: transform var(--transition-normal);
}

.project-card:hover .project-card__image img {
  transform: scale(1.05);
}
```

### Scroll Animations (Optional)

Use Intersection Observer for fade-in animations:

```tsx
// src/hooks/useInView.ts
import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
```

```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 10.2 SEO & Meta Tags

**File:** `public/index.html`

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Primary Meta Tags -->
    <title>Marius Knipp - Produkt- und Industriedesign</title>
    <meta name="title" content="Marius Knipp - Produkt- und Industriedesign" />
    <meta name="description" content="Selbstständiger Produkt- und Industriedesigner für Raumgestaltung, Messebau, Retaildesign und Branding. Konzepte von der Idee bis zur Umsetzung." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mariusknipp.de/" />
    <meta property="og:title" content="Marius Knipp - Produkt- und Industriedesign" />
    <meta property="og:description" content="Selbstständiger Produkt- und Industriedesigner für Raumgestaltung, Messebau, Retaildesign und Branding." />
    <meta property="og:image" content="/og-image.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://mariusknipp.de/" />
    <meta property="twitter:title" content="Marius Knipp - Produkt- und Industriedesign" />
    <meta property="twitter:description" content="Selbstständiger Produkt- und Industriedesigner für Raumgestaltung, Messebau, Retaildesign und Branding." />
    <meta property="twitter:image" content="/og-image.png" />

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />

    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#000000" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

---

## 10.3 Performance Optimization

### Image Optimization

1. **Convert to WebP:**
   ```bash
   # Use a tool like cwebp or an online converter
   cwebp hero-bg.png -o hero-bg.webp
   cwebp profile.png -o profile.webp
   ```

2. **Responsive Images:**
   ```tsx
   <picture>
     <source srcSet={heroWebp} type="image/webp" />
     <img src={heroPng} alt="..." />
   </picture>
   ```

3. **Lazy Loading:**
   ```tsx
   <img src={image} alt={title} loading="lazy" />
   ```

### Font Loading

Fonts are already optimized with:
- `font-display: swap` in @font-face
- Local fonts (no external requests)

### Code Splitting (Future Enhancement)

```tsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/sections/Projects'));

// In App.tsx
<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

---

## 10.4 Accessibility

### Semantic HTML
- Use proper heading hierarchy (h1 > h2 > h3)
- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<section>` with appropriate headings
- Use `<footer>` for footer

### Image Alt Text
```tsx
// Decorative images
<img src={star} alt="" aria-hidden="true" />

// Content images
<img src={profile} alt="Portrait von Marius Knipp" />
```

### Focus States
```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Skip Link
```tsx
// At the start of App.tsx
<a href="#main-content" className="skip-link">
  Zum Hauptinhalt springen
</a>

// Add id to main
<main id="main-content">
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--content-padding);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  color: var(--color-white);
  z-index: 1000;
}

.skip-link:focus {
  top: var(--spacing-sm);
}
```

### Color Contrast
Verify contrast ratios meet WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

Current colors:
- Black (#000000) on Light Gray (#f5f5f5): 18.1:1 ✓
- White (#ffffff) on Black (#000000): 21:1 ✓
- Purple (#7b46ff) on Black (#000000): 4.6:1 ✓

---

## 10.5 Testing Checklist

- [ ] All sections scroll correctly from navigation
- [ ] All links work (internal and external)
- [ ] Contact button opens email client
- [ ] Site is responsive at all breakpoints
- [ ] Images load correctly
- [ ] Fonts display correctly
- [ ] No console errors
- [ ] Page loads under 3 seconds
- [ ] Keyboard navigation works
- [ ] Screen reader can navigate content
