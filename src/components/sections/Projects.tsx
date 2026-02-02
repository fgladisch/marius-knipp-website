import './Projects.css';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
  return (
    <section id="work" className="projects">
      <div className="projects__container container">
        <SectionTitle label="WORK" title="Projects" />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
