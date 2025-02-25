var randomnumber1 = Math.floor(Math.random() * 6);
randomnumber1 += 1;

document.querySelector(".img1").setAttribute("src","./images/dice" + randomnumber1 + ".png");


var randomnumber2 = Math.floor(Math.random() * 6);
randomnumber2 += 1;

document.querySelector(".img2").setAttribute("src","./images/dice" + randomnumber2 + ".png");

if(randomnumber1 === randomnumber2){
    document.querySelector(".container h1").innerHTML = "Draw!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector(".container h1").innerHTML = "Player 1 Wins! 🚩";
}