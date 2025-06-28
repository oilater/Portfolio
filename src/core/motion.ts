import { gsap } from "gsap";
import { motionToGSAP } from "../utils/motion-to-gsap";
import { getSplitElements } from "../utils/split-text";
import { type AddMotionsProps, type ElementType, type Motion, type SplitCacheType } from "./types";
import { getMotionTimeline } from "../utils/motion-timeline";

/**
 * 모션을 추가하는 함수
 * @param rally - Rally
 * @param target - 모션을 적용할 요소
 * @param motions - 모션 배열
 */

const splitCache: SplitCacheType = {};

export function addMotions({ rally, target, motions }: AddMotionsProps): void {
    // motions 순회
    for (const motion of motions) {
      if (!motion) continue;      
      
      const motionTimeline = gsap.timeline();

      // gsap 형식으로 모션 변환
      const gsapMotion: Motion = motionToGSAP(motion);  
      
      // 모션을 적용할 elements
      let elements: ElementType[] = motion.split ? getSplitElements(target, motion.split, splitCache) : [target];
      
      // 모션의 randomOrder 속성이 있는 경우
      if (motion.randomOrder) 
        elements = gsap.utils.shuffle(elements);    

      // 각 element 별 모션 타임라인 순회
      for (const element of elements) {
        const innerMotionTimeline = getMotionTimeline({ element, motion: gsapMotion });
        motionTimeline.add(innerMotionTimeline, "<" + (motion.splitDelay ?? 0));
      }

      // Rally에 모션을 순차적으로 추가
      rally.add(motionTimeline, ">" + (motion.delay ?? 0));
    }
  }