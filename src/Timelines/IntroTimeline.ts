import { Rally } from "../core/Rally.ts";
import { Timeline } from "../core/Timeline";

export function introTimeline(onComplete?: () => void) {
    const tl = Timeline({
    playback: "serial",
    playables: [
      Rally({
        target: ".introTitle",
        playCount: 1,
        motions: [
          {
            split: 'words',
            splitDelay: 0.15,
            randomOrder: true,
            duration: 0.8,
            ease: "expo.out",
            opacity: { from: 0 },
            translateX: { from: 'random' },
            translateY: { from: 'random' },
          },
          {
            delay: 0.8,
            ease: "back.inOut",
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