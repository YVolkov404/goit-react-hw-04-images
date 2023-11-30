import ReactModal from 'react-modal';
import { LargeImage, overlayClassName } from './Modal.styled';

ReactModal.setAppElement('#root');

export const Modal = ({ largeImageURL, closeModal, modalIsOpen }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={overlayClassName}
      shouldCloseOnOverlayClick={true}
    >
      <LargeImage src={largeImageURL} />
    </ReactModal>
  );
};
