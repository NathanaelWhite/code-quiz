// create variables
var pageContentEl = document.querySelector(".page-content");
var startPage = document.querySelector(".start-screen");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var scoreCounter = document.querySelector(".checkscore");
var score = 0;
var timeLeft = 180;

var start = function () {
  startPage.style.display = "none";
  //when user onclicks the #start-btn call the generateQuestion()
  document.getElementById("#start-btn").onclick = generateQuestion();
  // also onclick call the function for time
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
    questionTitle: "Which built-in method returns the character at the specific index?",
    options: ["charAt()", "characterAt()", "getCharacter()"],
    answer: "charAt()",
  },
  {
    questionTitle: "Which of the following is correct about features of JavaScript?",
    options: ["JavaScript is open and cross-platform", "Javascript is useless", "JavaScript can't manipulate the DOM"],
    answer: "JavaScript is open and cross-platform",
  },
  {
    questionTitle: "Which of the following function of String object combines the text of two strings ans returns a new one?",
    options: ["addEm()", "appendThis()", "concat()"],
    answer: "concat()",
  },
  {
    questionTitle: "In JavaScript, what method is used to create an element in html?",
    options: [".htmlEl()", "html.createElement()", "document.creatElement()"],
    answer: "document.creatElement()",
  },
];

var timeInterval =  {
  
}

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
    console.log("wrong!");
  }

  questionIndex++;
  generateQuestion();
};

pageContentEl.addEventListener("click", generateQuestion);
