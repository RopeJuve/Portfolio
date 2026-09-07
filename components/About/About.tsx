"use client";

import { useRef } from "react";
import Social from "../Social/Social";
import Container from "../Container/Container";
import { AboutProps } from "@/types";
import { useSectionReveal } from "@/lib/useSectionReveal";

const About = ({ title, aboutMe, socialLinks, profileImage }: AboutProps) => {
  const [lead, ...body] = aboutMe;
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="about" className="pt-[7.1875rem]">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22.5rem),1fr))] items-start gap-[1.8125rem]">
        <figure className="flex w-full flex-col max-w-[20rem]">
          <div
            data-photo
            data-parallax="4"
            data-rest-scale="1.08"
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
          <h2 className="split-text text-section font-light uppercase text-ink">
            {title}
          </h2>
          <div data-rise-group className="flex flex-col gap-6">
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
