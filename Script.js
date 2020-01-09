// JavaScript source code
var level = 1
var points = 0
var progressBarProgress = 10 // (a percent)
var pointsPerClick = 1
var pointsPerLevel = 10
var upgradeCost = 15
var upgradeText = ["Buy an extra arm <br/> from the arm dealer", "take a class in genetic engineering and grow an arm on your ear", "Gain a free level", "Steal a robot from a secret lab"];
var dot = 0
var upgrades = 0
var robot = "flase"
 
function click() {
points = points + pointsPerClick;
document.getElementById("butt").innerHTML = "You have " + points + " points";
document.getElementById("myBar").style.width = progressBarProgress + "%";
progressBarProgress = + progressBarProgress + (pointsPerClick / pointsPerLevel) * 100;

}


function myFunction() {
/* just setting stuff so it goes back to norms */
document.getElementById("levelText").style.fontSize = "10px";
document.getElementById("levelText").style.marginTop= "-15px";
document.getElementById("levelText").style.color = "black";
document.getElementById("levelText").style.backgroundColor = "white";
document.getElementById("levelText").innerHTML = "Level " + level;
document.getElementById("levelText").style.webkitAnimation = "none";
document.getElementById("buttt").style.display = "none";
document.getElementById("butt").style.webkitAnimation = "none";
// levl up reset below
if (points >= pointsPerLevel) {
points = 0;
progressBarProgress = pointsPerClick / pointsPerLevel * 100;
//progressBarProgress = progressBarProgress + pointsPerClick;
level = level + 1;
pointsPerLevel = pointsPerLevel * 1.2;
//fancylevel up stuff
document.getElementById("levelText").innerHTML = "!! Level " + level + " !!";
document.getElementById("levelText").style.webkitAnimation = "colorchange 5s infinite alternate";
document.getElementById("butt").innerHTML = "Level Up!"; 
document.getElementById("butt").style.webkitAnimation = "colorchange 5s infinite alternate";

//upgrade text

if (points >= 1)
upgradeText = upgradeText[dot]
document.getElementById("upgradeText").innerHTML = upgradeText[dot];
}

//limit on progress bar
/*else if (points >= pointsPerLevel && progressBarProgress >= 100) {
points = points - 1;
progressBarProgress = progressBarProgress - pointsPerClick;
} 
*/
/*get a point below and varius stuff in click() function*/
 
else {
click()
}


/*Upgrade section stuff below*/
if (level >= 3) {
document.getElementById("buttt").style.display = "block";
}
}

//mouseover stuff and such

function mouseOver() {
  document.getElementById("but").style.color = "white";
    document.getElementById("but").style.border = "lightgreen solid 2px";
}

function mouseOut() {
  document.getElementById("but").style.color = "black";
    document.getElementById("but").style.border = "grey solid 2px";
}

function mouseScroll() {
  document.getElementById("but").style.color = "blue";
document.getElementById("but").style.border = "blue solid 2px";
}

function buyUpgrade() {
	dot = dot + 1;
	document.getElementById("upgradeText").innerHTML = upgradeText[dot];
	points = points - upgradeCost;
	//upgradeCost = Math.round(upgradeCost * 1.5); // uncomment when time to publish
	document.getElementById("upgradeCost").innerHTML = "Cost: " + upgradeCost + " points";
	document.getElementById("butt").innerHTML = "You have " + points + " points";
	progressBarProgress = progressBarProgress - upgradeCost;
	document.getElementById("myBar").style.width = progressBarProgress + "%";
	upgrades = upgrades + 1;
	if (upgrades == 1){
		pointsPerClick = pointsPerClick + 1;
	}
	if (upgrades == 2){
	pointsPerClick = pointsPerClick + 1;
	}
	if (upgrades == 3){
	level = level + 1;
	document.getElementById("levelText").innerHTML = "level " + level;
	}
	if (upgrades == 4){
	robot = "true"
	document.getElementById("roboDiv").style.display = "block";
	}

}

function upgradeFun() {
	if (upgradeCost > points) {
	null;
	}
	else if (upgradeCost <= points) {
		buyUpgrade();
	}
}

function mouseOverUpgradeBuyAble() {
document.getElementById("upgrade").style.backgroundColor = "rgb(152,251,152)";
}

function mouseOutUpgrade() {
document.getElementById("upgrade").style.backgroundColor = "rgb(220,220,220)";
}



function robotClick() {
	if (robot == "true"){
	myFunction();
	}
	else {
	null;
	}
}
// work on progressbar issues, satr at ten%
//upgrade issues
//w3 school js arrays
//stop at lvl 99 
//lvl 99 gets big fat prestige

var mainGameLoop = window.setInterval(function() {
  robotClick()
}, 100)
