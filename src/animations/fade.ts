type FadeProps = gsap.TweenVars;

export const configFade = (options: FadeProps) => ({
    delay: options.delay || 0,
    opacity: options.opacity || 0,
    ease: options.ease || 'power2.inOut',
    duration: options.duration || 0.6,
    onComplete: options.onComplete,
    stagger: options.stagger || {
        each: 0.1,
        from: 'start' as const,
    },
});