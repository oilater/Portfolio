import { useParams } from 'react-router-dom';
import { createArticle } from '../components/Article';
import { articleMap } from '../articles/articleData';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  if (!id || !articleMap[id]) {
    return <div>해당 아티클을 찾을 수 없습니다.</div>;
  }

  return createArticle(articleMap[id]);
}