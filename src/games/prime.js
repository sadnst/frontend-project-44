import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
  }
  return 'yes';
};

const generateRound = () => {
  const number = getRandom();
  const question = String(number);
  const expectedAnswer = String(isPrime(number));
  return [expectedAnswer, question];
};

const runPrime = () => {
  run(rule, generateRound);
};

export default runPrime;
