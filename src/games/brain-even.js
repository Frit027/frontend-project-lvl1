import getRandomNumber from '../random-number.js';

export default () => {
  const randomNum = getRandomNumber(1, 100);
  return [randomNum, (randomNum % 2 ? 'no' : 'yes')];
};
