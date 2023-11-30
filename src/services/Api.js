import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const FetchImages = async (query, page) => {
  const response = await axios('/', {
    method: 'get',
    params: {
      q: `${query}`,
      page: `${page}`,
      key: '39908765-01641b9876d1c1af0468ed447',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  });

  return response.data;
};
