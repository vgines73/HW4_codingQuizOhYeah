
//define all variables 

var enterBtn = document.querySelector("#enter-btn");
var rulesPage = document.querySelector("#rules-page");
var yeahBuddyBtn = document.querySelector("#yb-btn");
var questionsPage = document.querySelector("#questions-page");
var completedQuiz = document.querySelector("#completed-quiz");
var score = document.querySelector("#score")
var sumbitBtn = document.querySelector("#sbmt-btn");
var highScoresPage = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");
var initials = document.querySelector("#initials");
var playBtn = document.querySelector("#play-btn");
var clearBtn = document.querySelector("#clear-btn");
// q = [];
var time;

// function to get to rules
enterBtn.addEventListener("click", showRules)
function showRules() {
    enterBtn.style.display = "none";
    rulesPage.style.display = "block";
};

// function to get to questions page and start questions and timer 
yeahBuddyBtn.addEventListener("click", startQuestions)

var questionsPointer = 0;
var userScore = 0;

var title = document.querySelector("#title");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var sec = 60;

//function to start the questions
function askQuestion() {
    // console.log(myQuestions[questionsPointer].q)
    title.textContent = myQuestions[questionsPointer].q;
    optionA.textContent = myQuestions[questionsPointer].choices[0];
    optionB.textContent = myQuestions[questionsPointer].choices[1];
    optionC.textContent = myQuestions[questionsPointer].choices[2];
    optionD.textContent = myQuestions[questionsPointer].choices[3];

        // what happens if user picks correctly
        optionA.addEventListener("click", function () {
            if(optionA.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
                //console.log("this is correct")
                questionsPointer++;
                userScore += 10;
                startQuestions()
            }
        });
    
        optionB.addEventListener("click", function () {
            if(optionB.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
                //console.log("this is correct")
                questionsPointer++;
                userScore += 10;
                startQuestions() 
            }
        });
    
        optionC.addEventListener("click", function () {
            if(optionC.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
                //console.log("this is correct")
                questionsPointer++;
                userScore += 10;
                startQuestions()
    
            }
        });
    
        optionD.addEventListener("click", function () {
            if(optionD.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
                //console.log("this is correct")
                questionsPointer++;
                userScore += 10;
                startQuestions()
      
            }
        });
    
        // what happens when user picks incorrectly
        if (this.value !== myQuestions[questionsPointer].answer){
            sec -= 10;
            
            if (sec < 0) {
                sec = 0;
            }
        }
    
}
function startQuestions() {
    rulesPage.style.display = "none";
    questionsPage.style.display = "block";
    
    // alert for finishing the quiz early
    if(questionsPointer === myQuestions.length){
        clearInterval(startTimer)
        alert("YEAH BUDDY! You survived and finished early " + sec + " seconds left");
        questionsPage.style.display = "none";
        completedQuiz.style.display = "block";
        
    }
    askQuestion()


    
}    

    // function to start timer

function startTimer() {

    time = setInterval(startTimer, 1000);

    document.getElementById("seconds").innerHTML = (sec + "seconds left");
    sec--;
    if (sec === 0) {
        clearInterval(time);
        questionsPage.style.display = "none";
        completedQuiz.style.display = "block";
    }
    
};



//function for final user score and submit 

function getFinalScore () {
    
    userScore.textContent(score)
    userScore.appendChild("#score")
    //console.log(userScore)
    sumbitBtn.addEventListener("click", highScoresPage) 
        completedQuiz.style.display = "none";
        highScores.style.display = "block";
    
};




//function for highScores page and store Scores in localstorage
    function highScoresPage () {

        var storedScores = JSON.parse(localStorage.getItem("score"));
        if (storedScores !== null) {
            score = storedScores;
        }

        renderScores(); {
        }

        function storeScores() {
            localStorage.setItem("score", JSON.stringify(todos));
        }
        highScoresList.innerHTML = "";


    

        //function for play and clear scores
        playBtn.addEventListener("click", startQuestions);
        clearBtn.addEventListener("click", reset);
    };
