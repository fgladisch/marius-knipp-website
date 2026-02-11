import { ReactNode } from "react";

export interface Service {
  id: string;
  title: string;
  description: ReactNode;
  footnote?: string;
  starVariant: 1 | 2 | 3 | 4;
}

export const services: Service[] = [
  {
    id: "messebau",
    title: "Messe- und Ladenbau",
    description: (
      <>
        Entwicklung, Planung und Visualisierung von Messeständen und
        Retailstoredesign. Die enge Zusammenarbeit mit dem Partner{" "}
        <a
          href="https://forummessebau-schreinerei.de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          FORUM
        </a>{" "}
        ermöglicht eine schnelle Kostenabschätzung und Übergabe nach der
        Entwurfsphase (wenn gewünscht).
      </>
    ),
    starVariant: 4,
  },
  {
    id: "renderings",
    title: "Renderings",
    description:
      "Hochwertige Konzeptvisualisierungen. Übersetzung von Entwürfen und Ideen in CAD und Produktion hoch aufgelöster (Produkt-) Visualisierungen für Präsentationszwecke (z.B. für Einsatz Website, Kundenpräsentationen, etc.)",
    footnote:
      "*standardmäßig werden Entwürfe in 3D visualisiert. Auf Wunsch können diese hochwertig gerendert werden.",
    starVariant: 3,
  },
  {
    id: "grafik",
    title: "Grafik",
    description:
      "Erstellung von Werbemitteln und Grafiken. Optional können grafische Elemente mitgestaltet und Produktionsdaten erstellt werden (z.B. Banner, Plots, Drucke, Flyer, etc.).",
    footnote:
      "*bei der Konzeptentwicklung von Messeständen und Retaildesign werden Grafikarbeiten mitgedacht und innerhalb der Visualisierungen anskizziert",
    starVariant: 2,
  },
  {
    id: "brand",
    title: "Brand / Corporate Design",
    description:
      "Brand- und Logoentwicklung. Mit mehrjähriger Agenturerfahrung begleite ich Sie workshopbasiert bei der Entwicklung einer klaren Markenidentität, unterstütze bei der strategischen Ausrichtung und der Formulierung von Unternehmenszielen. Auf Wunsch erstelle ich UX-Konzepte für Websites und betreue die Umsetzung von UI und Code – inklusive Logoentwicklung.",
    footnote:
      "*Je nach Auftragsgröße greife ich auf ein Netzwerk an Grafik- und Interaktionsdesigner:innen zurück bzw. kann vermitteln.",
    starVariant: 1,
  },
];
