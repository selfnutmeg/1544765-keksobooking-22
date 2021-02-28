'use strict'

const TITLES = [
  'Хоромы',
  'Землянка',
  'Пещера',
  'Достопримечательность Геленджика',
];
const APARTMENTS_TYPE = ['palace', 'flat', 'house', 'bungalow'];
const TIMELINES = ['12:00', '13:00', '14:00'];
const DESCRIPTIONS = [
  'Удачное сочетание цены и качества',
  'Комната грязи отсутствует',
  'В подарок фильтр для воды',
  'Бюджетный вариант',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const OFFER_COUNT = 10;

const getRandomInteger = (min,max) => {
  if(min>=0 && max>=0 && max>min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Invalid data';
}

const getRandomFloat = (min,max,decimalDigits=0) => {
  if(min>=0 && max>=0 && max>min) {
    return (Math.random() * (max - min) + min).toFixed(decimalDigits);
  }
  return 'Invalid data';
}

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomArray = (array) => {
  const arrayList = [];

  array.forEach((element) => {
    if (Math.random() > 0.5) {
      arrayList.push(element);
    }
  })
  return arrayList;
}

const LOCATION_X_LOWER = 35.65;
const LOCATION_X_UPPER = 35.7;
const LOCATION_Y_LOWER = 139.7;
const LOCATION_Y_UPPER = 139.8;

const getAddress = () => {
  return {
    x: getRandomFloat(LOCATION_X_LOWER, LOCATION_X_UPPER, 5),
    y: getRandomFloat(LOCATION_Y_LOWER, LOCATION_Y_UPPER, 5),
  }
}

const getOffer = () => {
  const coordinates = getAddress();

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: '' + coordinates.x + ', ' + coordinates.y,
      price: getRandomInteger(0, 1000000),
      type: getRandomArrayElement(APARTMENTS_TYPE),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(TIMELINES),
      checkout: getRandomArrayElement(TIMELINES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photo: getRandomArray(PHOTOS),
    },
    location: coordinates,
  };
}

const OFFERS = new Array(OFFER_COUNT).fill(null).map(() => getOffer());

OFFERS;
