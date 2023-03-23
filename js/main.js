import {getAllUserPhotos} from './data.js';
import {renderPhotos} from './miniatures.js';
import './photo_modal.js';
const newPhotos = getAllUserPhotos();
renderPhotos(newPhotos);

export {newPhotos};
