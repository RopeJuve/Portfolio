import posthog from "posthog-js";
import type { CountAdapter } from "./count";

const EU_POSTHOG_HOST = "https://eu.i.posthog.com";

export const createPosthogAdapter = (
  key = process.env.NEXT_PUBLIC_POSTHOG_KEY,
  host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? EU_POSTHOG_HOST
): CountAdapter => {
  let sdkLoaded = false;
  let capturing = false;

  return {
    init: () => {
      if (!key) return;
      if (!sdkLoaded) {
        sdkLoaded = true;
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
      } else {
        posthog.opt_in_capturing();
      }
      capturing = true;
    },
    capture: (event, properties) => {
      if (!capturing) return;
      posthog.capture(event, properties);
    },
    shutdown: () => {
      if (!capturing) return;
      posthog.opt_out_capturing();
      posthog.reset();
      capturing = false;
    },
  };
};
