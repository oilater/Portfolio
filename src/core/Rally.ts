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
    const rallyTl = gsap.timeline();
    const exitTl = gsap.timeline({paused: true});

    let elements : string[] | Element[] = split ? getSplitElements(target, split) : [target];
    if (randomOrder) 
      elements = gsap.utils.shuffle(elements as Element[]);
    
    
    addMotions(rallyTl, elements, motions, "enter", splitDelay);
    
    if (exitMotions) 
      addMotions(exitTl, elements, exitMotions, "exit");

    // exitMotions 재생 후 onComplete 호출
    rallyTl.eventCallback("onComplete", () => {
      exitTl.play();
      gsap.delayedCall(exitTl.duration(), () => requestAnimationFrame(() => onComplete?.()));
    });
    
    const repeatCount = (playCount !== "infinite") ? playCount - 1 : -1;
    return rallyTl.repeat(repeatCount);
  };


  function addMotions(tl: gsap.core.Timeline, elements: string[] | Element[], motions: Motion[], mode: "enter" | "exit", splitDelay?: number): void {
    if (mode === "enter") {
      tl.set(elements, { opacity: 0 }, 0);
    }
    
    for (const element of elements) {
      const gsapMotions = getGSAPMotions(motions);
      const motionTl = getMotionTl({element, gsapMotions, mode});

      tl.add(motionTl, "<" + (splitDelay ?? 0));
    }
  }
  
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
 * motion마다 innerMotionTl을 생성하고 합쳐서 motionTl에 추가 후 반환
 */
function getMotionTl({
  element,
  gsapMotions,
  mode,
}: GetMotionTlProps): gsap.core.Timeline {
  const motionTl = gsap.timeline();
  const previousValues: Record<string, MotionValueType> = {};

  for (const motion of gsapMotions) {
    const innerMotionTl = gsap.timeline();
    
    let { delay, duration, ease, ...properties } = motion;

    for (const [key, value] of Object.entries(properties)) {
      if (typeof value !== 'object') continue;
      
      const motionValue = value as Motion;
      
      delay = motionValue.delay ?? delay;
      duration = motionValue.duration ?? duration;
      ease = motionValue.ease ?? ease;

      let from = motionValue.from ?? previousValues[key] ?? getDefaultValue(key, mode, "from");
      let to = motionValue.to ?? previousValues[key] ?? getDefaultValue(key, mode, "to");
      
      if (from === 'random') from = gsap.utils.random(-500, 500);
      
      previousValues[key] = from;
      previousValues[key] = to;
      
      const tween = gsap.fromTo(
        element, 
        { [key]: from },
        { ease: ease as string, duration: duration as number, [key]: to }
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