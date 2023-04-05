const DISPLAY_ALERT_MESSAGE = 5000;
const MESSAGE = 'Не удалось загрузить фотографии. Перезагрузите страницу.';

const displayAlertMessage = () => {
  const alertMessageContainer = document.createElement('div');
  alertMessageContainer.style.zIndex = '100';
  alertMessageContainer.style.position = 'absolute';
  alertMessageContainer.style.top = '0';
  alertMessageContainer.style.left = '0';
  alertMessageContainer.style.right = '0';
  alertMessageContainer.style.padding = '25px 20px';
  alertMessageContainer.style.fontSize = '25px';
  alertMessageContainer.style.textAlign = 'center';
  alertMessageContainer.style.backgroundColor = 'tomato';

  alertMessageContainer.textContent = MESSAGE;

  document.body.append(alertMessageContainer);

  setTimeout(() => {
    alertMessageContainer.remove();
  }, DISPLAY_ALERT_MESSAGE);
};

export {displayAlertMessage};
