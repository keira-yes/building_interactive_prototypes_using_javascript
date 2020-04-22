// Update greeting with user's name
var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById('greeting');
greetingParagraph.innerHTML += ', ' + userName;

// Get numbers from user
var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));
var operand1 = document.getElementById('operand1');
var operand2 = document.getElementById('operand2');
operand1.innerHTML += num1;
operand2.innerHTML += num2;

// Operations
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

// Display results
document.getElementById('addition').innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById('subtraction').innerHTML = "The difference of " + num1 + " and " + num2 + " is " + difference;
document.getElementById('multiplication').innerHTML = "The product of " + num1 + " and " + num2 + " is " + product;
document.getElementById('division').innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient;
document.getElementById('modulus').innerHTML = "The modResult of " + num1 + " and " + num2 + " is " + modResult;