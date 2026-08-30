"use client";

import { useRef } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { ServicesProps } from "@/types";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { useSectionReveal } from "@/lib/useSectionReveal";

const Services = ({ title, services, availability }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="services" className="pt-[7.1875rem]">
      <Container>
        <div
          data-hairline="bottom"
          className="relative flex flex-col gap-4 border-b border-ink pb-4 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="split-text text-section font-light uppercase text-ink">
            {title}
          </h2>
          <span className="w-fit rounded-full border border-ink px-3.5 py-1 text-micro uppercase text-ink">
            {availability}
          </span>
        </div>
        <div
          data-rise-group
          data-rise-selector="article"
          data-rise-distance="34"
          className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] border-l border-t border-ink bg-bone"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div
          data-rise-group
          className="mt-14 flex flex-col gap-4 md:flex-row md:items-start"
        >
          <p className="max-w-[46ch] font-serif text-lead text-ink">
            Tell me what you need built — I reply within a working day with a
            clear next step.
          </p>
          <Button
            usedAs="link"
            text="Request a quote"
            variant="primary"
            href="contact"
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
