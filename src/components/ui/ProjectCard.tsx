interface ProjectCardProps {
  title: string;
  description: string;
  budget?: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  description,
  budget,
  image,
}: ProjectCardProps) => {
  return (
    <div className="group">
      <div className="aspect-project bg-background mb-6 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gray-400" />
        )}
      </div>
      <div className="flex text-body justify-between mb-2 gap-8">
        <span>{description}</span>
        {budget && <span className="text-right whitespace-nowrap">{budget}</span>}
      </div>
      <h3 className="uppercase font-body text-card-title font-normal">
        {title}
      </h3>
    </div>
  );
};
