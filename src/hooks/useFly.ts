// hooks/useAssemble.ts
import { gsap } from 'gsap';
import { type RefObject } from 'react';
import { useSplitText } from './useSplitText';
import { configFly } from '../animations/fly';
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
export function useFly(scope: RefObject<HTMLElement>) {
    const { contextSafe } = useGSAP({ scope });
    const { createSplit } = useSplitText();
    
    const flyIn = contextSafe((target: string, options: FlyOptions): gsap.core.Tween | null => {
        if (!target) return null;

        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;

        const tween = gsap.from(elements, configFly(options));
        return tween;
    });
        
    const flyOut = contextSafe((target: string, options: FlyOptions): gsap.core.Tween | null => {
        if (!target) return null;
        
        const splitText = createSplit(target, options.split);
        const elements = splitText?.[options.split] || splitText?.lines;
        if (!elements) return null;

        const tween = gsap.from(elements, configFly(options));
        return tween;
    });
    
    return { flyIn, flyOut };
}