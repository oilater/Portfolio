// Timeline
export type Playable = gsap.core.Timeline | gsap.core.Tween;

interface BaseTimelineProps {
  playables: Playable[];
}

export interface SerialOrParallelTimelineProps extends BaseTimelineProps {
  playback: 'serial' | 'parallel';
}

export interface StaggerTimelineProps extends BaseTimelineProps {
  playback: "stagger";
  staggerDelay: number;
}

export type TimelineProps = SerialOrParallelTimelineProps | StaggerTimelineProps;


// Rally
export type PlayCount = number | 'infinite';

export type RallyProps = {
  target: string;
  playCount?: PlayCount;
  motions: Motion[];
};


// Motion
export type AddMotionsProps = {
  rally: gsap.core.Timeline;
  target: string;
  motions: Motion[];
}

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

export type PreviousMotionValueType = {
  [key: string]: {
    from: number | string;
    to: number | string;
  };
}

export type MotionValueType = gsap.TweenVars | number | boolean | string | undefined;
export type ElementType = string | Element;
export type SplitType = 'lines' | 'words' | 'chars';
export type SplitCacheType = Partial<Record<SplitType, ElementType[]>>;

// 모션 기본값
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