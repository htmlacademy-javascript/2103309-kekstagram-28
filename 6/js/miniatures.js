const newContainer = document.querySelector('.pictures');
const counterComments = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');
const renderLiElements = document.querySelector('.social__comments');

const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (newPhotos) => {

  const fragment = document.createDocumentFragment();

  newPhotos.forEach(({url, likes, comments, description }) => {
    const newElement = templateMiniatures.cloneNode(true);
    newElement.querySelector('img').src = url;
    const miniComments = newElement.querySelector('.picture__comments').textContent = comments.message.length;
    const miniLikes = newElement.querySelector('.picture__likes').textContent = likes;
    const miniDescription = newElement.querySelector('.picture__likes').alt = description;


    newElement.addEventListener('click', () => {

      document.querySelector('.likes-count').textContent = miniLikes;
      document.querySelector('.comments-count').textContent = miniComments;
      document.querySelector('.social__caption').textContent = miniDescription;

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
    });

    fragment.appendChild(newElement);
  });
  newContainer.appendChild(fragment);
};

const clearNewContainer = () => {
  newContainer.innerHTML = '';

};


export {renderPhotos, clearNewContainer};
