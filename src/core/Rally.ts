import { gsap } from "gsap";
import { DEFAULTS, type GetTweenProps, type Motion } from "./types";
import { useSplitText } from "./useSplitText";

type RallyProps = {
  target: string;
  split?: 'words' | 'lines' | 'chars';
  splitDelay?: number;
  randomOrder?: boolean;
  playCount?: number | 'infinity';
  motions: Motion[];
  exitMotions?: Motion[];
  onComplete?: () => void;
};

/**
 * Rally 훅
 * @returns - Rally 생성 함수
 */
export function useRally() {
  const { createSplit } = useSplitText();
  
  /**
   * Rally 생성
   * @param target - 모션을 적용할 요소
   * @param split - 요소 분할 방식
   * @param splitDelay - 분할 딜레이
   * @param randomOrder - 순서 랜덤화 여부
   * @param playCount - 반복 횟수
   * @param motions - 모션 배열
   * @param exitMotions - 종료 모션 배열
   * @param onComplete - 콜백
   */
  function Rally({
    target,
    split,
    splitDelay = 0,
    randomOrder = false,
    playCount = 1,
    motions,
    exitMotions = [],
    onComplete,
  }: RallyProps): gsap.core.Timeline {
    // 각 Rally는 자신의 타임라인을 가짐
    const rallyTl = gsap.timeline();
    const exitTl = gsap.timeline({paused: true});

    let elements = split ? getSplitElements(target, split) : [target];
    if (randomOrder) elements = gsap.utils.shuffle(elements as Element[]);
    
    // 모션 추가
    addMotions();
    
    /**
     * 각 요소별로 모션 취합 및 tween 생성 후 Rally 타임라인에 추가
     */
    function addMotions() {
      for (const element of elements) {
        const motion = motionToGSAP(motions);
        if (!motion) continue;
        const tweens = getTweens({element, motion, mode: "enter"});
        rallyTl.add(tweens, "<" + splitDelay);
      }
    }

    // exitMotions 재생 후 onComplete 호출
    if (onComplete) {
      rallyTl.eventCallback("onComplete", () => {
        playExitMotions();
        gsap.delayedCall(exitTl.duration(), onComplete);
      });
    }
    
    /**
     * exitMotions 재생
     */
    function playExitMotions(): void {
      if (!exitMotions.length) return;
      
      const motion = motionToGSAP(exitMotions);
      if (!motion) return;
      
      const tweens = getTweens({ element: target, motion, mode: "exit" });
      exitTl.add(tweens, "<").play();
    };
    
    const repeatCount = (playCount !== "infinity") ? playCount - 1 : -1;
    return rallyTl.repeat(repeatCount);
  };
  
  /**
   * gsap 형식으로 모션 변환
   */
  function motionToGSAP(motions: Motion[]): Motion | undefined {
    console.log("모션들",motions);
    
    for (const motion of motions) {
      const motionValue: Motion = {};

      for (const [key, value] of Object.entries(motion)) {
        if (!value) continue;
        const gsapKey = key === 'translateX' ? 'x' : key === 'translateY' ? 'y' : key; // gsap key로 변환
        
        motionValue[gsapKey] = value;
      }  
      return motionValue;
    }
}

/**
 * 각 속성별 tween 생성 후 배열로 반환
 */
function getTweens({
  element,
  motion,
  mode,
}: GetTweenProps): gsap.core.Tween[] {
  const tweens: gsap.core.Tween[] = [];
  let { delay, duration, ease, ...properties } = motion;

  for (const [key, value] of Object.entries(properties)) {
    if (!value || typeof value !== 'object') continue;
    
    delay = value.delay ?? delay ?? DEFAULTS.delay;
    duration = value.duration ?? duration ?? DEFAULTS.duration; // 개별 duration 우선
    ease = value.ease ?? ease ?? DEFAULTS.ease; // 개별 ease 우선

    let from = value.from ?? getDefaultValue(key, mode, "from");
    let to = value.to ?? getDefaultValue(key, mode, "to");
    
    if (value?.from === 'random') {
      from = gsap.utils.random(-400, 400);
    }

    // 속성별 tween 생성
    const tween: gsap.core.Tween = gsap.fromTo(
      element, 
      { [key]: from },
      { [key]: to, duration: duration as number, ease: ease as string }
    );
    tweens.push(tween);
  }

  return tweens;
}

  /**
   * 타겟 요소 분할
   */
  function getSplitElements(target: string, split: 'words' | 'lines' | 'chars'): Element[] {
    const splitTarget = createSplit(target, split);
    return splitTarget?.[split] || splitTarget?.lines;
  }
  
  /**
   * 모션 기본값 반환
   */
  function getDefaultValue(prop: string, mode: "enter" | "exit", type: "from" | "to"): number {
    if (prop === "opacity") return DEFAULTS.values[mode].opacity[type];
    if (prop === "scale") return DEFAULTS.values[mode].scale[type];
    return DEFAULTS.values[mode].translate[type];
  }  

  return { Rally };
}