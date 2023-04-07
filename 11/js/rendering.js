const PICTURE_COUNT = 10;
const SORT_NUMBER = 0.5;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
let descriptionDataFiltered = [];
let currentFilter = Filter.DEFAULT;

const newContainer = document.querySelector('.pictures');
const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');
const imageFilterButtonForm = document.querySelector('.img-filters__form');

const imgFilters = document.querySelector('.img-filters');
const imageFilterButton = imageFilterButtonForm.querySelectorAll('.img-filters__button');

const newFragment = document.createDocumentFragment();

const randomSort = () => Math.random() - SORT_NUMBER;

const discussedSort = (a, b) => b.comments.length - a.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...descriptionDataFiltered].sort(randomSort).slice(0, PICTURE_COUNT);
    case Filter.DISCUSSED:
      return [...descriptionDataFiltered].sort(discussedSort);
    default:
      return [...descriptionDataFiltered];
  }
};

const renderingNewGallery = (array) => {
  newContainer.querySelectorAll('.picture').forEach((item) => item.remove());

  array.forEach((newPhoto) => {
    const newElement = templateMiniatures.cloneNode(true);
    newElement.querySelector('.picture__img').src = newPhoto.url;
    newElement.querySelector('.picture__img').alt = newPhoto.description;
    newElement.querySelector('.picture__likes').textContent = newPhoto.likes;
    newElement.querySelector('.picture__comments').textContent = newPhoto['comments'].length;
    newElement.dataset.id = newPhoto.id;
    newFragment.append(newElement);
  });

  newContainer.append(newFragment);
};

const setOnFilterClick = (cb) => {
  imageFilterButtonForm.addEventListener('click', (evt) => {
    imageFilterButton.forEach((item) => item.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    cb(getFilteredPictures());
  });
};


const init = (loadedPictures, cb) => {
  imgFilters.classList.remove('img-filters--inactive');
  descriptionDataFiltered = [...loadedPictures];
  setOnFilterClick(cb);
};


export {newContainer, getFilteredPictures, renderingNewGallery, setOnFilterClick, init};
