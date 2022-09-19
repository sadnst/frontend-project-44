import run from '../index.js';
import { getRandom } from '../utils.js';

const gameGoal = 'What number is missing in the progression?';

const generateRound = () => {
    let progression = [];
    const progressionLength = getRandom(5, 10);
    const progressionStart = getRandom(1, 100);
    const progressionStep = getRandom(1, 10);
    const selectedIndex = getRandom(1, progressionLength - 1);
 
    for (let i = 0; i < progressionLength; i += 1) {
        if (i === selectedIndex) {
            progression[i] = `..`;
        } else
            progression[i] = progressionStart + (i * progressionStep);
    }
    const expectedAnswer = String(progressionStart + (selectedIndex * progressionStep));
    const question = progression;
    return [expectedAnswer, question];
};

const runProgression = () => {
    run(gameGoal, generateRound);
};

export default runProgression;
