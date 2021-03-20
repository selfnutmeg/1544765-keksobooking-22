const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const translateType = (type) => {
  switch (type) {
    case 'palace':
      return 'Дворец';

    case 'flat':
      return 'Квартира';

    case 'house':
      return 'Дом';

    case 'bungalow':
      return 'Бунгало';
  }
};

const createFeaturesList = (arr, clone) => {
  const featuresList = clone.querySelector('.popup__features');
  featuresList.innerHTML = '';

  arr.forEach((item) => {
    const element = document.createElement('li');
    element.classList.add('popup__feature', 'popup__feature--' + item);
    featuresList.appendChild(element);
  })

  return featuresList;
};

const createPhotosList = (arr, clone) => {
  const photosList = clone.querySelector('.popup__photos');
  const photo = clone.querySelector('.popup__photo')
  photosList.innerHTML = '';

  arr.forEach((item) => {
    const photosItem = photo.cloneNode(true);
    photosItem.src = item;
    photosList.appendChild(photosItem);
  });

  return photosList;
};

const createSingleCard = ({author, offer, location}) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__avatar').src = author.avatar;
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = `${location.x}, ${location.y}`;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = translateType(offer.type);
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__description').textContent = offer.description;
  createFeaturesList(offer.features, card);
  createPhotosList(offer.photos, card);

  return card;
};

export {createSingleCard};
