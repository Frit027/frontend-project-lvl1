import readlineSync from 'readline-sync';
import evenGame from './games/brain-even.js';
import calcGame from './games/brain-calc.js';
import GCDGame from './games/brain-gcd.js';
import progressionGame from './games/brain-progression.js';
import primeGame from './games/brain-prime.js';
import greeting from './cli.js';
import showTaskText from './task-text.js';
import { numbers, typeGames } from './constants.js';

export default (type) => {
  const userName = greeting();

  showTaskText(type);
  for (let i = 0; i < numbers.countRounds; i += 1) {
    let expression;
    let correctAnswer;

    switch (type) {
      case typeGames.EVEN:
        [expression, correctAnswer] = evenGame();
        break;
      case typeGames.CALC:
        [expression, correctAnswer] = calcGame();
        break;
      case typeGames.GCD:
        [expression, correctAnswer] = GCDGame();
        break;
      case typeGames.PROGRESSION:
        [expression, correctAnswer] = progressionGame();
        break;
      case typeGames.PRIME:
        [expression, correctAnswer] = primeGame();
        break;
      default:
        return;
    }

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
