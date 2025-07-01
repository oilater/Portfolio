import { Rally } from "../core/rally";
import { Timeline } from "../core/timeline";

export function projectTimeline() {

  const projectTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.2,
    playables: [

      Rally({
        target: ".hr",
        motions: [
          {
            duration: 0.4,
            ease: "power2.inOut",
            opacity: { from: 0 },
            translateY: { from: '30%' },
          }
        ],
      }),

      Rally({
        target: ".topTitle",
        motions: [
          {
            duration: 0.6,
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '30%' }
          }
        ],
      }),

      Rally({
        target: ".mainDescription",
        motions: [
          {
            duration: 0.7,
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '30%' }
          }
        ],
      }),

      Rally({
        target: ".projectSection",
        motions: [
          {
            duration: 0.8,
            ease: "power3.in",
            translateY: { from: 10 },
            opacity: { from: 0 }
          }
        ],
      }),
    ],
  });

  return projectTl;
}