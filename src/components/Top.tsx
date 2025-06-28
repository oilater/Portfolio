import { css } from "@emotion/react";
import { type ReactNode } from 'react';

type TopRootProps = {
  title: ReactNode;
};

export const TopRoot = ({ title }: TopRootProps) => {
  return <div css={rootStyle}>{title}</div>;
};

type TopParagraphProps = {
  children: ReactNode;
};

function TopParagraph({ children }: TopParagraphProps) {
  return (
      <p className="topParagraph" css={paragraphStyle}>{children}</p>
  );
}

export const Top = {
  Root: TopRoot,
  Paragraph: TopParagraph,
};

// style
const rootStyle = css({
  width: '100%',
  padding: '40px 16px 8px',
});

const paragraphStyle = css({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#E4E4E5',
  });
  