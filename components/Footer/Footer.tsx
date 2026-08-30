"use client";

import { useRef, type MouseEvent } from "react";
import Wordmark from "../Logo/Wordmark";
import Container from "../Container/Container";
import RollOver from "../RollOver/RollOver";
import { data } from "@/data";
import {
  drawHairline,
  maskReveal,
  staggerRise,
  useMotionBuild,
} from "@/lib/motion";

const Footer = () => {
  const { footerName, footerRole } = data;
  const footerRef = useRef<HTMLElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const topLinkRef = useRef<HTMLAnchorElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useMotionBuild(footerRef, (ctx) => {
    const hairline = hairlineRef.current;
    const wordmark = wordmarkRef.current;
    const topLink = topLinkRef.current;
    const meta = metaRef.current;
    if (!hairline || !wordmark || !topLink || !meta) return;

    drawHairline(hairline, ctx, {
      scrollTrigger: { trigger: hairline, start: "top bottom", once: true },
    });
    maskReveal(wordmark, ctx, {
      scrollTrigger: { trigger: wordmark, start: "top bottom", once: true },
    });
    staggerRise([topLink, ...Array.from(meta.children)], ctx, 12, {
      scrollTrigger: { trigger: meta, start: "top bottom", once: true },
    });
  });

  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduce ? "auto" : "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="pb-10 pt-[7.1875rem]">
      <Container>
        <div
          ref={hairlineRef}
          data-hairline="top"
          className="relative border-t border-ink pt-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div ref={wordmarkRef} className="split-text">
              <Wordmark className="text-section" />
            </div>
            <div
              ref={metaRef}
              className="flex flex-col items-end gap-1 text-right"
            >
              <p className="text-meta uppercase text-ink">{footerRole}</p>
              <p className="text-meta uppercase text-mute">{footerName}</p>
              <a
                ref={topLinkRef}
                href="#home"
                tabIndex={0}
                aria-label="Back to top"
                onClick={handleBackToTop}
                className="mt-2 inline-block border-b border-ink px-[0.35em] pb-px text-meta uppercase text-ink transition-colors duration-150 ease-linear hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
              >
                <RollOver>Back to top</RollOver>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
