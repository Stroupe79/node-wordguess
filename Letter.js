



// variable description - curGuess is the current guess from the user; preGuess tells whether that charcater has been chosen/guessed already.

var guessed = ["a"]
var input = process.argv[2]

// function newLetter(input) {
//     guess = new Letter() 
//     guess.guessDraw()
//     console.log("ran")  
// }


const Letter = function (curGuess){
    this.curGuess = curGuess,
    this.preGuess = false,
    this.guessDraw = function (curGuess){
        if (guessed.includes(curGuess)){
            console.log("Already guessed, please choose again");
            // gameLogic();
        }
        else {
            // this.curGuess.push(guessed);
            console.log(guessed);
        };
    };
};

const guess = new Letter();
guess.guessDraw(input)

// function guess()


module.exports = Letter
// module.exports = guess
 