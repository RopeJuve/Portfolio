"use client";

import { useRef } from "react";
import Wordmark from "../Logo/Wordmark";
import Container from "../Container/Container";
import RollOver from "../RollOver/RollOver";
import { FooterProps } from "@/types";
import { useSectionReveal } from "@/lib/useSectionReveal";
import { useBackToTop } from "./useBackToTop";

const Footer = ({ footerName, footerRole }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);
  useSectionReveal(footerRef);
  const { handleBackToTop } = useBackToTop();

  return (
    <footer
      ref={footerRef}
      data-reveal-start="top bottom"
      className="pb-10 pt-[7.1875rem]"
    >
      <Container>
        <div
          data-hairline="top"
          className="relative border-t border-ink pt-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="split-text">
              <Wordmark className="text-section" />
            </div>
            <div
              data-rise-group
              className="flex flex-col items-end gap-1 text-right"
            >
              <p className="text-meta uppercase text-ink">{footerRole}</p>
              <p className="text-meta uppercase text-mute">{footerName}</p>
              <a
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
