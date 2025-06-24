import { gsap } from 'gsap';
import { type RefObject } from 'react';
import { useSplitText } from './useSplitText';
import { configFly } from '../animations/fly';
import { useGSAP } from '@gsap/react';

type FlyProps = RefObject<HTMLElement>;

type FlyOptions = {
    onComplete?: () => void;
} & Partial<gsap.TweenVars>;

type SplitType = 'words' | 'lines' | 'chars';
/**
 * @param scope - 애니메이션을 적용할 요소의 scope
 * @returns - {flyIn, flyOut} 함수 반환
 * @description 날아오는 텍스트 애니메이션 훅
 */
export function useFly(scope: FlyProps) {
    const { contextSafe } = useGSAP({ scope });
    const { createSplit } = useSplitText();
    
    const flyIn = contextSafe((target: string, split?: SplitType, options?: FlyOptions): gsap.core.Tween | null => {
        if (!target) return null;

        let tween = null;
        if (split) {
            const splitText = createSplit(target, split);
            const elements = splitText?.[split] || splitText?.lines;
            if (!elements) return null;
            tween = gsap.from(elements, configFly(options));
        } else {
            tween = gsap.from(target, configFly(options));
        }

        return tween;
    });
        
    const flyOut = contextSafe((target: string, split?: SplitType, options?: FlyOptions): gsap.core.Tween | null => {
        if (!target) return null;
        let tween = null;

        if (split) {
            const splitText = createSplit(target, split);
            const elements = splitText?.[split] || splitText?.lines;
            if (!elements) return null;
            tween = gsap.from(elements, configFly(options));
        } else {
            tween = gsap.from(target, configFly(options));
        }

        return tween;
    });
    
    return { flyIn, flyOut };
}