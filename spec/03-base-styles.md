# Step 3: Base Styles

## 3.1 Font Face Declarations

**File:** `src/styles/fonts.css`

```css
/* Bricolage Grotesque - Variable Font */
@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('../assets/fonts/BricolageGrotesque-Variable.ttf') format('truetype');
  font-weight: 200 800;
  font-style: normal;
  font-display: swap;
}

/* DM Sans - Variable Font */
@font-face {
  font-family: 'DM Sans';
  src: url('../assets/fonts/DMSans-Variable.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DM Sans';
  src: url('../assets/fonts/DMSans-Italic-Variable.ttf') format('truetype');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}
```

---

## 3.2 CSS Variables

**File:** `src/styles/variables.css`

```css
:root {
  /* Colors */
  --color-primary: #000000;
  --color-background: #f5f5f5;
  --color-accent: #7b46ff;
  --color-white: #ffffff;

  /* Typography */
  --font-heading: 'Bricolage Grotesque', sans-serif;
  --font-body: 'DM Sans', sans-serif;

  /* Font Sizes */
  --text-hero: 190px;
  --text-section-title: 80px;
  --text-card-title: 24px;
  --text-body: 20px;
  --text-small: 16px;
  --text-footnote: 12px;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 80px;
  --spacing-2xl: 120px;

  /* Layout */
  --max-width: 1512px;
  --content-padding: 70px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}
```

---

## 3.3 Global Styles

**File:** `src/styles/global.css`

```css
@import './fonts.css';
@import './variables.css';

/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Base */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.5;
  color: var(--color-primary);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 200;
  line-height: 1;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Utility Classes */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 3.4 Import in index.tsx

Update `src/index.tsx` to import global styles:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
