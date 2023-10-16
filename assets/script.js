// Global Variables
let searchEl = document.querySelector('#userSearch');
let inputEl = document.querySelector('#userInput');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let numberEl = document.querySelector('#numberInput');
let timer = 60;
let countdown;
// let randomNumber = randomNumbers(0, Infinity);

// Function calls
fizzBuzz();

// Buttons/ Event listeners
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', () => {
    randomNumbers(0, Infinity)
});

// Functions
function fizzBuzz() {
    searchEl.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Button works');

        let n = inputEl.value;

        if (n % 15 === 0) {
            return console.log('fizzBuzz')
        } else if (n % 3 === 0) {
            return console.log('fizz')
        } else if (n % 5 === 0) {
            return console.log('buzz')
        } else {
            return console.log('what happened')
        }

    })
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

function randomNumbers(min, max) {
    let randomNumber;
    if ( max === Infinity) {
        return min + Math.random() * (Number.MAX_VALUE - min);
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    document.querySelector
};
