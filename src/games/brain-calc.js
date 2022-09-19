import run from '../index.js';
import getRandom from '../utils.js';

const gameGoal = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
/* eslint-disable consistent-return */
const calcExpectedAnswer = (selectedOperator, firstNumber, secondNumber) => {
  switch (selectedOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      console.log(`out if ${selectedOperator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandom(1, 10);
  const secondNumber = getRandom(1, 10);
  const selectedOperator = operators[getRandom(0, operators.length - 1)];

  const question = `${firstNumber} ${selectedOperator} ${secondNumber}`;
  const expectedAnswer = String(calcExpectedAnswer(selectedOperator, firstNumber, secondNumber));
  return [expectedAnswer, question];
};

const runCalc = () => {
  run(gameGoal, generateRound);
};

export default runCalc;
