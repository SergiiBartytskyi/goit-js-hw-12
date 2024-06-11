import axios from 'axios';
import { BASE_URL, API_KEY } from './components';

async function fetchQuery(query, currentPage) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return response;
}

export default fetchQuery;
