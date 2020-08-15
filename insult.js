var insult1 = ["pig", "cow", "dirt", "gross", "poop", "butt", "sewer", "smelly", "stinky"];
var insult2 = ["eyed", "face", "toe", "brain", "head", "finger", "leg", "hair"];
var insult3 = ["marble", "weed", "dumby", "idiot", "half-witt", "potato", "shorty", "weakling"]

function loadFunc() {
  insultGen();
  findTotalCombos();
}

function insultGen() {
    var num1 = Math.floor(Math.random() * insult1.length);
    var num2 = Math.floor(Math.random() * insult2.length);
    var num3 = Math.floor(Math.random() * insult3.length);

    document.getElementById("insult").innerHTML = `You ${insult1[num1]} ${insult2[num2]} ${insult3[num3]}!`;
}

function findTotalCombos() {
  var totalCombos = insult1.length * insult2.length * insult3.length;
  document.getElementById("comboTxt").innerHTML = `With ${totalCombos} total combinations!`;
}