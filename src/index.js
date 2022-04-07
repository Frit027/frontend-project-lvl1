import readlineSync from 'readline-sync';
import evenGame from './games/brain-even.js';
import calcGame from './games/brain-calc.js';
import GCDGame from './games/brain-gcd.js';
import progressionGame from './games/brain-progression.js';
import primeGame from './games/brain-prime.js';
import greeting from './cli.js';
import showTaskText from './task-text.js';
import { countRounds, typeGames } from './constants.js';

const isEqual = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

const showMessage = (result, userName, userAnswer, correctAnswer) => {
  if (result) console.log('Correct!');
  else console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

export default (type) => {
  const userName = greeting();
  let expression;
  let correctAnswer;

  showTaskText(type);
  for (let i = 0; i < countRounds; i += 1) {
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
    const result = isEqual(answer, correctAnswer);

    showMessage(result, userName, answer, correctAnswer);
    if (!result) return;
  }
  console.log(`Congratulations, ${userName}!`);
};
