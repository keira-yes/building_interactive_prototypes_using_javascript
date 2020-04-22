// Create references to page elements

var input = document.getElementById('task'),
addButton = document.getElementById('add'),
taskList = document.getElementById('taskList'),
clearButton = document.getElementById('clear')
doneList = document.getElementById('doneList'),
error = document.getElementById('error');

// Add new item to task list

function addTask() {
	var inputValue = input.value.trim();

	if (inputValue) {

		// add new task list item
		var newItem = document.createElement('LI');
		var newItemValue = document.createTextNode(inputValue);
		newItem.appendChild(newItemValue);
		input.value = '';

		// add done button
		var doneButton = document.createElement('BUTTON');
		doneButton.className = 'done';
		doneButton.innerHTML = "Done";
		doneButton.addEventListener('click', markDoneTask);
		newItem.appendChild(doneButton);

		taskList.appendChild(newItem);

		// remove error message
		error.textContent = '';
	} else {
		addError();
	}

}

// Remove done task

function markDoneTask(e) {
	var doneTask = e.target.parentElement;
	doneTask.removeChild(e.target);
	taskList.removeChild(doneTask);
	doneList.appendChild(doneTask);
}

// Clear list items

function clearList() {
	taskList.innerHTML = '';
}

// Add error message to the page

function addError() {
	error.textContent = 'Enter a correct task!';
}

addButton.addEventListener('click', addTask);
clearButton.addEventListener('click', clearList);