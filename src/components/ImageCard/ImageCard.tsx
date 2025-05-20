import { Image } from "../../App";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}
export const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
  const { urls, alt_description } = image;
  return (
    <div className={s.imageWrapper}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => onImageClick(image)}
        width="500"
      />
    </div>
  );
};
