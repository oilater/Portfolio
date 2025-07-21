import { css } from "@emotion/react";
import { Colors } from "../theme/theme.ts";
import type { ReactNode } from "react";

type CardRootProps = {
  image: string;
  onClick?: () => void;
  children: ReactNode;
};

type CardTitleProps = {
  children: ReactNode;
};

type CardDescriptionProps = {
  children: ReactNode;
};

type CardTagsProps = {
  children: ReactNode;
};

function CardRoot({ image, onClick, children }: CardRootProps) {
  return (
    <div css={card} onClick={onClick}>
      <div css={cardImageWrapper}>
        <img src={image} alt="" css={cardImage} loading="lazy" />
      </div>
      <div css={cardContent}>
        {children}
      </div>
    </div>
  );
}

function CardTitle({ children }: CardTitleProps) {
  return <p css={cardTitle}>{children}</p>;
}

function CardDescription({ children }: CardDescriptionProps) {
  return <p css={cardDescription}>{children}</p>;
}

function CardTags({ children }: CardTagsProps) {
  return <div css={cardTags}>{children}</div>;
}

export const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription,
  Tags: CardTags,
};

// 스타일 정의
const card = css`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  background: inherit;
  border: 1px solid ${Colors.grey300};
  border-radius: 16px;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${Colors.opacity50};
  }
`;

const cardImageWrapper = css`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  padding: 0;
`;

const cardImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-out;
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
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.grey800};
`;

const cardDescription = css`
  font-size: 15px;
  font-weight: 400;
  color: ${Colors.grey600};
`;

const cardTags = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;