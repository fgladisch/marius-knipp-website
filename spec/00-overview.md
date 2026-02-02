# Marius Knipp Website - Overview

## Design Overview

A portfolio website for Marius Knipp, a product and industrial designer specializing in spatial design, trade fair construction, retail design, and branding. The design is a single-page layout with distinct sections.

---

## Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#000000` | Text, borders |
| Background | `#f5f5f5` | Page background, light elements |
| Accent | `#7b46ff` | Purple highlights, arrows |
| White | `#ffffff` | Hero text, contrast elements |

### Typography
| Element | Font Family | Weight | Size |
|---------|-------------|--------|------|
| Hero headline | Bricolage Grotesque | 200 (ExtraLight) | 190px |
| Section titles | Bricolage Grotesque | 200 (ExtraLight) | ~80px |
| Body text | DM Sans | 400 (Regular) | 20px |
| Small text | DM Sans | 400 (Regular) | 16px |

### Layout
- Max width: 1512px
- Content padding: 70-90px horizontal

---

## Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Button (Contact)
├── Hero
│   └── StarDecoration (x4)
├── About
│   └── SectionTitle
├── Services
│   ├── SectionTitle
│   └── ServiceCard (x4)
│       └── StarDecoration
├── Projects
│   ├── SectionTitle
│   └── ProjectCard (x5)
├── Contact
│   ├── StarDecoration
│   └── Button
└── Footer
    └── Logo
```

---

## Asset Mapping

| Source File | Destination | Usage |
|-------------|-------------|-------|
| `fonts/Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf` | `src/assets/fonts/BricolageGrotesque-Variable.ttf` | Headings typography |
| `fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf` | `src/assets/fonts/DMSans-Variable.ttf` | Body typography |
| `fonts/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf` | `src/assets/fonts/DMSans-Italic-Variable.ttf` | Body typography (italic) |
| `Logo.svg` | `src/assets/images/logo.svg` | Header, Footer |
| `arrow.svg` | `src/assets/icons/arrow.svg` | SectionTitle, Button, Contact |
| `01star.svg` | `src/assets/icons/stars/star-01.svg` | Hero, Services |
| `02star.svg` | `src/assets/icons/stars/star-02.svg` | Hero, Services |
| `03star.svg` | `src/assets/icons/stars/star-03.svg` | Hero, Services |
| `04star.svg` | `src/assets/icons/stars/star-04.svg` | Hero, Services |
| `Header.png` | `src/assets/images/hero-bg.png` | Hero background |
| `Profil.png` | `src/assets/images/profile.png` | About section |
| `Vagabundo.png` | `src/assets/images/projects/vagabundo.png` | Projects section |

---

## Estimated File Count

- **Components:** 13 files
- **Styles:** 9-11 CSS files (including fonts.css)
- **Data:** 2 files
- **Assets:** 12+ files (3 fonts, 4 stars, arrow, logo, 3 images)
- **Total new files:** ~38 files
