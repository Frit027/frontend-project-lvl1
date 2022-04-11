import getRandomNumber from '../utilities.js';
import run from '../index.js';

const taskText = 'What number is missing in the progression?';

export const dRange = {
  start: 1,
  end: 10,
};
export const firstNumRange = {
  start: 1,
  end: 15,
};
export const lengthRange = {
  start: 5,
  end: 10,
};

const getQuestionWithAnswer = () => {
  const d = getRandomNumber(dRange.start, dRange.end);
  const firstNumber = getRandomNumber(firstNumRange.start, firstNumRange.end);
  const length = getRandomNumber(lengthRange.start, lengthRange.end);
  const randomIndex = getRandomNumber(0, length - 1);

  const arr = [...Array(length).keys()].map((x) => (x * d) + firstNumber);
  const hiddenNum = arr[randomIndex];
  arr[randomIndex] = '..';

  return [arr.join(' '), hiddenNum.toString()];
};

export default () => run(taskText, getQuestionWithAnswer);
