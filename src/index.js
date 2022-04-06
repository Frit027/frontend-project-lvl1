import readlineSync from 'readline-sync';
import isEven from './games/brain-even.js';
import getResult from './games/brain-calc.js';
import getGCD from './games/brain-gcd.js';
import greeting from './cli.js';

const isEqual = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomOperator = () => ['+', '-', '*'][getRandomInteger(0, 2)];

const showTaskText = (text) => console.log(text);

const showMessage = (result, userName, userAnswer, correctAnswer) => {
  if (result) console.log('Correct!');
  else console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

export default (type) => {
  const userName = greeting();
  let expression;
  let correctAnswer;

  for (let i = 0; i < 3; i += 1) {
    switch (type) {
      case 'EVEN':
        showTaskText('Answer "yes" if the number is even, otherwise answer "no".');
        expression = getRandomInteger(1, 100);
        correctAnswer = isEven(expression);
        break;
      case 'CALC':
        showTaskText('What is the result of the expression?');
        expression = `${getRandomInteger(1, 100)} ${getRandomOperator()} ${getRandomInteger(1, 100)}`;
        correctAnswer = getResult(expression);
        break;
      case 'GCD':
        showTaskText('Find the greatest common divisor of given numbers.');
        expression = `${getRandomInteger(1, 100)} ${getRandomInteger(1, 100)}`;
        correctAnswer = getGCD(...expression
          .split(' ')
          .map((num) => Number(num))).toString();
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
