// Preview images (first image of each project)
import apelPreview from "../assets/images/projects/apel/apel-01.jpg";
import auxiliumPreview from "../assets/images/projects/auxilium/auxilium-01.jpg";
import camperPreview from "../assets/images/projects/camper/camper-01.jpg";
import stabifixPreview from "../assets/images/projects/stabifix/stabifix-01.jpg";
import vagabundoPreview from "../assets/images/projects/vagabundo/vagabundo-interior-01.jpg";

// Stabifix gallery
import stabifix02 from "../assets/images/projects/stabifix/stabifix-02.jpg";
import stabifix03 from "../assets/images/projects/stabifix/stabifix-03.jpg";
import stabifix04 from "../assets/images/projects/stabifix/stabifix-04.jpg";
import stabifix05 from "../assets/images/projects/stabifix/stabifix-05.jpg";
import stabifix06 from "../assets/images/projects/stabifix/stabifix-06.jpg";

// Vagabundo gallery
import vagabundoBath01 from "../assets/images/projects/vagabundo/vagabundo-bathroom-01.jpg";
import vagabundoBath02 from "../assets/images/projects/vagabundo/vagabundo-bathroom-02.jpg";
import vagabundoDetail from "../assets/images/projects/vagabundo/vagabundo-interior-detail-01.jpg";
import vagabundoKitchen from "../assets/images/projects/vagabundo/vagabundo-kitchen.jpg";

// Camper gallery
import camper02 from "../assets/images/projects/camper/camper-02.jpg";
import camper03 from "../assets/images/projects/camper/camper-03.jpg";
import camper04 from "../assets/images/projects/camper/camper-04.jpg";
import camper05 from "../assets/images/projects/camper/camper-05.jpg";
import camper06 from "../assets/images/projects/camper/camper-06.jpg";
import camper07 from "../assets/images/projects/camper/camper-07.jpg";
import camper08 from "../assets/images/projects/camper/camper-08.jpg";
import camper09 from "../assets/images/projects/camper/camper-09.jpg";
import camperExterior from "../assets/images/projects/camper/camper-exterior.jpg";

// Apel gallery
import apel02 from "../assets/images/projects/apel/apel-02.jpg";
import apel03 from "../assets/images/projects/apel/apel-03.jpg";
import apel04 from "../assets/images/projects/apel/apel-04.jpg";
import apel05 from "../assets/images/projects/apel/apel-05.jpg";
import apel06 from "../assets/images/projects/apel/apel-06.jpg";
import apel07 from "../assets/images/projects/apel/apel-07.jpg";
import apel08 from "../assets/images/projects/apel/apel-08.jpg";
import apel09 from "../assets/images/projects/apel/apel-09.jpg";
import apel10 from "../assets/images/projects/apel/apel-10.jpg";
import apel11 from "../assets/images/projects/apel/apel-11.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  budget?: string;
  image: string;
  gallery: string[];
  portrait?: boolean;
}

export const projects: Project[] = [
  {
    id: "stabifix",
    title: "Stabifix (Brau, Drinktec)",
    description:
      "Entwurf (Messestand, Grafiken) und Übergabe – Produktion/Bau FORUM",
    budget: "VK ca. 55k",
    image: stabifixPreview,
    gallery: [
      stabifixPreview,
      stabifix02,
      stabifix03,
      stabifix04,
      stabifix05,
      stabifix06,
    ],
  },
  {
    id: "vagabundo",
    title: "Vagabundo",
    description: "Visualisierungen und Branding",
    budget: "1-10k",
    image: vagabundoPreview,
    gallery: [
      vagabundoPreview,
      vagabundoDetail,
      vagabundoBath01,
      vagabundoBath02,
      vagabundoKitchen,
    ],
    portrait: true,
  },
  {
    id: "forum-vans",
    title: "Forum Vans (Camper VW Crafter)",
    description: "Konzept und Visualisierung – Produktion/Bau FORUM",
    budget: "VK ca. 75-90k",
    image: camperPreview,
    gallery: [
      camperPreview,
      camper02,
      camper03,
      camper04,
      camper05,
      camper06,
      camper07,
      camper08,
      camper09,
      camperExterior,
    ],
  },
  {
    id: "auxilium",
    title: "AuXilium Holding - Sanitätshäuser",
    description:
      "Brandentwicklung – UX Design bei UP Designstudio (ehemaliger Arbeitgeber)",
    budget: "-",
    image: auxiliumPreview,
    gallery: [auxiliumPreview],
  },
  {
    id: "reifen-apel",
    title: "Reifen Apel",
    description:
      "Storedesign Planung und Kostenabschätzung – Produktion/Bau FORUM",
    budget: "VK ca. 50k",
    image: apelPreview,
    gallery: [
      apelPreview,
      apel02,
      apel03,
      apel04,
      apel05,
      apel06,
      apel07,
      apel08,
      apel09,
      apel10,
      apel11,
    ],
  },
];
