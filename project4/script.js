 let randomNum = parseInt((Math.random() * 100) + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');  
const startOver = document.querySelector('.resultParas');  
const p = document.createElement('p');

let prevGuess = [];
let num = 1;
let play = true;

if (play) {
    submit.addEventListener('click', function(e) {
        e.preventDefault(); 
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (num === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The correct number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('🎉 You guessed it right!');
        endGame();
    } else if (guess < randomNum) {
        displayMessage('📉 Number is TOO low');
    } else {
        displayMessage('📈 Number is TOO high');
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess},`;
    num++;
    remaining.innerHTML = `${11 - num}`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;  
    startOver.appendChild(p);
    play = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNum = parseInt((Math.random() * 100) + 1);
        prevGuess = [];
        num = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - num}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        play = true;
    });
}
