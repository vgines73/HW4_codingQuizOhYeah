// to start the game ill need to

//define all variables 
//var timerStarts = document.querySelector(".time")
var enterBtn = document.querySelector("#enter-btn");
var rulesPage = document.querySelector("#rules-page");
var yeahBuddyBtn = document.querySelector("#yb-btn");
var questionsPage = document.querySelector("#questions-page");
//var title = document.querySelector("#title");
//var answerA = document.querySelector("#A");
//var answerB = document.querySelector("#B");
//var answerC = document.querySelector("#C");
//var answerD = document.querySelector("#D");
var answer = document.querySelector(".answer");
var completedQuiz = document.querySelector("#completed-quiz");
var userScore = document.querySelector("#score")
var sumbitBtn = document.querySelector("#sbmt-btn");
var highScores = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");
var playBtn = document.querySelector("#play-btn");
var clearBtn = document.querySelector("#clear-btn");

// function to get to rules
enterBtn.addEventListener("click", showRules)
function showRules() {
    enterBtn.style.display = "none";
    rulesPage.style.display = "block";
};

// function to start questions 
yeahBuddyBtn.addEventListener("click", startQuestions)

var questionsPointer = 0;

var title = document.querySelector("#title");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");

function startQuestions() {
    rulesPage.style.display = "none";
    questionsPage.style.display = "block";
    
    title.textContent = myQuestions[questionsPointer].q;

    if(questionsPointer === myQuestions.length){
        clearInterval(startTimer)
        alert("YEAH BUDDY! You finished early " + sec + " seconds left");
        return
    }
    optionA.textContent = myQuestions[questionsPointer].choices[0];
    optionB.textContent = myQuestions[questionsPointer].choices[1];
    optionC.textContent = myQuestions[questionsPointer].choices[2];
    optionD.textContent = myQuestions[questionsPointer].choices[3];

      

    optionA.addEventListener("click", function () {
        if(optionA.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
            console.log("this is correct")
            questionsPointer++;
            startQuestions()
        } else {
            console.log("wrong")
            sec -= 10;
        }
    })

    optionB.addEventListener("click", function () {
        if(optionB.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
            console.log("this is correct")
            questionsPointer++;
            startQuestions()
        } else {
            console.log("wrong")
            sec -= 10;
        }
    })

    optionC.addEventListener("click", function () {
        if(optionC.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
            console.log("this is correct")
            questionsPointer++;
            startQuestions()
        } else {
            console.log("wrong")
            sec -= 10;
        }
    })

    optionD.addEventListener("click", function () {
        if(optionD.getAttribute("data-answer") === myQuestions[questionsPointer].answer) {
            console.log("this is correct")
            questionsPointer++;
            startQuestions()
        } else {
            console.log("wrong")
            sec -= 10;
        }
    })

    


    // function to start timer
    var sec = 60;
    var time = setInterval(startTimer, 1000);

    function startTimer() {
        document.getElementById("seconds").innerHTML = (sec + "seconds left");
        sec--;
        if (sec === -1) {
            clearInterval(time);
            questionsPage.style.display = "none";
            completedQuiz.style.display = "block";
        }
    };
}

//     // target questions section div
//     // q = [];
//     var questionDiv = document.getElementById("question");
//     questionDiv.textContent()
//     q.forEach(title => {
//         questionDiv.append(title);
        
    
//     });
//     // target choices section div
//     var choicesDiv = document.getElementsByClassName(".choices");
//     q.forEach(choices => {
//         choicesDiv.append(choices);
//     });

//     // target answer section div
//     var answerDiv = document.getElementById("answer");
//     q.forEach(answer => {
//         answerDiv.append(answer);
//     })
// }
// function for user choice and points
// var score = 0;
// var sec = 60;
// answerA.addEventListener("click", function () {
//     if (answerA === answer) {
//         console.log(answerA);
//         score++;
//     } else {
//         score--;
//         sec--;
//     }
// });

// answerB.addEventListener("click", function () {
//     if (answerB === answer) {
//         console.log(score);
//         score++;
//     } else {
//         score--;
//         sec--;
//     }
// });

// answerC.addEventListener("click", function () {
//     if (answerC === answer) {
//         console.log(score);
//         score++;
//     } else {
//         score--;
//         sec--;
//     }

// });

// answerD.addEventListener("click", function () {
//     if (answerD === answer) {
//         console.log(score);
//         score++;
//     } else {
//         score--;
//         sec--;
//     }
// });


//    for (var i = 0; i < q.length; i++) {
//       console.log(q[i]);  

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
