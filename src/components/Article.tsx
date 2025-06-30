import { css } from "@emotion/react";
import type { ReactNode } from "react";

export type ArticleData = {
  title: string;
  imageUrl: string;
  content: ReactNode;
}

type ArticleRootProps = {
  header: ReactNode;
  content: ReactNode;
}

type ArticleHeaderProps = {
  title: string;
  imageUrl: string;
}

type ArticleContentProps = {
  children: ReactNode;
}

function ArticleRoot({ header, content }: ArticleRootProps) {
  return <div css={articleRoot}>
    {header}
    {content}
  </div>;
}

function ArticleHeader({ title, imageUrl }: ArticleHeaderProps) {
  return <div css={articleHeader}>
    <div css={articleHeaderTitle}>{title}</div>
    <img src={imageUrl} alt={title} css={articleHeaderImage} />
  </div>;
}

function ArticleContent({ children }: ArticleContentProps) {
  return <div css={articleContent}>{children}</div>;
}


const Article = {
  Root: ArticleRoot,
  Header: ArticleHeader,
  Content: ArticleContent,
}

export function createArticle(data: ArticleData) {
  return (
    <Article.Root
      header={
        <Article.Header
          title={data.title}
          imageUrl={data.imageUrl}
        />
      }
      content={
        <Article.Content>
          {data.content}
        </Article.Content>
      }
    />
  );
}

const articleRoot = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
`;

const articleHeaderTitle = css`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

const articleHeaderImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const articleContent = css`
  width: 100%;
  background-color: red;
  height: 100%;
  color: #fff;
`;

const articleHeader = css`
  width: 100%;
  height: 300px;
  background-color: green;
  color: #fff;
`;