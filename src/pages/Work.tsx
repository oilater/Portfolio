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
import {
  wrapper,
  contentSection,
  mainDescription,
  hr
} from "../styles/pages/Work.css";

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
    <div ref={contentContainer} className={wrapper}>
      <hr className={`topHr ${hr}`} />
      <Top.Root 
        title={
          <Top.Paragraph>
            <span className="topTitle">IN START-UP</span>
          </Top.Paragraph>
        }
      />

      <div className={`mainDescription ${mainDescription}`}>
        <p>스타트업에서의 개발 경험을 공유합니다.</p>
      </div>

      <div className={`contentSection ${contentSection}`}>
        {WORK_DATA?.map((work) => {
          if (!work) return null;
          
          return (
            <WideCard 
              key={work.id}
              subTitle={work.subTitle}
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