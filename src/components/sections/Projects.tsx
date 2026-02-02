import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
  return (
    <section id="work" className="py-30 bg-background text-primary">
      <div className="container">
        <SectionTitle label="WORK" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
