export type MotionValue = {
    from?: number | string;
    to?: number | string;
    duration?: number;
    ease?: string;
  };

export type SplitType = 'lines' | 'words' | 'chars';

export type MotionValueType = gsap.TweenVars | number | string;

export type ElementType = string | Element;

export type Motion = {
[key: string]: MotionValueType;
};

export type GetMotionTlProps = {
  element: string | Element;
  gsapMotions: Motion[];
};

export type AddMotionsProps = {
  tl: gsap.core.Timeline;
  elements: ElementType[];
  motions: Motion[];
  splitDelay?: number;
}


export const DEFAULTS = {
  delay: 0,
  duration: 0,
  ease: "power2.ease",
  values: {
    opacity: { from: 0, to: 1 },
    scale: { from: 1, to: 1 },
    translate: { from: 0, to: 0 }
  }
} as const;