import {editableImage} from './slider.js';
import {imgUpload} from './loading_window.js';
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

imgUpload.addEventListener('change', () => {
  const image = imgUpload.files[0];
  const imageName = image.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => imageName.endsWith(it));

  if (matches) {
    editableImage.src = URL.createObjectURL(image);
  }
});
