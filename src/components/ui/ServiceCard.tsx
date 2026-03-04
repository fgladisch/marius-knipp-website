import { ReactNode } from "react";
import { StarDecoration } from "./StarDecoration";

interface ServiceCardProps {
  title: string;
  description: ReactNode;
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
    <div className="flex flex-col md:flex-row gap-12 md:hover:scale-105 transition-all duration-700">
      <div className="flex flex-col items-start md:items-center">
        <StarDecoration variant={starVariant} size={74} />
      </div>
      <div className="flex-1">
        <h3 className="uppercase font-body text-card-title font-normal mb-6">
          {title}
        </h3>
        <div className="text-body leading-[1.65] mb-6 [&>p:first-child]:mb-4">{description}</div>
        {footnote && <p className="text-sm opacity-70">{footnote}</p>}
      </div>
    </div>
  );
};
