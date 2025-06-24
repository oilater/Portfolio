import { gsap } from 'gsap';
import { type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { slidePreset } from '../presets';

type SlideProps = RefObject<HTMLElement>;

type SlideOptions = {
    onComplete?: () => void;
} & Partial<gsap.TweenVars>;

/**
 * @param scope - 애니메이션을 적용할 요소의 scope
 * @returns - {slideIn, slideOut} 함수 반환
 * @description 슬라이드 애니메이션 훅
 */
export function useSlide(scope: SlideProps) {
    const { contextSafe } = useGSAP({ scope });
    
    const slideIn = contextSafe((target: string, options?: SlideOptions): gsap.core.Tween | null => {
        if (!target) return null;
        const tween = gsap.from(target, {...slidePreset.in.from, ...options});
        return tween;
    });
        
    const slideOut = contextSafe((target: string, options?: SlideOptions): gsap.core.Tween | null => {
        if (!target) return null;
        const tween = gsap.to(target, {...slidePreset.out.to, ...options});
        return tween;
    });
    
    return { slideIn, slideOut };
}