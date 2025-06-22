import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useFly } from "../hooks/useFly";
import { useSlide } from "../hooks/useSlide";
import Button from "../components/Button";
import { useFade } from "../hooks/useFade";
import { slidePreset, fadePreset } from "../presets";
import { Header } from "../components/Header";

type Step = 'init' | 'introduce' | 'projects' | 'contact';

const INTRO_REMAIN_TIME = 0.6;

export default function Landing() {
  const [step, setStep] = useState<Step>('init');

  // Refs
  const refs = {
    container: useRef<HTMLDivElement>(null!),
    header: useRef<HTMLDivElement>(null!),
    title: useRef<HTMLHeadingElement>(null!),
    contactBtn: useRef<HTMLButtonElement>(null!),
    projectsBtn: useRef<HTMLButtonElement>(null!),
  };
  
  // Hooks
  const { flyIn } = useFly(refs.container);
  const { slideIn, slideOut } = useSlide(refs.container);
  const { fadeIn } = useFade(refs.container);
  
  useGSAP(() => {
    // Init
    if (step === 'init') {
      flyIn(refs.title, {
        split: 'words', 
        duration: 0.9, 
        ease: 'expo.inOut',
        onComplete: moveToStep('introduce', INTRO_REMAIN_TIME),
      });
      // Introduce
    } else if (step === 'introduce') {
      slideIn(refs.header, slidePreset.in.from);
      slideIn(refs.title, slidePreset.in.from);
      const buttonRefs = [refs.projectsBtn, refs.contactBtn];
      
      buttonRefs.forEach((ref, index) => {
        fadeIn(ref, {
          ...fadePreset.in.from,
          split: 'chars',
          delay: 0.1 * (index + 1),
          stagger: { each: 0.05, from: 'start' },
        });
      });
    }
  }, [step]);

  const moveToStep = (step: Step, delay = 0) => () => {
    gsap.delayedCall(delay, () => {
      slideOut(refs.title, {...slidePreset.out.to, onComplete: () => setStep(step)});
    });
  };

  return (
    <main ref={refs.container} css={container}>
      {step === 'introduce' && (
        <Header 
          ref={refs.header}
          onGithub={() => {window.open('https://github.com/oilater', '_blank');}} 
          onVelog={() => {window.open('https://velog.io/@oilater', '_blank');}} 
        />
      )}
      {step === 'init' && 
        <section>
          <h1 ref={refs.title} css={title}>
            안녕하세요!<br />
            만드는 것 좋아하는<br />
            <span css={subTitle}>프론트엔드 개발자 </span>김성현입니다
          </h1>    
        </section>
      }
      
      {step === 'introduce' && 
        <nav css={navigateSection}>
          <Button ref={refs.projectsBtn} onClick={moveToStep('projects')}>
            Projects
          </Button>
          <Button ref={refs.contactBtn} onClick={moveToStep('contact')}>
            Contact
          </Button>
        </nav>
      }
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