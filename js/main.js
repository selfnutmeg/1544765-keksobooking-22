import './form.js';
import {setPageFormSubmit} from './form.js';
import './map.js';
import {displayMarkers} from './map.js';
import {getData} from './api.js';
import {showDataMessage} from './flash.js'

getData(displayMarkers, showDataMessage);
setPageFormSubmit();
