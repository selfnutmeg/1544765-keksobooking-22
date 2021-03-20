const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const button = errorMessage.querySelector('.error__button');
const main = document.querySelector('main');
const map = document.querySelector('.map');

const isEscEvent = (evt) => evt.key === ('Escape' || 'Esc');

const showSuccessMessage = () => {
  const onMessageKeydown = (evt) => {
    if (isEscEvent(evt)) {
      successMessage.remove();
      document.removeEventListener('keydown', onMessageKeydown);
    }
  };

  const onMessageClick = () => {
    successMessage.remove();
    successMessage.removeEventListener('click', onMessageClick);
    document.removeEventListener('keydown', onMessageKeydown);
  };

  window.addEventListener('keydown', onMessageKeydown);
  successMessage.addEventListener('click', onMessageClick);

  map.style.zIndex = '0';
  main.appendChild(successMessage);
};

const showFailMessage = () => {
  const onMessageKeydown = (evt) => {
    if (isEscEvent(evt)) {
      errorMessage.remove();
      document.removeEventListener('keydown', onMessageKeydown);
    }
  };

  const onMessageClick = () => {
    errorMessage.remove();
    errorMessage.removeEventListener('click', onMessageClick);
    button.removeEventListener('click', onMessageClick);
    document.removeEventListener('keydown', onMessageKeydown);
  };

  button.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onMessageKeydown);
  errorMessage.addEventListener('click', onMessageClick);

  map.style.zIndex = '0';
  main.appendChild(errorMessage)
};

const showDataMessage = () => {
  const errorMessage = successMessage;
  const errorText = errorMessage.querySelector('.success__message');
  errorText.innerHTML = 'Упс! Что-то пошло не так...';

  const onMessageKeydown = (evt) => {
    if (isEscEvent(evt)) {
      errorMessage.remove();
      document.removeEventListener('keydown', onMessageKeydown);
    }
  };

  const onMessageClick = () => {
    errorMessage.remove();
    errorMessage.removeEventListener('click', onMessageClick);
    document.removeEventListener('keydown', onMessageKeydown);
  }

  window.addEventListener('keydown', onMessageKeydown);
  successMessage.addEventListener('click', onMessageClick);

  map.style.zIndex = '0';
  main.appendChild(errorMessage);
};

export {showSuccessMessage, showFailMessage, showDataMessage}
