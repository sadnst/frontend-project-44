import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'What number is missing in the progression?';
const length = getRandom(5, 10);

const makeProgression = (start, step, selectedIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === selectedIndex) {
      progression[i] = '..';
    } else {
      progression[i] = start + (i * step);
    }
  }
  return progression.join(' ');
};

const generateRound = () => {
  const start = getRandom(1, 100);
  const step = getRandom(1, 10);
  const selectedIndex = getRandom(1, length - 1);

  const expectedAnswer = String(start + (selectedIndex * step));
  const question = makeProgression(start, step, selectedIndex);
  return [expectedAnswer, question];
};

const runProgression = () => {
  run(rule, generateRound);
};

export default runProgression;
