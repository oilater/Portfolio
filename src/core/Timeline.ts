import { gsap } from "gsap";

type TimlineProps = {
    playback: "parallel" | "serial" | "stagger";
    playables: (gsap.core.Timeline)[];
    staggerDelay?: number;
}

export function Timeline({ playback, playables, staggerDelay = 0 }: TimlineProps) {
    const tl = gsap.timeline({ paused: true });
    
    if (playback === "stagger") {
      // 각 playable을 개별적으로 추가
      playables.forEach((playable, index) => {
        tl.add(playable, index * staggerDelay);
      });
    } else {
      const position = playback === "parallel" ? "<" : ">";
      playables.forEach((playable) => {
        tl.add(playable, position);
      });
    }
  
    return tl;
  }