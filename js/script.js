
function rollDicee() {
// Player One Dice Roll
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomDice = "images/" + "dice" + randomNum1 + ".png";
    var assignImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomDice);


    // Player Two Dice Roll
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var randomDice = "images/dice" + randomNum2 + ".png";
    var assignImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomDice);

// Winner Declaration
    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player One Wins";
    } else if (randomNum2 > randomNum1) {
        document.querySelector("h1").innerHTML = "Player Two Wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    } 
};



















// Onclick Button Function
// function rollDicee() {
// // Player 1 dice roll
//     var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//     var displayDice1 = document.querySelector(".img1");
//         if (randomNumber1 == 1) displayDice1.setAttribute("src", "images/dice1.png");
//         else if (randomNumber1 == 2) displayDice1.setAttribute("src", "images/dice2.png")
//         else if (randomNumber1 == 3) displayDice1.setAttribute("src", "images/dice3.png");
//         else if (randomNumber1 == 4) displayDice1.setAttribute("src", "images/dice4.png");
//         else if (randomNumber1 == 5) displayDice1.setAttribute("src", "images/dice5.png");
//         else if (randomNumber1 == 6) displayDice1.setAttribute("src", "images/dice6.png");
//         else displayDice1.setAttribute = "<images/dice6.png>";

// // Player 2 dice roll
//     var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//     var displayDice2 = document.querySelector(".img2");
//         if (randomNumber2 == 1) displayDice2.setAttribute("src", "images/dice1.png");
//         else if (randomNumber2 == 2) displayDice2.setAttribute("src", "images/dice2.png")
//         else if (randomNumber2 == 3) displayDice2.setAttribute("src", "images/dice3.png");
//         else if (randomNumber2 == 4) displayDice2.setAttribute("src", "images/dice4.png");
//         else if (randomNumber2 == 5) displayDice2.setAttribute("src", "images/dice5.png");
//         else if (randomNumber2 == 6) displayDice2.setAttribute("src", "images/dice6.png");
//         else displayDice2.setAttribute = "<images/dice6.png>";


// // Winner Declaration
//     if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").innerHTML = "Player 1 wins";
//     } else if (randomNumber2 > randomNumber1) {
//         document.querySelector("h1").innerHTML = "Player 2 wins";
//     } else if (randomNumber1 == randomNumber2) {
//         document.querySelector("h1").innerHTML = "Draw!"
//     } else {
//         document.querySelector("h1").innerHTML = "Refresh Me";
//     }
// };