import { css } from "@emotion/react";

export default function RallyRefactoringArticle() {
  return (
    <div>
      <section css={section}>
        <p>
          <span css={highlightText}>현재 작성 중인 글입니다.</span>
        </p>
      </section>
    </div>
  );
}

const section = css`
  margin-bottom: 4rem;
`;

const highlightText = css`
  color: #fff;
  background-color: rgba(63, 213, 153, 0.21);
  border-radius: 2px;
  letter-spacing: 0em;
`;