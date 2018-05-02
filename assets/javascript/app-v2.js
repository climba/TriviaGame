// JavaScript function that wraps everything
$(document).ready(function() {

var myQuestions = [
  {
    question: "In rhyming slang, if someone said they we going to have a 'bo-peep', what they be doing?",
    answers: {
      a: "Having a sleep",
      b: "Have a wee",
      c: "Drink some beer",
      d: "Cook a BBQ"
    },
    correctAnswer: "a"
  },
  {
    question: "Australians hold the world record for which amazing feat?",
    answers: {
      a: "Biggest BBQ",
      b: "Largest Christmas Cracker",
      c: "Most beer drank",
      d: "Biggest didgeridoo"
    },
    correctAnswer: "b"
  },
  {
    question: "What is Kylie Minogue’s lingerie line called?",
    answers: {
      a: "Kylie Love",
      b: "Love from Kylie",
      c: "Love Kylie",
      d: "Kylie"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is the Big Prawn?",
    answers: {
      a: "Ballina",
      b: "Batemans Bay",
      c: "Bateau Bay",
      d: "Baudin Beach"
    },
    correctAnswer: "a"
  },
  {
    question: "Approximately how many rabbits are there in Australia today?",
    answers: {
      a: "3 million",
      b: "30 million",
      c: "300 million",
      d: "3000 million"
    },
    correctAnswer: "c"
  },
  {
    question: "What was the name of Olivia Newton-John’s chain of clothing stores?",
    answers: {
      a: "Xanadu",
      b: "Koala Blue",
      c: "Oliva",
      d: "Liv"
    },
    correctAnswer: "b"
  },
  {
    question: "What famous beach is known for being in the final scene of point break?",
    answers: {
      a: "Bells Beach",
      b: "Bedourie",
      c: "Byron Bay",
      d: "Beachlands"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is not an Australian innovation?",
    answers: {
      a: "Chiko Roll",
      b: "Lawn Sprinkler",
      c: "Plastic bank notes",
      d: "Wine Cask"
    },
    correctAnswer: "b"
  },
  {
    question: "What creature does Jana Pittman have tattooed on her body?",
    answers: {
      a: "Scorpion",
      b: "Bee",
      c: "Dragon",
      d: "Owl"
    },
    correctAnswer: "b"
  }
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


function buildQuiz(){
  // The HTML output get stored here
  var output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // For each question there is a list of possible answers
      var answers = [];

      // for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input class="radbs" type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

  function showResults(){
    
  }

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener('click', showResults);

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // here goes the code we want to run for each question
    // we'll want to store the list of answer choices
var answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
  });


  quizContainer.innerHTML = output.join('');

  function showResults(){

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = 'input[name=question'+questionNumber+']:checked';
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }

  // gather answer containers from our quiz
var answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

  // find selected answer
  var answerContainer = answerContainers[questionNumber];
  var selector = `input[name=question${questionNumber}]:checked`;
  var userAnswer = (answerContainer.querySelector(selector) || {}).value;

  // if answer is correct
  if(userAnswer===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else {
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
});







});