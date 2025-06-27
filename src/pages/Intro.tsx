import { css } from "@emotion/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { Step } from "./Portfolio";
import { introTimeline } from "../Timelines/IntroTimeline";

type IntroProps = {
  onComplete: (step: Step) => void;
};

export default function Intro({ onComplete }: IntroProps) {
  const introScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    introTimeline(() => onComplete('introduce')).play();
  }, {scope: introScope});
  
  return (
    <div ref={introScope}>
      <h1 className="introTitle" css={title}>
        아이디어를 만드는<br />
        <span className="subTitle" css={subTitle}>프론트엔드 개발자</span> 김성현입니다
      </h1>    
    </div>
  );
}

const title = css`
  font-size: calc(1.5rem + 2vw);
  color: white;
  text-align: center;
`;

const subTitle = css`
  color: #3182f6;
`;
