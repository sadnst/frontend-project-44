import run from '../index.js';
import getRandomNumber from '../utils.js';

const minRange = 1;
const maxRange = 100;
const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomIndex = () => operators[getRandomNumber(0, operators.length - 1)];

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
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = getRandomIndex();

  const question = `${number1} ${operator} ${number2}`;
  const expectedAnswer = String(calculate(operator, number1, number2));
  return [expectedAnswer, question];
};

const runCalc = () => {
  run(rule, generateRound);
};

export default runCalc;
