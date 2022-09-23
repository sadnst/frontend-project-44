import run from '../index.js';
import getRandom from '../utils.js';

const gameGoal = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
/* eslint-disable consistent-return */
const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      console.log(`out of ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandom(1, 10);
  const number2 = getRandom(1, 10);
  const selectedOperator = operators[getRandom(0, operators.length - 1)];

  const question = `${number1} ${selectedOperator} ${number2}`;
  const expectedAnswer = String(calculate(selectedOperator, number1, number2));
  return [expectedAnswer, question];
};

const runCalc = () => {
  run(gameGoal, generateRound);
};

export default runCalc;
