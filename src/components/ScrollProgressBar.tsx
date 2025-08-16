import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { progressBarContainer, progressBar } from '../styles/components/ScrollProgressBar.css';

type ScrollProgressBarProps = {
  trigger?: string;
};

export default function ScrollProgressBar({ trigger }: ScrollProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const progressBar = progressBarRef.current;
    
    if (progressBar) {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          gsap.to(progressBar, {
            width: `${self.progress * 100}%`,
            duration: 0.1,
            ease: 'none'
          });
        }
      });
    }
  }, [trigger]);

  return (
    <div className={progressBarContainer}>
      <div ref={progressBarRef} className={progressBar} />
    </div>
  );
}