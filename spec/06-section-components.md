# Step 6: Section Components

## 6.1 Hero Section

**File:** `src/components/sections/Hero.tsx`

Full-width hero with background image.

### Structure
```tsx
<section id="home" className="hero">
  <div className="hero__background">
    <img src={heroBg} alt="" />
  </div>

  <div className="hero__content container">
    <h1 className="hero__headline">
      Creating.<br />Spaces.
    </h1>

    <div className="hero__stars">
      <StarDecoration variant={1} />
      <StarDecoration variant={2} />
      <StarDecoration variant={3} />
      <StarDecoration variant={4} />
    </div>

    <ul className="hero__services">
      <li>Raumgestaltung</li>
      <li>Messebau</li>
      <li>Retaildesign</li>
      <li>Grafikdesign</li>
      <li>Brand</li>
    </ul>
  </div>
</section>
```

### Styling (`Hero.css`)
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: var(--color-white);
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__headline {
  font-size: var(--text-hero);
  font-weight: 200;
  line-height: 0.9;
}

.hero__stars {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.hero__services {
  position: absolute;
  right: var(--content-padding);
  top: 50%;
  transform: translateY(-50%);
  list-style: none;
  text-align: right;
  font-size: var(--text-body);
}

.hero__services li {
  margin-bottom: var(--spacing-xs);
}
```

---

## 6.2 About Section

**File:** `src/components/sections/About.tsx`

Introduction with profile image.

### Structure
```tsx
<section id="about" className="about">
  <div className="about__container container">
    <SectionTitle label="About" />

    <div className="about__content">
      <div className="about__image">
        <img src={profileImg} alt="Marius Knipp" />
      </div>

      <p className="about__text">
        Hi! Mein name ist Marius Knipp, ich bin selbstständiger
        Produkt- und Industriedesigner, gelernter Schreiner und
        gestalte Raum-, Messebau und Retailstore Konzepte. In enger
        Zusammenarbeit mit Partnern aus dem Handwerk stelle ich sicher,
        dass ihr Projekt in die schnelle Umsetzung übergeht und
        begleite den Prozess.
      </p>
    </div>
  </div>
</section>
```

### Styling (`About.css`)
```css
.about {
  padding: var(--spacing-2xl) 0;
  background: var(--color-background);
}

.about__content {
  display: grid;
  grid-template-columns: 408px 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.about__image {
  width: 408px;
  height: 408px;
  overflow: hidden;
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__text {
  max-width: 810px;
  font-size: var(--text-body);
  line-height: 1.65;
}
```

---

## 6.3 Services Section

**File:** `src/components/sections/Services.tsx`

Four service cards in a 2x2 grid.

### Structure
```tsx
<section id="services" className="services">
  <div className="services__container container">
    <SectionTitle label="WORK" title="Services" />

    <div className="services__grid">
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  </div>
</section>
```

### Services Data (from `src/data/services.ts`)
1. **Messe- und Ladenbau** - Trade fair and retail store design
2. **Renderings** - High-quality visualizations
3. **Grafik** - Graphics and promotional materials
4. **Brand / Corporate Design** - Brand and logo development

### Styling (`Services.css`)
```css
.services {
  padding: var(--spacing-2xl) 0;
  background: var(--color-background);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.service-card {
  display: flex;
  gap: var(--spacing-lg);
}

.service-card__content {
  flex: 1;
}

.service-card__title {
  font-family: var(--font-body);
  font-size: var(--text-card-title);
  font-weight: 400;
  margin-bottom: var(--spacing-md);
}

.service-card__description {
  font-size: var(--text-body);
  line-height: 1.65;
  margin-bottom: var(--spacing-md);
}

.service-card__footnote {
  font-size: var(--text-footnote);
  opacity: 0.7;
}
```

---

## 6.4 Projects Section

**File:** `src/components/sections/Projects.tsx`

Portfolio grid showcasing work.

### Structure
```tsx
<section id="work" className="projects">
  <div className="projects__container container">
    <SectionTitle label="WORK" title="Projects" />

    <div className="projects__grid">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
</section>
```

### Projects Data (from `src/data/projects.ts`)
1. Stabifix (Brau, Drinktec) - VK ca. 55k
2. Vagabundo - 1-10k
3. Forum Vans (Camper VW Crafter) - VK ca. 75-90k
4. AuXilium Holding - Sanitätshäuser
5. Reifen Apel - VK ca. 50k

### Styling (`Projects.css`)
```css
.projects {
  padding: var(--spacing-2xl) 0;
  background: var(--color-primary);
  color: var(--color-white);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.project-card__image {
  aspect-ratio: 661 / 455;
  background: var(--color-background);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__placeholder {
  width: 100%;
  height: 100%;
  background: #888;
}

.project-card__info {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-body);
  margin-bottom: var(--spacing-xs);
}

.project-card__title {
  font-family: var(--font-body);
  font-size: var(--text-card-title);
  font-weight: 400;
}
```

---

## 6.5 Contact Section

**File:** `src/components/sections/Contact.tsx`

Call-to-action section.

### Structure
```tsx
<section id="contact" className="contact">
  <div className="contact__container container">
    <div className="contact__decoration">
      <StarDecoration variant={1} size={177} />
      <img src={arrowLarge} alt="" className="contact__arrow" />
    </div>

    <SectionTitle label="Contact" />

    <h2 className="contact__headline">
      Sounds<br />interesting?
    </h2>

    <p className="contact__text">
      Fragen zu mir? Fragen zu deinem oder Ihrem Projekt?
      Kontaktieren Sie mich gerne. Ich freue mich!
    </p>

    <Button text="kontakt@mariusk.de" href="mailto:kontakt@mariusk.de" />
  </div>
</section>
```

### Styling (`Contact.css`)
```css
.contact {
  padding: var(--spacing-2xl) 0;
  background: var(--color-primary);
  color: var(--color-white);
  position: relative;
}

.contact__decoration {
  position: absolute;
  left: var(--content-padding);
  top: var(--spacing-xl);
}

.contact__arrow {
  position: absolute;
  right: var(--content-padding);
  top: 50%;
  width: 167px;
  height: auto;
}

.contact__headline {
  font-size: var(--text-hero);
  font-weight: 200;
  margin-bottom: var(--spacing-xl);
}

.contact__text {
  max-width: 810px;
  font-size: var(--text-body);
  margin-bottom: var(--spacing-lg);
}
```
