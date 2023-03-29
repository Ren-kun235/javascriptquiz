var startBtnEl = document.querySelector("#start");
var highScrBtnEl = document.querySelector("#highScr")
var timerEl = document.querySelector('#timer');
var corrEl = document.querySelector('#correct');
var incorrEl = document.querySelector('#incorrect');

var numBlanks = 0;
var corrCounter = 0;
var incorrCounter = 0;
var timer = 90;
var timerCount;

function startTimer() {
    timer = setInterval(function() {
        timerEl. = timerCount;
        if(corrCounter) {
            timer++;
        } else {
            timer--;
        }
    }, 1000)
}