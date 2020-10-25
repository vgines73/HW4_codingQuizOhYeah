//define all variables

var enterBtn = document.querySelector("#enter-btn");
var rulesPage = document.querySelector("#rules-page");
var yeahBuddyBtn = document.querySelector("#yb-btn");
var questionsPage = document.querySelector("#questions-page");
var completedQuiz = document.querySelector("#completed-quiz");
var score = document.querySelector("#score");
var sumbitBtn = document.querySelector("#sbmt-btn");
var highScoresPage = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");
var initials = document.querySelector("#initials");
var playBtn = document.querySelector("#play-btn");
var clearBtn = document.querySelector("#clear-btn");
// q = [];
var time;
var gameOn;

// function to get to rules
enterBtn.addEventListener("click", showRules);
function showRules() {
    enterBtn.style.display = "none";
    rulesPage.style.display = "block";
}

// function to get to questions page and start questions and timer
yeahBuddyBtn.addEventListener("click", startQuiz);

var questionsPointer = 0;
var userScore = 0;
var sec = 60;

var title = document.querySelector("#title");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");

// events
optionA.addEventListener("click", function (e) {
    checkAnswer(e);
});

optionB.addEventListener("click", function (e) {
    checkAnswer(e);
});

optionC.addEventListener("click", function (e) {
    checkAnswer(e);
});

optionD.addEventListener("click", function (e) {
    checkAnswer(e);
});

// // what happens when user picks incorrectly
// function timeDuction() {
//   sec -= 10;

//   if (sec < 0) {
//     sec = 0;
//   }
// }

function checkAnswer(e) {
    //   console.log(e.target);
    if (
        e.target.getAttribute("data-answer") ===
        myQuestions[questionsPointer].answer
    ) {
        console.log("CORRECT!");
        userScore += 10;
        isGameOver();
    } else {
        console.log("INCORRECT!");
        isGameOver();
        sec -= 5;
    }
}

//function to start the questions
function askQuestion() {
    if (gameOn) {
        console.log("asking question again");
        title.textContent = myQuestions[questionsPointer].q;
        optionA.textContent = myQuestions[questionsPointer].choices[0];
        optionB.textContent = myQuestions[questionsPointer].choices[1];
        optionC.textContent = myQuestions[questionsPointer].choices[2];
        optionD.textContent = myQuestions[questionsPointer].choices[3];
    }
}
// function to find out if game is over
function isGameOver() {
    console.log(`the current question is: ${questionsPointer}`);
    console.log(`number of questions: ${myQuestions.length}`);
    if (questionsPointer === myQuestions.length - 1) {
        console.log(`questionsPointer is ${questionsPointer}`);
        //     console.log("GAME OVER");
        gameOver();
    } else {
        console.log("no game is not over");
        questionsPointer++;
        console.log(`questionsPointer is ${questionsPointer}`);
        askQuestion();
    }
}
// when the game is over
function gameOver() {
    gameOn = false;
    console.log("game over");
    if (sec <= 0) {
    clearInterval(time);
    }
    alert("YEAH BUDDY! You survived and finished early " + sec + " seconds left");
    questionsPage.style.display = "none";
    completedQuiz.style.display = "block";

    getFinalScore();
}

time = setInterval(startTimer, 1000);
function startQuiz() {
    gameOn = true;
    rulesPage.style.display = "none";
    questionsPage.style.display = "block";

    askQuestion();
    startTimer();
}

// function to start timer

function startTimer() {

  document.getElementById("seconds").innerHTML = sec + "seconds left";
  sec--;
  if (sec <= 0) {
    clearInterval(time);
    questionsPage.style.display = "none";
    completedQuiz.style.display = "block";
  }
}

//function for final user score and submit

function getFinalScore() {
    console.log("final score");
    clearInterval(time)
    score.textContent = userScore;
    
    console.log(userScore);
    sumbitBtn.addEventListener("click", highScoresPage);
    completedQuiz.style.display = "block";
    highScoresList.style.display = "block";
}

//function for highScores page and store Scores in localstorage
function highScoresPage() {
    var storedScores = JSON.parse(localStorage.getItem("score"));
    if (storedScores !== null) {
        score = storedScores;
    }

    renderScores();

    function storeScores() {
        localStorage.setItem("score", JSON.stringify(todos));
    }
    highScoresList.innerHTML = "";

    //function for play and clear scores
    playBtn.addEventListener("click", startQuestions);
    clearBtn.addEventListener("click", reset);
}
