import getRandNum from '../utilities.js';
import run from '../index.js';

const taskText = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const rangeStart = 1;
const rangeEnd = 100;

const getRandomOperator = () => operators[getRandNum(0, operators.length - 1)];

const getQuestionWithAnswer = () => {
  const a = getRandNum(rangeStart, rangeEnd);
  const b = getRandNum(rangeStart, rangeEnd);
  const expression = `${a} ${getRandomOperator()} ${b}`;
  return [expression, eval(expression).toString()]; // eslint-disable-line no-eval
};

export default () => run(taskText, getQuestionWithAnswer);
