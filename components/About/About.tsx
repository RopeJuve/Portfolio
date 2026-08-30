"use client";

import { useRef } from "react";
import Social from "../Social/Social";
import Container from "../Container/Container";
import { AboutProps } from "@/types";
import {
  imageUncover,
  maskReveal,
  staggerRise,
  useMotionBuild,
} from "@/lib/motion";

const About = ({ title, aboutMe, socialLinks, profileImage }: AboutProps) => {
  const [lead, ...body] = aboutMe;
  const sectionRef = useRef<HTMLElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useMotionBuild(sectionRef, (ctx) => {
    const wrap = photoWrapRef.current;
    const heading = headingRef.current;
    const copy = copyRef.current;
    const img = wrap?.querySelector<HTMLElement>("img");
    if (!wrap || !heading || !copy || !img) return;

    imageUncover(wrap, img, ctx, { parallax: 4, restScale: 1.08 });
    maskReveal(heading, ctx);
    staggerRise(copy.querySelectorAll("[data-rise]"), ctx, 20, {
      scrollTrigger: { trigger: copy, start: "top 88%" },
    });
  });

  return (
    <section ref={sectionRef} id="about" className="pt-[7.1875rem]">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22.5rem),1fr))] items-start gap-[1.8125rem]">
        <figure className="flex w-full flex-col max-w-[20rem]">
          <div
            ref={photoWrapRef}
            className="aspect-[3/4] w-full overflow-hidden border border-ink bg-ink"
          >
            <img
              src={profileImage}
              alt="Robert Shterjov"
              className="h-full w-full origin-[center_18%] object-cover object-[center_18%]"
            />
          </div>
          <figcaption className="mt-0 flex items-baseline justify-between border-t border-ink pt-3">
            <span className="text-meta uppercase text-ink">Robert Shterjov</span>
            <span className="text-meta uppercase text-mute">Fig. 01</span>
          </figcaption>
        </figure>
        <div className="flex max-w-[52ch] flex-col gap-6 md:justify-self-end">
          <h2
            ref={headingRef}
            className="split-text text-section font-light uppercase text-ink"
          >
            {title}
          </h2>
          <div ref={copyRef} className="flex flex-col gap-6">
            {lead && (
              <p data-rise className="font-serif text-lead text-ink">
                {lead}
              </p>
            )}
            {body.map((text) => (
              <p data-rise key={text} className="text-body text-ink">
                {text}
              </p>
            ))}
            <div data-rise>
              <Social links={socialLinks} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
