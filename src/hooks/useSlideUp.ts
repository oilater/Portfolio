import { gsap } from 'gsap';
import { useCallback, useRef, type RefObject } from 'react';
import { configSlideUp } from '../animations/slide-up';
import type { TargetType } from './types';

type SlideUpOptions = {
    split: 'words' | 'lines' | 'chars';
} & Partial<gsap.TweenVars>;

export function useSlideUp() {
    const tweenRef = useRef<gsap.core.Tween>(null);
    
    // 불필요한 함수 재생성 방지
    const slideUp = useCallback((
        target: RefObject<TargetType>, 
        options: SlideUpOptions
    ) => {
        if (!target.current) return null;
        
        if (tweenRef.current) {
            tweenRef.current.kill();
        }
        
        tweenRef.current = gsap.to(target.current, configSlideUp(options));
        return tweenRef.current;
    }, []);
    
    return { slideUp };
}