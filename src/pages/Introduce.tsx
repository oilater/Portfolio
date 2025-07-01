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
              <span className="topTitle">About Me 🤗 </span>
            </Top.Paragraph>
          }
        />

      <div css={mainDescription}>
        <p className="mainDescription">안녕하세요, 인터렉션으로 가치를 전달하고 싶은 지원자 김성현입니다.</p>
        <p className="mainDescription2"><span css={highlight}>디테일이 완성도를 만든다</span>는 생각으로, 항상 사용자의 경험을 생각하며 개발하려고 노력합니다.</p>
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
    title: '📚 기본기를 쌓는 개발자',
    description: '공식문서를 꼼꼼히 학습하며 React스러운 코딩을 하기 위해 노력했습니다. TypeScript를 통해 타입 안전성을 높이고 이해하기 쉬운 코드를 만들기 위해 노력합니다.',
  },
  {
    id: 2,
    title: '🧚🏻 인터렉션 시스템 개발',
    description: 'SLASH에서 토스 인터렉션 팀의 Rally를 접하고, 저만의 인터렉션 시스템을 만들어보고 싶었습니다. 확장성이 좋은 Rally의 구조를 참고하여 구현해 포트폴리오에 적용해보았습니다.',
  },
  {
    id: 3,
    title: '👨🏼‍💻 토스 Frontend Assistant로 함께 성장하고 싶습니다',
    description: '좋은 코드를 만드는 개발자가 되고 싶습니다. 아직 기술적 역량이 뛰어나진 않지만, 빠르게 익숙해지고 적용하는 실행력이 저의 강점이라고 생각합니다. 함께 일하게 된다면 빠르게 업무를 익히고, 효율적인 서비스를 만들기 위해 최선을 다하겠습니다.',
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