  
var level = 1

function myFunction() {
	level = level + 1;
	alert("You have proceded to level " + level);
}

function mouseOver() {
  document.getElementById("but").style.color = "white";
    document.getElementById("but").style.border = "lightgreen dashed 5px";
}

function mouseOut() {
  document.getElementById("but").style.color = "black";
      document.getElementById("but").style.border = "grey solid 5px";
}
