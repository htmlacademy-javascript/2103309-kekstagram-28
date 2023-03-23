import {renderCommentsList} from './render_new_comments.js';

const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');
const newElement = templateMiniatures.cloneNode(true);

const newContainer = document.querySelector('.pictures');

const miniPic = newElement.querySelector('img');
const miniComments = newElement.querySelector('.picture__comments');
const miniLikes = newElement.querySelector('.picture__likes');
const miniDescription = newElement.querySelector('.picture__likes');

const renderPhotos = (newPhotos) => {

  const fragment = document.createDocumentFragment();

  newPhotos.forEach(({url, description, likes, comments}) => {

    miniPic.src = url;
    miniComments.textContent = comments.length;
    miniLikes.textContent = likes;
    miniDescription.alt = description;

    renderCommentsList(comments);


    fragment.appendChild(newElement);

  });

  newContainer.appendChild(fragment);
};

export {renderPhotos, newContainer, newElement};
