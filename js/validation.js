import {imgUploadForm} from './loading_window.js';

const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX = 7;
const COMMENT_MAX_LENGTH = 200;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const checkHashtag = (value) => {
  const hashTages = value.split(' ');
  return !value.length ? true : hashTages.every((hashtag) => HASHTAG.test(hashtag));
};

const checkHashtagCount = (value) => {
  const hashTages = value.split(' ');
  return hashTages.length <= HASHTAG_MAX;
};

const checkSameHashtags = (value) => {
  const hashTages = value.toLowerCase().split(' ');
  return new Set(hashTages).size === hashTages.length;
};

const validateComment = (value) => value.length <= COMMENT_MAX_LENGTH;

//пристин
pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  checkHashtag,
  'Неверный хэш-тег.'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  checkHashtagCount,
  'Недопустимое колличество хэш-тегов. Максимум 7 хэштегов.'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  checkSameHashtags,
  'Недопустимые хэш-тег. Дубликат.'
);

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComment,
  'Недопустимое колличество символов. Максимум 200 символов. '
);

imgUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
