const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let guess = parseInt(prompt("Guess the number between 1 and 50:"));

let guesses = 5;

while(guess !== answer && guesses > 1){
    if(guess > answer){
        guesses--;
        guess = parseInt(prompt("Guess is too high. Guess again. You have " + guesses + " guesses left."));
    }
    else{
        guesses--;
        guess = parseInt(prompt("Too low. Guess again. You have " + guesses + " guesses left."));
    }
}
if(guess === answer){
    alert("Congratulations. You guessed the number");
}  else{
        alert("Out of guesses. The number was " + answer);
}
