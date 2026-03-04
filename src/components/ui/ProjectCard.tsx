interface ProjectCardProps {
  title: string;
  description: string;
  budget?: string;
  image: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  title,
  description,
  budget,
  image,
  onClick,
}: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="aspect-project bg-background mb-6 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>
      <div className="flex justify-between mb-2 gap-8">
        <span className="text-base md:text-body">{description}</span>
        {budget && (
          <span className="text-base md:text-body text-right whitespace-nowrap">
            {budget}
          </span>
        )}
      </div>
      <h3 className="uppercase font-body text-base md:text-card-title font-normal">
        {title}
      </h3>
    </div>
  );
};
