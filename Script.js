// JavaScript source code
var level = 1
var points = 0
var progressBarProgress = 10
var pointsPerClick = 10
var pointsPerLevel = 10
var upgradeCost = 15

function click() {
points = points + 1;
document.getElementById("butt").innerHTML = "You have " + points + " points";
document.getElementById("myBar").style.width = progressBarProgress + "%";
progressBarProgress = progressBarProgress + pointsPerClick;
}

function myFunction() {
document.getElementById("levelText").style.fontSize = "10px";
document.getElementById("levelText").style.marginTop= "-15px";
document.getElementById("levelText").style.color = "black";
document.getElementById("levelText").style.backgroundColor = "white";
document.getElementById("levelText").innerHTML = "Level " + level;
document.getElementById("levelText").style.webkitAnimation = "none";
if (points >= pointsPerLevel) {
/* alert("LEVEL UP!"); */
points = -1;
progressBarProgress = -10;
progressBarProgress = progressBarProgress + pointsPerClick;
level = level + 1;
document.getElementById("levelText").innerHTML = "!! Level " + level + " !!";
document.getElementById("levelText").style.webkitAnimation = "colorchange 5s infinite alternate";
document.getElementById("butt").innerHTML = "Level Up!";
}
else if (points >= pointsPerLevel, progressBarProgress > 100) {
points = points - 1;
progressBarProgress = progressBarProgress - pointsPerClick;
} else {
click()
}
}

function mouseOver() {
  document.getElementById("but").style.color = "white";
    document.getElementById("but").style.border = "lightgreen dashed 5px";
}

function mouseOut() {
  document.getElementById("but").style.color = "black";
    document.getElementById("but").style.border = "grey solid 5px";
}

function mouseScroll() {
  document.getElementById("but").style.color = "blue";
document.getElementById("but").style.border = "blue solid 5px";
}

function touchTheButtt() {
  var x = document.getElementById("upgrade");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function upgradeDiv() {
  var x = document.getElementById("buttt");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function upgradeFun() {
alert("You cant get that yet! You need " + upgradeCost + " points!")
}

function mouseOverUpgradeBuyAble() {
document.getElementById("upgrade").style.backgroundColor = "rgb(152,251,152)";
}

function mouseOutUpgrade() {
document.getElementById("upgrade").style.backgroundColor = "rgb(220,220,220)";
}

function canITouch() {
touchTheButt()
}

// work on level up stuff