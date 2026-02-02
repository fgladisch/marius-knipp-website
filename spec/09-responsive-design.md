# Step 9: Responsive Design

## 9.1 Breakpoints

Add to `src/styles/variables.css`:

```css
:root {
  /* Breakpoints (for reference, use in media queries) */
  --breakpoint-mobile: 480px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1200px;
}
```

### Breakpoint Strategy
- **Desktop:** 1200px+ (default styles)
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

---

## 9.2 Responsive Typography

**File:** `src/styles/responsive.css`

```css
/* Tablet */
@media (max-width: 1199px) {
  :root {
    --text-hero: 120px;
    --text-section-title: 60px;
    --content-padding: 48px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  :root {
    --text-hero: 64px;
    --text-section-title: 40px;
    --text-body: 18px;
    --content-padding: 24px;
  }
}

/* Small Mobile */
@media (max-width: 479px) {
  :root {
    --text-hero: 48px;
    --text-section-title: 32px;
  }
}
```

---

## 9.3 Layout Adjustments

### Header (Mobile)
```css
@media (max-width: 767px) {
  .header__nav {
    display: none; /* Hide on mobile, show hamburger menu */
  }

  .header__cta {
    display: none;
  }

  .header__menu-toggle {
    display: block;
  }
}
```

### Hero Section
```css
@media (max-width: 1199px) {
  .hero__services {
    position: static;
    transform: none;
    text-align: left;
    margin-top: var(--spacing-xl);
  }
}

@media (max-width: 767px) {
  .hero__stars {
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }

  .hero__stars img {
    width: 60px;
  }
}
```

### About Section
```css
@media (max-width: 1199px) {
  .about__content {
    grid-template-columns: 300px 1fr;
  }

  .about__image {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 767px) {
  .about__content {
    grid-template-columns: 1fr;
  }

  .about__image {
    width: 100%;
    max-width: 300px;
    height: auto;
    aspect-ratio: 1;
  }
}
```

### Services Grid
```css
@media (max-width: 1199px) {
  .services__grid {
    gap: var(--spacing-lg);
  }
}

@media (max-width: 767px) {
  .services__grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    flex-direction: column;
  }
}
```

### Projects Grid
```css
@media (max-width: 767px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
```

### Contact Section
```css
@media (max-width: 1199px) {
  .contact__headline {
    font-size: var(--text-hero);
  }

  .contact__arrow {
    width: 100px;
  }
}

@media (max-width: 767px) {
  .contact__decoration {
    position: static;
    margin-bottom: var(--spacing-lg);
  }

  .contact__arrow {
    display: none;
  }
}
```

### Footer
```css
@media (max-width: 767px) {
  .footer__container {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-lg);
  }

  .footer__logo {
    width: 150px;
  }
}
```

---

## 9.4 Mobile Navigation (Stretch Goal)

### Hamburger Menu Component

**File:** `src/components/ui/MobileMenu.tsx`

```tsx
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__overlay" onClick={onClose} />
      <nav className="mobile-menu__nav">
        <a href="#home" onClick={onClose}>Home</a>
        <a href="#about" onClick={onClose}>About</a>
        <a href="#work" onClick={onClose}>Work</a>
        <a href="#contact" onClick={onClose}>Contact</a>
      </nav>
    </div>
  );
};
```

### Mobile Menu Styles
```css
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
}

.mobile-menu__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.mobile-menu__nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xl) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.mobile-menu__nav a {
  font-size: var(--text-card-title);
}
```

---

## 9.5 Import Responsive Styles

Update `src/styles/global.css`:

```css
@import './fonts.css';
@import './variables.css';
@import './responsive.css';

/* ... rest of global styles ... */
```
