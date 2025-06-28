import type { Motion } from "../core/types";

/**
 * gsap 형식으로 모션 변환
 */
export function motionToGSAP(motion: Motion): Motion {
    const motionValue: Motion = {};

    let { split, splitDelay, randomOrder, ...properties } = motion;
  
      for (const [key, value] of Object.entries(properties)) {
        if (!value) continue;
        const gsapKey = getGSAPKey(key);
        motionValue[gsapKey] = value;
      }
  
    return motionValue;
  }
  
/**
 * 모션 키를 gsap 형식으로 변환
 * @param key - 모션 키
 * @returns gsap 형식의 모션 키
 */
function getGSAPKey(key: string): string {
if (key.includes('X')) return 'x';
if (key.includes('Y')) return 'y';
return key;
}