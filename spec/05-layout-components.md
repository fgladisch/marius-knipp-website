# Step 5: Layout Components

## 5.1 Header Component

**File:** `src/components/layout/Header.tsx`

Fixed/sticky navigation header.

### Structure
```tsx
<header className="header">
  <div className="header__container container">
    <a href="#home" className="header__logo">
      <img src={logo} alt="M.K. - Marius Knipp" />
    </a>

    <nav className="header__nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>

    <Button text="Contact me" href="#contact" />
  </div>
</header>
```

### Behavior
- Fixed position at top of viewport
- Smooth scroll to sections on nav click
- Mobile: hamburger menu (stretch goal)

### Styling (`Header.css`)
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--spacing-md) 0;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  width: 78px;
}

.header__logo img {
  width: 100%;
  height: auto;
}

.header__nav {
  display: flex;
  gap: var(--spacing-xl);
}

.header__nav a {
  font-size: var(--text-body);
  transition: opacity var(--transition-fast);
}

.header__nav a:hover {
  opacity: 0.7;
}

/* Hero section has dark background, so header text should be light */
.header--light {
  color: var(--color-white);
}

.header--light .header__logo img {
  filter: invert(1);
}
```

---

## 5.2 Footer Component

**File:** `src/components/layout/Footer.tsx`

Footer with branding and legal links.

### Structure
```tsx
<footer className="footer">
  <div className="footer__container container">
    <div className="footer__logo">
      <img src={logoLarge} alt="M.K." />
    </div>

    <a
      href="https://linkedin.com/in/mariusknipp"
      target="_blank"
      rel="noopener noreferrer"
      className="footer__social"
    >
      <LinkedInIcon />
    </a>

    <div className="footer__legal">
      <a href="/datenschutz">Datenschutz</a>
      <span>|</span>
      <a href="/impressum">Impressum</a>
    </div>
  </div>
</footer>
```

### Styling (`Footer.css`)
```css
.footer {
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xl) 0 var(--spacing-lg);
}

.footer__container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.footer__logo {
  width: 228px;
}

.footer__logo img {
  width: 100%;
  height: auto;
  filter: invert(1);
}

.footer__social {
  width: 56px;
  height: 56px;
}

.footer__legal {
  display: flex;
  gap: var(--spacing-md);
  font-size: var(--text-body);
}

.footer__legal a:hover {
  text-decoration: underline;
}
```
