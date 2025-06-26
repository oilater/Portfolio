import { css } from "@emotion/react";

export function Intro() {
  return (
    <section>
      <h1 className="introTitle" css={title}>
        아이디어를 만드는<br />
        <span css={subTitle}>프론트엔드 개발자</span> 김성현입니다
      </h1>    
    </section>
  );
}

const title = css`
  font-size: calc(1.5rem + 2vw);
  color: white;
`;

const subTitle = css`
  color: #3182f6;
`;
