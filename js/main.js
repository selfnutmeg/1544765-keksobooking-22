import {getOffer} from './data.js';

const OFFER_COUNT = 10;

const OFFERS = new Array(OFFER_COUNT).fill(null).map(() => getOffer());

OFFERS;
