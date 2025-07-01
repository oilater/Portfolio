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
        <p className="mainDescription2"><span css={highlight}>디테일이 완성도를 만든다</span>는 생각으로, 사용자의 경험을 생각하며 UI를 개발합니다.</p>
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
    description: '공식문서를 꼼꼼히 읽으며 React의 기본기를 다졌습니다. TypeScript를 통해 타입 안전성을 높이고 이해하기 쉬운 코드를 만들기 위해 노력합니다.',
  },
  {
    id: 2,
    title: '🧚🏻 인터렉션 시스템을 개발했습니다',
    description: 'SLASH에서 토스 인터렉션 팀의 Rally를 보고 저만의 인터렉션 시스템을 개발했습니다. 여러 시행착오 끝에 사용성고 확장성이 좋은 Rally의 구조를 참고했습니다.',
  },
  {
    id: 3,
    title: '👨🏼‍💻 토스에서 함께 성장하고 싶습니다',
    description: '개발에 몰입하는 환경에서 성장하고 싶습니다. 또한 사용자들에게 즐거움과 와우 모먼트를 제공하는 서비스를 만들고 싶습니다. UI 개발이라면 밤도 거뜬히 샐 수 있는 저의 열정을 토스에서 발휘하겠습니다.',
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