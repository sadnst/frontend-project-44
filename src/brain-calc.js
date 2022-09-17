import readlineSync from 'readline-sync';

const gameAmount = 3;

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const operators = ['+', '-', '*'];

const calcGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log('What is the result of the expression?');

    for (let i = 0; i < gameAmount; i += 1) {
        const firstNumber = getRandom(1, 100);
        const secondNumber = getRandom(1, 100);
        const selectedOperator = operators[getRandom(0, operators.length - 1)];
        const question = `${firstNumber} ${selectedOperator} ${secondNumber}`;

        const calculatedExpectedAnswer = (selectedOperator, firstNumber, secondNumber) => {
            switch (selectedOperator) {
                case '+':
                    return firstNumber + secondNumber;
                case '-':
                    return firstNumber - secondNumber;
                case '*':
                    return firstNumber * secondNumber;
                default: 
                    'error';
            }
        };

        let expectedAnswer = String(calculatedExpectedAnswer(selectedOperator, firstNumber, secondNumber));

        console.log('Question: ' + question);
        let userAnswer = readlineSync.question('Your answer: ')

        if (expectedAnswer !== userAnswer) {
            console.log(`\"${userAnswer}\" is wrong answer ;(. Correct answer was \"${expectedAnswer}\".\nLet's try again, ${userName}!`);
            return;
        } else console.log('Correct!'); 
    };
    console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
