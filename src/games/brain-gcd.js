import getRandomNumber from '../random-number.js';
import { numbers } from '../constants.js';

const getGCD = (a, b) => {
  if (!b) return a;
  return getGCD(b, a % b);
};

export default () => {
  const num1 = getRandomNumber(numbers.rangeStart, numbers.rangeEnd);
  const num2 = getRandomNumber(numbers.rangeStart, numbers.rangeEnd);

  return [`${num1} ${num2}`, getGCD(num1, num2).toString()];
};
