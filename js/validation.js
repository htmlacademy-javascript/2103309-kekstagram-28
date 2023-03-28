import {imgUploadForm, inputHashtag, inputComment} from './loading_window.js';
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX = 5;
const COMMENT_MAX_LENGTH = 200;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

// проверка написания х-т.
const checkHashtag = (value) => {
  const hashTages = value.split(' ');
  return !value.length ? true : hashTages.every((hashtag) => HASHTAG.test(hashtag));
};

pristine.addValidator(
  inputHashtag,
  checkHashtag,
  'Неверное написание хэш-тега.'
);

// проверка колличества х-т.
const checkHashtagCount = (value) => {
  const hashTages = value.split(' ');
  return hashTages.length <= HASHTAG_MAX;
};

pristine.addValidator(
  inputHashtag,
  checkHashtagCount,
  `Недопустимое колличество хэш-тегов. Максимум ${HASHTAG_MAX} хэш-тегов.`
);

// проверка дубликатов х-т.
const checkSameHashtags = (value) => {
  const hashTages = value.toLowerCase().split(' ');
  return new Set(hashTages).size === hashTages.length;
};

pristine.addValidator(
  inputHashtag,
  checkSameHashtags,
  'Недопустимый хэш-тег. Дубликат.'
);

// проверка длинны комментариев.
const validateComment = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(
  inputComment,
  validateComment,
  `Недопустимое колличество символов. Максимум ${COMMENT_MAX_LENGTH} символов.`
);

imgUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
