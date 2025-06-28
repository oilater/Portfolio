import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ScrollTriggerOptions = {
  start: string;
  end: string;
  scrub: boolean | number;
  markers: boolean;
};

type AnimateScrollProps = {
  target: string;
  timeline: gsap.core.Timeline;
  options?: ScrollTriggerOptions;
};

export function useScrollTrigger() {
  function animateScroll(
    {
      target,
      timeline,
      options = {
      start: "top 80%",
      end: "bottom 20%",
      scrub: false,
      markers: false,
    }
  }: AnimateScrollProps) {
    const { start, end, scrub, markers } = options;

    return ScrollTrigger.create({
      trigger: target,
      start,
      end,
      animation: timeline,
      scrub,
      markers,
    });
  }

  return { animateScroll };
}