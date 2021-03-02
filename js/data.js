import {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray} from './util.js';

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

export {getOffer};
