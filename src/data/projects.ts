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
    image: undefined,
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
    image: undefined,
  },
  {
    id: 'auxilium',
    title: 'AuXilium Holding - Sanitätshäuser',
    description: 'Brandentwicklung – UX Design bei UP Designstudio (ehemaliger Arbeitgeber)',
    budget: '-',
    image: undefined,
  },
  {
    id: 'reifen-apel',
    title: 'Reifen Apel',
    description: 'Storedesign Planung und Kostenabschätzung – Produktion/Bau FORUM',
    budget: 'VK ca. 50k',
    image: undefined,
  },
];
