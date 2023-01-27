var dice1=Math.floor((Math.random()*6)+1);
var diceImage1= "dice" + dice1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImage1);

var dice2=Math.floor((Math.random()*6)+1);
var diceImage2= "dice" + dice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

    if (dice1===dice2){
        document.querySelector("h1").innerHTML="Draw!";
    }
    
    if (dice1>dice2){document.querySelector("h1").innerHTML="🚩Player 1 Wins!";}
    if (dice1<dice2){document.querySelector("h1").innerHTML="Player 2 Wins!🚩";}
    
