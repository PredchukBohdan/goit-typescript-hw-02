import s from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";
import { Image } from "../../App";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={s.galleryImages}>
      {images.map((image, index) => (
        <li
          className={s.imagesItem}
          key={image.id}
          style={{ "--delay": `${index * 10}ms` } as React.CSSProperties}
        >
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};
