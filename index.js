// 1-6
var randomNumber1 = Math.floor(Math.random() * 6) +1;    

// dice1.png - dice6.png
// var img1Path = "images/dice" + randomNumber1 + ".png"

var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomDiceSource = "images/" + randomDiceImage

//query for img tag and set attribute src witha new value for the left side
document.querySelectorAll("img")[0].setAttribute("src",randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

// var img2Path = "images/dice" + randomNumber2 + ".png"
var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomDiceSource2 = "images/" + randomDiceImage2

// query for img tag and set attribute src witha new value for the right side
document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

// Compare random Number 1 and random number 2
// if random number 1 is greater than random number 2, player 1 wins
// if random number 2 is lesser , player 2 wins
//else draw

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}

