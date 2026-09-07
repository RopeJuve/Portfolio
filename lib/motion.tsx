"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
  type RefObject,
} from "react";
import { gsap, useGSAP, ScrollTrigger, SplitText } from "@/lib/gsap";

export type MotionMode = "Full" | "Subtle" | "Off";
export type ImageReveal = "Wipe up" | "Fade scale" | "None";

export type MotionBuildContext = {
  duration: (base: number) => number;
  motion: MotionMode;
  imageReveal: ImageReveal;
  allowParallax: boolean;
  track: (el: Element) => void;
  saveSplit: (el: Element) => void;
  appendNode: (node: HTMLElement) => void;
  onCleanup: (fn: () => void) => void;
};

type MotionContextValue = {
  motion: MotionMode;
  imageReveal: ImageReveal;
  durationScale: number;
};

const MotionContext = createContext<MotionContextValue>({
  motion: "Full",
  imageReveal: "Wipe up",
  durationScale: 1,
});

export const useMotion = () => useContext(MotionContext);

export const MotionProvider = ({
  children,
  motion = "Full",
  imageReveal = "Wipe up",
}: {
  children: ReactNode;
  motion?: MotionMode;
  imageReveal?: ImageReveal;
}) => {
  const value = useMemo<MotionContextValue>(
    () => ({
      motion,
      imageReveal,
      durationScale: motion === "Subtle" ? 0.6 : 1,
    }),
    [motion, imageReveal]
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
};

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const shouldSkipMotion = (motion: MotionMode) =>
  motion === "Off" || prefersReducedMotion();

const loaderListeners = new Set<() => void>();
let loaderComplete = false;

export const onLoaderComplete = (callback: () => void) => {
  if (loaderComplete) {
    callback();
    return () => undefined;
  }
  loaderListeners.add(callback);
  return () => {
    loaderListeners.delete(callback);
  };
};

export const signalLoaderComplete = () => {
  if (loaderComplete) return;
  loaderComplete = true;
  loaderListeners.forEach((callback) => callback());
  loaderListeners.clear();
  requestAnimationFrame(() => ScrollTrigger.refresh());
};

type SessionConfig = {
  motion: MotionMode;
  imageReveal: ImageReveal;
  durationScale: number;
};

const createSession = (config: SessionConfig) => {
  let healCount = 0;
  let destroyed = false;
  const snapshots = new Map<Element, string | null>();
  const appended: HTMLElement[] = [];
  const splits: { el: Element; html: string }[] = [];
  const triggers: ScrollTrigger[] = [];
  const cleanups: Array<() => void> = [];

  const makeCtx = (): MotionBuildContext => ({
    duration: (base) => base * config.durationScale,
    motion: config.motion,
    imageReveal: config.imageReveal,
    allowParallax: config.motion === "Full",
    track(el) {
      if (!snapshots.has(el)) snapshots.set(el, el.getAttribute("style"));
    },
    saveSplit(el) {
      if (!splits.some((entry) => entry.el === el)) {
        splits.push({ el, html: el.innerHTML });
      }
    },
    appendNode(node) {
      if (!appended.includes(node)) appended.push(node);
    },
    onCleanup(fn) {
      cleanups.push(fn);
    },
  });

  const teardown = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
    triggers.forEach((trigger) => trigger.kill());
    triggers.length = 0;
    appended.forEach((node) => node.remove());
    appended.length = 0;
    splits.forEach(({ el, html }) => {
      el.innerHTML = html;
    });
    splits.length = 0;
    const targets = Array.from(snapshots.keys());
    if (targets.length) gsap.set(targets, { clearProps: "all" });
    snapshots.forEach((style, el) => {
      if (!el.isConnected) return;
      if (style === null) el.removeAttribute("style");
      else el.setAttribute("style", style);
    });
    snapshots.clear();
  };

  const run = (build: (ctx: MotionBuildContext) => void) => {
    const existing = new Set(ScrollTrigger.getAll());
    build(makeCtx());
    ScrollTrigger.getAll().forEach((trigger) => {
      if (!existing.has(trigger)) triggers.push(trigger);
    });
    ScrollTrigger.refresh();
  };

  return {
    build(fn: (ctx: MotionBuildContext) => void) {
      run(fn);
    },
    heal(fn: (ctx: MotionBuildContext) => void) {
      if (destroyed) return;
      const dead = triggers.some(
        (trigger) => trigger.trigger && !trigger.trigger.isConnected
      );
      if (!dead) return;
      if (healCount >= 4) {
        teardown();
        return;
      }
      healCount += 1;
      teardown();
      run(fn);
    },
    destroy() {
      destroyed = true;
      teardown();
    },
  };
};

