import './sass/main.scss';

import galleryCard from './templates/gallery-card.hbs';
import ApiService from './js/api';

const refs = {
  searchForm: document.getElementById('search-form'),
  galleryList: document.getElementById('gallery'),
  loadMore: document.querySelector('[data-action="load-more"]'),
};

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements.query.value;

  apiService.fetchArticles(searchQuery);
}

function onLoadMore() {
  apiService.fetchArticles(searchQuery);
}
