import { useState } from "react";
import { css } from "@emotion/react";
import Project from "./Project";
import Header from "../components/Header";
import Intro from "./Intro";
import Introduce from "./Introduce";

export type Step = 'init' | 'introduce' | 'projects';

const GITHUB_URL = 'https://github.com/oilater';
const VELOG_URL = 'https://velog.io/@oilater';

export default function Portfolio() {
  const [step, setStep] = useState<Step>('init');

  return (
    <div css={wrapper}>
      {step !== 'init' && (
        <Header 
          className="header"
          onGithub={() => {window.open(GITHUB_URL, '_blank');}}
          onVelog={() => {window.open(VELOG_URL, '_blank');}}
        />
      )}

      {step === 'init' && <Intro onComplete={setStep} />}
      {step === 'introduce' && <Introduce />}
      {step === 'introduce' && <Project />}
    </div>
  );
}

// Styles
const wrapper = css`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;