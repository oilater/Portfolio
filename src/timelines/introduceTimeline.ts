import { Rally } from "../core/rally.ts";
import { Timeline } from "../core/timeline.ts";

export function introduceTimeline() {

  const listRowSectionRally = Rally({
    target: ".listRowSection",
    motions: [
      {
        duration: 1,
        opacity: { from: 0, ease: "power2.in" },
        scale: { from: 0.95, ease: "back.out" },
      },
    ],
  });

  const mainTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.7,
    playables: [listRowSectionRally],
  });

  return mainTl;
}
