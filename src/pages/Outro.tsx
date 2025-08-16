import { useGSAP } from "@gsap/react";
import { animationPlayStateAtom } from "../stores/timelineStore";
import { useAtom } from "jotai";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { useRef } from "react";
import { outroTimeline } from "../timelines/outroTimeline";
import {
  wrapper,
  outroSection,
  thankTitle,
  contactContainer,
  contactItem,
  contactLabel,
  contactValue
} from "../styles/pages/Outro.css";

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
    <div ref={outroContainer} className={wrapper}>
      <div className={`outroTitle ${thankTitle}`}>
        <p>감사합니다</p>
        <p>더 궁금한 점이 있다면</p>
        <p>편하게 연락주세요</p>
      </div>

      <div className={`outroSection ${outroSection}`}>
        <div className={contactContainer}>
          <div className={contactItem}>
            <span className={contactLabel}>전화번호</span>
            <span className={contactValue}>010.2717.6906</span>
          </div>
          
          <div className={contactItem}>
            <span className={contactLabel}>이메일</span>
            <span className={contactValue}>oilater@naver.com</span>
          </div>
          
          <div className={contactItem}>
            <span className={contactLabel}>Github</span>
            <a 
              href="https://github.com/oilater" 
              target="_blank" 
              rel="noopener noreferrer"
              className={contactValue}
            >
              @oilater
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}