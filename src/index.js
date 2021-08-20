import './sass/main.scss';

import galleryCard from './templates/gallery-card.hbs';
import galleryList from './templates/gallery-list.hbs';
import API from './js/api';

const refs = {
  input: document.getElementById('search-form'),
  galleryList: document.getElementById('gallery'),
};

refs.input.addEventListener('input', onSearch);

function onSearch(e) {}
