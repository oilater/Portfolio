import { type ReactNode } from 'react';
import { rootStyle, paragraphStyle } from '../styles/components/Top.css';

type TopRootProps = {
  title: ReactNode;
};

export const TopRoot = ({ title }: TopRootProps) => {
  return <div className={rootStyle}>{title}</div>;
};

type TopParagraphProps = {
  children: ReactNode;
};

function TopParagraph({ children }: TopParagraphProps) {
  return (
      <p className={`topParagraph ${paragraphStyle}`}>{children}</p>
  );
}

export const Top = {
  Root: TopRoot,
  Paragraph: TopParagraph,
};
  