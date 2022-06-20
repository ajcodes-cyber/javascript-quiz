var startButtonEl = document.querySelector ("#start-button");
var questionDisplay = document.querySelector("#main-header");

var questionObject = [

{   question: "What is a Boolean?",
    answers: ["true", "false", "both"],
    correct: "3"
},

{   question2: "What does HTML stand for?",
    answers2: ["Hypertext Markup Language", "Happy Times Meeting Lobbyists", "Hens Train Male Llamas", "Hyper Test Markup Language"],
    correct2: "1"
},

{
    question3: "What is the 'not' operator?",
    answers3: ["null", "&", "Na", "!"],
    correct3: "4"
},

{
    question4: "Which item is not a primitive data type in JavaScript?",
    answers4: ["string", "float", "number", "boolean"],
    correct4: "2"
}
];

var startQuiz = function() {
var quizQuestion = document.createElement("div");
quizQuestion.className = "questions";    

var q2 = document.createElement("p");
questionDisplay.textContent = questionObject[1].question2;

quizQuestion.appendChild(q2);

}

startButtonEl.addEventListener("click", startQuiz);

