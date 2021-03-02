const getRandomInteger = (min,max) => {
  if(min>=0 && max>=0 && max>min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Invalid data';
}

const getRandomFloat = (min,max,decimalDigits=0) => {
  if(min>=0 && max>=0 && max>min) {
    return (Math.random() * (max - min) + min).toFixed(decimalDigits);
  }
  return 'Invalid data';
}

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomArray = (array) => {
  const arrayList = [];

  array.forEach((element) => {
    if (Math.random() > 0.5) {
      arrayList.push(element);
    }
  })
  return arrayList;
}

export {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray};