const EMPTY_DEPS: unknown[] = [];

export const useMotionBuild = (
  scopeRef: RefObject<HTMLElement | null>,
  build: (ctx: MotionBuildContext) => void,
  extraDeps: unknown[] = EMPTY_DEPS
) => {
  const { motion, imageReveal, durationScale } = useMotion();

  useGSAP(
    () => {
      if (shouldSkipMotion(motion)) return;
      if (!scopeRef.current) return;

      const session = createSession({ motion, imageReveal, durationScale });
      session.build(build);

      const poll = window.setInterval(() => {
        session.heal(build);
      }, 900);

      return () => {
        window.clearInterval(poll);
        session.destroy();
      };
    },
    {
      scope: scopeRef,
      dependencies: [motion, imageReveal, durationScale, ...extraDeps],
    }
  );
};

const padSplitMasks = (masks: Element[] | undefined) => {
  masks?.forEach((mask) => {
    (mask as HTMLElement).style.paddingBottom = "0.14em";
    (mask as HTMLElement).style.marginBottom = "-0.14em";
  });
};

export const maskReveal = (
  heading: HTMLElement,
  ctx: MotionBuildContext,
  vars: gsap.TweenVars = {}
) => {
  ctx.track(heading);
  ctx.saveSplit(heading);

  const tweenVars: gsap.TweenVars = {
    yPercent: 0,
    duration: ctx.duration(1.1),
    ease: "power3.out",
    stagger: 0.08,
    ...vars,
  };

  if (!tweenVars.scrollTrigger && vars.scrollTrigger !== null) {
    tweenVars.scrollTrigger = {
      trigger: heading,
      start: "top 88%",
      once: true,
    };
  }
  if (vars.scrollTrigger === null) {
    delete tweenVars.scrollTrigger;
  }

  try {
    return SplitText.create(heading, {
      type: "lines",
      mask: "lines",
      aria: "auto",
      autoSplit: true,
      onSplit(self) {
        padSplitMasks(self.masks as Element[] | undefined);
        return gsap.fromTo(self.lines, { yPercent: 110 }, tweenVars);
      },
    });
  } catch {
    return gsap.fromTo(
      heading,
      { y: 24, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: ctx.duration(1.1),
        ease: "power3.out",
        ...vars,
        scrollTrigger: tweenVars.scrollTrigger,
      }
    );
  }
};

export const drawHairline = (
  rule: HTMLElement,
  ctx: MotionBuildContext,
  vars: gsap.TweenVars = {}
) => {
  ctx.track(rule);
  const existing = rule.querySelector<HTMLElement>("[data-hairline-cover]");
  if (existing) existing.remove();

  const cover = document.createElement("span");
  cover.setAttribute("data-hairline-cover", "");
  cover.setAttribute("aria-hidden", "true");
  cover.className = "pointer-events-none absolute left-0 right-0 h-px bg-bone";
  const side = rule.dataset.hairline === "top" ? "top" : "bottom";
  cover.style[side] = "-1px";
  cover.style.transformOrigin = "left center";
  rule.appendChild(cover);
  ctx.appendNode(cover);
  ctx.track(cover);

  return gsap.to(cover, {
    scaleX: 0,
    duration: ctx.duration(1.1),
    ease: "power2.inOut",
    scrollTrigger: { trigger: rule, start: "top 92%", once: true },
    ...vars,
  });
};

