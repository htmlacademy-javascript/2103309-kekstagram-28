const bigPicture = document.querySelector('.big-picture');
const renderCommentsList = bigPicture.querySelector('.social__comments');
const elementListClone = renderCommentsList.querySelector('li').cloneNode(true);

const renderNewComment = (commentsArray) => {
  const commentFragment = document.createDocumentFragment();

  commentsArray.forEach(({avatar, name, message}) => {
    const comment = elementListClone.cloneNode(true);
    comment.classList.add('hidden');
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentFragment.append(comment);
  });
  renderCommentsList.append(commentFragment);
};

export {renderNewComment};
