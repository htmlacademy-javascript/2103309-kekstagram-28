import {renderNewComment} from './fullScreenPhotos.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {newContainer} from './rendering.js';

const renderCommentsList = document.querySelector('.social__comments');
const counterComments = document.querySelector('.social__comment-count');
const bigPictureComments = document.querySelector('.comments-count');
const loadCommentsButton = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const bigPhoto = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');

const PORTION_COMMENTS = 5;

const escClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    loadCommentsButton.classList.remove('hidden');
    document.removeEventListener('keydown', escClick);
    closeBigPicture.removeEventListener('click', closeBigPhoto);
    closeBigPicture.removeEventListener('keydown', onEnterKeydown);
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
  closeBigPicture.removeEventListener('keydown', onEnterKeydown);
  document.body.classList.remove('modal-open');
  loadCommentsButton.classList.remove('hidden');
}

function onEnterKeydown (evt) {
  if (isEnterKey(evt)) {
    closeBigPhoto();
  }
}


const renderBigPhoto = (data) => {
  const onPhotoClick = (evt) => {
    if (evt.target.closest('.picture')) {
      const target = evt.target.closest('.picture');
      const picture = data.find((item) => item.id === Number(target.dataset.id));
      bigPicture.classList.remove('hidden');
      loadCommentsButton.classList.remove('hidden');
      document.addEventListener('keydown', escClick);
      document.body.classList.add('modal-open');
      bigPhoto.src = picture.url;
      likesCount.textContent = picture.likes;
      bigPictureComments.textContent = picture.comments.length;
      socialCaption.textContent = picture.description;

      clearComments();
      renderNewComment(picture.comments, renderCommentsList);
      loadComments();

      closeBigPicture.addEventListener('click', closeBigPhoto);
      document.addEventListener('keydown', escClick);
      loadCommentsButton.addEventListener('click', loadComments);
    }
  };

  newContainer.addEventListener('click', onPhotoClick);
};

export{renderBigPhoto};
