var roundNumber1 = Math.floor(6*Math.random()+1);
var roundNumber2 = Math.floor(6*Math.random()+1);

if(roundNumber1>roundNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins🚩";
}else if (roundNumber2<roundNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}else{
  document.querySelector("h1").innerHTML="DRAW 🏳";
}

if(roundNumber1===1){
document.querySelector(".img1").src="images/dice1.png";
}else if (roundNumber1===2) {
document.querySelector(".img1").src="images/dice2.png";
}else if(roundNumber1===3){
document.querySelector(".img1").src="images/dice3.png";
}else if (roundNumber1===4) {
document.querySelector(".img1").src="images/dice4.png";
}else if(roundNumber1===5){
document.querySelector(".img1").src="images/dice5.png";
}else if(roundNumber1===6){
  document.querySelector(".img1").src="images/dice6.png";
}

if(roundNumber2===1){
document.querySelector(".img2").src="images/dice1.png";
}else if (roundNumber2===2) {
document.querySelector(".img2").src="images/dice2.png";
}else if(roundNumber2===3){
document.querySelector(".img2").src="images/dice3.png";
}else if (roundNumber2===4) {
document.querySelector(".img2").src="images/dice4.png";
}else if(roundNumber2===5){
document.querySelector(".img2").src="images/dice5.png";
}else if(roundNumber2===6){
  document.querySelector(".img2").src="images/dice6.png";
}
