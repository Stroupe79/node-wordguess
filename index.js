const unirest = require("unirest");
const inquirer = require ("inquirer");


wordGet();


// random word select store in Word constructor

//prompt user for each guess and track remaining guesses

function wordGet(){
    unirest.get("https://wordsapiv1.p.mashape.com/words/?random=true&lettersMin=4&lettersMax=10")
    .header("X-Mashape-Key", "c98b735c2emsha9b0e908e137c81p19229djsnd58fc87f7884")
    .header("Accept", "application/json")
    .then(function (response){
        var solution = response.body.word
    gameLogic(solution)
    }
    )
}





function gameLogic(solution){
inquirer
    .prompt([{
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        // {
        //     type: "search",
        //     message: "What exactly are you searching for?",
        //     name: "search"
        // }
    ])
    .then(function (response) {
console.log (`Hello ${response.name} your word is ` + solution)    });
}