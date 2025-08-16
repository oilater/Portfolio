import {
  card,
  cardImageWrapper,
  cardImage,
  cardContent,
  cardTitle,
  cardDescription
} from "../styles/components/InfoCard.css";

type InfoCardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  isHighPriority?: boolean;
};

export function InfoCard({ title, description, image, onClick, isHighPriority }: InfoCardProps) {
  return (
    <div className={card} onClick={onClick}>
      <div className={cardImageWrapper}>
        <img src={image} alt={title} className={cardImage} fetchPriority={isHighPriority ? 'high' : 'auto'} />
      </div>
      <div className={cardContent}>
        <p className={cardTitle}>{title}</p>
        <p className={cardDescription}>{description}</p>
      </div>
    </div>
  );
}