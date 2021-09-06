// create variables
var pageContentEl = document.querySelector(".page-content");
var startPage = document.querySelector(".start-screen");
var startBtn = document.querySelector(".start-game");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var scoreCounter = document.querySelector(".checkscore");
var score = 0;
var timerEl = document.querySelector(".timer");
var timeLeft;
var gameOver = false;

timerEl.textContent = 0;
// create a countdown timer that counts down from 180-0
// timer needs to start at 0 before we click the start button
// after we click start button timer needs to count down from 180
// 180 needs to decrement by 1 ever 1000ms
// once time hits 0 stop timer
var setTimer = function () {
  timeLeft = 180;
  var countdown = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown);
      endGame();
    }
    if (gameOver == true) {
      clearInterval(countdown);
    }
  }, 1000);
};

var start = function () {
  startPage.style.display = "none";
  //call the generateQuestion()
  generateQuestion();
  // also onclick call the function for time
  setTimer();
};

var questionIndex = 0;

var questions = [
  {
    questionTitle: "What are variables used for in JavaScript?",
    options: [
      "To annoy and confuse you",
      "Storing number, dates, or other values",
      "Neither",
    ],
    answer: "Storing number, dates, or other values",
  },
  {
    questionTitle:
      "Which built-in method returns the character at the specific index?",
    options: ["charAt()", "characterAt()", "getCharacter()"],
    answer: "charAt()",
  },
  {
    questionTitle:
      "Which of the following is correct about features of JavaScript?",
    options: [
      "JavaScript is open and cross-platform",
      "Javascript is useless",
      "JavaScript can't manipulate the DOM",
    ],
    answer: "JavaScript is open and cross-platform",
  },
  {
    questionTitle:
      "Which of the following function of String object combines the text of two strings ans returns a new one?",
    options: ["addEm()", "appendThis()", "concat()"],
    answer: "concat()",
  },
  {
    questionTitle:
      "In JavaScript, what method is used to create an element in html?",
    options: [".htmlEl()", "html.createElement()", "document.creatElement()"],
    answer: "document.creatElement()",
  },
];

function generateQuestion() {
  // hide start screen
  document.querySelector(".start-screen").style.display = "none";

  // question title
  questionEl.textContent = questions[questionIndex].questionTitle;
  choicesEl.innerHTML = "";

  for (var x = 0; x < questions[questionIndex].options.length; x++) {
    // display choices
    var optionDiv = document.createElement("button");
    optionDiv.addEventListener("click", checkAnswer);
    optionDiv.textContent = questions[questionIndex].options[x];
    choicesEl.appendChild(optionDiv);
  }

  // loop through questions
}

var checkAnswer = function (event) {
  var clickedAnswer = event.target.outerText;

  if (clickedAnswer == questions[questionIndex].answer) {
    score++;
    scoreCounter.textContent = "Your score: " + score;
  } else {
    timeLeft = timeLeft - 30;
  }
  
  if (questionIndex == 4) {
    gameOver = true;
    endGame();
  } 
  if (questions.length > questionIndex + 1) {
    questionIndex++;    
  }
  
  console.log(questionIndex);
  generateQuestion();
};

var endGame = function() {
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  scoreCounter.textContent = "Your final score is " + score + "!";

  // add form element to checkscore
  document.createElement("form");
}

startBtn.addEventListener("click", start);
