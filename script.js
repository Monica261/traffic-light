const red = document.getElementById('redButton');
const yellow = document.getElementById('yellowButton');
const green = document.getElementById('greenButton');
const reset = document.getElementById('reset');
reset.addEventListener('click', start);

function clickRed() {
  start();
  const redLight = document.getElementById('redLight').style.backgroundColor = "#c00";
}
red.addEventListener('click', clickRed);

function clickYellow() {
  start();
  const yellowLight = document.getElementById('yellowLight').style.backgroundColor = "#cc0";
}
yellow.addEventListener('click', clickYellow);

function clickGreen(){
  start();
  document.getElementById('greenLight').style.backgroundColor = "#0c0";
}
green.addEventListener('click', clickGreen);

function start() {
  document.getElementById('redLight').style.backgroundColor = "black";
  document.getElementById('yellowLight').style.backgroundColor = "black";
  document.getElementById('greenLight').style.backgroundColor = "black";
}
