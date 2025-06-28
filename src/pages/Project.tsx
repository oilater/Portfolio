import { useRef } from "react";
import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function Project() {
  const { animateScroll } = useScrollTrigger();
  const projectScope = useRef<HTMLDivElement>(null!);
  
  useGSAP(() => {
    animateScroll({
      target: '.topTitle',
      motion: {
        opacity: 1,
        translateY: 0,
      },
      options: {
        start: 'top 100%',
        end: 'bottom 100%',
        scrub: true,
        markers: true,
      },
    });
  }, {scope: projectScope});

  return (
    <div ref={projectScope} css={projectWrapper}>
        <Top.Root 
          title={
            <Top.Paragraph>
              <span className="topTitle">프로젝트 소개 </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">이런 프로젝트를 만들었습니다.</p>
        <p className="mainDescription2"><span css={highlight}>디테일이 완성도를 만든다</span>는 생각으로 사용자의 입장에서 UI를 개발해왔습니다.</p>
      </div>

      <div className="listRowSection" css={projectListSection}>

      </div>
    </div>
  );
}

const projectWrapper = css`
  width: 100%;
  height: 100%;
`;

const projectListSection = css`
  background: rgb(36, 36, 38);
  border-radius: 12px;
  padding: 10px;
  margin: 0 24px;
  margin-top: 1rem;
`;

const mainDescription = css`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  padding: 10px 24px;
  line-height: 1.65;
`;

const highlight = css`
  color:rgb(187, 215, 255);
  font-weight: 700;
`;