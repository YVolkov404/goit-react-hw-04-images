import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <GalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </List>
  );
};
