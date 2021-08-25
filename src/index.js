import './sass/main.scss';

import galleryCard from './templates/gallery-card.hbs';
import ApiService from './js/api';

const refs = {
  searchForm: document.getElementById('search-form'),
  galleryList: document.querySelector('.gallery'),
  loadMore: document.querySelector('[data-action="load-more"]'),
};

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.query.value;
  apiService.clearPage();
  apiService.fetchArticles().then(appendMarkup);
}

function onLoadMore() {
  apiService.fetchArticles().then(appendMarkup);
}

function appendMarkup(articles) {
  refs.galleryList.insertAdjacentHTML('beforeend', galleryCard(articles));
}

function clearGallery() {
  refs.galleryList.innerHTML = '';
}
