var startBtnEl = document.querySelector("#start");
var startPage = document.querySelector("#startPage");
var startQuiz = document.querySelector("#question1");
var highScrBtnEl = document.querySelector("#highScr");
var highScrDisplay = document.querySelector("#highScores");
var clearBtnEl = document.querySelector("#clearScr")
var clearScr = [];
var backToStart = document.querySelector("#backToStart");
var score = 0;
var timeLeft = 60;

var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var question5El = document.querySelector("#question5");

var question1Ul = document.querySelector("#question1 ul");
var question2Ul = document.querySelector("#question2 ul");
var question3Ul = document.querySelector("#question3 ul");
var question4Ul = document.querySelector("#question4 ul");
var question5Ul = document.querySelector("#question5 ul");

var questions = [question1Ul, question2Ul, question3Ul, question4Ul, question5Ul];
var currQuest = "question1";


for (var i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", function(event) {
        console.log(event.target);

        if (event.target.dataset.answer) {
            score++;
            timeLeft += 5;
        } else {
            timeLeft -= 10;
        }
        
    })
}



var timerEl = document.querySelector("#timer");
// var corrEl = document.querySelector('#correct');
// var incorrEl = document.querySelector('#incorrect');

// var corrCount = 0;

startBtnEl.addEventListener("click", question1);

function question1() {
    question1El.classList.remove("hide");
    startPage.classList.add("hide");
}

highScrBtnEl.addEventListener('click', highScr)

function highScr() {
    highScrDisplay.classList.remove('hide');
    startPage.classList.add("hide");
}

// clearHighScr.addEventListener("click", clearHighScr)

backToStart.addEventListener('click', backStart);

function backStart() {
    highScrDisplay.classList.add('hide')
    startPage.classList.remove("hide")
}






startBtnEl.addEventListener("click", startTimer);


function startTimer() {

    var timer = setInterval(function() {

        if(timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            
            timeLeft--;
        } else {
            timerEl.textContent = '';

            clearInterval(timer);

            gameOver();
        }

    }, 1000)
}

function gameOver() {
    console.log('gameOver');
}

