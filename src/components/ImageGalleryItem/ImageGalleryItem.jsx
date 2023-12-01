import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Item, SmallImage } from './ImageGalleryItem.styled';

export const GalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isModalOpen, isModalState] = useState(false);

  const handleOpenModal = () => isModalState(true);

  const handleCloseModal = () => isModalState(false);

  return (
    <Item>
      <SmallImage src={webformatURL} onClick={handleOpenModal} />

      <Modal
        modalIsOpen={isModalOpen}
        largeImageURL={largeImageURL}
        closeModal={handleCloseModal}
      />
    </Item>
  );
};
