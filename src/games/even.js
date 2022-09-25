import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0);

const generateRound = () => {
  const number = getRandom(1, 100);
  const question = String(number);
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runEven = () => {
  run(rule, generateRound);
};

export default runEven;
