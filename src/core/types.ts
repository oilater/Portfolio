export type MotionValue = {
    from?: number | string;
    to?: number | string;
    duration?: number;
    ease?: string;
  };

export type MotionValueType = gsap.TweenVars | number | string;

export type ElementType = string | Element;

export type Motion = {
[key: string]: MotionValueType;
};

export type GetMotionTlProps = {
  element: string | Element;
  gsapMotions: Motion[];
  mode: "enter" | "exit";
};

export type AddMotionsProps = {
  tl: gsap.core.Timeline;
  elements: ElementType[];
  motions: Motion[];
  mode: "enter" | "exit";
  splitDelay?: number;
}


export const DEFAULTS = {
  delay: 0,
  duration: 0,
  ease: "power2.ease",
  values: {
    enter: {
      opacity: { from: 0, to: 1 },
      scale: { from: 1, to: 1 },
      translate: { from: 0, to: 0 }
    },
    exit: {
      opacity: { from: 1, to: 0 },
      scale: { from: 1, to: 1 },
      translate: { from: 0, to: 0 }
    }
  }
} as const;