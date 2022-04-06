export default (type) => {
  switch (type) {
    case 'EVEN':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'CALC':
      console.log('What is the result of the expression?');
      break;
    case 'GCD':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'PROGRESSION':
      console.log('What number is missing in the progression?');
      break;
    default:
  }
};
