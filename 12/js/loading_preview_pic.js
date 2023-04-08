import {editableImage} from './slider.js';

const imgFile = document.querySelector('.img-upload__input');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

imgFile.addEventListener('change', () => {
  const image = imgFile.files[0];
  const imageName = image.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => imageName.endsWith(it));

  if (matches) {
    editableImage.src = URL.createObjectURL(image);
  }
});
