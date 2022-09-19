import run from '../index.js';
import { getRandom } from '../utils.js';

const gameGoal = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculatedExpectedAnswer = (selectedOperator, firstNumber, secondNumber) => {
    switch (selectedOperator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
    }
};

const generateRound = () => {
    const firstNumber = getRandom(1, 10);
    const secondNumber = getRandom(1, 10);
    const selectedOperator = operators[getRandom(0, operators.length - 1)];

    const question = `${firstNumber} ${selectedOperator} ${secondNumber}`;
    const expectedAnswer = String(calculatedExpectedAnswer(selectedOperator, firstNumber, secondNumber));
    return [expectedAnswer, question];
};

const runCalc = () => {
    run(gameGoal, generateRound);
};

export default runCalc;
