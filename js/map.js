/* global L:readonly */
// import {disablePage} from './form.js';
import {createSingleCard} from './baloon.js';

const StartAddress = {
  X: 35.685210,
  Y: 139.757998,
};

const MAP_ZOOM = 12;

const ICON_SIZE_X = 36;
const ICON_SIZE_Y = 36;
const ICON_ANCHOR_X = ICON_SIZE_X / 2;
const ICON_ANCHOR_Y = ICON_SIZE_Y;

const RegularPin = {
  URL: 'img/pin.svg',
  SIZE: [ICON_SIZE_X, ICON_SIZE_Y],
  ANCHOR: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
};

const MainPin = {
  URL: 'img/main-pin.svg',
  SIZE: [ICON_SIZE_X, ICON_SIZE_Y],
  ANCHOR: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
};

const map = L.map('map-canvas');
const inputAddress = document.querySelector('#address');
inputAddress.value = `${StartAddress.X}, ${StartAddress.Y}`;

// disablePage(true);

// map.on('load', () => {
//   disablePage(false);
// });

map.setView({
  lat: StartAddress.X,
  lng: StartAddress.Y,
}, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MainPin.URL,
  iconSize: MainPin.SIZE,
  iconAnchor: MainPin.ANCHOR,
});

const marker = L.marker(
  {
    lat: StartAddress.X,
    lng: StartAddress.Y,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.on('moveend', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(6)}, ${evt.target.getLatLng().lng.toFixed(6)}`
});

marker.addTo(map);

const displayMarkers = (points) => {

  points.forEach((point) => {
    const icon = L.icon({
      iconUrl: RegularPin.URL,
      iconSize: RegularPin.SIZE,
      iconAnchor: RegularPin.ANCHOR,
    });

    const marker = L.marker(
      {
        lat: point.location.lat,
        lng: point.location.lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(createSingleCard(point),
        {
          keepInView: true,
        },
      )
  });
};

const resetMarker = () => {
  marker.setLatLng(
    {
      lat: StartAddress.X,
      lng: StartAddress.Y,
    },
  );
};

const resetMap = () => {
  map.panTo([StartAddress.X, StartAddress.Y]);
};

export {displayMarkers, resetMarker, resetMap}
