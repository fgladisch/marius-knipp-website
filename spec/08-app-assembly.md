# Step 8: App Assembly

## 8.1 Main App Component

**File:** `src/App.tsx`

```tsx
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 8.2 App Styles

**File:** `src/App.css`

```css
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Section spacing */
section {
  scroll-margin-top: 80px; /* Account for fixed header */
}
```

---

## 8.3 Smooth Scrolling Implementation

Smooth scrolling is enabled via CSS in `global.css`:

```css
html {
  scroll-behavior: smooth;
}
```

### Section IDs
Each section component should have an `id` attribute for navigation:
- Hero: `id="home"`
- About: `id="about"`
- Services: `id="services"` (part of work)
- Projects: `id="work"`
- Contact: `id="contact"`

### Navigation Links
Header navigation links use anchor hrefs:
```tsx
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#work">Work</a>
<a href="#contact">Contact</a>
```

---

## 8.4 Component Exports (Optional)

Create index files for cleaner imports.

**File:** `src/components/ui/index.ts`
```typescript
export { default as Button } from './Button';
export { default as SectionTitle } from './SectionTitle';
export { default as StarDecoration } from './StarDecoration';
export { default as ServiceCard } from './ServiceCard';
export { default as ProjectCard } from './ProjectCard';
```

**File:** `src/components/layout/index.ts`
```typescript
export { default as Header } from './Header';
export { default as Footer } from './Footer';
```

**File:** `src/components/sections/index.ts`
```typescript
export { default as Hero } from './Hero';
export { default as About } from './About';
export { default as Services } from './Services';
export { default as Projects } from './Projects';
export { default as Contact } from './Contact';
```
