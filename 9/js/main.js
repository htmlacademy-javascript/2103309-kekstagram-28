import {getAllUserPhotos} from './data.js';
import {renderPhotos} from './miniatures.js';
import './photo_modal.js';
import './loading_window.js';
import './validation.js';
import './slider.js';


const newPhotos = getAllUserPhotos();
renderPhotos(newPhotos);

export {newPhotos};
