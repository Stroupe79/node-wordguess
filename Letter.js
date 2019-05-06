



// variable descipition - curGuess is the current guess from the user; preGuess tells whether that charcater has been chosen/guessed already.

var guessed = ["a"]
var input = process.argv[2]



const Letter = function (curGuess){
    this.curGuess = curGuess,
    this.preGuess = false,
    this.guessDraw = function (){
        if (guessed.contains(this.curGuess)){
            console.log("Already guessed, please choose again")
            gameLogic();
        }
        else {
            this.curGuess.push(guessed);
            console.log(guessed);
        }
    };
};


// function guess()


module.exports = Letter
// module.exports = guess
 