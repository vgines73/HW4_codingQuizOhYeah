// to start the game ill need to

//define all variables 
var timerStarts = document.querySelector(".time")
var enterBtn = document.querySelector("#enter-btn");
var rules = document.querySelector("#rules");
var yeahBuddyBtn = document.querySelector("#yb-btn");
var questions = document.querySelector("#questions");
var title = document.querySelector("#title");
var choices = document.querySelector(".choices");
var answer = document.querySelector(".answer");
var completedQuiz = document.querySelector("#completed-quiz");
var score = document.querySelector("#score")
var sumbitBtn = document.querySelector("#sbmt-btn");
var highScores = document.querySelector("#high-scores");
var playBtn = document.querySelector("#play-btn");
var clearBtn = document.querySelector("#clear-btn");

// function to get to rules
enterBtn.addEventListener("click", showRules)
   function showRules () {
        enterBtn.style.display = "none";
        rules.style.display = "block";
};

// function to start questions
yeahBuddyBtn.addEventListener("click", startQuestions)
    function startQuestions () {
        rules.style.display = "none";
        questions.style.display = "block";
    

// function to start timer
    var sec = 30;
    var time = setInterval(startTimer, 1000);

    function startTimer() {
        document.getElementById("seconds").innerHTML = (sec + "seconds left");
        sec--;
        if (sec == -1) {
            clearInterval(time);
        }
        
    };
    }



//for loop for questions
    
   //for (let i = 0; i < questions.length; i++) {
//        const element = questions[i];  
   //};
// for loop for choices
    //for (let i = 0; i < choices.length; i++) {
//        const element = choices[i];
        
   // }


//function for correct points and total points stored and input on completed quiz and high scores
var score = 0;



//function for incorrect and reduce timer for each incorrect

//function for completed quiz

//function for high scores

//function for play and clear scores