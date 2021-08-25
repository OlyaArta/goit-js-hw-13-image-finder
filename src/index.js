import './sass/main.scss';

import galleryCard from './templates/gallery-card.hbs';
import ApiService from './js/api';
import LoadMoreBtn from './js/load-more-btn';

const refs = {
  searchForm: document.getElementById('search-form'),
  galleryList: document.querySelector('.gallery'),
  //loadMore: document.querySelector('[data-action="load-more"]'),
};

const apiService = new ApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  clearGallery();

  apiService.query = e.currentTarget.elements.query.value;
  // if (e.currentTarget.elements.query.value.trim() === '') {
  //  return;
  //}
  loadMoreBtn.show();
  apiService.clearPage();
  clearGallery();
  onLoadMore();

  /*refs.loadMoreBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });*/
}

function onLoadMore() {
  loadMoreBtn.disable();
  apiService.fetchArticles().then(articles => {
    clearGallery();
    appendMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendMarkup(articles) {
  refs.galleryList.insertAdjacentHTML('beforeend', galleryCard(articles));
}

function clearGallery() {
  refs.galleryList.innerHTML = '';
}
