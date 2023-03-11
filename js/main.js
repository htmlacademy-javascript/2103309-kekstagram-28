import {getAllUserPhotos} from './data.js';
import {renderPhotos} from './miniatures.js';
const newPhotos = getAllUserPhotos;
renderPhotos(newPhotos);
