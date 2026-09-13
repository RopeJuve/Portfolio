import posthog from "posthog-js";
import type { CountAdapter } from "./count";

const EU_POSTHOG_HOST = "https://eu.i.posthog.com";

export const createPosthogAdapter = (
  key = process.env.NEXT_PUBLIC_POSTHOG_KEY,
  host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? EU_POSTHOG_HOST
): CountAdapter => {
  let started = false;

  return {
    init: () => {
      if (!key || started) return;
      started = true;
      posthog.init(key, {
        api_host: host,
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        rageclick: false,
        capture_dead_clicks: false,
        disable_session_recording: true,
        disable_surveys: true,
        advanced_disable_flags: true,
      });
    },
    capture: (event, properties) => {
      if (!started) return;
      posthog.capture(event, properties);
    },
  };
};
