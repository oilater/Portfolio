import { css } from "@emotion/react";
import { CDN_IMAGES } from "../cdn";

export default function FivaArticle() {
  return (
    <div>
      <section css={section}>
        <p>
          저의 첫 스타트업이었던 구스랩스에서의 개발 경험을 기록해보려 합니다.
          구스랩스는 삼성전자 C-Lab에서 시작한 스타트업으로, 동작 인식을 통해 운동을 쉽고 재미있게 해주는 FIVA라는 앱 서비스를 개발했습니다.
        </p>
      </section>

      <section css={section}>
        <header>
          <h1 css={sectionTitle}>어쩌다가 하게 된 Unity</h1>
        </header>

        <p>
          Unity는 처음 접하는 에디터였지만 당시에 Flutter나 SwiftUI 등으로 프로젝트를 만들어봐서
          금방 적응할 수 있었습니다.
          일주일 정도 기능들을 익히고, 간단한 게임을 만들어보며 에디터와 C#에 적응했고 곧바로 업데이트 스펙을 맡게 되었습니다.
        </p>
      </section>

      <section css={section}>
        <header>
          <h1 css={sectionTitle}>아바타를 확대해보세요!</h1>
        </header>

        <p>
          FIVA에는 3D 디자이너분이 만들어주신 귀여운 아바타가 있었고,,, 여성 유저분들이 아바타를 정말 좋아하셨습니다.
        </p>

        <figure css={figure}>
          <img src={CDN_IMAGES.FIVA_AVATAR} alt="FIVA 아바타 이미지" css={[image, {height: '600px', objectFit: 'contain'}]} loading="lazy" />
          <figcaption css={captionStyle}>복숭아 탈 아이템 장착한 아바타</figcaption>
        </figure>

        <p>
          당시에는 옷장의 아바타를 움직일 수 없어서 <span css={highlightText}>'아바타를 이리저리 돌려보고, 확대해보고 싶어요'라는 유저분들이 요청이 많았습니다.</span> 그래서 
          아바타를 움직이는 기능을 만들어보기로 했습니다.
        </p>
        <br />
        <p>
          아바타가 움직이는 것 같아 보이지만, <span css={highlightText}>유저의 스와이프 delta에 따라 카메라를 돌리는 방식으로 구현했습니다.</span>
          처음엔 간단한 기능이라 생각했지만 상하 또는 좌우 스와이프 방향, 한 손 또는 두 손, 
          축소 시 자연스럽게 돌아오도록 구현하기, 확대된 상태에서의 범위 제한 등 고려해야 할 것들이 생각보다 많았습니다. <span css={highlightText}>그래도 
          유저분들이 확대한 아바타를 톡방에 자랑하는 모습을 보면서 뿌듯했던 기억이 납니다.</span> GIF라 끊겨 보이지만, 실제로는 자연스럽게 움직입니다. 
        </p>

        <figure css={figure}>
          <img src={CDN_IMAGES.FIVA_AVATAR_MOVE} alt="FIVA 움직이는 아바타" css={[image, {height: '700px', objectFit: 'contain'}]} loading="lazy" />
          <figcaption css={captionStyle}>움직이게 된 아바타</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h1 css={sectionTitle}>업데이트 되는 FIVA</h1>
        </header>

        <p>
          UI 디자이너 분이 새로 오셔서 전반적인 앱 디자인이 바뀌었습니다.
          스타트업의 특성 상 빠른 업데이트 스펙을 따라가며 앱 캘린더, 챌린지 목록, 팝업 등 다양한 화면들을 구현했고, 구현한 것에 대해서는 QA 문서를 작성하여 테스트를 진행했습니다.
        </p>

        <div css={imagesSection}>
          <div css={imageContainer}>
            <figure css={figure}>
              <img 
                src={CDN_IMAGES.FIVA_EXERCISE} 
                alt="운동 탭 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
              />
            </figure>

            <figure css={figure}>
              <img 
                src={CDN_IMAGES.FIVA_CHALLENGE_CALENDAR} 
                alt="챌린지 달력 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
                style={{ height: 'auto', objectFit: 'contain' }} 
              />
            </figure>

            <figure css={figure}>
              <img 
                src={CDN_IMAGES.FIVA_CHALLENGE_LIST} 
                alt="챌린지 목록 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
                style={{ height: 'auto', objectFit: 'contain' }} 
              />
            </figure>
          </div>
        </div>

        <div css={imagesSection}>
          <div css={imageContainer}>
            <figure css={figure}>
              <img 
                src={CDN_IMAGES.FIVA_CHALLENGE_POPUP} 
                alt="챌린지 팝업 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
              />
            </figure>

            <figure css={figure}>
              <img 
                src={CDN_IMAGES.FIVA_COIN_POPUP} 
                alt="코인 팝업 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
                style={{ height: 'auto', objectFit: 'contain' }} 
              />
            </figure>

            <figure css={figure}>
              <img 
                src={CDN_IMAGES.FIVA_COLLABORATION} 
                alt="콜라보레이션 팝업 이미지" 
                css={[image, containerImage]} 
                loading="lazy" 
                style={{ height: 'auto', objectFit: 'contain' }} 
              />
            </figure>
          </div>
          <figcaption css={captionStyle}>구현했던 화면들</figcaption>
        </div>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>동작인식 AI를 활용한 운동 게임</h3>
        </header>

        <p>
          토스피드의 아티클 페이지를 컨셉으로 구현해보았습니다. 아티클을 추가할 때마다 
          매번 레이아웃을 만드는 것은 번거로워서, <span css={highlightText}>Component Composition 패턴을 사용해 미리 만들어 둔 레이아웃에 데이터를 넣어주는 방식</span>으로 구현했습니다.
        </p>


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
  height: 500px;
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
  object-fit: cover;
`;

const imagesSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;