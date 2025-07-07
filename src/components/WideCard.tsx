import { css } from "@emotion/react";

type WideCardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

export function WideCard({ title, description, image, onClick }: WideCardProps) {
  return (
    <div css={wideCard} onClick={onClick}>
      <div css={cardImageWrapper}>
        <img src={image} alt={title} css={cardImage} loading="lazy" />
      </div>
      <div css={cardContent}>
        <span css={categoryText}>FIVA 이야기</span>
        <h3 css={cardTitle}>{title}</h3>
        <p css={cardDescription}>{description}</p>
      </div>
    </div>
  );
}

const wideCard = css`
  display: flex;
  width: 100%;
  height: auto;
  background: inherit;
  color: #E4E4E5;
  transition: background 0.2s ease;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 400px;
  }

  &:hover h3 {
    color: #3182f6;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const cardImageWrapper = css`
  flex: 0 0 60%;
  aspect-ratio: 7/5;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    aspect-ratio: 7/5; // 7:5 비율로 변경
    position: relative;
    border-radius: 16px;
  }
`;

const cardImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-out;
  transform: translateZ(0);

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const cardContent = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
  justify-content: flex-start;
    padding: 24px;
    gap: 16px;
  }
`;

const categoryText = css`
  font-size: 20px;
  font-weight: 500;
  color: #C3C3C6;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const cardTitle = css`
  font-size: 32px;
  font-weight: 600;
  color: #E4E4E5;
  margin: 0;
  line-height: 1.3;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const cardDescription = css`
  font-size: 1.1rem;
  font-weight: 400;
  color: #9E9EA4;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;