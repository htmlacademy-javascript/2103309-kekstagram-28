
const newContainer = document.querySelector('.pictures');
const renderLiElements = document.querySelector('.social__comments');
const templateMiniatures = document.querySelector('#picture').content.querySelector('.picture');
const counterComments = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');

let commentsShow = 0;
const PORTION_COMMENTS = 5;


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
      downloadNewComments(comments);
    };


    renderCommentsList(comments);
    fragment.appendChild(newElement);
  });
  newContainer.appendChild(fragment);


};

export {renderPhotos, newContainer};
