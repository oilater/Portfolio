import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useCallback, useRef, type RefObject } from "react";

type TargetType = RefObject<HTMLElement>;
type SplitType = 'words' | 'lines' | 'chars';

gsap.registerPlugin(SplitText);

export const useSplitText = () => {
    const splitRef = useRef<SplitText>(null);
    
    // useCallback 사용으로 불필요한 함수 재생성 방지
    const createSplit = useCallback((target: TargetType, splitType: SplitType) => {
        if (splitRef.current) splitRef.current.revert();
        splitRef.current = SplitText.create(target.current, { type: splitType });
        return splitRef.current;
    }, []);
    
    return { createSplit };
};