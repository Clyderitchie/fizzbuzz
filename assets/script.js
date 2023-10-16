// Global Variables
let searchEl = document.querySelector('#userSearch');
let inputEl = document.querySelector('#userInput');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let numberEl = document.querySelector('#numberInput');
let timer = 60;
let countdown;
let randomNumber;


// Function calls

// Buttons/ Event listeners
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', () => {
    randomNumbers(0, Infinity)
});

// Functions
function randomNumbers(min, max) {
    let randomNumber;

    if (max === Infinity) {
        randomNumber = min + Math.random() * (Number.MAX_VALUE - min);
    } else {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (randomNumber % 15 === 0) {
        console.log('fizzBuzz');
    } else if (randomNumber % 3 === 0) {
        console.log('fizz');
    } else if (randomNumber % 5 === 0) {
        console.log('buzz');
    } else {
        console.log('what happened');
    }

    document.querySelector('#numberInput').setHTML(randomNumber);

    return randomNumber;
    
}

function startTimer() {
    countdown = setInterval(() => {
        timer--;
        if (timer < 0) {
            clearInterval(countdown);
        }

        document.querySelector('#timer').textContent = timer;
    }, 1000);
}