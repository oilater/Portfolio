import { css } from "@emotion/react";
import { useGSAP } from "@gsap/react";
import { animationPlayStateAtom } from "../stores/timelineStore";
import { useAtom } from "jotai";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { useRef } from "react";
import { Colors } from "../theme/theme";
import { outroTimeline } from "../timelines/outroTimeline";

export function Outro() {
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);
  const { animateScroll } = useScrollTrigger();
  const outroContainer = useRef<HTMLDivElement>(null!);
  let outroTl: gsap.core.Timeline;

  useGSAP(() => {
    if (isPlayed('content')) return;
    outroTl = outroTimeline().eventCallback('onComplete', () => setIsPlayed('content'));
    
    animateScroll({
      target: '.outroTitle',
      timeline: outroTl,  
      options: {
        start: 'top 85%',
        end: 'bottom 100%',
      },
    });
  }, {scope: outroContainer});

  return (
    <div ref={outroContainer} css={wrapper}>
      <div className="outroTitle" css={thankTitle}>
        <p>감사합니다</p>
        <p>더 궁금한 점이 있다면</p>
        <p>편하게 연락주세요</p>
      </div>

      <div className="outroSection" css={outroSection}>
        <div css={contactContainer}>
          <div css={contactItem}>
            <span css={contactLabel}>전화번호</span>
            <span css={contactValue}>010.2717.6906</span>
          </div>
          
          <div css={contactItem}>
            <span css={contactLabel}>이메일</span>
            <span css={contactValue}>oilater@naver.com</span>
          </div>
          
          <div css={contactItem}>
            <span css={contactLabel}>Github</span>
            <a 
              href="https://github.com/oilater" 
              target="_blank" 
              rel="noopener noreferrer"
              css={contactValue}
            >
              @oilater
            </a>
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

const outroSection = css`
  margin: 0 auto;
  position: relative;
  height: 100%;
  width: 30%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const thankTitle = css`
  text-align: center;
  margin-top: 3rem;
  padding: 0 16px 32px;
  font-size: 32px;
  color: ${Colors.grey700};
  font-weight: 600;
`;

const contactContainer = css`
  padding: 24px;
  margin: 0 auto;
  background-color: ${Colors.grey100};
  border-radius: 16px;
`;

const contactItem = css`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const contactLabel = css`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${Colors.grey600};
  min-width: 80px;
`;

const contactValue = css`
  font-size: 1rem;
  color: ${Colors.grey700};
  word-break: break-all;
`;