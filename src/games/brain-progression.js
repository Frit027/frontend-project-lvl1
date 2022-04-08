import getRandomNumber from '../random-number.js';
import { progression } from '../constants.js';

export default () => {
  const d = getRandomNumber(progression.dStart, progression.dEnd);
  const firstNumber = getRandomNumber(progression.firstNumberStart, progression.firstNumberEnd);
  const length = getRandomNumber(progression.lengthStart, progression.lengthStart);
  const randomIndex = getRandomNumber(0, length - 1);

  const arr = [...Array(length).keys()].map((x) => (x * d) + firstNumber);
  const hiddenNum = arr[randomIndex];
  arr[randomIndex] = '..';

  return [arr.join(' '), hiddenNum.toString()];
};
