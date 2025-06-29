import { useAtom } from 'jotai';
import { timelinePlayAtom } from '../stores/timelineStore';
import { useGSAP } from '@gsap/react';

type UseAnimationProps = {
  timelineFn: () => gsap.core.Timeline;
  scope: React.RefObject<HTMLElement>;
  scrollTrigger?: boolean;
}

export function useAnimation({
  timelineFn,
  scope,
}: UseAnimationProps) {
  const [isPlayed, setIsPlayed] = useAtom(timelinePlayAtom);

  const key = Symbol(timelineFn.name).toString();

  useGSAP(() => {
    if (isPlayed(key)) return;
    
    const timeline = timelineFn().play();
    
    timeline.eventCallback('onComplete', () => {
      setIsPlayed(key);
    });
  }, { scope });
}