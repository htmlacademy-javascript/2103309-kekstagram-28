const newContainer = document.querySelector('.pictures');

const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (newPhotos) => {

  const fragment = document.createDocumentFragment();
  newPhotos.forEach(({url, likes, comments}) => {
    const newElement = templateMiniatures.cloneNode(true);
    newElement.querySelector('img').src = url;
    newElement.querySelector('.picture__comments').textContent = comments.message.length;
    newElement.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(newElement);
  });

  newContainer.appendChild(fragment);
};

export {renderPhotos};
