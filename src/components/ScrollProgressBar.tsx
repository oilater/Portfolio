import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { css } from '@emotion/react';

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
    <div css={progressBarContainer}>
      <div ref={progressBarRef} css={progressBar} />
    </div>
  );
}

const progressBarContainer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const progressBar = css`
  height: 100%;
  background: #fff;
  width: 0%;
`;