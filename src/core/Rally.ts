import { gsap } from "gsap";
import { DEFAULTS, type AddMotionsProps, type ElementType, type GetMotionTlProps, type Motion, type MotionValueType, type SplitType } from "./types";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type RallyProps = {
  target: string;
  playCount?: number | 'infinite';
  motions: Motion[];
  exitMotions?: Motion[];
};

/**
 * Rally 훅
 * @returns - Rally 생성 함수
 */
export function Rally({
  target,
  playCount = 1,
  motions,
}: RallyProps): gsap.core.Timeline {
  const rallyTl = gsap.timeline();
  
  addMotions({ tl: rallyTl, target, motions });

  const repeatCount = playCount !== "infinite" ? playCount - 1 : -1;
  return rallyTl.repeat(repeatCount);
}

function addMotions({ tl, target, motions }: AddMotionsProps): void {
  for (const motion of motions) {
    const motionTl = gsap.timeline();

    let elements: ElementType[] = motion.split ? getSplitElements(target, motion.split) : [target];
    if (motion.randomOrder) elements = gsap.utils.shuffle(elements);    
    
    const gsapMotion = motionToGSAP(motion);
    
    for (const element of elements) {
      const innerMotionTl = getMotionTl({ element, gsapMotion });
      motionTl.add(innerMotionTl, "<" + (motion?.splitDelay ?? 0));
    }
    tl.add(motionTl, ">" + (motion.delay ?? 0));
    console.log(tl.getChildren());
    
  }
}

/**
 * gsap 형식으로 모션 변환
 */
function motionToGSAP(motion: Motion): Motion {
  const motionValue: Motion = {};

    for (const [key, value] of Object.entries(motion)) {
      if (!value) continue;
      const gsapKey = getGSAPKey(key);
      motionValue[gsapKey] = value;
    }

  return motionValue;
}

function getGSAPKey(key: string): string {
  if (key.includes('X')) return 'x';
  if (key.includes('Y')) return 'y';
  return key.toLowerCase();
}

/**
 * motion마다 innerMotionTl을 생성하고 합쳐서 motionTl에 추가 후 반환
 */
function getMotionTl({
  element,
  gsapMotion,
}: GetMotionTlProps): gsap.core.Timeline {
  const innerMotionTl = gsap.timeline();

  const previousValues: Record<string, { from: MotionValueType, to: MotionValueType }> = {};
  
  let { delay, duration, ease, ...properties } = gsapMotion;

  for (const [key, value] of Object.entries(properties)) {
    if (typeof value !== 'object') continue;

    const motionValue = value as Motion;

    // 개별 속성 우선
    delay = motionValue.delay ?? delay;
    duration = motionValue.duration ?? duration;
    ease = motionValue.ease ?? ease;
    
    let from = motionValue.from ?? previousValues[key]?.to ?? getDefaultValue(key, "from");
    let to = motionValue.to ?? previousValues[key]?.from ?? getDefaultValue(key, "to");
    
    if (from === 'random') {
      from = gsap.utils.random(-200, 200);
      to = 0;
    }

    if (to === 'random') {
      to = gsap.utils.random(-500, 500);
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

function getSplitElements(target: string, split: SplitType): ElementType[] {
  const splitTarget = createSplit(target, split);
  return splitTarget?.[split] || splitTarget?.lines;
}

function getDefaultValue(key: string, type: 'from' | 'to') {
  if (typeof DEFAULTS[key] === 'object') {
    return DEFAULTS[key][type];
  } 

  return DEFAULTS[key];
}

// useCallback 사용으로 불필요한 함수 재생성 방지
const createSplit = (target: string, splitType: SplitType) => {
  return SplitText.create(target, { type: splitType });
};
