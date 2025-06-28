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
    
    const motionTimeline = createMotionTimeline(target, motion);
    rally.add(motionTimeline, ">" + (motion.delay ?? 0));
  }
}

function createMotionTimeline(target: string, motion: Motion): gsap.core.Timeline {
  const motionTimeline = gsap.timeline();
  const gsapMotion = motionToGSAP(motion);
  const elements = getElementsToAnimate(target, motion);
  
  for (const element of elements) {
    const innerMotionTimeline = getMotionTimeline({ element, motion: gsapMotion });
    motionTimeline.add(innerMotionTimeline, "<" + (motion.splitDelay ?? 0));
  }
  
  return motionTimeline;
}

function getElementsToAnimate(target: string, motion: Motion): ElementType[] {
  let elements = motion.split 
    ? getSplitElements(target, motion.split, splitCache) 
    : [target];
    
  return motion.randomOrder ? gsap.utils.shuffle(elements) : elements;
}