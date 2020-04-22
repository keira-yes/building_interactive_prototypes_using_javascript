// program data

var number = Math.floor(Math.random() * 100) + 1;
var guess;
var guesses = [];
var limit = 4;
var won = false;

for (i = 1; i <= limit; i++) {

	// prompt user for their guess

	do {
		guess = parseInt(prompt('Guess a number from 1 to 100'));
	} while (isNaN(guess) || isPreviousGuess())

	// if correct: let the user know they won

	if(guess == number) {
		document.write('Your number ' + guess + ' is correct. You win!');
		won = true;
		break;
	}

	// if incorrect: let the user know

	else {
		guesses.push(guess);
		if (guess < number) {
			alert('Incorrect. \nToo low number. \nYou have ' + (limit - i) + ' tries. \nYou have already used numbers: ' + guesses.toString());
		} else {
			alert('Incorrect. \nToo high number. \nYou have ' + (limit - i) + ' tries. \nYou have already used numbers: ' + guesses.toString());
		}
	}

}

// if the user ran out of tries, let them know the game is over

if (!won) {
	document.write('Sorry, you ran out of tries. Game over. <br> The correct number was: ' + number + '<br> The numbers you guessed: ' + guesses);
}

function isPreviousGuess() {
	for (i = 0; i < guesses.length; i++) {
		if (guesses[i] == guess) {
			return true;
		}
	}
	return false;
}