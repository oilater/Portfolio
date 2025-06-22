import { gsap } from 'gsap';
import { useCallback, useRef, type RefObject } from 'react';
import { useSplitText } from './useSplitText';
import { configAssemble } from '../animations/assemble';
import type { TargetType } from './types';

type AssembleTextOptions = {
    split: 'words' | 'lines' | 'chars';
} & Partial<gsap.TweenVars>;

export function useAssemble() {
    const { createSplit } = useSplitText();
    const tweenRef = useRef<gsap.core.Tween>(null);
    
    // useCallback 사용으로 불필요한 함수 재생성 방지
    const assemble = useCallback((
        target: RefObject<TargetType>, 
        options: AssembleTextOptions
    ) => {
        if (!target.current) return null;
        
        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;

        if (tweenRef.current) {
            tweenRef.current.kill();
        }
        
        tweenRef.current = gsap.from(elements, configAssemble(options));
        return tweenRef.current;
    }, [createSplit]);
    
    return { assemble };
}