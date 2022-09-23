import run from '../index.js';
import getRandom from '../utils.js';

const gameGoal = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandom(1, 100);
  const expectedAnswer = isEven(question);
  return [expectedAnswer, question];
};

const runEven = () => {
  run(gameGoal, generateRound);
};

export default runEven;
