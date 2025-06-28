import { useRef } from "react";
import { css } from "@emotion/react";
import { Top } from "../components/Top";
import { introduceTimeline } from "../timelines/IntroduceTimeline";
import { ListRow } from "../components/ListRow";
import { useGSAP } from "@gsap/react";

type MyData = {
  id: number;
  title: string;
  description: string;
};

export default function Introduce() {
  const introduceScope = useRef<HTMLDivElement>(null!);
  let introduceTl: gsap.core.Timeline;

  useGSAP(() => {
    introduceTl = introduceTimeline(myData.length).play();
  }, {scope: introduceScope});

  return (
    <div ref={introduceScope} css={introduceWrapper}>
        <Top.Root 
          title={
            <Top.Paragraph>
              <span className="topTitle">안녕하세요 🤗 </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">인터렉션을 통해 가치를 전달하고 싶은 지원자 김성현이라고 합니다.</p>
        <p className="mainDescription2"><span css={highlight}>디테일이 완성도를 만든다</span>는 생각으로 사용자의 입장에서 UI를 개발해왔습니다.</p>
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
    </div>
  );
}

const myData: MyData[] = [
  {
    id: 1,
    title: '📚 성장하기 위해 노력합니다',
    description: '새로운 기술을 익히기보다 공식문서를 꼼꼼히 읽으며 React의 기본기를 다졌습니다. TypeScript를 통해 타입 안전성을 높이고 이해하기 쉬운 코드를 만들기 위해 노력합니다.',
  },
  {
    id: 2,
    title: '🧚🏻 인터렉션 시스템을 개발했습니다',
    description: 'SLASH 23에서 토스 인터렉션 팀의 Rally를 보고 저만의 인터렉션 시스템을 만들어보고 싶었습니다. 여러 시행착오 끝에 사용하기 쉽고 확장성이 좋은 Rally의 구조를 따라 만들게 되었습니다. 이 포트폴리오도 Rally를 사용해 제작했습니다 😀',
  },
  {
    id: 3,
    title: '👨🏼‍💻 토스에서 함께 일하고 싶습니다',
    description: '업무에 불필요한 일을 줄이고, 개발에 몰입하여 최고의 서비스를 만드는 토스에서 함께 성장하고 싶습니다. UI 개발이라면 밤도 거뜬히 샐 수 있는 저의 열정을 토스에서 발휘하겠습니다.',
  },
];

const introduceWrapper = css`
  width: 100%;
  height: 850px;
`;

const listSection = css`
  background: rgba(26, 30, 36);
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
  line-height: 1.65;
  word-wrap: break-word;
  max-width: 100%;
  box-sizing: border-box;
`;

const mainDescription = css`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  padding: 10px 24px;
  line-height: 1.65;
`;

const highlight = css`
  color:rgb(187, 215, 255);
  font-weight: 700;
`;