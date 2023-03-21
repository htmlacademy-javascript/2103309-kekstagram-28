const newContainer = document.querySelector('.pictures');
const counterComments = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');
const renderLiElements = document.querySelector('.social__comments');

const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (newPhotos) => {

  const fragment = document.createDocumentFragment();

  newPhotos.forEach(({url, description, likes, comments}) => {
    const newElement = templateMiniatures.cloneNode(true);
    newElement.querySelector('img').src = url;
    const miniComments = newElement.querySelector('.picture__comments').textContent = comments.length;
    const miniLikes = newElement.querySelector('.picture__likes').textContent = likes;
    const miniDescription = newElement.querySelector('.picture__likes').alt = description;

    const renderCommentsList = (comment) => {

      newElement.addEventListener('click', () => {

        document.querySelector('.big-picture__img img').src = url;
        document.querySelector('.likes-count').textContent = miniLikes;
        document.querySelector('.comments-count').textContent = miniComments;
        document.querySelector('.social__caption').textContent = miniDescription;

        renderLiElements.innerHTML = '';

        comment.slice(-5).forEach((userComment) => {

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
          counterComments.classList.add('hidden');
          loadCommentButton.classList.add('hidden');
        });
      });

    };
    renderCommentsList(comments);

    fragment.appendChild(newElement);
  });
  newContainer.appendChild(fragment);

};

export {renderPhotos, newContainer};
