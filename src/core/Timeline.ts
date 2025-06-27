import { gsap } from "gsap";

type TimelineProps = {
  playback: "parallel" | "serial" | "stagger";
  playables: gsap.core.Timeline[];
  staggerDelay?: number;
};

export function Timeline({
  playback,
  playables,
  staggerDelay = 0,
}: TimelineProps): gsap.core.Timeline {
  const tl = gsap.timeline({ paused: true });

  const isStagger = playback === "stagger";
  const position = playback === "parallel" ? "<" : ">";

  playables.forEach((playable, i) => {
    const at = isStagger ? i * staggerDelay : position;
    
    tl.add(playable, at);

    if (playable.paused()) {
      playable.play();
    }
  });

  return tl;
}