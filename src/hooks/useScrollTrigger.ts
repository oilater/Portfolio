import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getMotionTimeline } from '../utils/motion-timeline';

type ScrollTriggerOptions = {
  start: string;
  end: string;
  scrub: boolean | number;
  markers: boolean;
};

type AnimateScrollProps = {
  target: string;
  motion: gsap.TweenVars;
  options?: ScrollTriggerOptions;
};

export function useScrollTrigger() {
  function animateScroll(
    {
      target,
      motion,
      options = {
      start: "top 80%",
      end: "bottom 20%",
      scrub: false,
      markers: false,
    }
  }: AnimateScrollProps) {
    const { start, end, scrub, markers } = options;
    gsap.set(target, { opacity: 0, y: 30 });
    const animation = getMotionTimeline({ element: target, motion });

    return ScrollTrigger.create({
      trigger: target,
      start,
      end,
      animation,
      scrub,
      markers,
    });
  }

  return { animateScroll };
}