export const imageUncover = (
  wrapper: HTMLElement,
  img: HTMLElement,
  ctx: MotionBuildContext,
  options: {
    restScale?: number;
    parallax?: number;
    hover?: boolean;
    scrollTrigger?: gsap.TweenVars["scrollTrigger"] | null;
    clipDuration?: number;
    scaleDuration?: number;
    delay?: number;
  } = {}
) => {
  ctx.track(wrapper);
  ctx.track(img);

  if (ctx.imageReveal === "None") {
    if (options.hover) bindThumbnailHover(img, wrapper, ctx);
    return;
  }

  const trigger =
    options.scrollTrigger === null
      ? undefined
      : (options.scrollTrigger ?? {
          trigger: wrapper,
          start: "top 88%",
          once: true,
        });
  const restScale = options.restScale ?? 1;
  const clipDuration = ctx.duration(options.clipDuration ?? 1.25);
  const scaleDuration = ctx.duration(options.scaleDuration ?? 1.6);
  const delay = options.delay ?? 0;

  const tl = gsap.timeline({
    delay,
    scrollTrigger: trigger,
    onComplete() {
      if (options.hover) bindThumbnailHover(img, wrapper, ctx, restScale);
    },
  });

  if (ctx.imageReveal === "Fade scale") {
    tl.fromTo(
      wrapper,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: clipDuration, ease: "power3.out" },
      0
    );
    tl.fromTo(
      img,
      { scale: 1.08 },
      {
        scale: restScale,
        duration: scaleDuration,
        ease: "power3.out",
        force3D: true,
      },
      0
    );
  } else {
    tl.fromTo(
      wrapper,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: clipDuration,
        ease: "power3.inOut",
        onComplete() {
          gsap.set(wrapper, { clearProps: "clipPath" });
        },
      },
      0
    );
    tl.fromTo(
      img,
      { scale: 1.22 },
      {
        scale: restScale,
        duration: scaleDuration,
        ease: "power3.out",
        force3D: true,
      },
      0
    );
  }

  if (ctx.allowParallax && options.parallax) {
    const range = options.parallax;
    gsap.fromTo(
      img,
      { yPercent: -range },
      {
        yPercent: range,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }

  return tl;
};

export const staggerRise = (
  targets: gsap.TweenTarget,
  ctx: MotionBuildContext,
  distance: number,
  vars: gsap.TweenVars = {}
) => {
  const elements = gsap.utils.toArray(targets) as Element[];
  if (!elements.length) return;
  elements.forEach((el) => ctx.track(el));

  const { scrollTrigger, ...rest } = vars;
  const triggerConfig =
    scrollTrigger && typeof scrollTrigger === "object"
      ? { once: true, ...scrollTrigger }
      : scrollTrigger;

  return gsap.fromTo(
    elements,
    { autoAlpha: 0, y: distance },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.07,
      duration: ctx.duration(0.65),
      ease: "power3.out",
      ...rest,
      scrollTrigger: triggerConfig,
    }
  );
};

export const bindThumbnailHover = (
  img: Element,
  wrap: Element,
  ctx: MotionBuildContext,
  restScale = 1
) => {
  const handleEnter = () => {
    gsap.to(img, {
      scale: 1.06,
      duration: 0.9,
      ease: "power3.out",
      overwrite: "auto",
    });
  };
  const handleLeave = () => {
    gsap.to(img, {
      scale: restScale,
      duration: 0.9,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  wrap.addEventListener("mouseenter", handleEnter);
  wrap.addEventListener("mouseleave", handleLeave);
  ctx.onCleanup(() => {
    wrap.removeEventListener("mouseenter", handleEnter);
    wrap.removeEventListener("mouseleave", handleLeave);
  });
};
