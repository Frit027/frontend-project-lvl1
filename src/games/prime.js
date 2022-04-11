import getRandomNumber from '../utilities.js';
import run from '../index.js';

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const rangeStart = 1;
const rangeEnd = 100;

const getQuestionWithAnswer = () => {
  const randomNum = getRandomNumber(rangeStart, rangeEnd);
  if (randomNum === 1) return [randomNum, 'no'];

  for (let i = 2; i <= Math.sqrt(randomNum); i += 1) {
    if (!(randomNum % i)) return [randomNum, 'no'];
  }

  return [randomNum, 'yes'];
};

export default () => run(taskText, getQuestionWithAnswer);
