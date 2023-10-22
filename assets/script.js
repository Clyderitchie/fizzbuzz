// Retrieving Local Storage
 let score = parseInt(localStorage.getItem('score')) || 0;

// Global Variables
let searchEl = document.querySelector('#userSearch');
let inputEl = document.querySelector('#userInput');
let startBtn = document.querySelector('#startBtn');
let numberEl = document.querySelector('#numberInput');
let fizz = document.querySelector('#fizzBtn');
let buzz = document.querySelector('#buzzBtn');
let fizzBuzz = document.querySelector('#fizzBuzzBtn');
let nothing = document.querySelector('#nothingBtn');
let scoreEl = document.querySelector('#score');
let randomNumber = Math.floor(Math.random() * 1000);
let selectedBtn = '';
// let score = 0;
let timer = 60;
let countdown;

// Function calls
answerBtns();

// Buttons/ Event listeners
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', () => {
    randomNumbers()
});

// Functions
function randomNumbers(min, max) {
    // let randomNumber = Math.floor(Math.random() * 1000);

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
        if (timer <= 0) {
            clearInterval(countdown);
            document.querySelector('#numberInput').setHTML('Game Over')


        }

        document.querySelector('#timer').textContent = `Time left: ${timer} seconds`;
    }, 10);
}

function answerBtns() {

    const fizzAnswer = fizz.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'fizz';
        compareAnswers();
        console.log(selectedBtn);
    })

    const buzzAnswer = buzz.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'buzz';
        compareAnswers();
        console.log(selectedBtn);
    })

    const fizzBuzzAnswer = fizzBuzz.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'fizzBuzz'
        compareAnswers();
        console.log(selectedBtn);
    })

    const nothingAnswer = nothing.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'nothing';
        compareAnswers();
        console.log(selectedBtn);
    })

}

function compareAnswers() {
    if (selectedBtn === 'fizzBuzz' && randomNumber % 15 === 0) {
        score += 1;
    } else if (selectedBtn === 'fizz' && randomNumber % 3 === 0) {
        score += 1;
    } else if (selectedBtn === 'buzz' && randomNumber % 5 === 0) {
        score += 1;
    } else if (selectedBtn === 'nothing' && randomNumber % 3 != 0 && randomNumber % 5 != 0 && randomNumber % 15 != 0) {
        score += 1;
    }

    scoreEl.textContent = `Score: ${score}`;

    localStorage.setItem('score', score);

    randomNumber = Math.floor(Math.random() * 1000);
    document.querySelector('#numberInput').textContent = randomNumber;

    console.log(score);
    return score;
}

