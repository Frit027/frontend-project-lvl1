import { typeGames } from './constants.js';

export default (type) => {
  switch (type) {
    case typeGames.EVEN:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case typeGames.CALC:
      console.log('What is the result of the expression?');
      break;
    case typeGames.GCD:
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case typeGames.PROGRESSION:
      console.log('What number is missing in the progression?');
      break;
    case typeGames.PRIME:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
  }
};
