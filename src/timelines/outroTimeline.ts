import { Rally } from "../core/rally.ts";
import { Timeline } from "../core/timeline.ts";

export function outroTimeline() {

  const outroTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.05,
    playables: [
      Rally({
        target: ".outroTitle",
        motions: [
          {
            duration: 0.4,
            ease: "power2.inOut",
            opacity: { from: 0 },
            translateY: { from: '20%' },
          }
        ],
      }),
      Rally({
        target: ".outroSection",
        motions: [
          {
            duration: 0.7,
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '20%' }
          }
        ],
      }),
    ],
  });

  return outroTl;
}