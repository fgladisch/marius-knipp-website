# Step 4: UI Components

## 4.1 Button Component

**File:** `src/components/ui/Button.tsx`

A button with an arrow icon and text, used for CTAs.

### Props
```typescript
interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}
```

### Behavior
- Renders as `<a>` if `href` is provided, otherwise `<button>`
- Arrow icon on the left side
- Hover: background fills, arrow animates right

### Styling (`Button.css`)
```css
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 12px 24px;
  border: 2px solid var(--color-primary);
  background: transparent;
  font-family: var(--font-body);
  font-size: var(--text-small);
  cursor: pointer;
  transition: var(--transition-normal);
}

.button:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

.button__arrow {
  width: 24px;
  height: auto;
  transition: transform var(--transition-normal);
}

.button:hover .button__arrow {
  transform: translateX(4px);
}
```

---

## 4.2 SectionTitle Component

**File:** `src/components/ui/SectionTitle.tsx`

Section headers with arrow and label.

### Props
```typescript
interface SectionTitleProps {
  label: string;        // e.g., "About", "WORK"
  title?: string;       // Large title, e.g., "Services", "Projects"
  className?: string;
}
```

### Structure
```tsx
<div className="section-title">
  <div className="section-title__label">
    <img src={arrowIcon} alt="" className="section-title__arrow" />
    <span>{label}</span>
  </div>
  {title && <h2 className="section-title__heading">{title}</h2>}
  <div className="section-title__line" />
</div>
```

### Styling (`SectionTitle.css`)
```css
.section-title {
  margin-bottom: var(--spacing-xl);
}

.section-title__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--text-body);
}

.section-title__arrow {
  width: 33px;
  height: auto;
}

.section-title__heading {
  font-size: var(--text-section-title);
  margin-top: var(--spacing-md);
}

.section-title__line {
  position: absolute;
  right: var(--content-padding);
  width: 100px;
  height: 5px;
  background: var(--color-primary);
}
```

---

## 4.3 StarDecoration Component

**File:** `src/components/ui/StarDecoration.tsx`

Decorative star icons used throughout the site.

### Props
```typescript
interface StarDecorationProps {
  variant: 1 | 2 | 3 | 4;
  size?: number;
  color?: 'light' | 'dark' | 'accent';
  className?: string;
}
```

### Implementation
```tsx
import star1 from '../../assets/icons/stars/star-01.svg';
import star2 from '../../assets/icons/stars/star-02.svg';
import star3 from '../../assets/icons/stars/star-03.svg';
import star4 from '../../assets/icons/stars/star-04.svg';

const stars = { 1: star1, 2: star2, 3: star3, 4: star4 };

const StarDecoration: React.FC<StarDecorationProps> = ({
  variant,
  size = 74,
  color = 'light',
  className
}) => {
  return (
    <img
      src={stars[variant]}
      alt=""
      className={`star-decoration star-decoration--${color} ${className || ''}`}
      style={{ width: size, height: 'auto' }}
      aria-hidden="true"
    />
  );
};
```

### Styling (`StarDecoration.css`)
```css
.star-decoration {
  display: block;
  flex-shrink: 0;
}

.star-decoration--light {
  /* Default SVG fill is #f5f5f5 */
}

.star-decoration--dark {
  filter: brightness(0);
}

.star-decoration--accent {
  filter: brightness(0) saturate(100%) invert(29%) sepia(98%)
         saturate(2472%) hue-rotate(243deg) brightness(97%) contrast(107%);
}
```

---

## 4.4 ServiceCard Component

**File:** `src/components/ui/ServiceCard.tsx`

Card component for displaying services.

### Props
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  footnote?: string;
  starVariant: 1 | 2 | 3 | 4;
}
```

### Structure
```tsx
<div className="service-card">
  <StarDecoration variant={starVariant} size={74} color="dark" />
  <div className="service-card__content">
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__description">{description}</p>
    {footnote && <p className="service-card__footnote">{footnote}</p>}
  </div>
</div>
```

---

## 4.5 ProjectCard Component

**File:** `src/components/ui/ProjectCard.tsx`

Card component for displaying portfolio projects.

### Props
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  budget?: string;
  image?: string;
}
```

### Structure
```tsx
<div className="project-card">
  <div className="project-card__image">
    {image ? (
      <img src={image} alt={title} />
    ) : (
      <div className="project-card__placeholder" />
    )}
  </div>
  <div className="project-card__info">
    <span className="project-card__description">{description}</span>
    {budget && <span className="project-card__budget">{budget}</span>}
  </div>
  <h3 className="project-card__title">{title}</h3>
</div>
```
