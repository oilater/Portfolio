// hooks/useFade.ts
import { gsap } from 'gsap';
import { useRef, type RefObject } from 'react';
import { useSplitText } from './useSplitText';
import { configFade } from '../animations/fade';
import type { TargetType } from './types';
import { useGSAP } from '@gsap/react';

type FadeOptions = {
    split: 'words' | 'lines' | 'chars';
    onComplete?: () => void;
} & Partial<gsap.TweenVars>;

/**
 * @param scope - 애니메이션을 적용할 요소의 scope
 * @returns - {fadeIn, fadeOut} 함수 반환
 * @description 페이드 애니메이션 훅
 */
export function useFade(scope: RefObject<TargetType>) {
    const { contextSafe } = useGSAP({ scope });
    const { createSplit } = useSplitText();
    const tweenRef = useRef<gsap.core.Tween>(null);
    
    const fadeIn = contextSafe((
        target: RefObject<TargetType>, 
        options: FadeOptions
    ) => {
        if (!target.current) return null;

        const splitText = createSplit(target, options.split);
        
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;
        
        tweenRef.current = gsap.from(elements, configFade(options));
        return tweenRef.current;
    });

    const fadeOut = contextSafe((
        target: RefObject<TargetType>, 
        options: FadeOptions
    ) => {
        if (!target.current) return null;

        const splitText = createSplit(target, options.split);
        
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;
        
        tweenRef.current = gsap.from(elements, configFade(options));
        return tweenRef.current;
    });
    
    return { fadeIn, fadeOut };
}