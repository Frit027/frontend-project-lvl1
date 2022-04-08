import getRandomNumber from '../random-number.js';
import { numbers } from '../constants.js';

export default () => {
  const randomNum = getRandomNumber(numbers.rangeStart, numbers.rangeEnd);
  return [randomNum, (randomNum % 2 ? 'no' : 'yes')];
};
