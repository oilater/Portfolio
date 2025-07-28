import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { contentTimeline } from "../timelines/contentTimeline";
import { useGSAP } from "@gsap/react";
import { animationPlayStateAtom } from "../stores/timelineStore";
import { useAtom } from "jotai";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { useRef } from "react";
import { Colors } from "../theme/theme";
import gsap from "gsap";

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
      const dot = item.querySelector('.dot');
      if (!dot) return;
  
      animateScroll({
        target: `.item-${index + 1}`,
        timeline: gsap.timeline(),
        options: {
          start: 'top 60%',
          end: 'bottom 20%',
          onEnter: () => {
            dot.classList.add('active-dot');
          },
          onLeaveBack: () => {
            dot.classList.remove('active-dot');
          },
        },
      });
    });
  }, {scope: contentContainer});

  return (
    <div ref={contentContainer} css={wrapper}>
      <hr css={hr} className="topHr" />
      <Top.Root
        title={
          <Top.Paragraph>
            <span className="topTitle">EDU & LANGS </span>
          </Top.Paragraph>
        }
      />
      <div className="mainDescription" css={mainDescription} />
      <div className="contentSection" css={contentSection}>
      
      <div css={educationItem}>
      <div className="education-item item-1" css={educationPeriod}>
        <span className="dot" />
        <span>23.06-24.07</span>
      </div>
        <div css={educationContent}>
          <div css={educationHeader}>
            <span css={educationTitle}>삼성 청년 SW 아카데미 10기</span>
          </div>
          
          <div css={educationDescription}>
            <p>∙ 전공 Java 웹 개발 과정 수료, 삼성 SW 역량테스트 모의 A형 취득</p>
            <p>∙ 4번의 팀 프로젝트 경험 (1학기 최우수상, 2학기 우수상 2회)</p>
            <p>∙ React, Flutter, SwiftUI 등 다양한 프레임워크 경험</p>
            <p>∙ SSAFYcial 10기 공식 기자단 활동</p>
          </div>
        </div>
      </div>

      <div css={educationItem}>
      <div className="education-item item-2" css={educationPeriod}>
        <span className="dot" />
        <span>2024.03.10</span>
      </div>
        <div css={educationContent}>
          <div css={educationHeader}>
            <span css={educationTitle}>OPIc</span>
          </div>
          
          <div css={educationDescription}>
            <p>∙ Intermediate Mid (IM1)</p>
          </div>
        </div>
      </div>

      <div css={educationItem}>
      <div className="education-item item-3" css={educationPeriod}>
        <span className="dot" />
        <span>2019.09.28</span>
      </div>
        <div css={educationContent}>
          <div css={educationHeader}> 
            <span css={educationTitle}>TOEIC</span>
          </div>
          
          <div css={educationDescription}>
            <p>∙ 820 점</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const wrapper = css`
  width: 100%;
  height: 100%;
  padding-bottom: 6rem;
  position: relative;
  overflow: hidden;
`;

const contentSection = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const mainDescription = css`
  font-size: 1.2rem;
  font-weight: 500;
  color: #7E7E87;
  padding: 0 16px;
  line-height: 1.65;
  margin-bottom: 2.5rem;
`;

const hr = css`
  border: 0;
  height: 2px;
  background: rgba(222, 222, 255, 0.19);
  margin: 0 16px;
`;

const educationItem = css`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 0 16px;
  margin-bottom: 3rem;
`;

const educationContent = css`
  flex: 1;
`;

const educationHeader = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const educationPeriod = css`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: ${Colors.grey500};
  width: 130px;
  text-align: right;
  display: flex;
  align-items: center;
  gap: 8px;

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${Colors.grey200};
    transition: background 0.3s;
    margin-right: 6px;
  }
  .active-dot {
    background: dodgerblue;
  }
`;

const educationTitle = css`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

const educationDescription = css`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.65;
  color: ${Colors.grey500};
`;