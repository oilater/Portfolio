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
  const { playables, playback } = props;

  // playable 위치 계산 함수
  const getPosition = (index: number) => {
    switch (playback) {
      case "stagger":
        return props.staggerDelay * index;

      case "parallel":
        return PlaybackPosition.Parallel;

      case "serial":
        return PlaybackPosition.Serial;
    }
  };

  playables.forEach((playable, playableIndex) => {
    const position = getPosition(playableIndex);
    timeline.add(playable, position);
    setPlayable(playable);
  });

  return timeline;
}

function setPlayable(playable: Playable) {
  if (playable.paused()) playable.play();
}