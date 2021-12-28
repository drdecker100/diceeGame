// generate random number between 1 and 6 
randomNumber1 = Math.floor((Math.random(0)*6)+1)

// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png 

// then place this image inside the left <img> element.

// format for path to image images.dice<number>.ping
img1Path = "images/dice" + randomNumber1 + ".png"

//query for img tag and set attribute src witha new value for the left side
document.querySelectorAll("img")[0].setAttribute("src",img1Path);

randomNumber2 = Math.floor((Math.random(0)*6)+1)

img2Path = "images/dice" + randomNumber2 + ".png"

// query for img tag and set attribute src witha new value for the right side
document.querySelectorAll("img")[1].setAttribute("src",img2Path);

// Compare random Number 1 and random number 2
// if random number 1 is greater than random number 2, player 1 wins
// if random number 2 is lesser , player 2 wins
//else draw

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!"
}
else {
    document.querySelector("h1").textContent = "Draw"
}

