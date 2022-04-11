import getRandomNumber from '../utilities.js';
import run from '../index.js';

const taskText = 'Find the greatest common divisor of given numbers.';

const rangeStart = 1;
const rangeEnd = 100;

const getGCD = (a, b) => {
  if (!b) return a;
  return getGCD(b, a % b);
};

const getQuestionWithAnswer = () => {
  const num1 = getRandomNumber(rangeStart, rangeEnd);
  const num2 = getRandomNumber(rangeStart, rangeEnd);

  return [`${num1} ${num2}`, getGCD(num1, num2).toString()];
};

export default () => run(taskText, getQuestionWithAnswer);
