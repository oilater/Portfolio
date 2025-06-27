import { Rally } from "../core/Rally";
import { Timeline } from "../core/Timeline";

export function introduceTimeline(length: number) {
  
  const titleTimeline = Timeline({
    playback: "stagger",
    staggerDelay: 0.1,
    playables: [
      Rally({
        target: ".topTitle",
        motions: [
          {
            duration: 0.6,
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: -10 },
          },
        ],
      }),
      Rally({
        target: ".mainDescription",
        motions: [
          {
            split: 'chars',
            splitDelay: 0.01,
            duration: 0.3,
            ease: "power2.in",
            opacity: { from: 0 },
          },
        ],
      }),
    ],
  });

  const listRowSectionRally = Rally({
    target: ".listRowSection",
    motions: [
      {
        delay: 1,
        duration: 1,
        opacity: { from: 0, ease: "power2.in" },
        scale: { from: 0.95, ease: "back.out" },
      }
    ]
  })
  
  const listRowTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.3,
    playables: Array(length).fill(0).map((_, index) =>
      
      Timeline({
        playback: "parallel",
        playables: [

          Rally({
            target: `.listRowTitle-${index}`,
            motions: [
              {
                duration: 0.7,
                ease: "power2.out",
                opacity: { from: 0 },
                translateX: { from: -10 },
              }
            ]
          }),

          Rally({
            target: `.listRowDescription-${index}`,
            motions: [
              {
                split: 'lines',
                splitDelay: 0.2,
                duration: 0.3,
                ease: "power2.in",
                opacity: { from: 0 },
              }
            ]
          }),
        ]
      })
    ),
  });

  const mainTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.8,
    playables: [
      titleTimeline,
      listRowSectionRally,
      listRowTl.delay(0.5),
    ],
  });

  return mainTl;
}
