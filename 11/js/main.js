import {renderingNewGallery, init, getFilteredPictures} from './rendering.js';
import {debounce} from './debounce.js';
import {displayAlertMessage} from './alert_message.js';
import {getData} from './api.js';
import {renderBigPhoto} from './photo_modal.js';
import './loading_window.js';

const RENDER_DELAY = 500;

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderingNewGallery, RENDER_DELAY);
  init(data, debouncedRenderGallery);
  renderingNewGallery(getFilteredPictures());
  renderBigPhoto(getFilteredPictures());
} catch (err) {
  displayAlertMessage(err.message);
}
