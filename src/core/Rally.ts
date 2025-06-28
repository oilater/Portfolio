import { gsap } from "gsap";
import { addMotions } from "./motion";
import { type Motion, type PlayCountType } from "./types";

type RallyProps = {
  target: string;
  playCount?: PlayCountType;
  motions: Motion[];
};

/**
 * Rally 함수
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
  const repeatCount = playCount !== "infinite" ? playCount - 1 : -1;
  
  addMotions({ rally, target, motions });

  return rally.repeat(repeatCount);
}