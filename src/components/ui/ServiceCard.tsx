import './ServiceCard.css';
import { StarDecoration } from './StarDecoration';

interface ServiceCardProps {
  title: string;
  description: string;
  footnote?: string;
  starVariant: 1 | 2 | 3 | 4;
}

export const ServiceCard = ({
  title,
  description,
  footnote,
  starVariant,
}: ServiceCardProps) => {
  return (
    <div className="service-card">
      <StarDecoration variant={starVariant} size={74} color="accent" />
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        {footnote && <p className="service-card__footnote">{footnote}</p>}
      </div>
    </div>
  );
};
