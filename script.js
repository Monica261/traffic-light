const red = document.getElementById('redButton').onclick = clickRed;
const yellow = document.getElementById('yellowButton').onclick = clickYellow;
const green = document.getElementById('greenButton').onclick = clickGreen;


function clickRed() {
  clearLights();
  const redLight = document.getElementById('redLight').style.backgroundColor = "#c00";
}


function clickYellow() {
  clearLights();
  const yellowLight = document.getElementById('yellowLight').style.backgroundColor = "#cc0";
}

function clickGreen(){
  clearLights();
  document.getElementById('greenLight').style.backgroundColor = "#0c0";
}

function clearLights() {
  document.getElementById('redLight').style.backgroundColor = "black";
  document.getElementById('yellowLight').style.backgroundColor = "black";
  document.getElementById('greenLight').style.backgroundColor = "black";
}
