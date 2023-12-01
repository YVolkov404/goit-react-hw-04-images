import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixSettings } from '../libSettings/notiflix';
import { Searchbar, Logotype } from './Searchbar/Searchbar';
import { Container, Header } from './App.styled';
import { LoadMoreButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from '../services/Api';

//--------------------------------------------------------------
export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, isLoading] = useState(false);
  const [total, setTotal] = useState(0);

  //-------------------------------------------------------------
  useEffect(() => {
    async function updateShowcase() {
      try {
        isLoading(true);

        const { hits: images, totalHits } = await FetchImages(query, page);
        const total = Math.ceil(totalHits / 12);

        setImages(prevImages => [...prevImages, ...images]);
        setTotal(total);

        if (total === 0) {
          throw new Error();
        }
      } catch (error) {
        Notify.info(
          'Sorry! There are no available images to display',
          notiflixSettings
        );
      } finally {
        isLoading(false);
      }
    }
    updateShowcase();
  }, [page, query]);

  //--------------------------------------------------------------
  const searchQueryHandler = ({ text }) => {
    setQuery(text);
    setImages([]);
    setPage(1);
  };

  const loadMoreBtnHandler = () => {
    setPage(prevPage => prevPage + 1);
  };

  //--------------------------------------------------------------
  return (
    <Container>
      <Header>
        <Logotype title="ImagineSearch" />
        {loading && <Loader />}
        <Searchbar onSubmit={searchQueryHandler} />
      </Header>
      {images.length !== 0 && <ImageGallery images={images} />}
      {images.length >= 12 && page < total && (
        <LoadMoreButton title="Load more" onClick={loadMoreBtnHandler} />
      )}
    </Container>
  );
};
