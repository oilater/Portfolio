// hooks/useFade.ts
import { gsap } from 'gsap';
import { type RefObject } from 'react';
import { useSplitText } from './useSplitText';
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
export function useFade(scope: RefObject<HTMLElement>) {
    const { contextSafe } = useGSAP({ scope });
    const { createSplit } = useSplitText();
    
    const fadeIn = contextSafe((
        target: string, 
        options: FadeOptions
    ) => {
        if (!target) return null;

        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;
        
        const { split, ...gsapOptions } = options;
        const tween = gsap.from(elements, gsapOptions);
        return tween;
    });

    const fadeOut = contextSafe((
        target: string, 
        options: FadeOptions
    ) => {
        if (!target) return null;

        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;
        
        const { split, ...gsapOptions } = options;
        const tween = gsap.from(elements, gsapOptions);
        return tween;
    });
    
    return { fadeIn, fadeOut };
}