import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { projectTimeline } from "../timelines/projectTimeline";
import { Card } from "../components/Card";
import hometFriendImage from "../assets/images/hometfriend.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import interactiveGraph from "../assets/gifs/interactive-graph.gif";
import crewing from "../assets/gifs/crewing.gif";

const INTERACTIVE_GRAPH_URL = "https://velog.io/@oilater/interactive-graph";
const CREWING_URL = "https://velog.io/@oilater/series/WorkoutTogether-%EA%B0%9C%EB%B0%9C-%EA%B3%BC%EC%A0%95";
const HOMET_FRIEND_URL = "https://github.com/oilater/HomeTraining-Friend";

export function Project() {
  const navigate = useNavigate();
  const { animateScroll } = useScrollTrigger();
  const projectScope = useRef<HTMLDivElement>(null!);
  let projectTl: gsap.core.Timeline;
  useGSAP(() => {
    projectTl = projectTimeline();
    animateScroll({
      target: '.hr',
      timeline: projectTl,
      options: {
        start: 'top 85%',
        end: 'bottom 100%',
        scrub: false,
        markers: true,
      },
    });

    projectTl.eventCallback('onComplete', () => {
      projectTl.revert();
    });

  }, {scope: projectScope});

  return (
    <div ref={projectScope} css={projectWrapper}>
      <hr css={hr} className="hr" />
      <Top.Root 
        title={
          <Top.Paragraph>
            <span className="topTitle">콘텐츠 </span>
          </Top.Paragraph>
        }
      />

      <div className="mainDescription" css={mainDescription}>
        <p>새로운 것을 배우면 재밌는 서비스로 만들어봅니다.</p>
        {/* <p>처음하는 것들에 금방 익숙해지는 <span css={highlight}>적응력</span>과 <span css={highlight}>빠른 실행력</span>이 저의 강점입니다.</p> */}
      </div>

      <div className="projectSection" css={projectSection}>
        <Card 
          title="Rally 만드는 김에 포트폴리오도 만들어보자"
          description="토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템과 포트폴리오, 페이지 성능 개선을 위해 고민한 과정을 소개합니다."
          image={portfolio}
          onClick={() => navigate(`/project/rally-portfolio`)}
        />
        <Card 
          title="바닐라 JS로 상태관리 해보기"
          description="'데이터가 바뀌면 관련된 모든 UI가 바뀌어야 한다'를 목표로 만들어 본 인터렉티브 그래프를 소개합니다."
          image={interactiveGraph}
          onClick={() => window.open(INTERACTIVE_GRAPH_URL, "_blank")}
        />
        <Card 
          title="SocketIO를 활용해 실시간 운동 친구 만들기"
          description="NextJS와 카카오 로그인, SocketIO를 활용해 실시간으로 운동 친구를 만들어 본 경험을 공유합니다."
          image={crewing}
          onClick={() => window.open(CREWING_URL, "_blank")}
        />
        <Card
          title="SwiftUI로 만들어 배포한 홈트친구"
          description="맨몸 운동의 동기부여를 위해 SwiftUI를 학습해 배포한 1인 앱 홈트친구를 소개합니다."
          image={hometFriendImage}
          onClick={() => window.open(HOMET_FRIEND_URL, "_blank")}
        />
      </div>
    </div>
  );
}

const mainDescription = css`
  font-size: 1.2rem;
  font-weight: 500;
  color: #7E7E87;
  padding: 0 16px;
  line-height: 1.65;
  margin-bottom: 3.5rem;
`;

const highlight = css`
  color: rgb(187, 215, 255);
  font-weight: 500;
`;

const projectWrapper = css`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
`;

const projectSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 54px 16px;
  padding: 0 16px;
`;

const hr = css`
  border: 0;
  height: 2px;
  background: rgba(222, 222, 255, 0.19);
  margin: 0 16px;
`;