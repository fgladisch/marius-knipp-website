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
        <p>
          Entwicklung, Planung und Visualisierung von Messeständen und
          Retailstore-Designs.
        </p>{" "}
        Die enge Zusammenarbeit mit dem Partner{" "}
        <a
          href="https://forummessebau-schreinerei.de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          FORUM
        </a>{" "}
        ermöglicht eine schnelle Kostenabschätzung und Übergabe nach der
        Entwurfsphase – wenn gewünscht.
      </>
    ),
    starVariant: 4,
  },
  {
    id: "renderings",
    title: "Renderings",
    description: (
      <>
        <p>Hochwertige Konzeptvisualisierungen.*</p>
        <p>
          Übersetzung von Entwürfen und Ideen in CAD sowie die Erstellung
          hochaufgelöster (Produkt-)Visualisierungen für Präsentationszwecke.
        </p>
      </>
    ),
    footnote:
      "*standardmäßig werden Entwürfe in 3D visualisiert. Auf Wunsch können diese hochwertig gerendert werden.",
    starVariant: 3,
  },
  {
    id: "grafik",
    title: "Grafik",
    description: (
      <>
        <p>Erstellung von Werbemitteln und Grafiken.*</p>
        <p>
          Optional können grafische Elemente mitgestaltet und Produktionsdaten
          erstellt werden (z.B. Banner, Plots, Drucke, Flyer, etc.).
        </p>
      </>
    ),
    footnote:
      "*bei der Konzeptentwicklung von Messeständen und Retaildesign werden Grafikarbeiten mitgedacht und innerhalb der Visualisierungen anskizziert",
    starVariant: 2,
  },
  {
    id: "brand",
    title: "Brand / Corporate Design",
    description: (
      <>
        <p>Brand- und Logoentwicklung.*</p>
        <p>
          Mit mehrjähriger Agenturerfahrung begleite ich Sie workshopbasiert bei
          der Entwicklung einer klaren Markenidentität – von der strategischen
          Ausrichtung bis zur Formulierung von Unternehmenszielen.
        </p>
      </>
    ),
    footnote:
      "*Je nach Auftragsgröße greife ich auf ein Netzwerk an Grafik- und Interaktionsdesigner:innen zurück bzw. kann vermitteln.",
    starVariant: 1,
  },
];
