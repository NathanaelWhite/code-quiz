// create variables
var pageContentEl = document.querySelector(".page-content");
var startPage = document.querySelector(".start-screen");
var questionTitle = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices");
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var scoreCounter = document.querySelector(".checkscore");
// var startGame = document.getElementById("#start-game");
var timeLeft = 180;

//1. play the game
//2. add time
//3. local storage
var start = function () {
  startPage.style.display = "none";
  // questionsEl.style.display = "none";
  // choices.style.display = "none";
  // scoreCounter.style.display = "none";
  //when user onclicks the #start-btn call the generateQuestion()
  document.getElementById("#start-btn").onclick = generateQuestion();
  // also onclick call the function for time
};

//-----------------------------------------------------

// create an object for the questions
var questionsArr = 0;

var questions = [
  {
  questionTitle: "What are variables used for in JavaScript?",
  options: ["To annoy and confuse you", "Storing number, dates, or other values", "Neither"],
  answer: "Storing number, dates, or other values"
  },
  {
    questionTitle: "question two",
    options: ["option A", "option B", "option C"],
    answer: "option A"
  },
  {
    questionTitle: "question three",
    options: ["option A", "option B", "option C"],
    answer: "option B"
  },
  {
    questionTitle: "question four",
    options: ["option A", "option B", "option C"],
    answer: "option C"
  },
  {
    questionTitle: "question five",
    options: ["option A", "option B", "option C"],
    answer: "option C"
  },
];
//--------------------------------------------------------------

// var game= {
//     question: ['the sky is blue?','is today a good day?'],
//     choices: [
//         ["yes", "no","idk"],
//         ['A','B','C']
//     ],
//     answer: ['yes', 'C']

// }
//--------------------------------------------------------------------------
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
// -------------------------------------------------------------------------

// create a function for generating the questions
//when user clicks on btn, update questionsArr++
//you need to know when to stop
function generateQuestion() {
  // once start btn is clicked, hide all start screen elements
  document.querySelector(".start-screen").style.display = "none";

  var quizContent = document.querySelector(".quiz-content");
  quizContent.style.display = "block";
  quizContent.textContent = questionTitle;
  console.log(quizContent);

  // then display questions, choices, and score counter
  // questionTitle.style.display = "block";
  // choices.style.display = "block";
  // scoreCounter.style.display = "block";
  // for (i = 0; i < questionsArr.length; i++) {
  //   // display question title
  //   questionTitle.textContent = questions.questionTitle[questionsArr];
  //   // display choices
  //   console.log(questions.options[questionsArr]);
    
  //   choicesEl.setAttribute("class", choicesEl);
  //   choicesEl.setAttribute("data-val", questions.options[questionsArr]);
  //   choicesEl.textContent = questions.options[questionsArr];
    

    questionTitle.appendChild(quizContent);
  // }

  // console.log(questions.questionTitle[questionsArr]);
  // //#questions
  

  //the same way as #questions
  // console.log(questions.answer[questionsArr]);

  // console.log(questions.options[questionsArr]);

  // <div></div>
  options.setAttribute("class", choicesEl);
  //<div class="choice"></div>
  options.setAttribute("data-val", questions.options[questionsArr][0]);
  options.textContent = questions.options[questionsArr][0];

  // console.log(questions.options[questionsArr][1]);
  // choicesEl.setAttribute("class", choicesEl);
  // //<div class="choice"></div>
  // choiceB.setAttribute("data-val", questions.choicesEl[questionsArr][1]);
  // choiceB.textContent = questions.choicesEl[questionsArr][1];

  // console.log(questions.options[questionsArr][2]);
  // choicesEl.setAttribute("class", choicesEl);
  // //<div class="choice"></div>
  // choiceC.setAttribute("data-val", questions.choicesEl[questionsArr][2]);
  // choiceC.textContent = questions.choicesEl[questionsArr][2];

 
  // questionTitle.appendChild(choiceB);
  // questionTitle.appendChild(choiceC);

  //when user clicks on .choice get the current value of the btn (this)
  //then check if the userinput == game.answer[questionsArr]
  //update questionsArr, go to the next card generateQuestion();

  //LATER you need to first check if the questionsArr is in range, if it is generate the card
  //else show them the game over fx

  //----------

  // every time a question is asked, it needs to be appended to the main html element

  // use if statements questions... if the answer is correct, then score++. if wrong, then deduct time from quiz
}
//-------------------------------------------------------------------------

// // create an generateScore function
// var generateScore = function () {
//     // inform the user what they scored on the quiz
//     // take the  and add them to localstorage using setItem
//     var highScore = localStorage.setItem("saveScore");

//     if (score > highScore) {
//         localStorage.setItem("highscore", score);
//     };
// }

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