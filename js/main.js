import './form.js';
import {setPageFormSubmit, disablePage} from './form.js';
import './map.js';
import {displayMarkers} from './map.js';
import {getData} from './api.js';
import {showDataMessage} from './flash.js'
import {updateMarkers, setFilterListener} from './filter.js'

disablePage(false);

const displayProperMarkers = (data) => {
  displayMarkers(data);
  setFilterListener(() => updateMarkers(data));
}

getData(displayProperMarkers, showDataMessage);
setPageFormSubmit();
