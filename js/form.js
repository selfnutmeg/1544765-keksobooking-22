const pageForm = document.querySelector('.ad-form');
const pageFieldsets = pageForm.querySelectorAll('fieldset');
const apartmentType = pageForm.querySelector('#type');
const apartmentPrice = pageForm.querySelector('#price');
const timeIn = pageForm.querySelector('#timein');
const timeOut = pageForm.querySelector('#timeout');
const mapForm = document.querySelector('.map__filters');
const mapSelects = mapForm.querySelectorAll('select');
const mapFildsets = mapForm.querySelectorAll('fieldset');

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
}

const minPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const onTypeChange = (evt) => {
  apartmentPrice.placeholder = minPrice[evt.target.value];
  apartmentPrice.min = minPrice[evt.target.value];
};

apartmentType.addEventListener('change', onTypeChange);

const onTimelinesChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
};

timeIn.addEventListener('change', onTimelinesChange);
timeOut.addEventListener('change', onTimelinesChange);

disablePage(true);

export {disablePage};
