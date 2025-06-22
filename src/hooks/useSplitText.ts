import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useCallback, useEffect, useRef, type RefObject } from "react";

type TargetType = RefObject<HTMLElement>;
type SplitType = 'words' | 'lines' | 'chars';


export function useSplitText() {
    gsap.registerPlugin(SplitText);
    const splitRef = useRef<SplitText>(null);
    
    useEffect(() => {
        return () => {
            if (splitRef.current) splitRef.current.revert();
        }
    }, []);
    
    // useCallback 사용으로 불필요한 함수 재생성 방지
    const createSplit = useCallback((target: TargetType, splitType: SplitType) => {
        splitRef.current = SplitText.create(target.current, { type: splitType });
        return splitRef.current;
    }, []);
    
    return { createSplit };
};