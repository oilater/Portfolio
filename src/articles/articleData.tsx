import type { ReactNode } from 'react';
import PortfolioArticle from './PortfolioArticle.tsx';
import { ARTICLE_KEYS } from '../constants/article.ts';
import { CDN_IMAGES } from '../cdn.ts';
import FivaArticle from './FivaArticle.tsx';

export type ArticleData = {
  title: string;
  date: string;
  imageUrl: string;
  content: ReactNode;
}

type ArticleMap = Record<string, ArticleData>;

export const articleMap: ArticleMap = {
  
  [ARTICLE_KEYS.PORTFOLIO]: {
    title: "Rally 만드는 김에 포트폴리오도 만들어보자",
    date: "2025-06-30",
    imageUrl: CDN_IMAGES.PORTFOLIO_DETAIL,
    content: <PortfolioArticle />
  },
  [ARTICLE_KEYS.FIVA]: {
    title: "Unity로 개발한 FIVA 이야기",
    date: "2025-07-05",
    imageUrl: CDN_IMAGES.FIVA,
    content: <FivaArticle />
  },
};