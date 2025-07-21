import { css } from "@emotion/react";
import { CDN_IMAGES } from "../cdn";
import { Colors } from "../theme/theme";

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
          Unity는 처음 접하는 에디터였지만 당시에 Flutter, SwiftUI 등 다양한 프레임워크에서 프로젝트를 만들어봐서
          금방 적응할 수 있었습니다.
          일주일 정도 기능들을 익히고, 간단한 게임을 만들어보며 에디터와 C#에 적응했고 곧바로 업데이트 스펙을 맡게 되었습니다.
          사실 웹에서도 UI 구현은 자신 있었는데, UI에 정말 비친화적인 유니티를 다루면서 어떤 언어든 UI는 잘 구현할 수 있겠다는 생각이 들었습니다.
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
          아바타가 움직이는 것 같아 보이지만, <span css={highlightText}>유저의 스와이프 delta에 따라 카메라를 돌리는 방식으로 구현했습니다.</span> 처음엔 
          간단한 기능이라 생각했지만 상하 또는 좌우 스와이프 방향, 한 손 또는 두 손, 축소 시 자연스럽게 돌아오도록 구현하기, 
          확대된 상태에서의 범위 제한 등 고려해야 할 것들이 생각보다 많았습니다. <span css={highlightText}>그래도 
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
          UI 디자이너 분이 새로 오셔서 전반적인 앱 디자인이 바뀌었습니다. <span css={highlightText}>특히 운동 탭이 전체적으로 개편되어서 
          유저들의 아바타를 2D인 UI 위에 함께 보여줄 수 있도록 수정했습니다.</span> 이외에도 빠른 업데이트 스펙을 따라가며 
          앱 캘린더, 챌린지 목록, 팝업 등 다양한 화면들을 구현했고, <span css={highlightText}>구현한 내용에 대해 QA 문서를 작성하여 테스트를 진행했습니다.</span> 3D Object에 
          스크립트를 붙이는 유니티 특성상 <span css={highlightText}>클래스마다 역할을 나누어 객체지향적으로 UI를 구현했습니다.</span>
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
          사수분이 구현하신 동작인식 AI 기능을 이용해 미니 게임 2종을 개발했습니다. <span css={highlightText}>게임들의 로직이 비슷해서, 
          BaseGameManager 클래스에 공통 로직을 만들고 게임 별로 차이가 있는 부분은 오버라이딩하여 구현했습니다.</span> 빠른 이슈 대응을 위해 
          게임에 사용하는 값들은 Firebase Realtime DB에 GameConfig 객체로 저장하여 <span css={highlightText}>앱 업데이트 없이 실시간으로 반영되도록 했고,</span> 동작마다 
          모션을 커스텀해 아바타 애니메이션을 적용하였습니다.
        </p>

        <figure css={figure}>
          <img src={CDN_IMAGES.FIVA_SKI_GAME} alt="스쿼트 스키 게임 이미지" css={[image, {objectFit: 'contain'}]} loading="lazy" />
          <figcaption css={captionStyle}>스쿼트 스키 게임</figcaption>
        </figure>

        <figure css={figure}>
          <img src={CDN_IMAGES.FIVA_ARM_GAME} alt="팔 운동 비행 게임 이미지" css={[image, {objectFit: 'contain'}]} loading="lazy" />
          <figcaption css={captionStyle}>팔 운동 비행 게임</figcaption>
        </figure>
      </section>

      <section css={section}>
        <header>
          <h3 css={sectionTitle}>활발한 코드 리뷰 문화</h3>
        </header>
        
        <article>
          <p>
            <span css={highlightText}>회사 생활을 하면서 가장 좋았던 것은 코드 리뷰 문화가 활발했다는 점입니다.</span> 모든 기능 구현 시 PR을 통해 코드 리뷰를 받았고,
            정말 감사하게도 사수분들께서 Line by Line으로 꼼꼼히 코드 리뷰를 해주셨습니다.
            입사 초반에는 한 PR에 코멘트가 20개 넘게 달린 적도 있어서 슬프기도 했지만, <span css={highlightText}>덕분에 꼼꼼히 코드를 작성하는 습관이 생겼고, 
            한 번 리뷰받은 부분은 다시 실수하지 않도록 노력하며 더 나은 코드를 작성하기 위해 고민했습니다.</span> 그리고 원활한 코드 리뷰를 위해 기능 별로 커밋하고, 
            이해하기 쉬운 함수 및 변수명을 사용하려고 노력했습니다.
          </p>

          <figure css={figure}>
            <img src={CDN_IMAGES.FIVA_CODE_REVIEW} alt="한 코드 리뷰" css={[image, {height: '300px', objectFit: 'contain'}]} loading="lazy" />
            <figcaption css={captionStyle}>입사 초빈에 받았던 코드 리뷰</figcaption>
          </figure>

          <figure css={figure}>
            <img src={CDN_IMAGES.FIVA_CODE_REVIEW_COMMENT} alt="코드 리뷰 코멘트 이미지" css={[image, {height: '200px', objectFit: 'contain'}]} loading="lazy" />
            <figcaption css={captionStyle}>뿌듯했던 코멘트</figcaption>
          </figure>
          <br/>

        </article>
        
        <br />
        
        <article>
          <header>
            <h3 css={sectionTitle}>FIVA 서비스 종료</h3>
          </header>
          <p>
            당시 유저 리텐션이 떨어져 다같이 회의하며 노력했지만 결국 2025년 3월 15일, FIVA 서비스를 종료하게 되었습니다.
            그래도 첫 회사에서 정말 좋은 팀원 분들을 만나 즐거웠습니다. 마지막에 팀원들과 메시지를 주고 받았는데, 모든 분들에게 분위기 메이커라는 얘기를 들었던 기억이 납니다.
            슬랙이 사라지는 바람에 하나밖에 안남아서 아쉽네요 🥹
          </p>  
          
          <figure css={figure}>
              <img src={CDN_IMAGES.FIVA_SLACK_MESSAGE} alt="FIVA 슬랙 메시지" css={[image, {height: '700px', objectFit: 'contain'}]} loading="lazy" />
              <figcaption css={captionStyle}>UX/UI 디자이너분께 받은 메시지</figcaption>
          </figure>

          <p>
            그리고 Unity 개발을 해보니, 게임보단 웹 개발이 더 재밌어서 다시 웹으로 돌아오게 되었습니다.
            차근차근, 꾸준히 공부하며 좋은 개발자가 되어야겠습니다.
            읽어주셔서 감사합니다!
          </p>  
            
          
        </article>
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
  color: ${Colors.grey800};
`;

const highlightText = css`
  color: ${Colors.grey800};
  font-weight: bold;
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
  color: ${Colors.grey800};
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