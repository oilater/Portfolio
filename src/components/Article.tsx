import { css } from "@emotion/react";
import type { ReactNode } from "react";
import type { ArticleData } from "../articles/articleData.ts";
import { lazy, Suspense, useEffect } from 'react';
import { Button } from "./Button.tsx";
import { ArrowDownIcon } from "./ArrowDownIcon.tsx";
import { Colors } from "../theme/theme.ts";

type ArticleRootProps = {
  header: ReactNode;
  content: ReactNode;
}

type ArticleHeaderProps = {
  title: string;
  imageUrl: string;
  date: string;
}

type ArticleContentProps = {
  children: ReactNode;
}

function ArticleRoot({ header, content }: ArticleRootProps) {
  const ScrollProgressBar = lazy(() => import('./ScrollProgressBar'));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<></>}>
        <ScrollProgressBar trigger=".article" />
      </Suspense>
      <article css={articleRoot} className="article">
        {header}
        {content}
      </article>
    </>
  );
}

function ArticleHeader({ title, date, imageUrl }: ArticleHeaderProps) {
  const onScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div css={articleHeader}>
      <div css={articleHeaderTitleSection}>
        <div css={articleHeaderTitle}>{title}</div>
        <time dateTime={date} css={articleHeaderDate}>
          {date} ∙ 김성현
        </time>
      </div>
      <div css={imageContainer}>
        <img 
          src={imageUrl} 
          alt={title + "이미지"} 
          css={articleHeaderImage} 
          loading="lazy" 
        />
        <div css={imageGradient} />
      </div>
      <Button css={scrollDownButton} onClick={onScrollDown}>
        <ArrowDownIcon />
      </Button>
    </div>
  );
}

function ArticleContent({ children }: ArticleContentProps) {
  return <div css={articleContent}>{children}</div>;
}

const Article = {
  Root: ArticleRoot,
  Header: ArticleHeader,
  Content: ArticleContent,
}

export function createArticle(article: ArticleData) {
  if (!article) return null;

  return (
    <Article.Root
      header={
        <Article.Header
          title={article.title}
          date={article.date}
          imageUrl={article.imageUrl}
        />
      }
      content={
        <Article.Content>
          {article.content}
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
  color: ${Colors.grey800};
`;

const articleHeader = css`
  width: 100%;
  position: relative;
  height: calc(-100px + 100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  color: #fff;
`;

const articleHeaderTitleSection = css`
  position: absolute;
  bottom: 20%;
  text-align: center;
  z-index: 2;
`;

const articleHeaderTitle = css`
  font-size: calc(1rem + 2vw);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const articleHeaderDate = css`
  font-size: 18px;
  font-weight: 400;
`;

const imageContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const articleHeaderImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const imageGradient = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  pointer-events: none;
  z-index: 1;
`;

const articleContent = css`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  height: 100%;
  font-size: 20px;
  white-space: pre-wrap;
  line-height: 1.68;
  margin-bottom: 10rem;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    font-size: 18px;
  }
`;

const scrollDownButton = css`
  position: absolute;
  bottom: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 3;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;