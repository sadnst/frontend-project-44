import run from '../index.js';
import getRandomNumber from '../utils.js';

const minRange = 1;
const maxRange = 100;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);

  const question = String(number);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runPrime = () => {
  run(rule, generateRound);
};

export default runPrime;
