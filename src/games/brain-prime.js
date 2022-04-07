import getRandomNumber from '../random-number.js';

export default () => {
  const randomNum = getRandomNumber(1, 1000);
  if (randomNum === 1) return [randomNum, 'no'];

  for (let i = 2; i <= Math.sqrt(randomNum); i += 1) {
    if (!(randomNum % i)) return [randomNum, 'no'];
  }

  return [randomNum, 'yes'];
};
