import {isEscapeKey} from './util.js';
import {previewContainer,
  editableImage,
  decreaseCurrentScale,
  increaseCurrentScale,
  resetEffects,
  сhangeFilterType} from './slider.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUpload = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const inputHashtag = imgUploadForm.querySelector('.text__hashtags');
const inputComment = imgUploadForm.querySelector('.text__description');
const inputFile = imgUploadForm.querySelector('#upload-file');
const increaseValue = previewContainer.querySelector('.scale__control--bigger');
const decreaseValue = previewContainer.querySelector('.scale__control--smaller');

const onDocKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.getElementById('upload-select-image').reset();
    resetEffects();
    document.removeEventListener('keydown', onDocKeydown);
    editableImage.style.transform = 'none';
  }
  removeInputListener();
  decreaseValue.removeEventListener('click', decreaseCurrentScale);
  increaseValue.removeEventListener('click', increaseCurrentScale);
  imgUploadForm.removeEventListener('change', сhangeFilterType);
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
  decreaseValue.addEventListener('click', decreaseCurrentScale);
  increaseValue.addEventListener('click', increaseCurrentScale);
  imgUploadForm.addEventListener('change', сhangeFilterType);
  imgUploadCancel.addEventListener('click', closeEditor);
};

function closeEditor () {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputFile.value = '';
  editableImage.style.transform = 'none';

  resetEffects();
  removeInputListener();

  document.removeEventListener('keydown', onDocKeydown);
  decreaseValue.removeEventListener('click', decreaseCurrentScale);
  increaseValue.removeEventListener('click', increaseCurrentScale);
  imgUploadForm.removeEventListener('change', сhangeFilterType);
  imgUploadCancel.removeEventListener('click', closeEditor);
}

imgUpload.addEventListener('change', showEditor);

export {imgUpload, imgUploadForm, inputHashtag, inputComment, onDocKeydown, closeEditor};
