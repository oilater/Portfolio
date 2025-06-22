// hooks/useAssemble.ts
import { gsap } from 'gsap';
import { useRef, type RefObject } from 'react';
import { useSplitText } from './useSplitText';
import { configFly } from '../animations/fly';
import type { TargetType } from './types';
import { useGSAP } from '@gsap/react';

type FlyOptions = {
    split: 'words' | 'lines' | 'chars';
    onComplete?: () => void;
} & Partial<gsap.TweenVars>;

/**
 * @param scope - 애니메이션을 적용할 요소의 scope
 * @returns - {flyIn, flyOut} 함수 반환
 * @description 날아오는 텍스트 애니메이션 훅
 */
export function useFly(scope: RefObject<TargetType>) {
    const { contextSafe } = useGSAP({ scope });
    const { createSplit } = useSplitText();
    const tweenRef = useRef<gsap.core.Tween>(null);
    
    const flyIn = contextSafe((
        target: RefObject<TargetType>, 
        options: FlyOptions
    ): gsap.core.Tween | null => {
        if (!target.current) return null;
        
        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;

        if (tweenRef.current) {
            tweenRef.current.kill();
        }
        
        tweenRef.current = gsap.from(elements, configFly(options));
        return tweenRef.current;
    });

    const flyOut = contextSafe((
        target: RefObject<TargetType>, 
        options: FlyOptions
    ): gsap.core.Tween | null => {
        if (!target.current) return null;
        
        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;

        if (tweenRef.current) {
            tweenRef.current.kill();
        }
        
        tweenRef.current = gsap.from(elements, configFly(options));
        return tweenRef.current;
    });
    
    return { flyIn, flyOut };
}