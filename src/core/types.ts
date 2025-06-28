export type MotionValue = {
  from?: number | string;
  to?: number | string;
  duration?: number;
  ease?: string;
};

// Timeline
export type PlaybackType = "parallel" | "serial" | "stagger";
export type PlayableType = gsap.core.Timeline | gsap.core.Tween;

// Rally
export type PlayCountType = number | 'infinite';

// Motion
export type SplitType = 'lines' | 'words' | 'chars';
export type MotionValueType = gsap.TweenVars | number | boolean | string | undefined;
export type ElementType = string | Element;

export type Motion = {
  [key: string]: MotionValueType;
  split?: SplitType;
  splitDelay?: number;
  randomOrder?: boolean;
};

export type GetMotionTlProps = {
  element: string | Element;
  motion: Motion;
};

export type AddMotionsProps = {
  rally: gsap.core.Timeline;
  target: string;
  motions: Motion[];
}

export type DefaultValues = {
  [key: string]: number | string | {
    from: number;
    to: number;
  };
}

export const DEFAULTS: DefaultValues = {
    delay: 0,
    duration: 0,
    ease: "power2.ease",
    opacity: { from: 1, to: 1 },
    scale: { from: 1, to: 1 },
    x: { from: 0, to: 0 },
    y: { from: 0, to: 0 },
} as const;