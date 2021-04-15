// create variables
var pageContentEl = document.querySelector(".page-content");
var questionsEl = document.querySelector(".questions");
// var choiceA = document.getElementById("A");
// var choiceB = document.getElementById("B");
// var choiceC = document.getElementById("C");
var scoreCounter = 0;
// var startGame = document.getElementById("#start-game");
var timeLeft = 180;

//1. play the game
//2. add time
//3. local storage
var start = function () {
    document.querySelector(".questions").style.display = "none";
    document.querySelector(".choices").style.display = "none";
    document.querySelector(".checkscore").style.display = "none";
    //when user onclicks the #start-btn call the generateQuestion()
    document.getElementById("#start-btn").onclick = generateQuestion();
  }

// create an object for the questions
var index = 0;

var game = {
  questionsEl: ["question one", "question two", "question three"],
  choices: [
    ["option one", "option two", "option three"],
    ["A", "B", "C"],
  ],
  answer: [
    ["option one", "C"],
    ["option two", "A"],
    ["option three", "B"],
  ],
};

// var game= {
//     question: ['the sky is blue?','is today a good day?'],
//     choices: [
//         ["yes", "no","idk"],
//         ['A','B','C']
//     ],
//     answer: ['yes', 'C']

// }

//time: stop, start, reduce time

// add time constraint function using setTimeout. lets say 3 min.
// function countdown() {
//     timeLeft = 180;

//     var timeInterval = setTimeout(function() {
//         if (timeLeft = 0) {
//             clearInterval(timeInterval);
//             console.log(timeInterval);
//             // show user score
//         }
//     }, 1000);
//     console.log(countdown);
// }







// create a function for generating the questions
//when user clicks on btn, update index++
//you need to know when to stop
function generateQuestion() {
    // once start btn is clicked, hide all start screen elements
    document.querySelector(".start-screen").style.display = "none";

  document.querySelector(".questions").style.display = "block";
  document.querySelector(".choices").style.display = "block";
  document.querySelector(".checkscore").style.display = "block";


  console.log(game.questionsEl[index]);
  //#questions
  document.querySelector(".questions").textContent = game.questionsEl[index];

  //the same way as #questions
  console.log(game.answer[index]);

  /*

    <div class="choice" id="A" onclick="checkAnswer('A')"></div>
    <div class="choice" id="B" onclick="checkAnswer('B')"></div>
    <div class="choice" id="C" onclick="checkAnswer('C')"></div>


append to the #choices location
*/
  console.log(game.choices[index][0]);
  var d1 = document.createElement("button");
  //<div></div>
  d1.setAttribute("class", "choice");
  //<div class="choice"></div>
  d1.setAttribute("data-val", game.choices[index][0]);
  d1.textContent = game.choices[index][0];

  console.log(game.choices[index][1]);
  console.log(game.choices[index][2]);

  document.querySelector(".questions").appendChild(d1);

  //when user clicks on .choice get the current value of the btn (this)
  //then check if the userinput == game.answer[index]
  //update index, go to the next card generateQuestion();

  //LATER you need to first check if the index is in range, if it is generate the card
  //else show them the game over fx

  //----------

  // every time a question is asked, it needs to be appended to the main html element

  // use if statements questions... if the answer is correct, then score++. if wrong, then deduct time from quiz
}







// // create an generateScore function
// var generateScore = function () {
//     // inform the user what they scored on the quiz
//     // take the answers and add them to localstorage using setItem
//     var highScore = localStorage.setItem("saveScore");

//     if (score > highScore) {
//         localStorage.setItem("highscore", score);
//     };
// }

// document.getElementById("#start-btn").addEventListener("click", start);

// use an event listener (on click) to take highscore out of localstorage using getItem and show highscore
// pageContentEl.addEventListener("click", score);
// pageContentEl.addEventListener("click", highScore);

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

pageContentEl.addEventListener("click", generateQuestion);

// generateQuestion();