import { gsap } from 'gsap';
import { type RefObject } from 'react';
import { useSplitText } from './useSplitText';
import { useGSAP } from '@gsap/react';
import { fadePreset } from '../presets';

type FadeProps = RefObject<HTMLElement>;

type FadeOptions = {
    onComplete?: () => void;
} & Partial<gsap.TweenVars>;

type SplitType = 'words' | 'lines' | 'chars';

/**
 * @param scope - 애니메이션을 적용할 요소의 scope
 * @returns - {fadeIn, fadeOut} 함수 반환
 * @description 페이드 애니메이션 훅
 */
export function useFade(scope: FadeProps) {
    const { contextSafe } = useGSAP({ scope });
    const { createSplit } = useSplitText();
    
    const fadeIn = contextSafe((
        target: string,
        split?: SplitType,
        options?: FadeOptions
    ) => {
        if (!target) return null;
        let tween = null;
        
        if (split) {
            const splitText = createSplit(target, split);
            const elements = splitText?.[split] || splitText?.lines;
            if (!elements) return null;
            tween = gsap.from(elements, {...fadePreset.in.from, ...options});
        } else {
            tween = gsap.from(target, {...fadePreset.in.from, ...options});
        }
        
        return tween;
    });

    const fadeOut = contextSafe((
        target: string,
        split?: SplitType,
        options?: FadeOptions
    ) => {
        if (!target) return null;
        let tween = null;
        
        if (split) {
            const splitText = createSplit(target, split);
            const elements = splitText?.[split] || splitText?.lines;
            if (!elements) return null;
            tween = gsap.to(elements, {...fadePreset.out.to, ...options});
        } else {
            tween = gsap.to(target, {...fadePreset.out.to, ...options});
        }
        
        return tween;
    });
    
    return { fadeIn, fadeOut };
}