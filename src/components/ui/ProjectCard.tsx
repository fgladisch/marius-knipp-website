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
            className="w-full h-full object-cover transition-transform duration-normal group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-400" />
        )}
      </div>
      <div className="flex justify-between text-body mb-2">
        <span>{description}</span>
        {budget && <span>{budget}</span>}
      </div>
      <h3 className="font-body text-card-title font-normal">{title}</h3>
    </div>
  );
};
