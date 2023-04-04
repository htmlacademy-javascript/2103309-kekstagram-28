import {closeEditor} from './loading_window.js';
import {displayAlertMessage} from './alert_message.js';
import {unblockSubmit} from './validation.js';
import {loadingSuccessNotice, loadingErrorNotice} from './loading_status.js';

const SERVER_URL_GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const SERVER_URL_POST = 'https://28.javascript.pages.academy/kekstagram';

const errorText = 'Не удалось загрузить данные. Обновите страницу и попробуйте снова.';

const getData = () => fetch(SERVER_URL_GET_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    displayAlertMessage(errorText);
  });

const sendData = (body) => {
  fetch(SERVER_URL_POST, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      closeEditor();
      loadingSuccessNotice();
      return response.json();
    })
    .catch(() => {
      loadingErrorNotice();
    })
    .finally(unblockSubmit);
};

export {getData, sendData};
