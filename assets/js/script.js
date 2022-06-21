var startButton = document.querySelector ("#start-button");
var questionDisplay = document.querySelector("#main-header");
var answerDisplayEl = document.querySelector(".answer-options");

var questionObject = [

{   question: "What is a Boolean?",
    answers: ["true", "false", "both"],
    correct: "3"
},

{   question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Happy Times Meeting Lobbyists", "Hens Train Male Llamas", "Hyper Test Markup Language"],
    correct: "1"
},

{
    question: "What is the 'not' operator?",
    answers: ["null", "&", "Na", "!"],
    correct: "4"
},

{
    question: "Which item is not a primitive data type in JavaScript?",
    answers: ["string", "float", "number", "boolean"],
    correct: "2"
}
];

var startQuiz = function() {
    nextQuestion();
    var questionNum = 0;
// // var quizQuestionEl = document.createElement("div");
// // quizQuestionEl.className = "questions";    

// // var q2 = document.createElement("p");
// questionDisplay.textContent = questionObject[1].question2;

// // quizQuestionEl.appendChild(q2El);

// var quizAnswersEl = document.createElement("li");
// quizAnswersEl.className = "answer-list";

// // var answerInfo = document.createElement("div");
// // answerInfo.className = "answer-info";

// answerInfo.innerHTML = "<h3 class='answer-name'>" + questionObject[0].question1;
// quizAnswersEl.appendChild(answerInfo);

}

var nextQuestion = function() {
    show(questionObject[questionNum]);
}

var show = function(question) {

}

var select = function(){

}

startButton.addEventListener("click", startQuiz);

