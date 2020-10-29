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
var playBtn = document.querySelector("#play-btn");
var clearBtn = document.querySelector("#clear-btn");
var time;
var gameOn;

//enter button to click to get to rules
enterBtn.style.display = "block"; // shows enter button

// function to get to rules
enterBtn.addEventListener("click", showRules);
function showRules() {
    enterBtn.style.display = "none"; // hides enter button
    rulesPage.style.display = "block"; // shows rules page
}

// Button to start and generate the questions page
yeahBuddyBtn.addEventListener("click", startQuiz);

var questionsPointer = 0; // start at question 0
var userScore = 0; // user score starts at 0
var sec = 60; // timer starts at 0

var title = document.querySelector("#title");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");

// events user clicking on each answer
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

// conditions for correct and incorrect answers
function checkAnswer(e) {
    //   console.log(e.target);
    if (
        e.target.getAttribute("data-answer") ===
        myQuestions[questionsPointer].answer
    ) {
        console.log("CORRECT!");
        userScore += 10; //if answer is correct user gets 10pts
        isGameOver();
    } else {
        console.log("INCORRECT!");
        isGameOver();
        sec -= 5; // if incorrect, timer reduced by 5 seconds
    }
}

// function to start the quiz, askquestions, and timer
time = setInterval(startTimer, 1000);

function startQuiz() {
    gameOn = true;
    rulesPage.style.display = "none";
    questionsPage.style.display = "block";

    askQuestion();
    //startTimer();

}
//function to ask the questions
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
        //console.log("GAME OVER");
        gameOver();
    } else {
        //console.log("no game is not over");
        questionsPointer++;
        //console.log(`questionsPointer is ${questionsPointer}`);
        askQuestion();
    }
}
// when the game is over
function gameOver() {
    gameOn = false;
    //console.log("game over");
    if (sec <= -1) {
        clearInterval(time);
    }
    alert("YEAH BUDDY! You survived and finished early " + sec + " seconds left");
    questionsPage.style.display = "none";
    completedQuiz.style.display = "block";
    
    getFinalScore();
    
}

// function to start timer
function startTimer() {

    document.getElementById("seconds").innerHTML = sec + "seconds left";
    sec--;
    if (sec <= -1) {
        clearInterval(time);
        questionsPage.style.display = "none";
        completedQuiz.style.display = "block";
        enterBtn.style.display = "none"
    }
}
var inputForm = document.querySelector("inputForm");
var initials = document.querySelector("#initials");

//function for final user score and submit initials and score

function getFinalScore() {
    //console.log("final score");
    clearInterval(time);
  //  initials.textContent = 
    score.textContent = userScore;
    //console.log(userScore);
    completedQuiz.style.display = "block";
    sumbitBtn.addEventListener("click", function (event) { // prevents game from refreshing
        event.preventDefault();
        highScores();
        completedQuiz.style.display = "none"
        // highScoresList.style.display = "block";
    })
    
}
// example from class
// var item = {name: "Thomas"}
// window.localStorage.setItem(JSON.stringify(item))
// var getThing = window.localStorage.getItem(JSON.parse(item))
// console.log(getThing)





var playerInitials 
scores = [];
var initialsAndScore

// store high scores/initials in local storage
function highScores() {
    completedQuiz.style.dispay = "none";
    highScoresPage.style.display = "block";
    playerInitials = initials.value
    initialsAndScore = {
      name: playerInitials,
      score: userScore
    }
    saveHighScore();
    initialsAndScore.storedScores  
    var player = JSON.stringify(initialsAndScore)
    console.log(player);
    console.log(playerInitials)
    localStorage.setItem("player", player)
};
 var playerScore = JSON.parse(localStorage.getItem("player"));
//console.log(JSON.parse(player));

// to show high scores
if (playerScore !== null) {
    for(var i =0; i < Object.keys(playerScore).length; i++){

        var playerRank = document.querySelector("#player-rank")
        var createLi = document.createElement("li");
        createLi.textContent = playerScore.initials + "OOH YEAH" + playerScore.userScore;
        playerRank.appendChild(createLi);
    };
};

function saveHighScore() {
    if (questionsPointer === myQuestions.length - 1) {
    console.log(playerScore)
        
    }
}

// reset high scores
clearBtn.addEventListener("click", function(){
    localStorage.clear();
})

// to view high scores list


// var viewHighScores = document.getElementById("#view-high-scores")
// viewHighScores.addEventListener(click, function(){
//     highScoresPage.style.display = "none"
// })


