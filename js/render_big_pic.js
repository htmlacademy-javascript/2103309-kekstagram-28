import {newContainer} from './miniatures.js';
const counterComments = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');
const renderLiElements = document.querySelector('.social__comments');

const renderComentsList = (newPhotos) => {
  newContainer.innerHTML = '';
  newElement.addEventListener('click', () => {

  document.querySelector('.likes-count').textContent = newElement.querySelector('.picture__likes').textContent = likes;
  document.querySelector('.comments-count').textContent = newElement.querySelector('.picture__comments').textContent = comments.message.length;;
  document.querySelector('.social__caption').textContent = newElement.querySelector('.picture__likes').alt = description;

  newPhotos.slice(-3).forEach(() => {

    const renderComments = document.createElement('li');
    renderComments.classList.add('social__comment');
    const renderAvatar = document.createElement('img');
    renderAvatar.classList.add('social__picture');
    renderAvatar.src = comments.avatar;
    renderAvatar.name = comments.name;
    renderComments.appendChild(renderAvatar);
    const renderMessage = document.createElement('p');
    renderMessage.classList.add('social__text');
    renderMessage.textContent = comments.message;
    renderComments.appendChild(renderMessage);
    renderLiElements.appendChild(renderComments);
    counterComments.classList.add('hidden');
    loadCommentButton.classList.add('hidden');
  });
})};

export {renderComentsList};

