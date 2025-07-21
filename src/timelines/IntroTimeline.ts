import { Rally } from "../core/rally.ts";
import { Timeline } from "../core/timeline.ts";

export function introTimeline() {
  const introTl = Timeline({
    playback: "serial",
    playables: [
      Rally({
        target: ".introTitleFill",
        motions: [
          {
            delay: 0.06,
            split: "chars",
            splitDelay: 0.08,
            duration: 0.65,
            ease: "expo.in",
            color: { from: "#3182f6"},
            opacity: { from: 0, to : 1, duration: 0.55, ease: "power2.inOut"},
          },
        ],
      }),
    ],
  });
  return introTl;
}