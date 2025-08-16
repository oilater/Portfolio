import type { ReactNode } from "react";
import { 
  card, 
  cardImageWrapper, 
  cardImage, 
  cardContent, 
  cardTitle, 
  cardDescription, 
  cardTags 
} from "../styles/Card.css";

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
    <div className={card} onClick={onClick}>
      <div className={cardImageWrapper}>
        <img src={image} alt="" className={cardImage} loading="lazy" />
      </div>
      <div className={cardContent}>
        {children}
      </div>
    </div>
  );
}

function CardTitle({ children }: CardTitleProps) {
  return <p className={cardTitle}>{children}</p>;
}

function CardDescription({ children }: CardDescriptionProps) {
  return <p className={cardDescription}>{children}</p>;
}

function CardTags({ children }: CardTagsProps) {
  return <div className={cardTags}>{children}</div>;
}

export const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription,
  Tags: CardTags,
};