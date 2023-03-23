import {newElement} from './miniatures.js';

const renderLiElements = document.querySelector('.social__comments');
const counterComments = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');

let commentsShow = 0;
const PORTION_COMMENTS = 5;

const renderCommentsList = (comments) => {

  newElement.addEventListener('click', () => {

    document.querySelector('.big-picture__img img').src = newElement.querySelector('img').src;
    document.querySelector('.likes-count').textContent = newElement.querySelector('.picture__comments').textContent;
    document.querySelector('.comments-count').textContent = newElement.querySelector('.picture__likes').textContent;
    document.querySelector('.social__caption').textContent = newElement.querySelector('.picture__likes').alt;

    renderLiElements.innerHTML = '';

    comments.slice(-5).forEach((userComment) => {

      const renderComments = document.createElement('li');
      renderComments.classList.add('social__comment');
      const renderAvatar = document.createElement('img');
      renderAvatar.classList.add('social__picture');
      renderAvatar.src = userComment.avatar;
      renderAvatar.name = userComment.name;
      renderComments.appendChild(renderAvatar);
      const renderMessage = document.createElement('p');
      renderMessage.classList.add('social__text');
      renderMessage.textContent = userComment.message;
      renderComments.appendChild(renderMessage);
      renderLiElements.appendChild(renderComments);

    });
  });

  const downloadNewComments = () => {
    loadCommentButton.addEventListener('click', () => {
      commentsShow += PORTION_COMMENTS;
      if (commentsShow >= comments.length) {

        loadCommentButton.classList.add('hidden');
        commentsShow = comments.length;

      } else {
        loadCommentButton.classList.remove('hidden');
      }

      const commentFragment = document.createDocumentFragment();
      for (let i = 0; i < commentsShow; i++) {

        const commentElement = renderCommentsList(comments[i]);

        commentFragment.append(commentElement);
      }
      renderLiElements.innerHTML = '';
      renderLiElements.append(commentFragment);
      counterComments.innerHTML = `${commentsShow} из <span class="comments-count">${comments.length}</span> комментариев`;
    });

  };
  downloadNewComments();
};

export {renderCommentsList};
