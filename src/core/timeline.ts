import { gsap } from "gsap";
import { type Playable, type SerialOrParallelTimeline, type StaggerTimeline, type Timeline } from "./types";

const PlaybackPosition = {
  Parallel: "<",
  Serial: ">",
} as const;

export function Timeline(props: SerialOrParallelTimeline): gsap.core.Timeline;
export function Timeline(props: StaggerTimeline): gsap.core.Timeline;

export function Timeline(props: Timeline): gsap.core.Timeline {
  const timeline = gsap.timeline({ paused: true });
  const { playables, playback } = props;

  switch (playback) {
    case "stagger": {
      playables.forEach((playable, playableIndex) => {
        const position = props.staggerDelay * playableIndex;
        timeline.add(playable, position);
        setPlayable(playable);
      });
      break;
    }

    case "parallel": {
      playables.forEach((playable) => {
        timeline.add(playable, PlaybackPosition.Parallel);
        setPlayable(playable);
      });
      break;
    }

    case "serial": {
      playables.forEach((playable) => {
        timeline.add(playable, PlaybackPosition.Serial);
        setPlayable(playable);
      });
      break;
    }

    default:
      const exhaustiveCheck: never = props;
      return exhaustiveCheck;
  }

  return timeline;
}

function setPlayable(playable: Playable) {
  if (playable.paused()) playable.play();
}