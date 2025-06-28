import { useRef } from "react";
import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function Project() {
  const { animateScroll } = useScrollTrigger();
  const projectScope = useRef<HTMLDivElement>(null!);
  
  useGSAP(() => {
    // animateScroll({
    //   target: '.topTitle',
    //   timeline: 
    //   options: {
    //     start: 'top 90%',
    //     end: 'bottom 100%',
    //     scrub: false,
    //     markers: true,
    //   },
    // });
  }, {scope: projectScope});

  return (
    <div ref={projectScope} css={projectWrapper}>
        <Top.Root 
          title={
            <Top.Paragraph>
              <span className="topTitle">Projects </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">새로운 것을 배우면, 항상 무언가를 만들어봅니다.</p>
        <p className="mainDescription2">처음하는 것에도 금방 익숙해질 수 있는 <span css={highlight}>적응력</span>과 <span css={highlight}>빠른 실행력</span>이 저의 강점입니다.</p>
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
  margin: 0 16px;
  margin-top: 1rem;
`;

const mainDescription = css`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  padding: 10px 16px;
  line-height: 1.65;
`;

const highlight = css`
  color:rgb(187, 215, 255);
  font-weight: 700;
`;