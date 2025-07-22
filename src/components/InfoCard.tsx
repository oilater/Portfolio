import { css } from "@emotion/react";
import { Colors } from "../theme/theme.ts";

type InfoCardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  isHighPriority?: boolean;
};

export function InfoCard({ title, description, image, onClick, isHighPriority }: InfoCardProps) {
  return (
    <div css={card} onClick={onClick}>
      <div css={cardImageWrapper}>
        <img src={image} alt={title} css={cardImage} fetchPriority={isHighPriority ? 'high' : 'auto'} />
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
  background: inherit;
  border-radius: 8px;
  will-change: transform, opacity;
`;

const cardImageWrapper = css`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
`;

const cardImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.08) translateZ(0);
  }
`;

const cardContent = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 10px;
`;

const cardTitle = css`
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.grey800};
`;

const cardDescription = css`
  font-size: 15px;
  font-weight: 400;
  color: ${Colors.grey600};
`;