#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { isEqual, showMessage, getRandomInteger } from '../src/index.js';

const getRandomOperator = () => ['+', '-', '*'][getRandomInteger(0, 2)];

(function () {
  const userName = greeting();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomInteger(1, 100);
    const b = getRandomInteger(1, 100);
    const operator = getRandomOperator();
    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      case '*':
        correctAnswer = a * b;
        break;
      default:
    }

    console.log(`Question: ${a} ${operator} ${b}`);

    const answer = readlineSync.question('Your answer: ');
    const result = isEqual(Number(answer), correctAnswer);

    showMessage(result, userName, answer, correctAnswer);
    if (!result) return;
  }
  console.log(`Congratulations, ${userName}!`);
}());
