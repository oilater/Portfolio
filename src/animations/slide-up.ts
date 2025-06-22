type SlideUpProps = gsap.TweenVars;

export const configSlideUp = (options: SlideUpProps) => ({
    y: -300,
    opacity: 1,
    ease: options.ease || 'expo.out',
    duration: options.duration || 1,
});