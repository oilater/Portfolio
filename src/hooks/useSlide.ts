import { gsap } from 'gsap';
import { useRef, type RefObject } from 'react';
import type { TargetType } from './types';
import { useGSAP } from '@gsap/react';

type SlideOptions = {
    onComplete?: () => void;
} & Partial<gsap.TweenVars>;

/**
 * @param scope - 애니메이션을 적용할 요소의 scope
 * @returns - {slideIn, slideOut} 함수 반환
 * @description 슬라이드 애니메이션 훅
 */
export function useSlide(scope: RefObject<TargetType>) {
    const {contextSafe} = useGSAP({scope});
    const tweenRef = useRef<gsap.core.Tween>(null);
    
    const slideIn = contextSafe((
        target: RefObject<TargetType>, 
        options: SlideOptions,
    ) => {
        if (!target.current) return null;
        
        if (tweenRef.current) {
            tweenRef.current.kill();
        }
        
        tweenRef.current = gsap.to(target.current, options);
        return tweenRef.current;
    });

    const slideOut = contextSafe((
        target: RefObject<TargetType>, 
        options: SlideOptions,
    ) => {
        if (!target.current) return null;

        if (tweenRef.current) {
            tweenRef.current.kill();
        }
        
        tweenRef.current = gsap.to(target.current, options);
        
        return tweenRef.current;
    });

    return { slideIn, slideOut };
}