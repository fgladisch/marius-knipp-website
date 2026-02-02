import './ProjectCard.css';

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
    <div className="project-card">
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" />
        )}
      </div>
      <div className="project-card__info">
        <span className="project-card__description">{description}</span>
        {budget && <span className="project-card__budget">{budget}</span>}
      </div>
      <h3 className="project-card__title">{title}</h3>
    </div>
  );
};
