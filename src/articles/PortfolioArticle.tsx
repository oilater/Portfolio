import { css } from "@emotion/react";
import rallyStructure from "../assets/images/rally-structure.jpg";

export default function PortfolioArticle() {
    return (
      <div>
        <section css={section}>
        <p>SLASH에서 토스의 Rally를 접하고 인터랙션에 관심을 갖게 되었습니다. 처음에는 <b>컴포넌트 방식이나 useSlide</b> 같은 커스텀 훅들을 구현해보기도 했지만, 사용성과 확장성 측면에서 Rally의 구조가 가장 적합하다고 판단해 따라 만들어보게 되었습니다.
        또한 <span css={highlightText}>토스피드 컨셉</span>으로 포트폴리오를 구성하면서 UX와 성능 최적화를 위해 고민했던 과정을 소개합니다 😀
        </p>
        </section>
        
        <section css={section}>
            <h3 css={sectionTitle}>
                Rally 구현 과정
            </h3>    

            <p>먼저, Rally의 실제 사용 사례를 보고 구조를 정리해보았습니다.</p>

            <figure css={figure}>
                <img src={rallyStructure} alt="Rally의 예상 구조 이미지" css={image} />
            <figcaption css={captionStyle}>실제 사용 사례를 보고 예상해본 Rally 구조</figcaption>
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
    font-size: 24px;
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
  border-radius: 4px;
`;


const captionStyle = css`
  font-size: 13px;
  color: #9E9EA4;
  line-height: 1.2;
  margin: 0;
  margin-top: 6px;
`;