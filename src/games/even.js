import getRandomNumber from '../utilities.js';
import run from '../index.js';

const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const rangeStart = 1;
const rangeEnd = 100;

const getQuestionWithAnswer = () => {
  const randomNum = getRandomNumber(rangeStart, rangeEnd);
  return [randomNum, (randomNum % 2 ? 'no' : 'yes')];
};

export default () => run(taskText, getQuestionWithAnswer);
