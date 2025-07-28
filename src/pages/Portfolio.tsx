import { css } from "@emotion/react";
import { Content } from "./Content";
import Intro from "./Intro";
import Introduce from "./Introduce";
import { Work } from "./Work";
import { Education } from "./Education";
import { Outro } from "./Outro";

export default function Portfolio() {
  return (
    <div css={container}>
      <main css={wrapper}>
          <Intro />
          <Introduce />
          <Work />
          <Content />
          <Education />
          <Outro />
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
  padding-top: 60px;
`;