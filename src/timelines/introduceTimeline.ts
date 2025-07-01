import { Rally } from "../core/rally.ts";
import { Timeline } from "../core/timeline.ts";

export function introduceTimeline(length: number) {
  const titleTimeline = Timeline({
    playback: "stagger",
    staggerDelay: 0.15,
    playables: [
      Rally({
        target: ".topTitle",
        motions: [
          {
            delay: 0.1,
            duration: 0.6,
            ease: "expo.inOut",
            opacity: { from: 0 },
            translateY: { from: -10 },
          },
        ],
      }),

      Timeline({
        playback: "stagger",
        staggerDelay: 0.1,
        playables: [
          Rally({
            target: ".mainDescription",
            motions: [
              {
                split: 'chars',
                splitDelay: 0.01,
                duration: 0.8,
                ease: "power2.in",
                opacity: { from: 0 },
              },
            ],
          }),
          Rally({
            target: ".mainDescription2",
            motions: [
              {
                split: 'chars',
                splitDelay: 0.01,
                duration: 0.8,
                ease: "power2.in",
                opacity: { from: 0 },
              },
            ],
          }),
        ]
      }),
    ],
  });

  const listRowSectionRally = Rally({
    target: ".listRowSection",
    motions: [
      {
        duration: 1,
        opacity: { from: 0, ease: "power2.in" },
        scale: { from: 0.95, ease: "back.out" },
      }
    ]
  })
  
  const listRowTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.2,
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
                translateY: { from: -3 },
              }
            ]
          }),

          Rally({
            target: `.listRowDescription-${index}`,
            motions: [
              {
                split: 'lines',
                splitDelay: 0.1,
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
    staggerDelay: 0.7,
    playables: [
      titleTimeline,
      listRowSectionRally,
      listRowTl,
    ],
  });

  return mainTl;
}
