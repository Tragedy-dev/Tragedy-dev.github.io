//new Date(year, month, day, hours, minutes, seconds, milliseconds);-
/*

Storing Data

//this is what gets saved
myObj = {name: "John", age: 31, city: "New York"};

//this makes myObj in to a string version
myJSON = JSON.stringify(myObj);

//this saves the myJson to file testJson
localStorage.setItem("testJSON", myJSON);
*/
/*

Retriving Data

//varible the retrived stuff gets set to
text = localStorage.getItem("testJSON");

//this makes obj into a actual object
obj = JSON.parse(text);

//then display the data
*/


player = {
    points: 0,
    lastDate: new Date(2020, 0, 1, 1, 0, 0, 0)
};

var currentDate = new Date();
//var daysLeft = ((currentDate-player.lastDate)/1000/60/60/24);

function myFunc() {
    if ((currentDate - player.lastDate)/1000/60/60 > 24) {
        player.points++
        player.lastDate = new Date();
        document.getElementById("pointDisplay").innerHTML = `You have ${player.points} Points`;
        console.log(`Daily Points collected at ${player.lastDate}`)
    } else {
        console.log(`You already collected your points today!`)
    }
}




//document.getElementById("timeLeft").innerHTML = daysLeft;