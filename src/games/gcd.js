import run from '../index.js';
import getRandomNumber from '../utils.js';

const minRange = 1;
const maxRange = 100;
const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);

  const question = `${number1} ${number2}`;
  const expectedAnswer = String(gcd(number1, number2));
  return [expectedAnswer, question];
};

const runGcd = () => {
  run(rule, generateRound);
};

export default runGcd;
