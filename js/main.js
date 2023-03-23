import {getAllUserPhotos} from './data.js';
import {renderModalPicture} from './photo_modal.js';
const newPhotos = getAllUserPhotos();
renderModalPicture(newPhotos);
