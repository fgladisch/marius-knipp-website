import { useEffect, useRef, useState } from "react";
import arrowIcon from "../../assets/icons/arrow.svg";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { useFadeIn } from "../../hooks/useFadeIn";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionTitle } from "../ui/SectionTitle";

export const Projects = () => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = 1 - rect.bottom / (window.innerHeight + rect.height);
      setOffset(progress * 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-30 bg-background text-primary">
      <div
        ref={ref}
        className={`container relative fade-in-up ${isVisible ? "visible" : ""}`}
      >
        <SectionHeader variant="primary" />
        <SectionTitle className="mb-40 md:pl-[100px]">Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        <img
          src={arrowIcon}
          alt=""
          className="hidden md:block absolute right-[60px] bottom-9 w-[100px] xl:w-[167px] h-auto will-change-transform"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
