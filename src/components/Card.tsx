import { css } from "@emotion/react";

type CardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

export function Card({ title, description, image, onClick }: CardProps) {
  return (
    <div css={card} onClick={onClick}>
        <div css={cardImageWrapper}>
          <img src={image} alt={title} css={cardImage} loading="lazy" />
        </div>
        <div css={cardContent}>
          <p css={cardTitle}>{title}</p>
          <p css={cardDescription}>{description}</p>
        </div>
    </div>
  );
}

const card = css`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 8px);
  vertical-align: top;
  background: 'inherit';
  border: 1px solid rgba(228, 228, 229, 0.5);
  border-radius: 16px;
  color: #E4E4E5;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #1e1e23;
  }
`;

const cardImageWrapper = css`
  width: 100%;
  aspect-ratio: 1.4;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  padding: 0;
`;

const cardImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-out;
  transform: translateZ(0);

  &:hover {
    transform: scale(1.08);
  }
`;

const cardContent = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
`;

const cardTitle = css`
  font-size: 1.4rem;
  font-weight: 600;
  color: #E4E4E5;
`;

const cardDescription = css`
  font-size: 1.05rem;
  font-weight: 400;
  color: #9E9EA4;
`;