import { gsap } from "gsap";
import { addMotions } from "./motion.ts";
import { type PlayCount, type RallyProps } from "./types.ts";

/**
 * Rally
 * @param target - 대상 요소
 * @param playCount - 모션 반복 횟수 (기본값: 1)
 * @param motions - 모션 배열
 * @returns - Rally 타임라인 반환
 */
export function Rally({
  target,
  playCount = 1,
  motions,
}: RallyProps): gsap.core.Timeline {
  const rally = gsap.timeline({paused: true});
  const repeatCount = isInfinite(playCount) ? -1 : playCount - 1;
  
  addMotions({ rally, target, motions });

  return rally.repeat(repeatCount);
}

function isInfinite(playCount: PlayCount): playCount is "infinite" {
  return playCount === "infinite";
}