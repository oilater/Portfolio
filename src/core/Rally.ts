import { gsap } from "gsap";
import { addMotions } from "./motion";
import { type Motion } from "./types";

type RallyProps = {
  target: string;
  playCount?: number | 'infinite';
  motions: Motion[];
};

/**
 * Rally 함수
 * @param target - 대상 요소
 * @param playCount - 반복 횟수 (기본값: 1)
 * @param motions - 모션 배열
 * @returns - Rally 타임라인 반환
 */
export function Rally({
  target,
  playCount = 1,
  motions,
}: RallyProps): gsap.core.Timeline {
  const rally = gsap.timeline({paused: true});
  addMotions({ rally, target, motions });

  const repeatCount = playCount !== "infinite" ? playCount - 1 : -1;
  return rally.repeat(repeatCount);
}