import { useRef } from "react";
import { useAtom } from "jotai";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { contentTimeline } from "../timelines/contentTimeline";
import { animationPlayStateAtom } from "../stores/timelineStore";
import { CONTENT_DATA } from "../constants/content-data";
import { Top } from "../components/Top";
import { Card } from "../components/Card.tsx";
import Tag from "../components/Tag.tsx";
import {
  wrapper,
  contentSection,
  mainDescription,
  hr
} from "../styles/pages/Content.css";

export function Content() {
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
            <span className="topTitle">CONTENT </span>
          </Top.Paragraph>
        }
      />

      <div className={`mainDescription ${mainDescription}`}>
        <p>새로운 것을 배우면 재밌는 서비스로 만들어봅니다.</p>
      </div>

      <div className={`contentSection ${contentSection}`}>
        {CONTENT_DATA.map((content) => {
          if (!content) return null;
          return (
          <Card.Root 
            key={content.id}
            image={content.image}
            onClick={() => {
              if (content.isInternal) {
                navigate(content.link);
              } else {
                window.open(content.link, "_blank");
              }
            }}
          >
            <Card.Title>{content.title}</Card.Title>
            <Card.Description>{content.description}</Card.Description>
            <Card.Tags>
              {content.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </Card.Tags>
          </Card.Root>
        )})}
      </div>
    </div>
  );
}