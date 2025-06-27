import { lazy, useState, Suspense } from "react";
import { css } from "@emotion/react";
import Skeleton from 'react-loading-skeleton';

const Header = lazy(() => import("../components/Header"));
const Intro = lazy(() => import("./Intro"));
const Introduce = lazy(() => import("./Introduce"));

export type Step = 'init' | 'introduce' | 'projects' | 'contact';

const githubUrl = 'https://github.com/oilater';
const velogUrl = 'https://velog.io/@oilater';

export default function Landing() {
  const [step, setStep] = useState<Step>('init');

  return (
    <div css={wrapper}>
      {step !== 'init' && (
        <Suspense fallback={<Skeleton count={10} />}>
          <Header 
            className="header"
            onGithub={() => {window.open(githubUrl, '_blank');}}
            onVelog={() => {window.open(velogUrl, '_blank');}}
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
