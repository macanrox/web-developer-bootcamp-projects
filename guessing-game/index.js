//make a number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess the number I'm thinking of");
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber){
	alert("You got it!")
}  
else if(guess > secretNumber){
	alert("Too high, guess a lower value");
}
else {
	alert("Too low, guess a higher value");
}