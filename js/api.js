const API_URL = 'https://22.javascript.pages.academy/keksobooking'

const getData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((markers) => onSuccess(markers))
    .catch(() => onFail())
};

const sendData = (onSuccess, onFail, body) => {
  fetch(API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess()
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData}
