import axios from 'axios';
import { apiKey } from './apiKey';
import { BASE_URL } from './url';

// const apiKey = import.meta.env.VITE_API_KEY;

export class FetchAPI {
  constructor() {
    this.searchQuery = '';
    this.currentPage = 1;
    this.totalPages = null;
  }

  async fetchQuery() {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: apiKey,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.currentPage,
        per_page: 15,
      },
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }

  totalNumberOfPages(totalPages, pageLength) {
    this.totalPages = Math.ceil(totalPages / pageLength);
  }
}
