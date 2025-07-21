import { css } from "@emotion/react";
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
    <div ref={contentContainer} css={wrapper}>
      <hr css={hr} className="topHr" />
      <Top.Root 
        title={
          <Top.Paragraph>
            <span className="topTitle">CONTENT </span>
          </Top.Paragraph>
        }
      />

      <div className="mainDescription" css={mainDescription}>
        <p>새로운 것을 배우면 재밌는 서비스로 만들어봅니다.</p>
      </div>

      <div className="contentSection" css={contentSection}>
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

const wrapper = css`
  width: 100%;
  height: 100%;
  padding-bottom: 6rem;
`;

const contentSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 54px 0;
  padding: 0 16px;

  & > * {
    @media (min-width: 769px) {
      flex-basis: calc((100% - 40px) / 3);
      max-width: calc((100% - 40px) / 3);
      height: 480px;
      margin-right: 20px;
      
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }
    
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
    }
  }
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