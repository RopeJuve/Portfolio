"use client";

import { useRef } from "react";
import { useConsentContext } from "@/components/Consent/ConsentContext";
import Wordmark from "../Logo/Wordmark";
import Container from "../Container/Container";
import RollOver from "../RollOver/RollOver";
import { FooterProps } from "@/types";
import { cn } from "@/lib/utils";
import { useSectionReveal } from "@/lib/useSectionReveal";
import { useBackToTop } from "./useBackToTop";

const footerActionClassName =
  "mt-2 inline-block border-b border-ink px-[0.35em] pb-px text-meta uppercase text-ink transition-colors duration-150 ease-linear hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink";

const Footer = ({ footerName, footerRole }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);
  useSectionReveal(footerRef);
  const { handleBackToTop } = useBackToTop();
  const { handleReopen } = useConsentContext();

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
              <button
                type="button"
                tabIndex={0}
                aria-label="Consent"
                onClick={handleReopen}
                className={cn(
                  footerActionClassName,
                  "cursor-pointer border-x-0 border-t-0 bg-transparent p-0"
                )}
              >
                <RollOver>Consent</RollOver>
              </button>
              <a
                href="#home"
                tabIndex={0}
                aria-label="Back to top"
                onClick={handleBackToTop}
                className={footerActionClassName}
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
