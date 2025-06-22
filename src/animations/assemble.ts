import { gsap } from "gsap";

type AssembleProps = gsap.TweenVars;

export const configAssemble = (options: AssembleProps) => ({
    x: () => gsap.utils.random(-400, 200),
    y: () => gsap.utils.random(-400, 150),
    opacity: 0,
    ease: options.ease || 'expo.out',
    duration: options.duration || 1.5,
    stagger: {
        each: 0.1,
        from: 'random' as const,
    },
});