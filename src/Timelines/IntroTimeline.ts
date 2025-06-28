import { Rally } from "../core/rally";
import { Timeline } from "../core/timeline";

export function introTimeline(onComplete?: () => void) {  
  const TEXT_GRAY = '#888888';

  const introTl = Timeline({
    playback: "serial",
    playables: [
      Rally({
        target: ".introTitle",
        motions: [
          {
            split: 'words',
            splitDelay: 0.1,
            randomOrder: true,
            duration: 0.5, 
            ease: "expo.out",
            color: { to: TEXT_GRAY},
            opacity: { from: 0 },
            translateX: { from: 'random' },
            translateY: { from: 'random' },
          },
        ],
      }),

      Rally({
        target: ".introTitleFill",
        motions: [
          {
            split: 'chars',
            splitDelay: 0.04,
            ease: "power2.in",
            duration: 0.5,
            opacity: { from: 0, to: 1 },
          },
        ],
      }),

      Rally({
        target: ".introTitleSection",
        motions: [
          {
            delay: 0.8,
            duration: 0.6,
            ease: "back.in",
            opacity: { to: 0 },
            translateY: { to: -30},
          },
        ],
      }),
    ],
  });

  if (onComplete) 
    introTl.eventCallback("onComplete", onComplete);

  return introTl;
}