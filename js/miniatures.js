import {getAllUserPhotos} from './data.js';

//создаем контейнер для новых фотографий пользователей.
const newContainer = document.querySelector('.pictures');

const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');

const newPhotos = getAllUserPhotos();

const fragment = document.createDocumentFragment();

const renderPhotos = () => {

  newPhotos.forEach(({url, likes, comments}) => {
    const newElement = templateMiniatures.cloneNode(true);
    newElement.querySelector('img').src = url;
    newElement.querySelector('.picture__comments').textContent = comments.message.length;
    newElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(newElement);
  });

  newContainer.appendChild(fragment);
};

export {renderPhotos};
