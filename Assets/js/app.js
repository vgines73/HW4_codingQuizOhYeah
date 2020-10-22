// to start the game ill need to

//define all variables 
var timerStarts = document.querySelector(".time")
var enterBtn = document.querySelector("#enter-btn");
var rules = document.querySelector("#rules");
var yeahBuddyBtn = document.querySelector("#yb-btn");
var questions = document.querySelector("#questions");
var title = document.querySelector("#title");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var answerD = document.querySelector("#D");
var answer = document.querySelector(".answer");
var completedQuiz = document.querySelector("#completed-quiz");
var score = document.querySelector("#score")
var sumbitBtn = document.querySelector("#sbmt-btn");
var highScores = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");
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
    var sec = 60;
    var time = setInterval(startTimer, 1000);

    function startTimer() {
        document.getElementById("seconds").innerHTML = (sec + "seconds left");
        sec--;
        if (sec == -1) {
            clearInterval(time);
            questions.style.display = "none";
            completedQuiz.style.display = "block";
        }        
    };    

// function for user choice and points
var score = 0;
answerA.addEventListener("click", function () {
    if (answerA === answer) {
    console.log(answerA);
    score++;
    } else {
        score--;
        sec--;
    }
});

answerB.addEventListener("click", function () {
    if (answerB === answer) {
    console.log(score);
    score++;
    } else {
        score--;
        sec--;
    }
});

answerC.addEventListener("click", function () {
    if (answerC === answer){
    console.log(score);
    score++;
    } else {
        score--;
        sec--;
    }
    
});

answerD.addEventListener("click", function () {
    if (answerD === answer){
    console.log(score);
    score++;
    } else {
        score--;
        sec--;
    }
});

// target questions section div
var questionsDiv = document.getElementById("questions");
var element = [title, choices, answer];
q.forEach(element => {
    questionsDiv.append(q);
});
// for loop for questions
}
//    for (var i = 0; i < q.length; i++) {
//       console.log(q[i]);  
//    };
//     var qRun = [] 
//         q.forEach(function(element){
//             q.push(element)
//         });
// }
//function for total points stored and input on completed quiz and high scores






//function for completed quiz
// sumbitBtn.addEventListener(click, highScores) //not working




// //function for highScores
//     function highScores () {
        // completedQuiz.style.display = "none";
        // highScores.style.display = "block";
    //};

// //function for play and clear scores
// playBtn.addEventListener("click", startQuestions) works
// clearBtn.addEventListener("click", reset)
