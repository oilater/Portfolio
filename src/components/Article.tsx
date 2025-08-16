import type { ReactNode } from "react";
import type { ArticleData } from "../articles/articleData.ts";
import { lazy, Suspense, useEffect } from 'react';
import { Button } from "./Button.tsx";
import { ArrowDownIcon } from "./ArrowDownIcon.tsx";
import {
  articleRoot,
  articleHeader,
  articleHeaderTitleSection,
  articleHeaderTitle,
  articleHeaderDate,
  imageContainer,
  articleHeaderImage,
  imageGradient,
  articleContent,
  scrollDownButton
} from "../styles/Article.css";

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
      <article className={`${articleRoot} article`}>
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
    <div className={articleHeader}>
      <div className={articleHeaderTitleSection}>
        <div className={articleHeaderTitle}>{title}</div>
        <time dateTime={date} className={articleHeaderDate}>
          {date} ∙ 김성현
        </time>
      </div>
      <div className={imageContainer}>
        <img 
          src={imageUrl} 
          alt={title + "이미지"} 
          className={articleHeaderImage} 
          loading="lazy" 
        />
        <div className={imageGradient} />
      </div>
      <Button className={scrollDownButton} onClick={onScrollDown}>
        <ArrowDownIcon />
      </Button>
    </div>
  );
}

function ArticleContent({ children }: ArticleContentProps) {
  return <div className={articleContent}>{children}</div>;
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