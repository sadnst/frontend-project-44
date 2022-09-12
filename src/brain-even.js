import readlineSync from 'readline-sync';

import greet from './cli.js';

let userAnswer;

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = () => {
    greet();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    const question = getRandom(1, 9999);
    
    console.log('Question: ' + question);
    
    let expectedAnswer = question % 2 === 0 ? 'yes' : 'no';
    
    userAnswer = readlineSync.question('Your answer: ')
    
    if (expectedAnswer !== userAnswer) {
        console.log(`\"${userAnswer}\" is wrong answer ;(. Correct answer was \"${expectedAnswer}\".\nLet's try again!`);
    } else console.log('Correct!'); 
};


export default isEven;

