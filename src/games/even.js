import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandom();
  const question = String(number);
  const expectedAnswer = String(isEven(number));
  return [expectedAnswer, question];
};

const runEven = () => {
  run(rule, generateRound);
};

export default runEven;
