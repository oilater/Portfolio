import { gsap } from "gsap";
import { type Playable, type SerialOrParallelTimelineProps, type StaggerTimelineProps, type TimelineProps } from "./types";

const PlaybackPosition = {
  Parallel: "<",
  Serial: ">",
} as const;

export function Timeline(props: SerialOrParallelTimelineProps): gsap.core.Timeline;
export function Timeline(props: StaggerTimelineProps): gsap.core.Timeline;

export function Timeline(props: TimelineProps): gsap.core.Timeline {
  const timeline = gsap.timeline({ paused: true });
  const { playables } = props;

  playables.forEach((playable, playableIndex) => {
    const position = getPosition(props, playableIndex);
    timeline.add(playable, position);
    setPlayable(playable);
  });

  return timeline;
}

// 각 playable을 실행 가능한 상태로 만들어주는 함수
function setPlayable(playable: Playable) {
  if (playable.paused()) playable.play();
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