import {isEscapeKey} from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUpload = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const inputHashtag = imgUploadForm.querySelector('.text__hashtags');
const inputComment = imgUploadForm.querySelector('.text__description');
const inputFile = imgUploadForm.querySelector('#upload-file');

const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.getElementById('upload-select-image').reset();
  }
  removeInputListener();
  imgUploadCancel.removeEventListener('click', closeEditor);
};

const inputInFocus = () => {
  document.removeEventListener('keydown', onDocKeydown);
};

const inputOutFocus = () => {
  document.addEventListener('keydown', onDocKeydown);
};

const addInputListener = () => {
  inputHashtag.addEventListener('focus', inputInFocus);
  inputComment.addEventListener('focus', inputInFocus);
  inputHashtag.addEventListener('blur', inputOutFocus);
  inputComment.addEventListener('blur', inputOutFocus);
};

function removeInputListener () {
  inputHashtag.removeEventListener('focus', inputInFocus);
  inputComment.removeEventListener('focus', inputInFocus);
  inputHashtag.removeEventListener('blur', inputOutFocus);
  inputComment.removeEventListener('blur', inputOutFocus);
}

const showEditor = () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addInputListener();

  document.addEventListener('keydown', onDocKeydown);
  imgUploadCancel.addEventListener('click', closeEditor);
};

function closeEditor () {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputFile.value = '';

  removeInputListener();

  document.removeEventListener('keydown', onDocKeydown);
  imgUploadCancel.removeEventListener('click', closeEditor);
}

imgUpload.addEventListener('change', showEditor);

export {imgUploadForm};
