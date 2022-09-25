import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 0) {
    return false;
  }
  if (number === 1) {
    return false;
  }
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
  const number = getRandom(1, 100);
  const question = String(number);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runPrime = () => {
  run(rule, generateRound);
};

export default runPrime;
