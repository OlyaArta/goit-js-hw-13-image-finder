const API_KEY = '22999065-3fa49f66c111c7f1f9c9e2a79';
const BASE_URL = 'https://pixabay.com/api/';

const opt = {
  header: {
    Authorization: API_KEY,
  },
};

export default class ApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  fetchArticles() {
    console.log(this);
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url, opt)
      .then(response => response.json())
      .then(data => {
        this.nextPage();

        return data.articles;
      });
  }

  nextPage() {
    this.page += 1;
  }

  clearPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
