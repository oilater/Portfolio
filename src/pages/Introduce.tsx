import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAtom } from "jotai";
import { css } from "@emotion/react";
import { Top } from "../components/Top.tsx";
import { ListRow } from "../components/ListRow.tsx";
import { animationPlayStateAtom } from "../stores/timelineStore.ts";
import { introduceTimeline } from "../timelines/introduceTimeline.ts";

type MyData = {
  id: number;
  title: string;
  description: string;
};

export default function Introduce() {
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);
  const introduceScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    if (isPlayed('introduce')) return;
    let introduceTl = introduceTimeline(myData.length).play();
    introduceTl.eventCallback('onComplete', () => setIsPlayed('introduce'));
  }, { scope: introduceScope });

  return (
    <div ref={introduceScope} css={introduceWrapper}>
        <Top.Root 
          title={
            <Top.Paragraph>
              <span className="topTitle">About me 🤗 </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">안녕하세요, 좋은 코드로 가치를 제공하고 싶은 지원자 김성현입니다.</p>
        <p className="mainDescription2"><span css={highlight}>디테일이 완성도를 만든다</span>는 생각으로, 사용자의 경험을 생각하며 개발합니다.</p>
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
    title: '📚 좋은 코드를 위해 고민하는 개발자',
    description: '공식문서를 꼼꼼히 학습하며 React스러운 코딩을 하기 위해 노력했습니다. TypeScript를 통해 타입 안전성을 높이고, 사용성이 높은 컴포넌트를 만들기 위해 노력합니다.',
  },
  {
    id: 2,
    title: '🧚🏻 인터렉션 시스템 개발',
    description: 'SLASH에서 토스 인터렉션 팀의 Rally를 접하고, 저만의 인터렉션 시스템을 만들어보고 싶었습니다. 모든 React Element에 쉽게 적용할 수 있는 인터렉션 시스템을 구현해 포트폴리오를 만들어보았습니다.',
  },
  {
    id: 3,
    title: '👨🏼‍💻 빠른 적응력과 실행력',
    description: '저는 새로운 기술과 업무 환경에 빠르게 적응하는 학습 능력과 실행력을 가지고 있습니다. 함께 일하게 된다면 빠른 성장 환경에서 빠르게 업무를 익히고, 사용자에게 가치 있는 서비스를 만들기 위해 최선을 다하겠습니다.',
  },
];

const introduceWrapper = css`
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
`;

const listSection = css`
  background: #2c2c35;
  border-radius: 16px;
  padding: 10px;
  margin: 0 16px;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
    margin: 0 12px;
    margin-top: 1.5rem;
  }
  
  @media (min-width: 769px) {
    gap: 1.5rem;
  }
`;

const listWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3rem;
  padding: 8px;
`;

const listRowTitle = css`
  font-size: 1.5rem;
  font-weight: 600;
  color: #E4E4E5;
`;

const listRowDescription = css`
  padding-left: 30px;
  font-size: 1.3rem;
  font-weight: 500;
  color: #C3C3C6;
  line-height: 1.65;
  word-wrap: break-word;
  max-width: 100%;
  box-sizing: border-box;
`;

const mainDescription = css`
  font-size: 1.3rem;
  font-weight: 500;
  color: #C3C3C6;
  padding: 10px 16px;
  line-height: 1.65;
`;

const highlight = css`
  color:#c8e7ff;
  font-weight: 700;
  border-radius: 4px;
`;