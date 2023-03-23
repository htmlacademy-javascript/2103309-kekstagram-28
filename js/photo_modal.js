import {openBigPicture} from './fullScreenPhotos.js';
import {renderPhotos, newContainer} from './miniatures.js';

const renderModalPicture = (pictures) => {
  newContainer.addEventListener('click', (evt) => {
    const miniaturePicture = evt.target.closest('[data-miniature-id]');
    if (!miniaturePicture) {
      return;
    }
    const picture = pictures.find (
      (item) => item.id === +miniaturePicture.dataset.miniatureId
    );
    openBigPicture(picture);
  });
  renderPhotos(pictures);
};

export {renderModalPicture};
