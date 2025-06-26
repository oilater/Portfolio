import { Rally } from "../core/Rally.ts";
import { Timeline } from "../core/Timeline";

export function introTimeline(onComplete?: () => void) {
    const tl = Timeline({
    playback: "serial",
    playables: [
      Rally({
        target: ".introTitle",
        split: 'words',
        splitDelay: 0.1,
        randomOrder: true,
        motions: [
          {
            duration: 0.9,
            ease: "expo.inOut",
            opacity: { to: 1 },
            translateX: { from: 'random'},
            translateY: { from: 'random'},
          },
          {
            delay: 0.8,
            ease: "expo.out",
            duration: 0.5,
            opacity: { to: 0 },
            translateY: { to: "-30%"},
          },
        ],
      }),
    ]
  });

  if (onComplete) 
    tl.eventCallback("onComplete", onComplete);

  return tl;
}