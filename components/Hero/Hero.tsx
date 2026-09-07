"use client";

import { useRef } from "react";
import Button from "../Button/Button";
import { HeroProps } from "@/types";
import { useHeroIntro } from "./useHeroIntro";

const Hero = ({ eyebrow, title, subTitle, heroImage }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroIntro(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-0 min-h-[calc(100svh-4.75rem)] max-w-[90rem] mx-auto bg-stone"
    >
      <div data-hero-photo-wrap className="absolute inset-0 overflow-hidden">
        <picture data-hero-photo className="h-full w-full">
          <source media="(min-width: 1024px)" srcSet={heroImage.desktop} />
          <source media="(min-width: 768px)" srcSet={heroImage.tablet} />
          <img
            src={heroImage.mobile}
            alt="Robert Shterjov"
            className="h-full w-full object-cover object-[75%_12%] md:object-[85%_12%] lg:object-[90%_12%]"
          />
        </picture>
        <div className="hero-scrim absolute inset-0 z-10" />
      </div>
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-[90rem] flex-col justify-start px-[1.8125rem] py-8">
        <div className="w-full max-w-[60rem]">
          <div className="flex flex-col gap-6">
            <p data-hero-eyebrow className="max-w-[42ch] text-meta uppercase text-ink">
              {eyebrow}
            </p>
            <h1
              data-hero-title
              className="split-text max-w-full text-display font-light uppercase text-ink"
            >
              {title.split("\n").map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <p
              data-hero-lead
              className="max-w-[36ch] font-serif text-lead text-ink"
            >
              {subTitle}
            </p>
            <div data-hero-actions className="flex flex-wrap items-center gap-4">
              <Button
                usedAs="link"
                text="start a project"
                variant="primary"
                href="contact"
              />
              <Button
                usedAs="link"
                text="view work"
                variant="secondary"
                href="work"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
