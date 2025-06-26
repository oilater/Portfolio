import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { useGSAP } from "@gsap/react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Intro } from "./Intro.tsx";
import { introTimeline } from "../Timelines/IntroTimeline.ts";

type Step = 'init' | 'introduce' | 'projects' | 'contact';

export default function Landing() {
  const [step, setStep] = useState<Step>('init');
  const container = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    introTimeline(() => setStep('introduce')).play();
  }, {scope: container});

  return (
    <main ref={container} css={wrapper}>
      {step === 'init' && <Intro />}

      {step === 'introduce' && (
        <Header 
          className="header"
          onGithub={() => {window.open('https://github.com/oilater', '_blank');}} 
          onVelog={() => {window.open('https://velog.io/@oilater', '_blank');}} 
        />
      )}
        {/* // <>
          
        //   <nav css={navigateSection}>
        //     <Button className="button">
        //       Projects
        //     </Button>
        //     <Button className="button">
        //       Contact
        //     </Button>
        //   </nav>
        // </> */}
    </main>
  );
};

// Styles
const wrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: center;
`;

const navigateSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
`;