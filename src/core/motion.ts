import { gsap } from "gsap";
import { motionToGSAP } from "../utils/motion-to-gsap";
import { getSplitElements } from "../utils/split-text";
import { DEFAULTS, type AddMotionsProps, type ElementType, type GetMotionTlProps, type Motion, type MotionValueType, type SplitType } from "./types";

export function addMotions({ tl, target, motions }: AddMotionsProps): void {
    // SplitText 캐싱
    const splitCache: Partial<Record<SplitType, ElementType[]>> = {};
  
    // 모션 배열 순회
    for (const motion of motions) {
      if (!motion) continue;
      
      // 모션 타임라인 생성
      const motionTl = gsap.timeline();

      // 모션을 적용할 element 배열 
      // split 속성이 있는 경우 splitType에 따라 forEach를 돌기 때문에 target이 className으로 들어온 경우에도 배열로 변환
      let elements: ElementType[];
     
      // 모션의 split 속성이 있는 경우
      if (motion.split) {
        if (!splitCache[motion.split]) {
          splitCache[motion.split] = getSplitElements(target, motion.split);
        }
        elements = splitCache[motion.split]!;
      } else {
        elements = [target];
      }

      // 모션의 randomOrder 속성이 있는 경우
      if (motion.randomOrder) 
        elements = gsap.utils.shuffle(elements);    
      
      // gsap 형식으로 모션 변환
      const gsapMotion: Motion = motionToGSAP(motion);
      
      // 각 element 별 모션 타임라인 순회
      for (const element of elements) {
        const innerMotionTl = getEachMotion({ element, gsapMotion });
        motionTl.add(innerMotionTl, "<" + (motion.splitDelay ?? 0));
      }

      // Rally에 모션을 순차적으로 추가
      tl.add(motionTl, ">" + (motion.delay ?? 0));
    }
  }
  
  /**
   * motion 객체마다 각자의 ease, duration, delay 등 속성이 있을 수 있으므로
   * innerMotionTl을 생성하고 합쳐서 motionTl에 추가 후 반환
   * TODO: 로직 리팩토링 필요
   */
  function getEachMotion({
    element,
    gsapMotion,
  }: GetMotionTlProps): gsap.core.Timeline {
    const innerMotionTl = gsap.timeline();
  
    const previousValues: Record<string, { from: MotionValueType, to: MotionValueType }> = {};
    
    let { delay, duration, ease, ...properties } = gsapMotion;
  
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value !== 'object') continue;
      // 개별 속성 우선
      delay = value.delay ?? delay;
      duration = value.duration ?? duration;
      ease = value.ease ?? ease;
      
      let from = value.from ?? previousValues[key]?.to ?? getDefaultValue(key, "from");
      let to = value.to ?? previousValues[key]?.from ?? getDefaultValue(key, "to");
      
      if (from === 'random') {
        from = gsap.utils.random(-100, 100);
        to = 0;
      }
  
      if (to === 'random') {
        to = gsap.utils.random(-100, 100);
        from = 0;
      }
      
      previousValues[key] = { from, to };
      
      const tween = gsap.fromTo(
        element,
        { [key]: from },
        { ease: ease as string, duration: duration as number, [key]: to }
      );
      innerMotionTl.add(tween, "<");
    }
    return innerMotionTl;
  }
  
  // 모션의 기본값 반환(from, to 속성이 없는 경우)
  function getDefaultValue(key: string, type: 'from' | 'to') {
    if (typeof DEFAULTS[key] === 'object') {
      return DEFAULTS[key][type];
    } 
  
    return DEFAULTS[key];
  }