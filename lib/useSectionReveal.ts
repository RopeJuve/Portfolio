"use client";

import type { RefObject } from "react";
import {
  drawHairline,
  imageUncover,
  maskReveal,
  staggerRise,
  useMotionBuild,
} from "@/lib/motion";

const DEFAULT_START = "top 88%";
const DEFAULT_HAIRLINE_START = "top 92%";
const DEFAULT_DISTANCE = 20;
const CARD_RISE_DISTANCE = 14;

const parseNumber = (value: string | undefined, fallback: number) => {
  if (value === undefined) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const riseItems = (group: HTMLElement) => {
  const selector = group.dataset.riseSelector;
  if (selector) return group.querySelectorAll(selector);

  const marked = group.querySelectorAll("[data-rise], [data-field]");
  if (marked.length) return marked;

  return group.children;
};

export const useSectionReveal = (scopeRef: RefObject<HTMLElement | null>) => {
  useMotionBuild(scopeRef, (ctx) => {
    const root = scopeRef.current;
    if (!root) return;

    const sectionStart = root.dataset.revealStart;
    const startFor = (local?: string, fallback = DEFAULT_START) =>
      local || sectionStart || fallback;

    root.querySelectorAll<HTMLElement>(".split-text").forEach((heading) => {
      maskReveal(heading, ctx, {
        scrollTrigger: {
          trigger: heading,
          start: startFor(),
          once: true,
        },
      });
    });

    root.querySelectorAll<HTMLElement>("[data-hairline]").forEach((rule) => {
      drawHairline(rule, ctx, {
        scrollTrigger: {
          trigger: rule,
          start: startFor(undefined, DEFAULT_HAIRLINE_START),
          once: true,
        },
      });
    });

    root.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      const wrap = card.querySelector<HTMLElement>("[data-photo]");
      const img = wrap?.querySelector<HTMLElement>("img");
      if (wrap && img) {
        imageUncover(wrap, img, ctx, {
          hover: wrap.dataset.photoHover !== undefined,
          restScale: parseNumber(wrap.dataset.restScale, 1),
          parallax: wrap.dataset.parallax
            ? parseNumber(wrap.dataset.parallax, 0)
            : undefined,
          scrollTrigger: {
            trigger: card,
            start: startFor(),
            once: true,
          },
        });
      }

      staggerRise(card.querySelectorAll("[data-rise]"), ctx, CARD_RISE_DISTANCE, {
        scrollTrigger: {
          trigger: card,
          start: startFor(),
          once: true,
        },
      });
    });

    root.querySelectorAll<HTMLElement>("[data-photo]").forEach((wrap) => {
      if (wrap.closest("[data-card]")) return;
      const img = wrap.querySelector<HTMLElement>("img");
      if (!img) return;

      imageUncover(wrap, img, ctx, {
        hover: wrap.dataset.photoHover !== undefined,
        restScale: parseNumber(wrap.dataset.restScale, 1),
        parallax: wrap.dataset.parallax
          ? parseNumber(wrap.dataset.parallax, 0)
          : undefined,
      });
    });

    root.querySelectorAll<HTMLElement>("[data-rise-group]").forEach((group) => {
      staggerRise(riseItems(group), ctx, parseNumber(group.dataset.riseDistance, DEFAULT_DISTANCE), {
        scrollTrigger: {
          trigger: group,
          start: startFor(group.dataset.riseStart),
          once: true,
        },
      });
    });
  });
};
