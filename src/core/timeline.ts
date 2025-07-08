import { gsap } from "gsap";
import { type TimelineProps } from "./types";

const PlaybackPosition = {
  Parallel: "<",
  Serial: ">",
} as const;

export function Timeline(props: TimelineProps): gsap.core.Timeline {
  const timeline = gsap.timeline({ paused: true });
  const { playables } = props;

  playables.forEach((playable, playableIndex) => {
    const position = getPosition(props, playableIndex);
    timeline.add(playable, position);
    
    // 각 playable을 실행 가능한 상태로 만들어줌
    playable.play();
  });

  return timeline;
}

// playable 위치 계산 함수
function getPosition(props: TimelineProps, index: number) {
  switch (props.playback) {
    case "stagger":
      return props.staggerDelay * index;

    case "parallel":
      return PlaybackPosition.Parallel;

    case "serial":
      return PlaybackPosition.Serial;

    default:
      const exhaustiveCheck: never = props;
      return exhaustiveCheck;
  }
}