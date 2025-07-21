import { Rally } from "../core/rally.ts";
import { Timeline } from "../core/timeline.ts";

export function introduceTimeline() {

  const infoSectionTimeline = Timeline({
    playback: "stagger",
    staggerDelay: 0.2,
    playables: [
      Rally({
        target: ".info-1",
        playCount: 1,
        motions: [
          { 
            duration: 0.5, 
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '15%' },
          },
        ],
      }),
      Rally({
        target: ".info-2",
        playCount: 1,
        motions: [
          { 
            duration: 0.5, 
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '15%' },
          },
        ],
      }),
      Rally({
        target: ".info-3",
        playCount: 1,
        motions: [
          { 
            duration: 0.5, 
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '15%' },
          },
        ],
      }),
    ],
  });

  return infoSectionTimeline;
}