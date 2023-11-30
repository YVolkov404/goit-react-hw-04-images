import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Item, SmallImage } from './ImageGalleryItem.styled';

export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    return this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    return this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;

    return (
      <Item>
        <SmallImage src={webformatURL} onClick={this.handleOpenModal} />

        <Modal
          modalIsOpen={isModalOpen}
          largeImageURL={largeImageURL}
          closeModal={this.handleCloseModal}
        />
      </Item>
    );
  }
}
