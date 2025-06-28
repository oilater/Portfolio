import { SplitText } from "gsap/SplitText";
import type { ElementType, SplitCacheType, SplitType } from "../core/types";

export function getSplitElements(
  target: string, 
  split: SplitType, 
  splitCache: SplitCacheType
): ElementType[] {
  
  const splitTarget = createSplit(target, split);

  if (!splitCache[split]) {
    splitCache[split] = splitTarget?.[split] || splitTarget?.lines;
  }
  
  return splitTarget?.[split] || splitTarget?.lines;
}
  
function createSplit(target: string, splitType: SplitType) {
  return SplitText.create(target, { type: splitType });
}