// Initialize variables

var questions,
numQuestions,
question,
qInfo,
choiceA,
choiceB,
choiceC,
choiceD,
correct,
questionID,
userChoice;

var current = 0,
score = 0,
points = [];

// Default questions data

var defaultQuestions = [
{
  question: "Where are the three smallest bones in the human body?",
  choiceA: "middle ear",
  choiceB: "nose",
  choiceC: "toes",
  choiceD: "eyes",
  correct: "A"
},
{
  question: "What is the most abundant element in the Universe?",
  choiceA: "Helium",
  choiceB: "Oxygen",
  choiceC: "Lithium",
  choiceD: "Hydrogen",
  correct: "D"
},
{
  question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
  choiceA: "8 days",
  choiceB: "8 seconds",
  choiceC: "8 minutes",
  choiceD: "8 hours",
  correct: "C"
},
{
  question: "What is 10/2?",
  choiceA: "5",
  choiceB: "2",
  choiceC: "8",
  choiceD: "9",
  correct: "A"
},
{
  question: "Which planet has the most moons?",
  choiceA: "Saturn",
  choiceB: "Mars",
  choiceC: "Jupiter",
  choiceD: "Uranus",
  correct: "C"
}];

// reference HTML elements

var elQuiz = document.getElementById('quiz'),
elQuizStatus = document.getElementById('quizStatus'),
elQuestion = document.getElementById('question'),
elChoices = document.getElementsByName('choices'),
elChoiceA = document.getElementById('choiceA'),
elChoiceB = document.getElementById('choiceB'),
elChoiceC = document.getElementById('choiceC'),
elChoiceD = document.getElementById('choiceD'),
submit = document.getElementById('submit'),
options = document.getElementById('options');

// Function to populate question

function populateQuestions() {

  // populate with default questions
  questions = defaultQuestions;

  // populate with questions from local storage
  if (localStorage.getItem('questions')) {
    var storedQuestions = JSON.parse(localStorage.getItem('questions'));

    for (var i = 0; i < storedQuestions.length; i++) {
      questions.push(storedQuestions[i]);
    }
  }

  numQuestions = questions.length;
}

// Function to populate current question info from questions array

function populateQuestionInfo() {
  qInfo = questions[current];
  question = qInfo.question;
  choiceA = qInfo.choiceA;
  choiceB = qInfo.choiceB;
  choiceC = qInfo.choiceC;
  choiceD = qInfo.choiceD;
  correct = qInfo.correct;
}

// Function to render questions on a web page

function renderQuestion() {
  questionID = current + 1;
  elQuizStatus.innerHTML = "Question " + questionID + " of " + numQuestions;
  populateQuestionInfo();
  elQuestion.innerHTML = question;
  elChoiceA.innerHTML = choiceA;
  elChoiceB.innerHTML = choiceB;
  elChoiceC.innerHTML = choiceC;
  elChoiceD.innerHTML = choiceD;
}

// Function for check and get user answer

function getUserChoice() {
  for (var i = 0; i < elChoices.length; i++) {

    if (elChoices[i].checked) {
      userChoice = elChoices[i].value;

      // clear radio input for next question
      elChoices[i].checked = false;
      return true;
    }
  }

  // if user didn't select an answer
    alert('Please select an answer');
    return false;
}

// Function to submit an answer

function gradeQuestions() {

  if (getUserChoice()) {

    if (userChoice == correct) {
      score++;
      points[current] = 1;
    } else {
      points[current] = 0;
    }

    if (current === numQuestions - 1) {
      endGame();
    } else {

      // display next question
      current++;
      renderQuestion();
    }
  }
}

// Function to end a game

function endGame() {
  elQuiz.innerHTML = '<h2>Your score ' + score + ' out of ' + numQuestions + '</h2>';

  // display correct/incorrect answers
  for (var i = 0; i < points.length; i++) {
    var summary = document.createElement('p');

    if (points[i] == 0) {
      summary.innerHTML = 'Question №' + (i + 1) + ' incorrect';
      summary.style.color = 'red';
    } else {
      summary.innerHTML = 'Question №' + (i + 1) + ' correct';
      summary.style.color = 'green';
    }

    elQuiz.append(summary);
  }

  options.style.display = 'block';
}

// Start quiz

populateQuestions();
renderQuestion();

// Submit an answer

submit.addEventListener('click', gradeQuestions);