import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { useGSAP } from "@gsap/react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Timeline } from "../core/Timeline.ts";
import { useRally } from "../core/Rally.ts";

type Step = 'init' | 'introduce' | 'projects' | 'contact';

export default function Landing() {
  const [step, setStep] = useState<Step>('init');
  const container = useRef<HTMLDivElement>(null!);
  const { Rally } = useRally();
  
  useGSAP(() => {
    
    Timeline({
      playback: "serial",
      playables: [
        Rally({
          target: ".introTitle",
          split: 'words',
          splitDelay: 0.1,
          randomOrder: true,
          motions: [
            {
              duration: 0.9,
              ease: "expo.inOut",
              opacity: { to: 1 },
              translateX: { from: 'random'},
              translateY: { from: 'random'},
            },
          ],
          exitMotions: [
            {
              delay: 0.5,
              translateY: { to: "-40%", duration: 0.5, ease: "power2.out" },
              opacity: { to: 0 },
            },
          ],
          onComplete: () => setStep('introduce')
        }),
      ]
    }).play();
    
    
    // const tl = gsap.timeline();
    // // Init

    //   flyIntroTitle && tl.add(flyIntroTitle);
    //   // Introduce
    // } else if (step === 'introduce') {
    //   slideIn(".header");
    //   slideIn(".title2");
      
    //   const buttons = gsap.utils.toArray(".button");
    //   buttons.forEach((el, index) => {
    //     fadeIn(el as string, 'chars', {
    //       delay: 0.1 * (index + 1),
    //       stagger: { each: 0.05, from: 'start' },
    //     });
    //   });
    // }

  }, {scope: container, dependencies: [step]});

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
            Hello!<br />
            I'm <span css={subTitle}>Frontend Engineer </span>
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
            <Button className="button">
              Projects
            </Button>
            <Button className="button">
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
  font-size: calc(1.5rem + 2vw);
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