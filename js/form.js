const form = document.querySelector('.ad-form');
const apartmentType = form.querySelector('#type');
const apartmentPrice = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

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
