import {
  wideCard,
  cardImageWrapper,
  cardImage,
  cardContent,
  categoryText,
  cardTitle,
  cardDescription,
  categoryTextHover,
  cardTitleHover,
  cardDescriptionHover
} from "../styles/WideCard.css";

type WideCardProps = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  onClick?: () => void;
};

export function WideCard({ title, description, image, subTitle, onClick }: WideCardProps) {
  return (
    <div className={wideCard} onClick={onClick}>
      <div className={cardImageWrapper}>
        <img src={image} alt={title} className={cardImage} loading="lazy" />
      </div>
      <div className={cardContent}>
        <span className={`${categoryText} ${categoryTextHover}`}>{subTitle}</span>
        <h3 className={`${cardTitle} ${cardTitleHover}`}>{title}</h3>
        <p className={`${cardDescription} ${cardDescriptionHover}`}>{description}</p>
      </div>
    </div>
  );
}