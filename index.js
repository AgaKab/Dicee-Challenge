
// Player 1
var randomNumber1 = Math.floor((Math.random()* 6)+1);
var choiceImage = 'images/dice' + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", choiceImage);

// Player 2
var randomNumber2 = Math.floor((Math.random()* 6)+1);
var choiceImage = 'images/dice' + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", choiceImage);

// Score
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    document.querySelector(".container").style.width = "80%";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector(".container").style.width = "80%";
}