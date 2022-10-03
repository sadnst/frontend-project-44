import run from '../index.js';
import getRandomNumber from '../utils.js';

const minStart = 1;
const maxStart = 100;
const minStep = 1;
const maxStep = 10;
const minLength = 5;
const maxLength = 10;
const rule = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + (i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const start = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const progression = makeProgression(start, step, length);
  const selectedIndex = getRandomNumber(1, length - 1);
  const expectedAnswer = String(progression[selectedIndex]);
  progression[selectedIndex] = '..';

  const question = String(progression.join(' '));
  return [expectedAnswer, question];
};

const runProgression = () => {
  run(rule, generateRound);
};

export default runProgression;
