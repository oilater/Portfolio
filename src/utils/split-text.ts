import { SplitText } from "gsap/SplitText";
import type { ElementType, SplitType } from "../core/types";

export function getSplitElements(target: string, split: SplitType): ElementType[] {
    const splitTarget = createSplit(target, split);
    return splitTarget?.[split] || splitTarget?.lines;
  }
  
function createSplit(target: string, splitType: SplitType) {
return SplitText.create(target, { type: splitType });
}