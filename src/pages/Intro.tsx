import { css } from "@emotion/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAtom, useSetAtom } from "jotai";
import { stepAtom } from "../stores/step-store.ts";
import { animationPlayStateAtom } from "../stores/timelineStore.ts";
import { introTimeline } from "../timelines/IntroTimeline.ts";

export default function Intro() {
  const introScope = useRef<HTMLDivElement>(null!);
  const setStep = useSetAtom(stepAtom);
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);

  useGSAP(() => {
    if (isPlayed('intro')) {
      setStep('introduce');
      return;
    }

    introTimeline(() => {
      setIsPlayed('intro');
      setStep('introduce');
    }).play();
  }, { scope: introScope });

  return (
    <div ref={introScope} css={introWrapper}>
      <div className="introTitleSection" css={introTitleSection}>
        <h1 className="introTitle" css={title}>
          아이디어를 만드는<br />
          <span className="subTitle" css={subTitle}>프론트엔드 개발자</span> 김성현입니다
        </h1>
        <h1 className="introTitleFill" css={title}>
          아이디어를 만드는<br />
          <span className="subTitle" css={subTitle}>프론트엔드 개발자</span> 김성현입니다
        </h1>
      </div>
    </div>
  );
}

const introWrapper = css`
  width: 100%;
  height: 100vh;
`;

const introTitleSection = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const title = css`
  position: absolute;
  color: #E4E4E5;
  text-align: center;
  white-space: pre-line;
  word-break: break-all;
  line-height: 1.3;
  font-size: 4rem;
  width: 100vw;
  max-width: 1000px;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    width: 95vw;
    max-width: 350px;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.8rem;
    width: 90vw;
    max-width: 500px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.2rem;
    width: 85vw;
    max-width: 600px;
  }
`;

const subTitle = css`
  color: #3182f6;
`;