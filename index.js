const unirest = require("unirest");
const inquirer = require("inquirer");
const Word = require("./Word");


var chances = 0


wordGet();


// random word select store in Word constructor

//prompt user for each guess and track remaining guesses

function wordGet() {
    unirest.get("https://wordsapiv1.p.mashape.com/words/?random=true&lettersMin=4&lettersMax=10")
        .header("X-Mashape-Key", "c98b735c2emsha9b0e908e137c81p19229djsnd58fc87f7884")
        .header("Accept", "application/json")
        .then(function (response) {
            solution = response.body.word
            array = solution.split("")
            letter = new Word(array)
            length = array.length
            console.log (`The current word to guess is ${letter.letters}`)
            console.log (array.length)
            gameLogic()
        });
};





function gameLogic() {
if (chances < 5){
inquirer
    .prompt([{
            type: "input",
            message: "What is your guess?",
            name: "guess"
        },
        // {
        //     type: "search",
        //     message: "What exactly are you searching for?",
        //     name: "search"
        // }
    ])
    .then(function (response) {
        console.log(`You guessed ${response.guess} your word is ` + letter.letters);
        chances++;
        console.log(chances);
        gameLogic();
        contains(response.guess);
    });
} else {
    console.log (`Game Over! Your word was ${solution}`)
};
};