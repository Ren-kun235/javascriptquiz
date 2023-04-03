var startBtnEl = document.querySelector("#start");
var startQuiz = document.querySelector("#")
var highScrBtnEl = document.querySelector("#highScr");
var highScrDisplay = document.querySelector("#highScores");
var backToStart = document.querySelector("#backToStart");

var timerEl = document.querySelector('#timer');
var corrEl = document.querySelector('#correct');
var incorrEl = document.querySelector('#incorrect');

var corrCount = 0;

highScrBtnEl.addEventListener('click', highScr)

function highScr() {
    highScrDisplay.classList.remove('hide')
}

backToStart.addEventListener('click', backStart);

function backStart() {
    highScrDisplay.classList.add('hide')
}

function startTimer() {
    var timeLeft = 90;
    timer = setInterval(function() {

        if(timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            
            timeLeft--;
        } else {
            timerEl.textContent = '';

            clearInterval(timer);

            gameOver();
        }

    }, 1000)
}

startTimer();

function gameOver() {
    console.log('gameOver');
}

