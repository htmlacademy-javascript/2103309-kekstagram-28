import {isEscapeKey} from './util.js';
import {onDocKeydown} from './loading_window.js';

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const pressKeySuccessful = (evt) => {
  if (isEscapeKey(evt)) {
    const successModal = document.querySelector('.success');
    successModal.remove();
    document.removeEventListener('keydown', pressKeySuccessful);
  }
};

const pressKeyError = (evt) => {
  if (isEscapeKey(evt)) {
    const errorModal = document.querySelector('.error');
    errorModal.remove();
    document.removeEventListener('keydown', pressKeyError);
    document.addEventListener('keydown', onDocKeydown);
  }
};

const clickOutStateModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', pressKeySuccessful);
  } else if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();

    document.removeEventListener('keydown', pressKeyError);
    document.addEventListener('keydown', onDocKeydown);
  }
};

const ClickButtonSuccess = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', pressKeySuccessful);
};

const loadingSuccessNotice = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');
  successModal.addEventListener('click', clickOutStateModal);
  successButton.addEventListener('click', ClickButtonSuccess);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', pressKeySuccessful);
};

const onErrorButtonClick = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', pressKeyError);
  document.addEventListener('keydown', onDocKeydown);
};

const loadingErrorNotice = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');
  errorModal.addEventListener('click', clickOutStateModal);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onDocKeydown);
  document.addEventListener('keydown', pressKeyError);
};


export {loadingSuccessNotice, loadingErrorNotice};
