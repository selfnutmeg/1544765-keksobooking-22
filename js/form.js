import {sendData} from './api.js';
import {showSuccessMessage, showFailMessage} from './flash.js';
import {resetMarker, resetMap} from './map.js';

const pageForm = document.querySelector('.ad-form');
const pageFieldsets = pageForm.querySelectorAll('fieldset');
const apartmentType = pageForm.querySelector('#type');
const apartmentPrice = pageForm.querySelector('#price');
const timeIn = pageForm.querySelector('#timein');
const timeOut = pageForm.querySelector('#timeout');
const mapForm = document.querySelector('.map__filters');
const mapSelects = mapForm.querySelectorAll('select');
const mapFildsets = mapForm.querySelectorAll('fieldset');
const title = pageForm.querySelector('#title');
const roomNumber = pageForm.querySelector('#room_number');
const capacity = pageForm.querySelector('#capacity');
const resetButton = pageForm.querySelector('.ad-form__reset');

const TitleInterval = {
  min: 30,
  max: 100,
};

const MAX_APARTMENT_PRICE = 1000000;

const roomParameters = {
  guest: '0',
  room: '100',
};

const disablePage = (lock) => {
  mapSelects.forEach((item) => item.disabled = lock);
  mapFildsets.forEach((item) => item.disabled = lock);
  pageFieldsets.forEach((item) => item.disabled = lock);

  if(lock === true) {
    pageForm.classList.add('ad-form--disabled');
    mapForm.classList.add('map__filters--disabled');
  }
  if(lock === false) {
    pageForm.classList.remove('ad-form--disabled');
    mapForm.classList.remove('map__filters--disabled');
  }
};

const onRoomsAndGuestsMatch = () => {
  if (+roomNumber.value < +capacity.value) {
    roomNumber.setCustomValidity('Количество комнат должно быть больше или равно количеству мест');
  } else if (capacity.value === roomParameters.guest && roomNumber.value !== roomParameters.room) {
    roomNumber.setCustomValidity(`Количество комнат для категории "не для гостей" должно быть ${roomParameters.room}`);
  } else if (roomNumber.value === roomParameters.room && capacity.value !== roomParameters.guest) {
    roomNumber.setCustomValidity(`Для ${roomParameters.room} комнат ограничение - "не для гостей"`);
  } else {
    roomNumber.setCustomValidity('');
  }
};

roomNumber.addEventListener('change', onRoomsAndGuestsMatch);
capacity.addEventListener('change', onRoomsAndGuestsMatch);

const minPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const onApartmentTypeChange = () => {
  apartmentPrice.placeholder = minPrice[apartmentType.value];
  apartmentPrice.min = minPrice[apartmentType.value];
};

apartmentType.addEventListener('change', onApartmentTypeChange);

apartmentPrice.max = MAX_APARTMENT_PRICE;

const onTimelinesChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
};

timeIn.addEventListener('change', onTimelinesChange);
timeOut.addEventListener('change', onTimelinesChange);

title.minLength = TitleInterval.min;
title.maxLength = TitleInterval.max;

title.addEventListener('input', () => {
  const valueLength = title.value.length
  if (valueLength < TitleInterval.min) {
    title.setCustomValidity(`Ещё ${TitleInterval.min - valueLength} симв.`)
  } else if (valueLength > TitleInterval.max) {
    title.setCustomValidity(`Удалите лишние ${valueLength - TitleInterval.max} симв.`)
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  pageForm.reset();
  resetMarker();
  resetMap();
});

const handleFormSubmit = () => {
  showSuccessMessage();
  pageForm.reset();
  resetMarker();
  resetMap();
};

const handleFormFail = () => {
  showFailMessage();
  resetMarker();
  resetMap();
};

const setPageFormSubmit = () => {
  pageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(handleFormSubmit, handleFormFail, formData)
  });
};

onRoomsAndGuestsMatch();
onApartmentTypeChange();

export {disablePage, setPageFormSubmit};
