import { useRef } from "react";
import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import Card from "../components/Card";
import hometFriendImage from "../assets/images/hometfriend.png";
import interactiveGraph from "../assets/gifs/interactive-graph.gif";
import crewing from "../assets/gifs/crewing.gif";

export default function Project() {
  const { animateScroll } = useScrollTrigger();
  const projectScope = useRef<HTMLDivElement>(null!);
  
  useGSAP(() => {
    // animateScroll({
    //   target: '.topTitle',
    //   timeline: 
    //   options: {
    //     start: 'top 90%',
    //     end: 'bottom 100%',
    //     scrub: false,
    //     markers: true,
    //   },
    // });
  }, {scope: projectScope});

  return (
    <div ref={projectScope} css={projectWrapper}>
        <Top.Root 
          title={
            <Top.Paragraph>
              <span className="topTitle">콘텐츠 </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">새로운 것을 배우면 재밌는 서비스로 만들어봅니다.</p>
        <p className="mainDescription2">처음하는 것들에 금방 익숙해지는 <span css={highlight}>적응력</span>과 <span css={highlight}>빠른 실행력</span>이 저의 강점입니다.</p>
      </div>

      <div className="projectSection" css={projectSection}>
        <Card 
          title="Rally 만드는 김에 포트폴리오도 만들어보자"
          description="토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템과 포트폴리오를 소개합니다."
          image={hometFriendImage}
          link="https://www.google.com"
        />
        <Card 
          title="바닐라 JS로 Interactive Graph 만들기"
          description="'데이터가 바뀌면 관련된 모든 UI가 바뀌어야 한다'를 목표로 만들어 본 인터렉티브 그래프를 소개합니다."
          image={interactiveGraph}
          link="https://velog.io/@oilater/interactive-graph"
        />
        <Card 
          title="SocketIO를 활용해 실시간 운동 친구 만들기"
          description="NextJS와 카카오 로그인, SocketIO를 활용해 실시간으로 운동 친구를 만들어 본 경험을 공유합니다."
          image={crewing}
          link="https://velog.io/@oilater/series/WorkoutTogether-%EA%B0%9C%EB%B0%9C-%EA%B3%BC%EC%A0%95"
        />
        <Card
          title="iOS 1인 앱 홈트친구"
          description="맨몸 운동의 동기부여를 위해 SwiftUI를 배워서 개발 및 배포한 1인 앱 홈트친구를 소개합니다."
          image={hometFriendImage}
          link="https://github.com/oilater/HomeTraining-Friend"
        />
      </div>
    </div>
  );
}

const mainDescription = css`
  font-size: 1.3rem;
  font-weight: 500;
  color: #E4E4E5;
  padding: 10px 16px;
  line-height: 1.65;
  margin-bottom: 2rem;
`;

const highlight = css`
  color:rgb(187, 215, 255);
  font-weight: 700;
`;

const projectWrapper = css`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
`;

const projectSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0 16px;
`;
