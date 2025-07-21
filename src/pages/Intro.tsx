import { css } from "@emotion/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { introTimeline } from "../timelines/IntroTimeline.ts";
import { Colors } from "../theme/theme.ts";

export default function Intro() {
  const introScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    introTimeline().play();
  }, { scope: introScope });

  return (
    <div ref={introScope} css={introWrapper}>
      <div className="introTitleSection" css={introTitleSection}>
        <h1 className="introTitle" css={[baseTitle, titleOrigin]}>
          안녕하세요,<br />
          프론트엔드 개발자<br/> 
          <span className="subTitle">김성현</span>입니다.
        </h1>
        <h1 className="introTitleFill" css={[baseTitle, title]}>
          안녕하세요,<br />
          프론트엔드 개발자<br/> 
          <span className="subTitle" css={subTitle}>김성현</span>입니다.
        </h1>
      </div>
    </div>
  );
}

const introWrapper = css`
  width: 100%;
  height: 20vh;
  margin-top: 5rem;
`;

const introTitleSection = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const baseTitle = css`
  position: absolute;
  text-align: center;
  white-space: pre-line;
  word-break: break-all;
  line-height: 1.3;
  font-size: 48px;
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

const titleOrigin = css`
  color: ${Colors.grey400};
`;

const title = css`
  color: #292929;
`;

const subTitle = css`
  color: ${Colors.blue500};
`;