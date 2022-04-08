import getRandNum from '../random-number.js';
import { numbers, operators } from '../constants.js';

const getRandomOperator = () => operators[getRandNum(0, operators.length - 1)];

export default () => {
  const a = getRandNum(numbers.rangeStart, numbers.rangeEnd);
  const b = getRandNum(numbers.rangeStart, numbers.rangeEnd);
  const expression = `${a} ${getRandomOperator()} ${b}`;
  return [expression, eval(expression).toString()]; // eslint-disable-line no-eval
};
