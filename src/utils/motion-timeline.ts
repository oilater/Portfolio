import { DEFAULTS, type ElementType, type GetMotionTlProps, type PreviousMotionValueType } from "../core/types";
import gsap from "gsap";

export function getMotionTimeline({
    element,
    motion,
  }: GetMotionTlProps): gsap.core.Timeline {
    const innerMotionTimeline = gsap.timeline();
    
    const previous: PreviousMotionValueType = {};
    
    let { delay, duration, ease, ...properties } = motion;

    // 함수로 분리
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value !== 'object') continue;
      
      // 개별 속성 우선 적용
      delay = value.delay ?? delay;
      duration = value.duration ?? duration;
      ease = value.ease ?? ease;
      
      const { from, to } = getFromTo(key, value, previous, element);
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

  function getFromTo(
    key: string,
    value: any,
    previous: PreviousMotionValueType,
    element: ElementType
  ) {
    // color는 특별 처리
    if (key === 'color') {
      let from = value.from ?? previous[key]?.to ?? getCurrentColor(element);
      let to = value.to ?? previous[key]?.from ?? getCurrentColor(element);
      return { from, to };
    }

    let from = value.from ?? previous[key]?.to ?? getDefaultValue(key, "from");
    let to = value.to ?? previous[key]?.from ?? getDefaultValue(key, "to");
    
    return { from, to };
  }

  // 현재 컬러 가져오기
function getCurrentColor(element: any): string {
  // 현재 요소의 computed style에서 color 가져오기
  const computedStyle = window.getComputedStyle(element);
  return computedStyle.color;
}


// 모션의 기본값 반환(from, to 속성이 없는 경우)
function getDefaultValue(key: string, type: 'from' | 'to') {
    if (typeof DEFAULTS[key] === 'object') {
      return DEFAULTS[key][type];
    } 
  
    return DEFAULTS[key];
  }
  