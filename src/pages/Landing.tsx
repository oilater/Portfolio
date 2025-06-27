import { useState } from "react";
import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { Intro } from "./Intro.tsx";
import { Introduce } from "./Introduce.tsx";

export type Step = 'init' | 'introduce' | 'projects' | 'contact';

const githubUrl = 'https://github.com/oilater';
const velogUrl = 'https://velog.io/@oilater';

export default function Landing() {
  const [step, setStep] = useState<Step>('init');

  return (
    <div css={wrapper}>
      {step !== 'init' && (
        <Header 
          className="header"
          onGithub={() => {window.open(githubUrl, '_blank');}}
          onVelog={() => {window.open(velogUrl, '_blank');}}
        />
      )}

      {step === 'init' && <Intro onComplete={setStep} />}
      {step === 'introduce' && <Introduce />}
    </div>
  );
};

// Styles
const wrapper = css`
  width: 100%;
  height: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const navigateSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
`;


{/* <nav css={navigateSection}>
<Button className="button">
  Projects
</Button>
<Button className="button">
  Contact
</Button>
</nav> */}
