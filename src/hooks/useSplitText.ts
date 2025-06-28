import { gsap } from "gsap";
import { useCallback, useEffect, useRef } from "react";

type SplitType = 'words' | 'lines' | 'chars';

export async function useSplitText() {
    const { SplitText } = await import('gsap/SplitText');
    gsap.registerPlugin(SplitText);
    
    const splitRef = useRef<SplitText>(null);
    
    useEffect(() => {
        return () => {
            if (splitRef.current) splitRef.current.revert();
            splitRef.current = null;
        }
    }, []);
    
    // useCallback 사용으로 불필요한 함수 재생성 방지
    const createSplit = useCallback((target: string, splitType: SplitType) => {    
        splitRef.current = SplitText.create(target, { type: splitType });
        return splitRef.current;
    }, []);
    
    return { createSplit };
};