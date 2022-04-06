import getRandomNumber from '../random-number.js';

const getGCD = (a, b) => {
  if (!b) return a;
  return getGCD(b, a % b);
};

export default () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  return [`${num1} ${num2}`, getGCD(num1, num2).toString()];
};
