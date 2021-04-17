// create variables
var pageContentEl = document.querySelector(".page-content");
var startPage = document.querySelector(".start-screen");
var questionTitle = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices");
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var scoreCounter = document.querySelector(".checkscore");
var timeLeft = 180;

var start = function () {
  startPage.style.display = "none";
  //when user onclicks the #start-btn call the generateQuestion()
  document.getElementById("#start-btn").onclick = generateQuestion();
  // also onclick call the function for time
};

var questionsArr = [0];

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
    questionTitle: "question two",
    options: ["option A", "option B", "option C"],
    answer: "option A",
  },
  {
    questionTitle: "question three",
    options: ["option A", "option B", "option C"],
    answer: "option B",
  },
  {
    questionTitle: "question four",
    options: ["option A", "option B", "option C"],
    answer: "option C",
  },
  {
    questionTitle: "question five",
    options: ["option A", "option B", "option C"],
    answer: "option C",
  },
];

function generateQuestion() {
    // hide start screen
    document.querySelector(".start-screen").style.display = "none";

    var quizContainerEl = document.createElement("div");
    quizContainerEl.className = "quiz-actions";

    // create question content
    var options = document.createElement("button");
    options.textContent = "hello ";
    options.className = "choices";
    options.setAttribute("data-val", questions);
    console.log(questions);

    quizContainerEl.appendChild(options);

    

    // for loop to loop through questions
    for (i = 0; i < questions.length; i++) {      


    }

}

pageContentEl.addEventListener("click", generateQuestion);