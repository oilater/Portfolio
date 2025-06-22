import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useFly } from "../hooks/useFly";
import { useSlide } from "../hooks/useSlide";
import Button from "../components/Button";
import { useFade } from "../hooks/useFade";

type Step = 'init' | 'introduce' | 'landing' | 'projects';

export default function Landing() {  
  const [step, setStep] = useState<Step>('init');

  // Refs
  const refs = {
    container: useRef<HTMLDivElement>(null!),
    title: useRef<HTMLHeadingElement>(null!),
    introduceBtn: useRef<HTMLButtonElement>(null!),
    projectsBtn: useRef<HTMLButtonElement>(null!),
  };
  
  // Hooks
  const { flyIn } = useFly(refs.container);
  const { slideIn, slideOut } = useSlide(refs.container);
  const { fadeIn } = useFade(refs.container);
  
  useGSAP(() => {
    if (step === 'init') {
      flyIn(refs.title, { 
        split: 'words', 
        duration: 0.9, 
        ease: 'expo.inOut',
        onComplete: () => {
          gsap.delayedCall(0.3, () => {
            slideOut(refs.title, {
              opacity: 0, 
              y: "-=30%", 
              duration: 0.8, 
              ease: 'expo.in', 
              onComplete: () => setStep('introduce')
            });
          });
        },
      });
    } else if (step === 'introduce') {
      slideIn(refs.title, {
        opacity: 0,
        y: "-=50%", 
        duration: 0.6, 
        ease: 'power2.in',
      });

      const buttonRefs = [refs.introduceBtn, refs.projectsBtn];
      buttonRefs.forEach((ref, index) => {
        const btnTween = fadeIn(ref, {
          split: 'chars',
          delay: 0.1 * (index + 1),
          duration: 0.3,
          ease: 'power2.inOut',
          stagger: { each: 0.05, from: 'start' }
        });
        
        btnTween?.play();
      });
    }
  }, [step]);

  return (
    <main css={container}>
      {/* Title */}
      {step === 'init' && <section ref={refs.container}>
        <h1 ref={refs.title} css={title}>
          안녕하세요!<br />
          <span css={subTitle}>프론트엔드 개발자 </span>김성현입니다
        </h1>    
      </section>}
      {/* Navigate Section */}
      {step === 'introduce' && <nav css={navigateSection}>
        <Button ref={refs.introduceBtn} onClick={() => slideOut(refs.title, {opacity: 0, y: "-=30%", duration: 0.62, ease: 'power2.out', onComplete: () => setStep('introduce')})}>About Me</Button>
        <Button ref={refs.projectsBtn} onClick={() => slideOut(refs.title, {opacity: 0, y: "-=30%", duration: 0.62, ease: 'power2.out', onComplete: () => setStep('projects')})}>Projects</Button>
      </nav>}
    </main>
  );
};

// Styles
const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: center;
`;

const title = css`
  font-size: calc(1rem + 2vw);
  color: white;
`;

const subTitle = css`
  color: #3182f6;
`;

const navigateSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
`;