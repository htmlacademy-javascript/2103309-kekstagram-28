import './miniatures.js';
import {isEscapeKey, isEnterKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPicturePreview = bigPicture.querySelector('.big-picture__preview');
const bigPictureCloseButton = bigPicturePreview.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicturePreview.querySelector('.big-picture__img img');

// делегирование   элемент, в котором произошло событие
export const clickOnPhoto = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    bigPictureImage.src = evt.target.src;
    document.body.classList.add('modal-open');
  }
};

document.addEventListener('click', clickOnPhoto);

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', clickOnPhoto);
  bigPictureCloseButton.removeEventListener('click', () => {
  });
};

// закрыть показ большой фото по клику мыши
bigPictureCloseButton.addEventListener('click', () => {
  closeBigPicture();
  document.body.classList.remove('modal-open');
});

// открыть показ большой фото по клику enter
document.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    clickOnPhoto();
  }
});

// закрыть показ большой фото по клику escape
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
});

