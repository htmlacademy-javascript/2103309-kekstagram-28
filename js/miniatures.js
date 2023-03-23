const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');
const newContainer = document.querySelector('.pictures');

const createnewElement = ({url, likes, comments, id}) => {
  const newElement = templateMiniatures.cloneNode(true);

  newElement.querySelector('.picture__img').src = url;
  newElement.querySelector('.picture__likes').textContent = likes;
  newElement.querySelector('.picture__comments').textContent = comments.length;
  newElement.dataset.miniatureId = id;

  return newElement;
};

const renderPhotos = (newPhotos) => {
  const fragment = document.createDocumentFragment();
  newPhotos.forEach((newPhoto) => {
    const newElement = createnewElement(newPhoto);
    fragment.append(newElement);
  });
  newContainer.append(fragment);
};

export {renderPhotos, newContainer};
