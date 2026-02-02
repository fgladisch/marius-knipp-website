# Step 2: Folder Structure

Create the following folder structure:

```
src/
├── assets/
│   ├── fonts/
│   │   ├── BricolageGrotesque-Variable.ttf
│   │   ├── DMSans-Variable.ttf
│   │   └── DMSans-Italic-Variable.ttf
│   ├── icons/
│   │   ├── arrow.svg
│   │   └── stars/
│   │       ├── star-01.svg
│   │       ├── star-02.svg
│   │       ├── star-03.svg
│   │       └── star-04.svg
│   └── images/
│       ├── logo.svg
│       ├── hero-bg.png
│       ├── profile.png
│       └── projects/
│           └── vagabundo.png
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── SectionTitle.tsx
│   │   ├── SectionTitle.css
│   │   ├── StarDecoration.tsx
│   │   └── StarDecoration.css
│   └── sections/
│       ├── Hero.tsx
│       ├── Hero.css
│       ├── About.tsx
│       ├── About.css
│       ├── Services.tsx
│       ├── Services.css
│       ├── Projects.tsx
│       ├── Projects.css
│       ├── Contact.tsx
│       └── Contact.css
├── styles/
│   ├── fonts.css
│   ├── variables.css
│   └── global.css
├── data/
│   ├── services.ts
│   └── projects.ts
├── App.tsx
├── App.css
└── index.tsx
```

---

## Commands to Create Structure

```bash
# Create directories
mkdir -p src/assets/{fonts,icons/stars,images/projects}
mkdir -p src/components/{layout,ui,sections}
mkdir -p src/styles
mkdir -p src/data
```
