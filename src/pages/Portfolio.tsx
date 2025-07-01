import { css } from "@emotion/react";
import { Project } from "./Project";
import Intro from "./Intro";
import Introduce from "./Introduce";
import { stepAtom } from "../stores/step-store";
import { useAtom } from "jotai";

export default function Portfolio() {
  const [step] = useAtom(stepAtom);

  return (
    <div css={container}>
      <main css={wrapper}>
        {step === 'init' && <Intro />}

        {step === 'introduce' &&
          <div css={pages}>
            <Introduce />
            <Project />
          </div>
        }
      </main>
    </div>
  );
}

const container = css`
  width: 100%;
`;

const wrapper = css`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const pages = css`
  padding-top: 60px;
`;