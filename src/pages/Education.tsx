import { Top } from "../components/Top";
import { contentTimeline } from "../timelines/contentTimeline";
import { useGSAP } from "@gsap/react";
import { animationPlayStateAtom } from "../stores/timelineStore";
import { useAtom } from "jotai";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import {
  wrapper,
  contentSection,
  mainDescription,
  hr,
  educationItem,
  educationContent,
  educationHeader,
  educationTitle,
  educationDescription,
  dot,
  activeDot
} from "../styles/pages/Education.css";

export function Education() {
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

  useGSAP(() => {
    const educationItems = contentContainer.current.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
      const dotElement = item.querySelector('.dot');
      if (!dotElement) return;
  
      animateScroll({
        target: `.item-${index + 1}`,
        timeline: gsap.timeline(),
        options: {
          start: 'top 70%',
          end: 'bottom 40%',
          onEnter: () => {
            dotElement.classList.add(activeDot);
          },
          onLeaveBack: () => {
            dotElement.classList.remove(activeDot);
          },
        },
      });
    });
  }, {scope: contentContainer});

  return (
    <div ref={contentContainer} className={wrapper}>
      <hr className={`topHr ${hr}`} />
      <Top.Root
        title={
          <Top.Paragraph>
            <span className="topTitle">EDU & LANGS </span>
          </Top.Paragraph>
        }
      />
      <div className={`mainDescription ${mainDescription}`} />
      <div className={`contentSection ${contentSection}`}>
      
      <div className={educationItem}>
      <div className="education-item item-1">
        <span className={dot} />
        <span>23.06-24.07</span>
      </div>
        <div className={educationContent}>
          <div className={educationHeader}>
            <span className={educationTitle}>삼성 청년 SW 아카데미 10기</span>
          </div>
          
          <div className={educationDescription}>
            <p>∙ 전공 Java 웹 개발 과정 수료, 삼성 SW 역량테스트 모의 A형 취득</p>
            <p>∙ 4번의 팀 프로젝트 경험 (1학기 최우수상, 2학기 우수상 2회)</p>
            <p>∙ React, Flutter, SwiftUI 등 다양한 프레임워크 경험</p>
            <p>∙ SSAFYcial 10기 공식 기자단 활동</p>
          </div>
        </div>
      </div>

      <div className={educationItem}>
      <div className="education-item item-2">
        <span className={dot} />
        <span>2024.03.10</span>
      </div>
        <div className={educationContent}>
          <div className={educationHeader}>
            <span className={educationTitle}>OPIc</span>
          </div>
          
          <div className={educationDescription}>
            <p>∙ Intermediate Mid (IM1)</p>
          </div>
        </div>
      </div>

      <div className={educationItem}>
      <div className="education-item item-3">
        <span className={dot} />
        <span>2019.09.28</span>
      </div>
        <div className={educationContent}>
          <div className={educationHeader}> 
            <span className={educationTitle}>TOEIC</span>
          </div>
          
          <div className={educationDescription}>
            <p>∙ 820 점</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}