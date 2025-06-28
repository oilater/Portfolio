import { DEFAULTS, type GetMotionTlProps } from "../core/types";
import gsap from "gsap";

export function getMotionTimeline({
    element,
    motion,
  }: GetMotionTlProps): gsap.core.Timeline {
    const innerMotionTimeline = gsap.timeline();
    
    const previous: Record<string, { from: number | string, to: number | string }> = {};
    
    let { delay, duration, ease, ...properties } = motion;

    // 함수로 분리
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value !== 'object') continue;
      
      // 개별 속성 우선 적용
      delay = value.delay ?? delay;
      duration = value.duration ?? duration;
      ease = value.ease ?? ease;
      
      let from = value.from ?? previous[key]?.to ?? getDefaultValue(key, "from");
      let to = value.to ?? previous[key]?.from ?? getDefaultValue(key, "to");
      
      // TODO: 리팩토링 필요
      if (from === 'random') {
        from = gsap.utils.random(-100, 100);
        to = 0;
      }
  
      if (to === 'random') {
        to = gsap.utils.random(-100, 100);
        from = 0;
      }
      
      previous[key] = { from, to };
      
      const tween = gsap.fromTo(
        element,
        { [key]: from },
        { ease: ease as string, duration: duration as number, [key]: to }
      );
      innerMotionTimeline.add(tween, "<");
    }
    return innerMotionTimeline;
  }

// 모션의 기본값 반환(from, to 속성이 없는 경우)
function getDefaultValue(key: string, type: 'from' | 'to') {
    if (typeof DEFAULTS[key] === 'object') {
      return DEFAULTS[key][type];
    } 
  
    return DEFAULTS[key];
  }
  