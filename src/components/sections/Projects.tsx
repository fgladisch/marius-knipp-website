import arrowIcon from "../../assets/icons/arrow.svg";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionTitle } from "../ui/SectionTitle";

export const Projects = () => {
  return (
    <section id="work" className="py-30 bg-background text-primary">
      <div className="container relative">
        <SectionHeader label="WORK" />
        <SectionTitle className="mb-12 pl-[100px]">Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <img
          src={arrowIcon}
          alt=""
          className="hidden xl:block absolute right-[60px] bottom-9 w-[100px] xl:w-[167px] h-auto"
        />
      </div>
    </section>
  );
};
