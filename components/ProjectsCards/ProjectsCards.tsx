"use client";

import { useRef } from "react";
import { ProjectsProps } from "@/types";
import ProjectCard from "./ProjectCard/ProjectCard";
import Container from "../Container/Container";
import {
  drawHairline,
  imageUncover,
  maskReveal,
  staggerRise,
  useMotionBuild,
} from "@/lib/motion";

const ProjectsCards = ({ title, projects, workMeta }: ProjectsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);

  useMotionBuild(sectionRef, (ctx) => {
    const heading = headingRef.current;
    const hairline = hairlineRef.current;
    const section = sectionRef.current;
    if (!heading || !hairline || !section) return;

    maskReveal(heading, ctx);
    drawHairline(hairline, ctx);

    const cards = section.querySelectorAll<HTMLElement>(".project-card");
    cards.forEach((card) => {
      const wrap = card.querySelector<HTMLElement>("[data-photo]");
      const img = wrap?.querySelector<HTMLElement>("img");
      if (wrap && img) {
        imageUncover(wrap, img, ctx, {
          hover: true,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      }
      const rise = card.querySelectorAll("[data-rise]");
      staggerRise(rise, ctx, 14, {
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      });
    });
  });

  return (
    <section ref={sectionRef} id="work" className="relative bg-bone pt-[7.1875rem]">
      <Container>
        <div
          ref={hairlineRef}
          data-hairline="bottom"
          className="relative flex flex-col gap-4 border-b border-ink pb-4 md:flex-row md:items-end md:justify-between"
        >
          <h2
            ref={headingRef}
            className="split-text text-section font-light uppercase text-ink"
          >
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
