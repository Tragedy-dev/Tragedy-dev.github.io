//Tragedy_Dev

var facts = [
    "the heads on Easter Island have bodies?", 
    "the moon has moonquakes.",
    "pineapple works as a natural meat tenderizer.",
    "humans are the only animals that blush.",
    "the wood frog can hold its pee for up to eight months.",
    "the hottest spot on the planet is in Libya.",
    "you lose up to 30 percent of your taste buds during flight.",
    "only two mammals like spicy food: humans and the tree shrew.",
    "rabbits can't puke.",
    "the M's in M&Ms stand for Mars and Murrie.",
    "the human body literally glows.",
    "copper door knobs are self-disinfecting.",
    "cotton candy was invented by a dentist.",
    "Creedence Clearwater Revival has the most No. 2 Billboard hits—without ever hitting No. 1.",
    "chewing gum boosts concentration.",
    "the unicorn is the national animal of Scotland.",
    "bees sometimes sting other bees.",
    "a dozen bodies were once found in Benjamin Franklin's basement.",
    "he healthiest place in the world is in Panama.",
    "A pharaoh once lathered his slaves in honey to keep bugs away from him.",
    "some people have an extra bone in their knee (and it's getting more common).",
    "pringles aren't actually potato chips.",
    "showers really do spark creativity.",
    "dolphins have been trained to be used in wars.",
    "playing the accordion was once required for teachers in North Korea.",
];



function getfact() {

    alert("Hold on, This is still in development!");

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var factNumber = day - 1;

    document.getElementById("fact").innerHTML = "Did you know " + facts[factNumber]; 
};