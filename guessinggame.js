var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];



// Set Initial Global Values



var wins = 0;

var losses = 0;

var guessesLeft = 9;



// create array "guessesSoFar" that will store user's guesses in each round

var guessesSoFar = [];



// userGuess is what the user selects by pressing a key a-z

var userGuess = null;



var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];

console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);


document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();


    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {

        guessesSoFar[guessesSoFar.length] = userGuess;


        document.getElementById('GuessesSoFar').innerHTML = guessesSoFar.toString();

        guessesLeft--;

        document.getElementById('GuessesLeft').innerHTML = guessesLeft.toString();



    }



    if (letterToBeGuessed == userGuess) {

        wins++;


        console.log("You won!");

        guessesLeft = 9;

        guessesSoFar = [];

        letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];

        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

        document.getElementById('Wins').innerHTML = wins.toString();

        document.getElementById('GuessesLeft').innerHTML = guessesLeft.toString();

        document.getElementById('GuessesSoFar').innerHTML = guessesSoFar.toString();



    }



    if (guessesLeft == 0) {

        losses++;

        alert(losses.toString());

        console.log("You lost!");

        guessesLeft = 9;

        guessesSoFar = [];

        letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];



        document.getElementById('losses').innerHTML = losses.toString();



    }

}