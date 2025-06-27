import { lazy, useState, Suspense } from "react";
import { css } from "@emotion/react";
import Skeleton from 'react-loading-skeleton';

const Header = lazy(() => import("../components/Header"));
const Intro = lazy(() => import("./Intro"));
const Introduce = lazy(() => import("./Introduce"));

export type Step = 'init' | 'introduce' | 'projects';

const GITHUB_URL = 'https://github.com/oilater';
const VELOG_URL = 'https://velog.io/@oilater';

export default function Portfolio() {
  const [step, setStep] = useState<Step>('init');

  return (
    <div css={wrapper}>
      {step !== 'init' && (
        <Suspense fallback={<Skeleton count={10} />}>
          <Header 
            className="header"
            onGithub={() => {window.open(GITHUB_URL, '_blank');}}
            onVelog={() => {window.open(VELOG_URL, '_blank');}}
          />
        </Suspense>
      )}

      <Suspense fallback={<Skeleton count={10} />}>
        {step === 'init' && <Intro onComplete={setStep} />}
        {step === 'introduce' && <Introduce />}
      </Suspense>
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