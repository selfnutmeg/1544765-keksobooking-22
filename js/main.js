/* global _:readonly */
import './form.js';
import {setPageFormSubmit, disablePage} from './form.js';
import './map.js';
import {displayMarkers} from './map.js';
import {getData} from './api.js';
import {showDataMessage} from './flash.js'
import {updateMarkers, setFilterListener} from './filter.js'

disablePage(false);

const DISPLAY_DELAY = 500;

const displayProperMarkers = (data) => {
  displayMarkers(data);
  setFilterListener(_.debounce(() => updateMarkers(data), DISPLAY_DELAY));
};

getData(displayProperMarkers, showDataMessage);
setPageFormSubmit();
