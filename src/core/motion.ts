import { gsap } from "gsap";
import { motionToGSAP } from "../utils/motion-to-gsap";
import { getSplitElements } from "../utils/split-text";
import { type AddMotionsProps, type ElementType, type Motion, type SplitCacheType } from "./types";
import { getMotionTimeline } from "../utils/motion-timeline";

const splitCache: SplitCacheType = {};

/**
 * 모션을 추가하는 함수
 * @param rally - Rally
 * @param target - 모션을 적용할 요소
 * @param motions - 모션 배열
 */
export function addMotions({ rally, target, motions }: AddMotionsProps): void {
  for (const motion of motions) {
    if (!motion) continue;
    
    // 모션 타임라인 생성
    const motionTimeline = createMotionTimeline(target, motion);
    // 완성된 모션을 Rally에 추가
    rally.add(motionTimeline, ">" + (motion.delay ?? 0));
  }
}

function createMotionTimeline(target: string, motion: Motion): gsap.core.Timeline {
  // 모든 모션을 취합할 타임라인 생성
    const motionTimeline = gsap.timeline();
    
  // 모션 키를 GSAP 형식으로 변환
  const gsapMotion = motionToGSAP(motion);
  
  // split 옵션에 따라 여러 요소로 분할
  const elements = getElements(target, motion);
  
  for (const element of elements) {
    // 각 요소에 모션을 붙임
    const innerMotionTimeline = getMotionTimeline({ element, motion: gsapMotion });
    motionTimeline.add(innerMotionTimeline, "<" + (motion.splitDelay ?? 0));
  }
  
  return motionTimeline;
}

function getElements(target: string, motion: Motion): ElementType[] {
  let elements = motion.split 
    ? getSplitElements(target, motion.split, splitCache) 
    : [target];
    
  return motion.randomOrder ? gsap.utils.shuffle(elements) : elements;
}