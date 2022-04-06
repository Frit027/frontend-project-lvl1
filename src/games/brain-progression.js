import getRandomNumber from '../random-number.js';

export default () => {
  const d = getRandomNumber(1, 10);
  const firstNumber = getRandomNumber(1, 15);
  const length = getRandomNumber(5, 10);
  const randomIndex = getRandomNumber(0, length - 1);

  const arr = [...Array(length).keys()].map((x) => (x * d) + firstNumber);
  const hiddenNum = arr[randomIndex];
  arr[randomIndex] = '..';

  return [arr.join(' '), hiddenNum.toString()];
};
