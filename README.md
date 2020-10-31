# HW4_codingQuizOhYeah
Pretty much needed to build a coding quiz with

- multiple choice questions
- timer
- stores high scores
- compare scores on a high score list

The criteria needed for quiz

- quiz starts and timer start after clicking the start button
- question will appear and user will have 60 seconds to complete quiz.
- if user answers correct, 10 pts are added to score; then goes on to next question.
- if user answers incorrectly, timer is reduced by 5 seconds, then goes on to next question.
- if all questions are answered or timer reaches 0 the game is over.
- once the game is over, user receives scores and input initals and will sumbit it and will appear on high scores list.

[screencapture-vgines73-github-io-HW4-codingQuizOhYeah-2020-10-24-23_48_01 (1).pdf](https://github.com/vgines73/HW4_codingQuizOhYeah/files/5434255/screencapture-vgines73-github-io-HW4-codingQuizOhYeah-2020-10-24-23_48_01.1.pdf)

https://vgines73.github.io/HW4_codingQuizOhYeah/

https://github.com/vgines73/HW4_codingQuizOhYeah

This assignment was really hard. I felt like I spent over 20 hours trying to problem solve and finish this. I came coming across a ton of issues/errors.
I ended up getting stuck after completing the quiz. The submit button wouldn't console.log so I knew I wouldn't be able to put it in local storage. Which I was not able to create an updated high score page. 

Another issue I had was after completing the quiz, the game would refresh after the submit button.
So I was not able to finish this assignment. After finally figuring out how to use the event.preventdefault function, I was able to prevent the game from refreshing.

Local storage was a big issue. I couldn't store anything in local storage. After numerous attempts, research, I was able to at least get the object in there. I was not able to get the values in. Everytime i ran it, it would come out with name with no initials, and score would be 0.

I was able to fix the play again button and im assuming the clear high score button is functional because the clear button cleared out local storage.

Local storage is now fixed. For my variables, my playerInitials is set equal to an empty value, and my initialsAndScore is also pre-defined as name:null, score:0. I needed to assign values to them inside the high score function. When I was trying to figure out why my values weren't coming up I was using textContent as opposed to grabbing its value by using .value.

Next issue was obtaining the scores on the high scores page. When returned user initials and userscore came back undefined. I also noticed another error where multiple users are not saved into local storage. Instead it was replaced.
