import { css } from "@emotion/react";
import timelineLogic from "../assets/images/timeline-logic.jpg";
import rallyLogic from "../assets/images/rally-logic.jpg";
import motionLogic from "../assets/images/motion-logic.jpg";
import introTimeline from "../assets/images/intro-timeline.jpg";
import introAnimation from "../assets/gifs/intro-animation.gif";

export default function PortfolioArticle() {
  return (
    <div>
      <section css={section}>
        <p>
          토스의 Rally 구조를 참고하여 인터렉션 시스템을 개발했습니다. 아직 개선할 부분이 많지만, 편하게 애니메이션 타임라인을 만들 수 있어 좋았습니다.
          또한 <span css={highlightText}>토스피드 컨셉으로 포트폴리오를 구성하면서 UX와 성능 최적화를 위해 고민했던 과정</span>을 소개합니다 😀
        </p>
      </section>

      <h1>1. 내가 만든 렐리</h1>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>1) Intro 애니메이션</h3>
        </header>

        <p>
          토스 Simplicity 세션에서 보았던 <span css={highlightText}>자막 색상을 물결처럼 채우는 인터렉션</span>이 너무 멋져서 만들어보고 싶었습니다.
          글자가 날아오면 동일한 위치에 있는 두번째 텍스트의 opacity를 풀어주는 방식으로 눈속임 효과를 주어 구현했습니다.
        </p>

        <figure css={figure}>
          <img src={introAnimation} alt="Intro 애니메이션" css={image} style={{ height: '500px', objectFit: 'scale-down' }} />
          <figcaption css={captionStyle}>Intro 애니메이션</figcaption>
        </figure>

        <p>
          Intro 타임라인은 아래와 같이 구성했습니다.
          words 단위로 나눠진 텍스트를 다시 chars 단위로 나누어 색을 입히는 것이 까다로워서 두 개의 Rally를 사용했습니다.
        </p>

        <figure css={figure}>
          <img src={introTimeline} alt="Timeline 구현 이미지" css={image} />
          <figcaption css={captionStyle}>Intro 화면의 애니메이션 타임라인</figcaption>
        </figure>
      </section>

      {/* <section css={section}>
        <h3 css={sectionTitle}>
          Rally의 예상 구조
        </h3>

        <p>
          먼저, Rally의 실제 사용 사례를 보고 구조를 다음과 같이 예상해보았습니다.
        </p>

        <figure css={figure}>
          <img src={rallyStructure} alt="Rally의 예상 구조 이미지" css={image} />
          <figcaption css={captionStyle}>Rally의 예상 구조</figcaption>
        </figure>
      </section> */}

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>2) Timeline</h3>
        </header>

        <p>
          타임라인은 playback의 타입에 따라 <span css={highlightText}>Rally 또는 중첩된 Timeline</span>을 실행합니다.
        </p>

        <figure css={figure}>
          <img src={timelineLogic} alt="Timeline 구현 이미지" css={image} />
          <figcaption css={captionStyle}>Timeline 구현 로직</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>3) Rally</h3>
        </header>

        <p>
          Rally는 타겟과 모션이 결합된 개념입니다. 여러 모션을 실행하고 반복할 수 있어야 하기 때문에, 하나의 timeline으로 생각했습니다.
        </p>

        <figure css={figure}>
          <img src={rallyLogic} alt="Rally 구현 이미지" css={image} />
          <figcaption css={captionStyle}>Rally 구현 로직</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>4) Motion</h3>
        </header>

        <p>
          addMotions 함수는 타겟에 모션을 붙여줍니다.
          각 프로퍼티마다 별도의 easing과 duration 설정할 수 있기 때문에 프로퍼티별로 타임라인을 생성해서 합치는 방식으로 구현했습니다.
        </p>

        <figure css={figure}>
          <img src={motionLogic} alt="Timeline 구현 이미지" css={image} />
          <figcaption css={captionStyle}>Motion 구현 로직</figcaption>
        </figure>
      </section>
    </div>
  );
}

const section = css`
  margin-bottom: 4rem;
`;

const sectionTitle = css`
  margin: 36px 0 36px;
  font-size: 25px;
  margin-bottom: 20px;
  color: #fff;
`;

const highlightText = css`
  color: #fff;
  background-color: rgba(63, 213, 153, 0.21);
  // padding: 2px 4px;
  border-radius: 2px;
  letter-spacing: 0em;
`;

const figure = css`
  margin: 40px 0 20px 0;
  text-align: center;
`;

const image = css`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

const captionStyle = css`
  font-size: 13px;  
  color: #9E9EA4;
  line-height: 1.2;
  margin: 0;
  margin-top: 6px;
  margin-bottom: 6rem;
`;