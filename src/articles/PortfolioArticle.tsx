import { css } from "@emotion/react";
import { CDN_IMAGES } from "../cdn";

export default function PortfolioArticle() {
  return (
    <div>
      <section css={section}>
        <p>
          토스 인터렉션 팀에서 만든 Rally의 구조를 참고해 저만의 인터렉션 시스템을 만들어보았습니다. 
          개선할 부분이 많지만, 애니메이션 시퀀스를 통해 편하게 포트폴리오를 만들 수 있었습니다.
          또한 <span css={highlightText}>포트폴리오를 만들면서 
            사용자 경험과 성능 최적화를 위해 고민했던 과정</span>을 소개합니다.
        </p>
      </section>

      <h1>1. 인터렉션 시스템</h1>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>1) 인트로 애니메이션</h3>
        </header>

        <p>
          토스의 디자인 컨퍼런스인 Simplicity에는 <span css={highlightText}>자막에 물결처럼 색을 채우는 
          인터렉션</span>이 나오는데요, 이게 너무 멋져서 만들어보고 싶었습니다.
        </p>

        <figure css={figure}>
          <img 
            src={CDN_IMAGES.INTRO_ANIMATION} 
            alt="Intro 애니메이션" 
            css={image} 
            style={{ height: '600px', objectFit: 'contain' }} 
            loading="lazy" 
          />
          <figcaption css={captionStyle}>Intro 애니메이션</figcaption>
        </figure>

        <p>
          인터렉션 시스템은 Timeline, Rally, Motion으로 구성됩니다.
          모션에 split 프로퍼티를 설정함으로써 태그를 word, char, line 단위로 Split 쪼갤 수 있는데, 
          이미 word 단위로 쪼개져 날라온 텍스트를 다시 char 단위로 색을 채우기는 쉽지 않았습니다.
          따라서 날아온 글자와 같은 위치에 있는 텍스트의 opacity를 풀어주는 방식으로 눈속임 효과를 주었습니다.
        </p>

        <figure css={figure}>
          <img 
            src={CDN_IMAGES.INTRO_TIMELINE} 
            alt="Timeline 구현 이미지" 
            css={[image, {height: '800px', objectFit: 'contain'}]} 
            loading="lazy" 
          />
          <figcaption css={captionStyle}>Intro 화면의 타임라인</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>2) Timeline</h3>
        </header>

        <p>
          Timeline은 playback을 통해 실행 방식을 결정하고, playables 배열로 받은 Rally와 다른 Timeline을 실행합니다.
          정지 상태로 생성된 playable을 실행 가능한 상태로 바꿔주었습니다.
        </p>

        <figure css={figure}>
          <img src={CDN_IMAGES.TIMELINE_LOGIC_REFACTOR} alt="Timeline 구현 이미지" css={image} loading="lazy" />
          <figcaption css={captionStyle}>Timeline.tsx</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>3) Rally</h3>
        </header>

        <p>
          Rally는 타겟과 모션이 결합된 개념입니다. 
          처음에는 Rally가 tween이라고 생각했는데,
          여러 모션을 실행하고 반복할 수 있어야 하기 때문에, 하나의 Timeline이라는 생각이 들었습니다.
          처음엔 split 관련 부분을 Rally에서 처리했는데,
          이후 같은 타겟에 대해 다르게 split 하고 싶어서 <span css={highlightText}>motions의 프로퍼티로 옮겼던 것이 아마도 실수였다는 생각이 듭니다.</span>
        </p>

        <figure css={figure}>
          <img src={CDN_IMAGES.RALLY_LOGIC} alt="Rally 구현 이미지" css={image} loading="lazy" />
          <figcaption css={captionStyle}>Rally 구현 로직</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>4) Motion</h3>
        </header>

        <p>
          모션은 가장 구현하기 까다롭고, for 문을 많이 돌아 성능적으로도 많이 아쉬움이 남았습니다.
          먼저 translateX와 같은 프로퍼티의 키를 GSAP 키에 맞게 바꿔 타겟에 붙여주었습니다.
          애니메이션은 GSAP의 fromTo 메서드를 사용했는데 사용자가 from, to 중 하나의 값만 설정해도
          나머지 값을 계산할 수 있도록 <span css={highlightText}>previousValue 객체를 만들어 저장하였고, 
          previousValue 값 마저 없다면 Default 값을 사용했습니다.</span> 또한 프로퍼티마다 
          별도의 easing과 duration 설정할 수 있기 때문에,
          프로퍼티별로 inner 타임라인을 생성한 뒤 상위의 모션 타임라인에 합쳐주었습니다.
        </p>

        <figure css={figure}>
          <img src={CDN_IMAGES.MOTION_LOGIC} alt="Timeline 구현 이미지" css={image} loading="lazy" />
          <figcaption css={captionStyle}>Motion 구현 로직</figcaption>
        </figure>
      </section>

      <h1>2. 포트폴리오 구현</h1>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>1) 여러 아티클을 간편하게 표현할 수 있을까?</h3>
        </header>

        <p>
          토스피드의 아티클 페이지를 컨셉으로 구현해보았습니다. 아티클을 추가할 때마다 
          매번 레이아웃을 만드는 것은 번거로워서, <span css={highlightText}>Component Composition 패턴을 사용해 미리 만들어 둔 레이아웃에 데이터를 넣어주는 방식</span>으로 구현했습니다.
        </p>

        <div css={imagesSection}>
          <div css={imageContainer}>
            <figure css={figure}>
              <img 
                src={CDN_IMAGES.COMPONENT_COMPOSITION} 
                alt="컴포넌트 합성 패턴 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
              />
            </figure>

            <figure css={figure}>
              <img 
                src={CDN_IMAGES.ARTICLE_MAP} 
                alt="아티클 맵 이미지" 
                css={image} 
                loading="lazy" 
                style={{ height: 'auto', objectFit: 'contain' }} 
              />
            </figure>
          </div>
          <figcaption css={captionStyle}>Article.tsx, articleData.tsx</figcaption>
        </div>
      </section>
      
      <section css={section}>
        <header>
          <h3 css={sectionTitle}>2) 눈 아픈 포트폴리오</h3>
        </header>

        <p>
          포트폴리오 페이지를 만들면서 검은 화면에 흰 글씨를 보려니 눈이 너무 아팠습니다. 이후 토스피드 페이지를 참고하면서
          배경에는 '#121417', 텍스트에는 '#E4E4E5', <span style={{color: '#C3C3C6'}}>'#C3C3C6'</span> 등의 색상을 사용하고 
          줄 간격을 조정해 눈에 부담이 덜 가도록 신경썼습니다. 
        </p>
        <br />
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>4) 성능 및 접근성 개선</h3>
        </header>
        
        <article>
          {/* <h4>스크롤 최적화 및 GPU 가속</h4> */}
          <p>
            컨텐츠 화면에서 스크롤이 버벅이는 문제가 있었습니다. 해결하기 위해 찾아보던 중, <span css={highlightText}>브라우저가 
            스크롤 이벤트의 preventDefault 함수 호출을 기다리면서 
            스크롤이 지연된다는 것을 알게 되었습니다.</span>
          </p>
          <br/>
          <p>
            현재는 preventDefault를 사용하지 않고 있어서 스크롤 이벤트리스너에 
            'passive: true' 옵션을 추가하니 스크롤 반응 속도가 눈에 띄게 개선되었습니다.
            간단한 CSS 애니메이션을 적용했거나 fixed position을 가진 요소는 <span css={highlightText}>스크롤을 할 때마다 다시 렌더링되기 때문에
            'translateZ(0)'으로 GPU 가속을 적용해서 리플로우를 방지했습니다.</span> 
          </p>
        </article>
        
        <br />
        
        <article>
          <h4>이미지, GIF</h4>
          <p>
            모든 이미지 파일의 크기는 화질을 크게 해치지 않는 선에서 30-60% 가량 줄여 사용했습니다.
            이미지를 AVIF로 변환하니 화질이 너무 떨어져서 JPG를 사용하였고, Lazy loading을 적용했습니다. 
          </p>
        </article>
        
        <br />
        
        <article>
          <h4>접근성</h4>
          <p>시맨틱 태그를 적절히 사용하고, aria-label을 적용해 접근성을 높였습니다. 또한 모바일에서도 볼 수 있도록 기기별 반응형 CSS를 적용했습니다.</p>
        </article>
      </section>

      <h1>기술 스택</h1>
      <br />

      <section css={section}>
        <span css={highlightText}>React</span>
        <p>컴포넌트 기반 아키텍처로 UI를 구현하기 위해 사용했습니다.</p>
        <br />

        <span css={highlightText}>TypeScript</span>
        <p>타입 안정성으로 런타임 에러를 사전에 방지하고, 개발 생산성 향상을 위해 사용했습니다.</p>
        <br />

        <span css={highlightText}>Emotion</span>
        <p>CSS-in-JS로 사용하기 편리하고, 컴포넌트별로 스타일을 캡슐화할 수 있어 사용했습니다.</p>
        <br/>

        <span css={highlightText}>GSAP</span>
        <p>
          useGSAP 훅, SplitText, ScrollTrigger 등의 기능을 통해 
          인터렉션 시스템을 구현하기 적합하다고 판단해 사용했습니다.
        </p>
        <br/>

        <span css={highlightText}>Jotai</span>
        <p>
          애니메이션 재생 상태와 Step을 효율적으로 관리하기 위해 사용했습니다.
        </p>
        <br/>
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
  margin: 60px 0 20px 0;
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

const imageContainer = css`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;

const containerImage = css`
  height: auto;
  object-fit: contain;
`;

const imagesSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;