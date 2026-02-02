# Step 7: Data Files

## 7.1 Services Data

**File:** `src/data/services.ts`

```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  footnote?: string;
  starVariant: 1 | 2 | 3 | 4;
}

export const services: Service[] = [
  {
    id: 'messebau',
    title: 'Messe- und Ladenbau',
    description: 'Entwicklung, Planung und Visualisierung von Messeständen und Retailstoredesign. Die enge Zusammenarbeit mit dem Partner FORUM ermöglicht eine schnelle Kostenabschätzung und Übergabe nach der Entwurfsphase (wenn gewünscht).',
    starVariant: 1,
  },
  {
    id: 'renderings',
    title: 'Renderings',
    description: 'Hochwertige Konzeptvisualisierungen. Übersetzung von Entwürfen und Ideen in CAD und Produktion hoch aufgelöster (Produkt-) Visualisierungen für Präsentationszwecke (z.B. für Einsatz Website, Kundenpräsentationen, etc.)',
    footnote: '*standardmäßig werden Entwürfe in 3D visualisiert. Auf Wunsch können diese hochwertig gerendert werden.',
    starVariant: 2,
  },
  {
    id: 'grafik',
    title: 'Grafik',
    description: 'Erstellung von Werbemitteln und Grafiken. Optional können grafische Elemente mitgestaltet und Produktionsdaten erstellt werden (z.B. Banner, Plots, Drucke, Flyer, etc.).',
    footnote: '*bei der Konzeptentwicklung von Messeständen und Retaildesign werden Grafikarbeiten mitgedacht und innerhalb der Visualisierungen anskizziert',
    starVariant: 3,
  },
  {
    id: 'brand',
    title: 'Brand / Corporate Design',
    description: 'Brand- und Logoentwicklung. Mit mehrjähriger Agenturerfahrung begleite ich Sie workshopbasiert bei der Entwicklung einer klaren Markenidentität, unterstütze bei der strategischen Ausrichtung und der Formulierung von Unternehmenszielen. Auf Wunsch erstelle ich UX-Konzepte für Websites und betreue die Umsetzung von UI und Code – inklusive Logoentwicklung.',
    footnote: '*Je nach Auftragsgröße greife ich auf ein Netzwerk an Grafik- und Interaktionsdesigner:innen zurück bzw. kann vermitteln.',
    starVariant: 4,
  },
];
```

---

## 7.2 Projects Data

**File:** `src/data/projects.ts`

```typescript
import vagabundoImg from '../assets/images/projects/vagabundo.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  budget?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'stabifix',
    title: 'Stabifix (Brau, Drinktec)',
    description: 'Entwurf (Messestand, Grafiken) und Übergabe – Produktion/Bau FORUM',
    budget: 'VK ca. 55k',
    image: undefined, // placeholder
  },
  {
    id: 'vagabundo',
    title: 'Vagabundo',
    description: 'Visualisierungen und Branding',
    budget: '1-10k',
    image: vagabundoImg,
  },
  {
    id: 'forum-vans',
    title: 'Forum Vans (Camper VW Crafter)',
    description: 'Konzept und Visualisierung – Produktion/Bau FORUM',
    budget: 'VK ca. 75-90k',
    image: undefined, // placeholder
  },
  {
    id: 'auxilium',
    title: 'AuXilium Holding - Sanitätshäuser',
    description: 'Brandentwicklung – UX Design bei UP Designstudio (ehemaliger Arbeitgeber)',
    budget: '-',
    image: undefined, // placeholder
  },
  {
    id: 'reifen-apel',
    title: 'Reifen Apel',
    description: 'Storedesign Planung und Kostenabschätzung – Produktion/Bau FORUM',
    budget: 'VK ca. 50k',
    image: undefined, // placeholder
  },
];
```

---

## 7.3 Navigation Data (Optional)

**File:** `src/data/navigation.ts`

```typescript
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
```
