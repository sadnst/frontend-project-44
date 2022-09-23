import run from '../index.js';
import getRandom from '../utils.js';

const gameGoal = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandom(1, 100);
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runPrime = () => {
  run(gameGoal, generateRound);
};

export default runPrime;
