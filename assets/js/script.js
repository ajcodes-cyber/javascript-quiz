var startButton = document.querySelector ("#start-button");
var questionDisplay = document.querySelector("#main-header");
var answerDisplayEl = document.querySelector("#answers");
var playerScore= 0;
var nextButton = document.querySelector('#next-btn');
var mainContent = document.querySelector('#main-content');
var questionNum = 0;

var questionObject = [
   
    {   question: "what is a Boolean?",
        answers: [{text: "true", correct: false, id:0},
        {text: "false", correct: false, id:0},
        {text: "both", correct: true, id:25},
        {text: "none", correct: false, id:0}],
        
    },
   
    {   question: "What does HTML stand for?",
        answers: [{text:"Hypertext Markup Language", correct: true, id:25}, 
        {text:"Happy Times Meeting Lobbyists", correct: false, id:0}, 
        {text:"Hens Train Male Llamas", correct: false, id:0},
        {text:"Hyper Test Markdown Language", correct: false, id:0}],
   },

   {   question: "Which answer is the 'not' operator",
       answers: [{text:"null", correct: false, id:0}, 
               {text:"&", correct: false, id:0}, 
               {text:"Na", correct: false, id:0}, 
               {text:"!", correct: true, id:25}],
   },
   
   {   question: "Which one is not a primitive data-type in javascript",
       answers: [{text:"string", correct: false, id:0},
               {text:"float", correct: true, id:25}, 
               {text:"boolean", correct: false, id:0}, 
               {text:"number", correct: false, id:0}],
   }
   ];

var startQuiz = function() {
    nextQuestion();
    
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
    reset();
    show(questionObject[questionNum]);
    
}

var show = function(question) {
    questionDisplay.innerText = question.question;
    question.answers.forEach(answer => {
        var answerButton = document.createElement("button");
        answerButton.innerHTML = answer.text;
        if(answers.correct) {
            answerButton.dataset.correct = answer.correct;
        }
        answerButton.classList.add('button')
        
        answerButton.addEventListener("click", select);

        answerDisplayEl.appendChild(answerButton);

    })
    
}


var select = function(event){
    var targetedButton = event.target;
    var correct = targetedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerDisplayEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    if (correct) {
        playerScore+=25;
        console.log(playerScore);
    }
    })
}

var reset = function(){
    clearStatusClass(document.body)
    while (answerDisplayEl.firstChild) {
        answerDisplayEl.removeChild
        (answerDisplayEl.firstChild);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    questionNum++
    nextQuestion();
})