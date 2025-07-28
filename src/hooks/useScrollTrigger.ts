import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ScrollTriggerOptions = {
  start: string;
  end: string;
  scrub?: boolean | number;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
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
    const { start, end, scrub, markers, onEnter, onLeave, onEnterBack, onLeaveBack } = options;

    return ScrollTrigger.create({
      trigger: target,
      start,
      end,
      animation: timeline,
      scrub,
      markers,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    });
  }

  return { animateScroll };
}