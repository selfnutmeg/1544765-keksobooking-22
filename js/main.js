import './form.js';
import {setPageFormSubmit, disablePage} from './form.js';
import './map.js';
import {displayMarkers} from './map.js';
import {getData} from './api.js';
import {showDataMessage} from './flash.js'

disablePage(false);

getData(displayMarkers, showDataMessage);
setPageFormSubmit();
