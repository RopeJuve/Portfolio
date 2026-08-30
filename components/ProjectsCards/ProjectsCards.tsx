"use client";

import { useRef } from "react";
import { ProjectsProps } from "@/types";
import ProjectCard from "./ProjectCard/ProjectCard";
import Container from "../Container/Container";
import { useSectionReveal } from "@/lib/useSectionReveal";

const ProjectsCards = ({ title, projects, workMeta }: ProjectsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="work" className="relative bg-bone pt-[7.1875rem] w-[90%] mx-auto">
      <Container className="w-full">
        <div
          data-hairline="bottom"
          className="relative flex flex-col gap-4 border-b border-ink pb-4 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="split-text text-section font-light uppercase text-ink">
            {title}
          </h2>
          <p className="text-meta uppercase text-mute">{workMeta}</p>
        </div>
        <div
          data-work-grid
          className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,26.25rem),1fr))] gap-x-[1.8125rem] gap-y-20"
        >
          {projects.map((project) => (
            <ProjectCard key={project.projectName} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsCards;
