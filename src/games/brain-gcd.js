import run from '../index.js';
import { getRandom } from '../utils.js';

const gameGoal = ('Find the greatest common divisor of given numbers.');
const gcd = (x, y) => {
    if (y) {
        return gcd(y, x % y);
    } return Math.abs(x);
};

const generateRound = () => {
    const firstNumber = getRandom(1, 100);
    const secondNumber = getRandom(1, 100);

    const question = `${firstNumber} ${secondNumber}`;
    const expectedAnswer = String(gcd(firstNumber, secondNumber));
    return [expectedAnswer, question];
};

const runGcd = () => {
    run(gameGoal, generateRound);
};

export default runGcd;