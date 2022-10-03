import run from '../index.js';
import getRandomNumber from '../utils.js';

const minRange = 1;
const maxRange = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0);

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);

  const question = String(number);
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runEven = () => {
  run(rule, generateRound);
};

export default runEven;
