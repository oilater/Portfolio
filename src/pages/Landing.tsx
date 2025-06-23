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
  const container = useRef<HTMLDivElement>(null!);
  
  const { flyIn } = useFly(container);
  const { slideIn, slideOut } = useSlide(container);
  const { fadeIn } = useFade(container);
  
  useGSAP(() => {
    // Init
    if (step === 'init') {
      flyIn(".introTitle", {
        duration: 0.9, 
        ease: 'expo.inOut',
        split: 'words', 
        onComplete: moveToStep('introduce', INTRO_REMAIN_TIME),
      });
      // Introduce
    } else if (step === 'introduce') {
      slideIn(".header", slidePreset.in.from);
      slideIn(".title2", slidePreset.in.from);
      
      const buttons = gsap.utils.toArray(".button");
      buttons.forEach((el, index) => {
        fadeIn(el as string, {
          ...fadePreset.in.from,
          split: 'chars',
          delay: 0.1 * (index + 1),
          stagger: { each: 0.05, from: 'start' },
        });
      });
    }
  }, {scope: container, dependencies: [step]});

  const moveToStep = (step: Step, delay = 0) => () => {
    gsap.delayedCall(delay, () => {
      slideOut(".introTitle", {...slidePreset.out.to, onComplete: () => setStep(step)});
    });
  };

  return (
    <main ref={container} css={mainContainer}>
      {step === 'introduce' && (
        <Header 
          className="header"
          onGithub={() => {window.open('https://github.com/oilater', '_blank');}} 
          onVelog={() => {window.open('https://velog.io/@oilater', '_blank');}} 
        />
      )}
      {step === 'init' && 
        <section>
          <h1 className="introTitle" css={title}>
            안녕하세요!<br />
            만드는 걸 좋아하는<br />
            <span css={subTitle}>프론트엔드 개발자 </span>김성현입니다
          </h1>    
        </section>
      }
      
      {step === 'introduce' &&
        <>
          <section>
            <h1 className="title2" css={title}>
              저는 이런 개발자에요<br />
              만드는 걸 좋아하는<br />
              <span css={subTitle}>프론트엔드 개발자 </span>김성현입니다
            </h1>    
          </section>
          <nav css={navigateSection}>
            <Button className="button" onClick={moveToStep('projects')}>
              Projects
            </Button>
            <Button className="button" onClick={moveToStep('contact')}>
              Contact
            </Button>
          </nav>
        </>
      }
    </main>
  );
};

// Styles
const mainContainer = css`
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