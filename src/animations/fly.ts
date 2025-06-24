import { gsap } from "gsap";

type FlyProps = gsap.TweenVars;

export const configFly = (options?: FlyProps) => ({
    x: () => gsap.utils.random(-400, 400),
    y: () => gsap.utils.random(-400, 400),
    opacity: 0,
    ease: options?.ease || 'expo.out',
    duration: options?.duration || 1.5,
    stagger: {
        each: 0.1,
        from: 'random' as const,
    },
    onComplete: options?.onComplete,
});