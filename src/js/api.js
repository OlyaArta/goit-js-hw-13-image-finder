async function fetchGallery() {
  try {
    //  this.page = 1;
    //  this.search = '';
    const response = await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.search}&page=${this.page}&per_page=12&key=22999065-3fa49f66c111c7f1f9c9e2a79`,
    );
    const newGallery = await response.json();
    return newGallery;
  } catch (error) {
    console.error(error);
  }

  // return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=22999065-3fa49f66c111c7f1f9c9e2a79
  // `).then(response => response.json());
}

export default { fetchGallery };
