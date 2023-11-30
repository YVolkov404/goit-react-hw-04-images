import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixSettings } from './notiflix';
import { Component } from 'react';
import { Searchbar, Logotype } from './Searchbar/Searchbar';
import { Container, Header } from './App.styled';
import { LoadMoreButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from '../services/Api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    total: 0,
  };

  async componentDidMount() {
    // const { query } = this.state;

    try {
      const response = await FetchImages('ukraine');
      const images = response.hits;

      this.setState({
        images: images,
      });
    } catch (error) {}
  }

  searchQueryHandler = searchQuery => {
    const query = searchQuery.text;

    this.setState({
      query: query,
      images: [],
      page: 1,
    });
  };

  loadMoreBtnHandler = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ isLoading: true });

        const { hits: images, totalHits } = await FetchImages(query, page);
        const total = Math.ceil(totalHits / 12);

        if (total === 0) {
          throw new Error();
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            total: total,
            isLoading: false,
          };
        });
      }
    } catch (error) {
      Notify.info(
        'Sorry! There are no available images to display',
        notiflixSettings
      );
    }
  }

  render() {
    const { images, isLoading, total, page } = this.state;
    return (
      <Container>
        <Header>
          <Logotype title="ImagineSearch" />
          {isLoading && <Loader />}
          <Searchbar onSubmit={this.searchQueryHandler} />
        </Header>
        {images.length !== 0 && <ImageGallery images={images} />}
        {images.length > 0 && page < total && (
          <LoadMoreButton title="Load more" onClick={this.loadMoreBtnHandler} />
        )}
      </Container>
    );
  }
}
