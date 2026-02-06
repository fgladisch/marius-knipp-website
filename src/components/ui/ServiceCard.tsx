import { StarDecoration } from "./StarDecoration";

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
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex flex-col items-start md:items-center">
        <StarDecoration variant={starVariant} size={74} />
      </div>
      <div className="flex-1">
        <h3 className="uppercase font-body text-card-title font-normal mb-6">
          {title}
        </h3>
        <p className="text-body leading-[1.65] mb-6">{description}</p>
        {footnote && <p className="text-footnote opacity-70">{footnote}</p>}
      </div>
    </div>
  );
};
