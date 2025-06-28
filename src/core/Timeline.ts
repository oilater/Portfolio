import { gsap } from "gsap";
import { type TimelineProps } from "./types";

/**
 * Timeline 함수
 * @param playback - 타임라인 재생 방식 (동시, 순차, 연달아 실행)
 * @param playables - 타임라인에 추가할 타임라인 배열
 * @param staggerDelay - playback 타입이 'stagger'인 경우 각 Rally 사이의 딜레이 (기본값: 0)
 * @returns - Timeline 타임라인 반환
 */
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