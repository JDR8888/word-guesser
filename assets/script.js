// assign dom variables to target start button, spot to store the text, update score, wins, losses
var start = document.querySelector("#start");
var wordBox = document.querySelector("#word");
var timer = document.querySelector("#time");
var winRecord = document.querySelector("#wins");
var lossRecord = document.querySelector("#losses");
var timeInterval;
// make an array of words to choose from
var words = ["word","javascript","shiny","array","calabash"];
var index = 0;
var word = "";
var blankWord = "";
var spot;
var firstCut = "";
var lastCut = "";
var wins = 0;
var losses = 0;
var timeLeft = 30;

winRecord.textContent = "Wins: " + wins;
lossRecord.textContent = "Losses: " + losses;
timer.textContent = "Time: " + timeLeft;

function playGame() {
    wordBox.textContent = " ";
    word = words[index];
    // console.log(word);
    for(i=0; i<word.length; i++) {
        blankWord = blankWord.concat("-");
    };
    wordBox.textContent = blankWord;
    timeInterval = setInterval(function() { // start the timer
        timeLeft--;
        timer.textContent ="Time: " + timeLeft + "s"; 

        getGuess();

        if(timeLeft <= 0) {clearInterval(timeInterval); //
            wordBox.textContent = "what a loser!";
            losses ++;
            lossRecord.textContent = "Losses: " + losses;
            index ++;
            playGame();
        };
        
        if(!(blankWord.includes("-"))) {
            clearInterval(timeInterval);
            wordBox.textContent = "oh...you won i guess";
            wins ++;
            winRecord.textContent = "Wins: "
        };
    }, 1000); //step-size = 1000ms (1s)
};

function getGuess() {
    document.addEventListener("keypress", function(event) {
        myGuess = event.key;
        spot = 0;
        if (word.includes(myGuess, spot)) {
         console.log(myGuess);
         spot = word.indexOf(myGuess);
         console.log(spot);
         firstCut = blankWord.substring(0, spot);
         lastCut = blankWord.substring(spot + 1);
         console.log(firstCut);
         console.log(lastCut);
         blankWord = firstCut + myGuess + lastCut;
         wordBox.textContent = blankWord;
         spot = spot + 1;
         console.log(spot);
         if (word.includes(myGuess, spot)) { //check again beyond the first finding
          spot = word.indexOf(myGuess, spot)
          console.log(spot)
          firstCut = blankWord.substring(0, spot);
          lastCut = blankWord.substring(spot + 1);
          console.log(firstCut);
          console.log(lastCut);
          blankWord = firstCut + myGuess + lastCut;
          wordBox.textContent = blankWord;
          spot = spot + 1;
          if (word.includes(myGuess, spot)) { //check again
            spot = word.indexOf(myGuess, spot)
            console.log(spot)
            firstCut = blankWord.substring(0, spot);
            lastCut = blankWord.substring(spot + 1);
            console.log(firstCut);
            console.log(lastCut);
            blankWord = firstCut + myGuess + lastCut;
            wordBox.textContent = blankWord;
           }; 
         };
  
        };
     });
}

start.addEventListener("click", function() {
    playGame();
});