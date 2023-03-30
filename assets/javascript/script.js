var startBtnEl = document.querySelector("#start");
var highScrBtnEl = document.querySelector("#highScr")
var timerEl = document.querySelector('#timer');
var corrEl = document.querySelector('#correct');
var incorrEl = document.querySelector('#incorrect');

var numBlanks = 0;
var corrCount = 0;
var incorrCount = 0;
var timer = 90;
// var timerCount = math.floor((timeleft % (1000 * 60)) / 1000);



function startTimer() {
    var timeLeft = 5;
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

