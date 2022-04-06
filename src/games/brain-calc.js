import getRandomNumber from '../random-number.js';

const getRandomOperator = () => ['+', '-', '*'][getRandomNumber(0, 2)];

export default () => {
  const expression = `${getRandomNumber(1, 100)} ${getRandomOperator()} ${getRandomNumber(1, 100)}`;
  return [expression, eval(expression).toString()]; // eslint-disable-line no-eval
};
