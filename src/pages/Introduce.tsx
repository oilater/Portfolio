import { useRef } from "react";
import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { introduceTimeline } from "../Timelines/IntroduceTimeline";
import { ListRow } from "../components/ListRow";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type MyData = {
  id: number;
  title: string;
  description: string;
};

export default function Introduce() {
  const introduceScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    introduceTimeline(myData.length).play();
  }, {scope: introduceScope});

  useGSAP(() => {
    // gsap.fromTo(".box", 
    //   {
    //     opacity: 0,
    //     y: -100,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: ".scrollBox",
    //       start: "top 80%",
    //       end: "bottom 10%",
    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );
  });

  return (
    <div ref={introduceScope} css={introduceWrapper}>
        <Top.Root 
          title={
            <Top.Paragraph>
              <span className="topTitle">저를 소개합니다 🤗 </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">안녕하세요, 토스에서 아름다운 화면을 개발하고 싶은 지원자 김성현이라고 합니다. <br/>
          <span css={highlight}>서비스의 완성도는 디테일에서 나온다</span>는 생각으로 항상 사용자의 입장에서 UI를 개발했습니다.</p>
      </div>
      <div className="listRowSection" css={listSection}>
        {myData.map((data, index) => (
          <ListRow key={data.id}>
            <div css={listWrapper} className={`listRow-${index}`} >
              <p className={`listRowTitle-${index}`} css={listRowTitle}>{data.title}</p>
              <p className={`listRowDescription-${index}`} css={listRowDescription}>
                {data.description}  
              </p>
            </div>
          </ListRow>
        ))}
      </div>

      <div className="scrollBox" css={scrollTrigger}>
        <div className="box" css={scrollTriggerContent}>
          <p>ScrollTrigger</p>
        </div>
      </div>
    </div>
  );
}

const scrollTrigger = css`
  margin-top: 5rem;
  width: 500px;
  height: 1000px;
  background: blue;
`;

const scrollTriggerContent = css`
  width: 500px;
  height: 500px;
  background: green;
`;

const myData: MyData[] = [
  {
    id: 1,
    title: '📚 기본기에 충실하고, 성장하기 위해 노력합니다',
    description: '공식문서를 꼼꼼히 정독하며 React의 기본기를 다졌습니다. 또한, TypeScript를 통해 타입 안전성을 높이고 이해하기 쉬운 코드를 작성하기 위해 노력합니다.',
  },
  {
    id: 2,
    title: '🧚🏻 인터렉션 시스템을 개발했습니다',
    description: 'SLASH 23을 통해 알게된 토스 인터렉션 팀의 Rally를 보고 저만의 인터렉션 시스템을 만들어보고 싶었습니다. 여러 시행착오 끝에 사용하기 쉽고 확장성이 좋은 Rally의 구조를 따라 만들어보았습니다. 이 포트폴리오도 Rally를 사용해 제작했습니다 😀',
  },
  {
    id: 3,
    title: '👨🏼‍💻 토스에서 함께 일하고 싶습니다',
    description: '업무에 불필요한 비용을 줄이고, 개발에 몰입하여 최고의 서비스를 만드는 토스에서 함께 성장하고 싶습니다. UI 개발이라면 밤도 거뜬히 샐 수 있는 저의 열정을 토스에서 발휘하겠습니다.',
  },
];

const introduceWrapper = css`
  width: 100%;
  height: 100%;
`;

const listSection = css`
  background: rgb(36, 36, 38);
  border-radius: 12px;
  padding: 10px;
  margin: 0 24px;
  margin-top: 2rem;
`;

const listWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3rem;
  padding: 18px;
`;

const listRowTitle = css`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

const listRowDescription = css`
  padding-left: 30px;
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  line-height: 1.7;
  word-wrap: break-word;
  max-width: 100%;
  box-sizing: border-box;
`;

const mainDescription = css`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  padding: 10px 24px;
  line-height: 1.7;
`;

const highlight = css`
  color:rgb(187, 215, 255);
  font-weight: 700;
`;