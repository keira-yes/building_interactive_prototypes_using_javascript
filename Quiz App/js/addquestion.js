var addQuestionForm = document.getElementById('add-question');

// Function to process a form

function processForm() {

  // create an object of a new question
  var newQuestion = {
    question: addQuestionForm.question.value,
    choiceA: addQuestionForm.choiceA.value,
    choiceB: addQuestionForm.choiceB.value,
    choiceC: addQuestionForm.choiceC.value,
    choiceD: addQuestionForm.choiceD.value,
    correct: addQuestionForm.correct.value
  }

  // if local storage contains questions, pull and update stored data
  if (localStorage.getItem('questions')) {
    var storageQuestions = JSON.parse(localStorage.getItem('questions'));
    storageQuestions.push(newQuestion);
    localStorage.setItem('questions', JSON.stringify(storageQuestions));
  } else {
    var storageQuestions = [newQuestion];
    localStorage.setItem('questions', JSON.stringify(storageQuestions));
  }

  // reset form fields
  addQuestionForm.reset();
  return false;

}

addQuestionForm.addEventListener('submit', processForm);