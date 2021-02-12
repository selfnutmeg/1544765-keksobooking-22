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

getRandomInteger(3, 6);
getRandomFloat(4.1, 7.7, 2);
