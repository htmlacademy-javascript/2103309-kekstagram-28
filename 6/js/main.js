import {getAllUserPhotos} from './data.js';
import {renderPhotos} from './miniatures.js';
import './fullScreenPhotos.js';
const newPhotos = getAllUserPhotos();
renderPhotos(newPhotos);
export {newPhotos};
