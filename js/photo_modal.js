import {newContainer} from './miniatures.js';
import {newPhotos} from './main.js';
import { renderNewComment } from './fullScreenPhotos.js';
import { isEscapeKey } from './util.js';
const renderCommentsList = document.querySelector('.social__comments');
const counterComments = document.querySelector('.social__comment-count');
const bigPictureComments = document.querySelector('.comments-count');
const loadCommentsButton = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const PORTION_COMMENTS = 5;

const escClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const clearComments = () => {
  while (renderCommentsList.firstChild) {
    renderCommentsList.removeChild(renderCommentsList.firstChild);
  }
};

const showComments = (arr, count) => {
  for (let i = 0; i < count; i++) {
    arr[i].classList.remove('hidden');
  }
  counterComments.textContent = `${renderCommentsList.children.length - renderCommentsList.querySelectorAll('.hidden').length} из ${renderCommentsList.children.length} комментариев`;
};

const loadComments = () => {
  const hiddenComments = renderCommentsList.querySelectorAll('.hidden');

  if (hiddenComments.length > PORTION_COMMENTS) {
    showComments(hiddenComments, PORTION_COMMENTS);
  }
  if (hiddenComments.length <= PORTION_COMMENTS) {
    showComments(hiddenComments, hiddenComments.length);
    loadCommentsButton.classList.add('hidden');
  }
};

function closeBigPhoto () {
  bigPicture.classList.add('hidden');
  loadCommentsButton.removeEventListener('click', loadComments);
  closeBigPicture.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', escClick);
  document.body.classList.remove('modal-open');
  loadCommentsButton.classList.remove('hidden');
}

const onPhotoClick = (evt) => {
  if (evt.target.closest('.picture')) {
    const target = evt.target.closest('.picture');
    const picture = newPhotos.find((item) => item.id === +target.dataset.miniatureId);
    bigPicture.classList.remove('hidden');
    loadCommentsButton.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPicture.querySelector('.big-picture__img').querySelector('img').src = picture.url;
    bigPicture.querySelector('.likes-count').textContent = picture.likes;
    bigPictureComments.textContent = picture.comments.length;
    bigPicture.querySelector('.social__caption').textContent = picture.description;

    clearComments();
    renderNewComment(picture.comments);
    loadComments();

    closeBigPicture.addEventListener('click', closeBigPhoto);
    document.addEventListener('keydown', escClick);
    loadCommentsButton.addEventListener('click', loadComments);
  }
};

newContainer.addEventListener('click', onPhotoClick);
