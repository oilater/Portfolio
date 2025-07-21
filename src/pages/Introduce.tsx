import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAtom } from "jotai";
import { css } from "@emotion/react";
import { animationPlayStateAtom } from "../stores/timelineStore.ts";
import { introduceTimeline } from "../timelines/introduceTimeline.ts";
import { Colors } from "../theme/theme.ts";
import { InfoCard } from "../components/InfoCard.tsx";
import { CDN_IMAGES } from "../cdn.ts";

export default function Introduce() {
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);
  const introduceScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    if (isPlayed('introduce')) return;
    let introduceTl = introduceTimeline().play();
    introduceTl.eventCallback('onComplete', () => setIsPlayed('introduce'));
  }, { scope: introduceScope });

  return (
    <div ref={introduceScope} css={introduceWrapper}>
      <div css={mainDescription}>
        <p>React를 중심으로 웹 프론트엔드를 개발합니다.</p>
        <p>UX와 성능 개선에 높은 가치를 두고 있습니다.</p>
      </div>

      <div className="info-section" css={infoSection}>
        <div className="info-1">
        <InfoCard
          title="모던 프론트엔드 개발"
          description="고차함수, 클로저, 자료구조 등 필수적인 자바스크립트(ES6) 개념을 활용할 수 있습니다. 리액트, 타입스크립트 공식문서와 서적을 바탕으로 이해한 내용을 기술 블로그에 정리하고 있습니다."
          image={CDN_IMAGES.LANGUAGES}
        />
        </div>
        <div className="info-2">
        <InfoCard
          title="웹 성능과 사용자 경험"
          description="인터렉션 시스템을 개발하면서 웹 성능에 관심을 가지게 되었습니다. Lighthouse, DevTools, WebPageTest 등 성능 측정 방식을 이해하고, 포트폴리오 페이지의 성능을 개선했습니다."
          image={CDN_IMAGES.PERFORMANCE}
        />
        </div>
        <div className="info-3">
        <InfoCard
          title="커뮤니케이션 및 협업"
          description="스타트업에서의 Git Flow를 통한 협업 경험을 바탕으로 머지 이슈 해결에 능숙합니다. 슬랙, 노션, Jira 등 협업 도구 사용 경험도 있습니다. 함께 좋은 코드를 만드는 코드리뷰 문화를 좋아합니다."
          image={CDN_IMAGES.COMMUNICATION}
        />
        </div>
      </div>
    </div>
  );
}

const introduceWrapper = css`
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
  margin-top: 1rem;
`;

const infoSection = css`
  border-radius: 16px;
  padding: 10px;
  margin: 0 16px;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 8px;
    margin: 0 12px;
    margin-top: 1.5rem;
  }
  
  @media (min-width: 769px) {
    gap: 1.5rem;
  }
`;

const mainDescription = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${Colors.grey400};
  padding: 10px 16px;
  line-height: 1.4;
`;