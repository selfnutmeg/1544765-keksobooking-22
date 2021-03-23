import {mapForm} from './form.js';
import {displayMarkers, resetMarkers, resetMap} from './map.js';

const DEFAULT_FILTER_VALUE = 'any';

const PriceRange = {
  MIN: 10000,
  MAX: 50000,
};

const housingType = mapForm.querySelector('#housing-type');
const housingPrice = mapForm.querySelector('#housing-price');
const housingRooms = mapForm.querySelector('#housing-rooms');
const housingGuests = mapForm.querySelector('#housing-guests');

const filterByType = (marker) => housingType.value === DEFAULT_FILTER_VALUE || housingType.value === marker.offer.type;

const filterByPrice = (marker) => {
  const filterPriceCategory = {
    low: marker.offer.price < PriceRange.MIN,
    middle: marker.offer.price >= PriceRange.MIN && marker.offer.price < PriceRange.MAX,
    high: marker.offer.price >= PriceRange.MAX,
  }

  return housingPrice.value === DEFAULT_FILTER_VALUE || filterPriceCategory[housingPrice.value];
};
const filterByRooms = (marker) => housingRooms.value === DEFAULT_FILTER_VALUE || housingRooms.value == marker.offer.rooms;

const filterByGuests = (marker) => housingGuests.value === DEFAULT_FILTER_VALUE || housingGuests.value == marker.offer.guests;

const filterByFeatures = (marker) => {
  const mapFeatureInputs = mapForm.querySelectorAll('.map__checkbox:checked');
  const chosenFeatures =[];

  mapFeatureInputs.forEach((item) => chosenFeatures.push(item.value));

  return chosenFeatures.every((item) => marker.offer.features.includes(item));
};

const filterMarkers = (data) => data.filter((item) => filterByType(item) && filterByPrice(item) && filterByRooms(item) && filterByGuests(item) && filterByFeatures(item));

const updateMarkers = (data) => {
  resetMarkers();
  resetMap();
  const filteredData = filterMarkers(data);
  displayMarkers(filteredData.slice(0,10));
};

const setFilterListener = (cb) => mapForm.addEventListener('change', () => cb());

export {updateMarkers, setFilterListener};
