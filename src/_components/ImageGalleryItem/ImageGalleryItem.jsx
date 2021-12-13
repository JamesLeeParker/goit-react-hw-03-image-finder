import s from "./ImageGalleryItem.module.scss";

export default function ImageGalleryItem({ images }) {
  return images.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li key={id} id={id} className={s.galleryItem} largimage={largeImageURL}>
        <img className={s.galleryItemImg} src={webformatURL} alt={tags} />
      </li>
    );
  });
}
