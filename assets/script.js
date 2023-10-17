// Global Variables
let searchEl = document.querySelector('#userSearch');
let inputEl = document.querySelector('#userInput');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let numberEl = document.querySelector('#numberInput');
let timer = 60;
let countdown;
// let randomNumber;


// Function calls
answerBtns();

// Buttons/ Event listeners
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', () => {
    randomNumbers()
});

// Functions
function randomNumbers(min, max) {   
    let randomNumber = Math.floor(Math.random() * 1000);

    if (randomNumber % 15 === 0) {
        console.log('fizzBuzz');
    } else if (randomNumber % 3 === 0) {
        console.log('fizz');
    } else if (randomNumber % 5 === 0) {
        console.log('buzz');
    } else {
        console.log('nothing');
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

function answerBtns () {
    let fizz = document.querySelector('#fizzBtn');
    let buzz = document.querySelector('#buzzBtn');
    let fizzBuzz = document.querySelector('#fizzBuzzBtn');
    let nothing = document.querySelector('#nothingBtn');

    fizz.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('fizz');
    })

    buzz.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('buzz');
    })

    fizzBuzz.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('fizzBuzz');
    })

    nothing.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('nothing');
    })
}

function compareAnswers() {
      
}