import { gsap } from "gsap";
import { type TimelineProps } from "./types";

/**
 * Timeline
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
  const timeline = gsap.timeline({ paused: true });

  playables.forEach((playable, playableIndex) => {
    // playables 실행 위치 지정
    const position = 
      playback === "stagger" ? playableIndex * staggerDelay :
      playback === "parallel" ? "<" : ">";

    timeline.add(playable, position);

    // 내부의 타임라인이 paused 상태라면 실행 가능한 상태로 바꿔두기
    if (playable.paused()) playable.play();
  });

  return timeline;
}