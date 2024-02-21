console.log("Guessing Game!");
console.log("it works!");

startButton.onclick = function () {
    alert('Ready, player 1?');

    confirm("Let's play a guessing game.");

    let g = prompt("Guess a number...");

    let guess = parseInt(g);

    if(guess === 6) {
        alert("You got it!");
        body1.style.backgroundColor = "#0d6efd";
        resultDiv.textContent = "You win";
    }  else  {
        alert("No!");
        resultDiv.textContent = "You Lose" 
        body1.style.backgroundColor = "green";

    }

    alert("Thanks for playing!");
}