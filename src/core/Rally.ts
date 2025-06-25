import { gsap } from "gsap";
import { DEFAULTS, type GetMotionTlProps, type Motion, type MotionValueType } from "./types";
import { useSplitText } from "./useSplitText";

type RallyProps = {
  target: string;
  playCount?: number | 'infinite';
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
        const motionTl = getMotionTl({element, gsapMotions, mode: "enter"});
        rallyTl.add(motionTl, "<" + splitDelay);
      }
    }

    // exitMotions 재생 후 onComplete 호출
    if (onComplete) {
      rallyTl.eventCallback("onComplete", () => {
        playExitMotions();
        gsap.delayedCall(exitTl.duration() ?? 0, () => {
          gsap.killTweensOf([...elements, target]);
          exitTl.kill();
          rallyTl.kill();
          
          requestAnimationFrame(() => {
            onComplete();
          });
        });
      });
    }
    
    function playExitMotions(): void {
      if (!exitMotions) return;
      
      for (const element of elements) {
        const gsapMotions = getGSAPMotions(exitMotions);
        if (!gsapMotions) continue;
        const motionTl = getMotionTl({ element, gsapMotions, mode: "exit" });
        exitTl.add(motionTl, "<").play();
      }
    };
    
    const repeatCount = (playCount !== "infinite") ? playCount - 1 : -1;
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
function getMotionTl({
  element,
  gsapMotions,
  mode,
}: GetMotionTlProps): gsap.core.Timeline {
  
  const motionTl = gsap.timeline();
  const previousValues: Record<string, MotionValueType> = {};

  for (const motion of gsapMotions) {
    let { delay, duration, ease, ...properties } = motion;
    const innerMotionTl = gsap.timeline();

    for (const [key, value] of Object.entries(properties)) {
      
      if (!value || typeof value !== 'object') continue;
      
      const motionValue = value as Motion;
      delay = motionValue.delay ?? delay ?? DEFAULTS.delay;
      duration = motionValue.duration ?? duration ?? DEFAULTS.duration;
      ease = motionValue.ease ?? ease ?? DEFAULTS.ease;

      let from = motionValue.from ?? previousValues[key] ?? getDefaultValue(key, mode, "from");
      let to = motionValue.to ?? previousValues[key] ?? getDefaultValue(key, mode, "to");
      if (from === 'random') from = gsap.utils.random(-60, 60);
      
      previousValues[key] = from;
      previousValues[key] = to;

      const tween = gsap.fromTo(
        element, 
        { [key]: from },
        { [key]: to, duration: duration as number, ease: ease as string }
      );
      innerMotionTl.add(tween, "<");
    }
    motionTl.add(innerMotionTl, ">" + delay);
  }
  return motionTl;
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