import {isEscapeKey, isEnterKey} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const renderCommentsList = bigPicture.querySelector('.social__comments');
const counterComments = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');
const elementListClone = renderCommentsList.querySelector('li').cloneNode(true);

let commentsShow = 0;
const PORTION_COMMENTS = 5;

const clickOnPhoto = (evt) => {
  if (isEscapeKey (evt)) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }
};

const renderNewComment = (commentsArray) => {
  renderCommentsList.innerHTML = '';
  const commentFragment = document.createDocumentFragment();

  commentsArray.forEach(({avatar, name, message}) => {
    const comment = elementListClone.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentFragment.append(comment);
  });
  renderCommentsList.append(commentFragment);
};

const renderBigPicture = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  renderNewComment(comments.slice(-5));
};

// тут будет функция добавления новых комментариев.
const downloadNewComments = () => {
  loadCommentButton.addEventListener('click', () => {
    commentsShow += PORTION_COMMENTS;
    if (commentsShow >= comment.length) {

      loadCommentButton.classList.add('hidden');
      commentsShow = comment.length;

    } else {
      loadCommentButton.classList.remove('hidden');
    }

    const commentFragment = document.createDocumentFragment();
    for (let i = 0; i < commentsShow; i++) {

      const commentElement = renderCommentsList(comment[i]);

      commentFragment.append(commentElement);
    }
    renderLiElements.innerHTML = '';
    renderLiElements.append(commentFragment);
    counterComments.innerHTML = `${commentsShow} из <span class="comments-count">${comment.length}</span> комментариев`;
  });
};
downloadNewComments(comment);

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureCloseButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', clickOnPhoto);
};

const openBigPicture = (bigPhoto) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureCloseButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', clickOnPhoto);

  renderBigPicture(bigPhoto);
};


export {openBigPicture};
