import { gsap } from "gsap";
import { DEFAULTS, type AddMotionsProps, type ElementType, type GetMotionTlProps, type Motion, type MotionValueType, type SplitType } from "./types";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type RallyProps = {
  target: string;
  playCount?: number | 'infinite';
  motions: Motion[];
  exitMotions?: Motion[];
  split?: 'words' | 'lines' | 'chars';
  splitDelay?: number;
  randomOrder?: boolean;
};

/**
 * Rally 훅
 * @returns - Rally 생성 함수
 */
export function Rally({
  target,
  playCount = 1,
  motions,
  split,
  splitDelay = 0,
  randomOrder = false,
}: RallyProps): gsap.core.Timeline {
  const rallyTl = gsap.timeline();

  let elements: ElementType[] = split ? getSplitElements(target, split) : [target];
  if (randomOrder) elements = gsap.utils.shuffle(elements);
  
  addMotions({ tl: rallyTl, elements, motions, splitDelay });

  const repeatCount = playCount !== "infinite" ? playCount - 1 : -1;
  return rallyTl.repeat(repeatCount);
}

function addMotions({ tl, elements, motions, splitDelay }: AddMotionsProps): void {
  if (elements.length === 0) return;
  tl.set(elements, { opacity: 0 }, 0);

  const gsapMotions = motionToGSAP(motions);

  for (const element of elements) {
    const motionTl = getMotionTl({ element, gsapMotions });
    tl.add(motionTl, "<" + (splitDelay ?? 0));
  }
}

/**
 * gsap 형식으로 모션 변환
 */
function motionToGSAP(motions: Motion[]): Motion[] {
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

      let from = motionValue.from ?? previousValues[key] ?? getDefaultValue(key, "from");
      let to = motionValue.to ?? previousValues[key] ?? getDefaultValue(key, "to");

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

function getSplitElements(target: string, split: SplitType): Element[] {
  const splitTarget = createSplit(target, split);
  return splitTarget?.[split] || splitTarget?.lines;
}

function getDefaultValue(prop: string, type: "from" | "to"): number {
  if (prop === "opacity") return DEFAULTS.values.opacity[type];
  if (prop === "scale") return DEFAULTS.values.scale[type];
  return DEFAULTS.values.translate[type];
}

// useCallback 사용으로 불필요한 함수 재생성 방지
const createSplit = (target: string, splitType: SplitType) => {
  return SplitText.create(target, { type: splitType });
};
