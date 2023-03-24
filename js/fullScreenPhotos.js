const bigPicture = document.querySelector('.big-picture');
const renderCommentsList = bigPicture.querySelector('.social__comments');
const elementListClone = renderCommentsList.querySelector('li').cloneNode(true);

export const renderNewComment = (commentsArray) => {
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

// тут будет функция добавления новых комментариев.
// export const downloadNewComments = (comment) => {
//   loadCommentButton.addEventListener('click', () => {
//     commentsShow += PORTION_COMMENTS;
//     if (commentsShow >= comment.length) {

//       loadCommentButton.classList.add('hidden');
//       commentsShow = comment.length;

//     } else {
//       loadCommentButton.classList.remove('hidden');
//     }

//     const commentFragment = document.createDocumentFragment();
//     for (let i = 0; i < commentsShow; i++) {

//       const commentElement = renderCommentsList(comment[i]);

//       commentFragment.append(commentElement);
//     }
//     renderLiElements.innerHTML = '';
//     renderLiElements.append(commentFragment);
//     counterComments.innerHTML = `${commentsShow} из <span class="comments-count">${comment.length}</span> комментариев`;
//   });
// };
