console.log("Guessing Game!");
console.log("it works!");

startButton.onclick = function () {
    alert('Ready, player 1?');

    confirm("Let's play a guessing game.");

    let g = prompt("Guess a number...");

    let guess = parseInt(g);

    if(guess === 7) {
        alert("You got it!");
    }  else  {
        alert("No!");
    }

    alert("Thanks for playing!");
}