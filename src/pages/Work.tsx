import { css } from "@emotion/react";
import { useRef } from "react";
import { useAtom } from "jotai";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { contentTimeline } from "../timelines/contentTimeline";
import { animationPlayStateAtom } from "../stores/timelineStore";
import { Top } from "../components/Top";
import { WideCard } from "../components/WideCard";
import { WORK_DATA } from "../constants/work-data.ts";

export function Work() {
  const navigate = useNavigate();
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);
  const { animateScroll } = useScrollTrigger();
  const contentContainer = useRef<HTMLDivElement>(null!);
  let contentTl: gsap.core.Timeline;

  useGSAP(() => {
    if (isPlayed('content')) return;
    contentTl = contentTimeline().eventCallback('onComplete', () => setIsPlayed('content'));
    
    animateScroll({
      target: '.topHr',
      timeline: contentTl,
      options: {
        start: 'top 85%',
        end: 'bottom 100%',
      },
    });
  }, {scope: contentContainer});

  return (
    <div ref={contentContainer} css={wrapper}>
      <hr css={hr} className="topHr" />
      <Top.Root 
        title={
          <Top.Paragraph>
            <span className="topTitle">IN START-UP</span>
          </Top.Paragraph>
        }
      />

      <div className="mainDescription" css={mainDescription}>
        <p>스타트업에서의 개발 경험을 소개합니다.</p>
      </div>

      <div className="contentSection" css={contentSection}>
        {WORK_DATA?.map((work) => {
          if (!work) return null;
          
          return (
            <WideCard 
              key={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
              onClick={() => {
                if (work.link) {
                  navigate(work.link);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const wrapper = css`
  width: 100%;
  height: 100%;
  padding-bottom: 8rem;
`;

const contentSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 54px 16px;
  padding: 0 16px;
`;

const mainDescription = css`
  font-size: 1.2rem;
  font-weight: 500;
  color: #7E7E87;
  padding: 0 16px;
  line-height: 1.65;
  margin-bottom: 3.5rem;
`;

const hr = css`
  border: 0;
  height: 2px;
  background: rgba(222, 222, 255, 0.19);
  margin: 0 16px;
`;