import './sass/main.scss';

import galleryCard from './templates/gallery-card.hbs';
import galleryList from './templates/gallery-list.hbs';
//import API from './js/api';

const refs = {
  input: document.getElementById('search-form'),
  galleryList: document.getElementById('gallery'),
  loadMore: document.querySelector('[data-action="load-more"]'),
};

refs.input.addEventListener('input', fetchGallery);

function fetchGallery(search) {
  this.page = 1;
  this.search = '';
  /*  const response = await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.search}&page=${this.page}&per_page=12&key=22999065-3fa49f66c111c7f1f9c9e2a79`,
    );
    const newGallery = await response.json();
    return newGallery;
  } catch (error) {
    console.error(error);
  }*/

  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.search}&page=${this.page}&per_page=12&key=22999065-3fa49f66c111c7f1f9c9e2a79`,
  ).then(response => response.json());
}

//export default { fetchGallery };

function onSearch(e) {
  const search = e.target.value;
  refs.galleryList.innerHTML = '';
  if (search.trim() === '') {
    return;
  }

  // const firstPage = 1;
  // const resetPage = 1;
  // const nextPage = firstPage + 1;

  fetchGallery(search).then(images => {
    const galleryListHTML = galleryList(images);
    refs.galleryList.innerHTML = galleryListHTML;
  });
}

/*function imagesMarkup(newGallery) {
  galleryList.insertAdjacentHTML('beforeend', galleryCard(newGallery));
}

function clearGallery() {
  galleryList.innerHTML = '';
}*/
