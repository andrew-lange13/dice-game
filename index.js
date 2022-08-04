let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

let randomDice = "images/dice" + randomNumber1 + ".png";

let image1 = document.getElementById("img1");

image1.setAttribute("src", randomDice);



let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.getElementById("img2");

image2.setAttribute("src", randomDice2);


if (randomNumber1 > randomNumber2){
    document.getElementById("titleHeading").innerHTML = "🏆 Player 1 Wins"
} else if(randomNumber2 > randomNumber1){
    document.getElementById("titleHeading").innerHTML = "Player 2 Wins 🥇"
} else{
    document.getElementById("titleHeading").innerHTML = "Draw"
}
