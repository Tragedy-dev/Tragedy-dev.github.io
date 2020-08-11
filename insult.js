var insult1 = ["pig", "cow", "dirt", "gross", "poop", "butt", "sewer", "smelly"];
var insult2 = ["eyed", "face", "toe", "brain", "head", "finger", "leg", "hair"];
var insult3 = ["marble", "weed", "dumby", "idiot", "half-witt", "potato", "shorty", "weakling"]


function insultgen() {
    var num1 = Math.floor(Math.random() * 8);
    var num2 = Math.floor(Math.random() * 8);
    var num3 = Math.floor(Math.random() * 8);

    document.getElementById("insult").innerHTML = `You ${insult1[num1]} ${insult2[num2]} ${insult3[num3]}!`
}
