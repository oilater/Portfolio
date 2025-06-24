import { gsap } from "gsap";
import { DEFAULTS, type GetTweenProps, type Motion } from "./types";
import { useSplitText } from "./useSplitText";

type RallyProps = {
  target: string;
  playCount?: number | 'infinity';
  motions: Motion[];
  exitMotions?: Motion[];
  split?: 'words' | 'lines' | 'chars';
  splitDelay?: number;
  randomOrder?: boolean;
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
   * @param playCount - 반복 횟수
   * @param motions - 모션 배열
   * @param exitMotions - 종료 모션 배열
   * @param split - 요소 분할 방식
   * @param splitDelay - 분할 딜레이
   * @param randomOrder - 순서 랜덤화 여부
   * @param onComplete - 콜백
   */
  function Rally({
    target,
    playCount = 1,
    motions,
    exitMotions,
    split,
    splitDelay = 0,
    randomOrder = false,
    onComplete,
  }: RallyProps): gsap.core.Timeline {
    // 각 Rally는 자신의 타임라인을 가짐
    const rallyTl = gsap.timeline();
    const exitTl = gsap.timeline({paused: true});

    let elements = split 
    ? getSplitElements(target, split) 
    : [target];
    
    if (randomOrder) 
      elements = gsap.utils.shuffle(elements as Element[]);
    
    addMotions();
    
    function addMotions() {
      for (const element of elements) {
        const gsapMotions = getGSAPMotions(motions);
        if (!gsapMotions) continue;
        const tweens = getTweens({element, motions: gsapMotions, mode: "enter"});
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
    
    function playExitMotions(): void {
      if (!exitMotions) return;
      
      const gsapMotions = getGSAPMotions(exitMotions);
      if (!gsapMotions) return;
      
      const tweens = getTweens({ element: target, motions: gsapMotions, mode: "exit" });
      exitTl.add(tweens, "<").play();
    };
    
    const repeatCount = (playCount !== "infinity") ? playCount - 1 : -1;
    return rallyTl.repeat(repeatCount);
  };
  
  /**
   * gsap 형식으로 모션 변환
   */
  function getGSAPMotions(motions: Motion[]): Motion[] {
    const combinedMotion: Motion[] = [];
    
    for (const motion of motions) {
      const motionValue: Motion = {};

      for (const [key, value] of Object.entries(motion)) {
        if (!value) continue;
        const gsapKey = key.replace('translate', '').toLowerCase() || key;
        motionValue[gsapKey] = value;
      }

      combinedMotion.push(motionValue);
    }

    return combinedMotion;
}

/**
 * 각 속성별 tween 생성 후 배열로 반환
 */
function getTweens({
  element,
  motions,
  mode,
}: GetTweenProps): gsap.core.Tween[] {
  const tweens: gsap.core.Tween[] = [];

  for (const motion of motions) {
    let { delay, duration, ease, ...properties } = motion;
    
    for (const [key, value] of Object.entries(properties)) {
      if (!value || typeof value !== 'object') continue;
      
      const motionValue = value as Motion;
      delay = motionValue.delay ?? delay ?? DEFAULTS.delay;
      duration = motionValue.duration ?? duration ?? DEFAULTS.duration;
      ease = motionValue.ease ?? ease ?? DEFAULTS.ease;

      let from = motionValue.from ?? getDefaultValue(key, mode, "from");
      let to = motionValue.to ?? getDefaultValue(key, mode, "to");
      
      if (motionValue.from === 'random') {
        from = gsap.utils.random(-400, 400);
      }

      const tween: gsap.core.Tween = gsap.fromTo(
        element, 
        { [key]: from },
        { [key]: to, duration: duration as number, ease: ease as string }
      );
      tweens.push(tween);
    }
  }
  return tweens;
}

  function getSplitElements(target: string, split: 'words' | 'lines' | 'chars'): Element[] {
    const splitTarget = createSplit(target, split);
    return splitTarget?.[split] || splitTarget?.lines;
  }
  
  function getDefaultValue(prop: string, mode: "enter" | "exit", type: "from" | "to"): number {
    if (prop === "opacity") return DEFAULTS.values[mode].opacity[type];
    if (prop === "scale") return DEFAULTS.values[mode].scale[type];
    return DEFAULTS.values[mode].translate[type];
  }  

  return { Rally };
}