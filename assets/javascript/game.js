/* JS PROPERLY LINKED */
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

document.onkeyup = function(event)
    {
        var userGuess = event.key;

        var computerGuess = alphabet[Math.floor(Math.random() *alphabet.length)];

        if(userGuess === "a" && computerGuess === "p"){
            loses++;
        }
        alert("user guess: " + userGuess);

        alert("Computer guess: "+ computerGuess);


        document.getElementById("wins").innerHTML="Wins:" + wins;
        document.getElementById("losses").innerHTML="Losses:" + losses;
        document.getElementById("guessesLeft").innerHTML="Guesses Left:" + guessesLeft;
        document.getElementById("guessesSoFar").innerHTML="Your Guesses so Far:" + guessesSoFar;

    };