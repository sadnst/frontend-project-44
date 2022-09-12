import readlineSync from 'readline-sync';

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameAmount = 3;

const isEven = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 0; i < gameAmount; i += 1) { 
        const question = getRandom(1, 9999);
        let expectedAnswer = question % 2 === 0 ? 'yes' : 'no';

        console.log('Question: ' + question);
        let userAnswer = readlineSync.question('Your answer: ')
        
        if (expectedAnswer !== userAnswer) {
            console.log(`\"${userAnswer}\" is wrong answer ;(. Correct answer was \"${expectedAnswer}\".\nLet's try again, ${userName}!`);
            return;
        } else console.log('Correct!'); 
    };
    console.log(`Congratulations, ${userName}!`);
};

export default isEven;
