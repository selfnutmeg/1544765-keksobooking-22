import {mapForm} from './form.js';
import {displayMarkers, resetMarkers, resetMap} from './map.js';

const DEFAULT_FILTER_VALUE = 'any';

const housingType = mapForm.querySelector('#housing-type');

const filterByType = (marker) => {
  if(housingType.value === DEFAULT_FILTER_VALUE || housingType.value === marker.offer.type) {
    return true;
  }

  return false;
};

const filterMarkers = (data) => {
  return data.filter((item) => filterByType(item));
}

const updateMarkers = (data) => {
  resetMarkers();
  resetMap();
  const filteredData = filterMarkers(data);
  displayMarkers(filteredData);
};

const setFilterListener = (cb) => housingType.addEventListener('change', () => cb());

export {updateMarkers, setFilterListener};
