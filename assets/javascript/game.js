/* JS PROPERLY LINKED */
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; //array to push user choices to
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess

        var computerGuess = computerChoices[Math.floor(Math.random() *computerChoices.length)]; // computer selects random letter

        guessesSoFar.push(userGuess); //pushing user guess to guesses so far

        if (userGuess === computerGuess) {
            wins++;
            alert("Way to go! You've guessed correctly. You Won!");
            guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
            guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show        
        }



        alert("user guess: " + userGuess);

        alert("Computer guess: "+ computerGuess);


        document.getElementById("wins").innerHTML="Wins:" + wins;
        document.getElementById("losses").innerHTML="Losses:" + losses;
        document.getElementById("guessesLeft").innerHTML="Guesses Left:" + guessesLeft;
        document.getElementById("guessesSoFar").innerHTML="Your Guesses so Far:" + guessesSoFar;

    };