console.log("loaded"); 
// to see if content is loading


let computerChoice = ["amphibian", "spotted newt", "salamander", "tadpole", "ornate horned frog"];

let answerIndex = Math.floor(Math.random() * computerChoice.length);
console.log(answerIndex);


let word = computerChoice.splice(answerIndex, 1);
let wordArray = word[0].split("");
let chances = 10;
let wrongLetters = [];
let userProgress = [];
let wins = 0;
let losses = 0;

for (let i=0; i < wordArray.length; i++) {
    userProgress.push("_ ");
}
render();

function render(){
document.getElementById("userProgress").textContent = userProgress.join("");
}

// console.log(wordArray);

// console.log(computerChoice[answerIndex]);

document.onkeyup = function(event) {
    // console.log(event.key);
    let userInput = event.key.toLowerCase();
    console.log(userInput);

    for (let j = 0; j < wordArray.length; j++) {
        if(userInput === wordArray[j]) {
            userProgress[j] = userInput;
            
        }
        // console.log(wrongLetters);
        // console.log(userProgress);
    } 

    if (wordArray.indexOf(userInput) === -1){
        wrongLetters.push(userInput);
        document.getElementById("wrongLetters").textContent = wrongLetters.join(" ");
        chances--;
        document.getElementById("chances").textContent = chances;
    };

    if (chances === 0) {
        document.getElementById("gameOver").textContent = "GAME OVER";
        document.getElementById("correctAnswer").textContent = word;
        document.getElementById("userProgress").style.display = "none";
        // document.onkeyup = null;
        losses++;
        document.getElementById("numLosses").textContent = losses;
    };

    if (userProgress.indexOf("_ ") === -1) {
        wins++;
        document.getElementById("numWins").textContent = wins;
        // document.onkeyup = null;
    };

  



    // document.getElementById("reset").addEventListener('click', function(){
    //     answerIndex = Math.floor(Math.random() * computerChoice.length);
    //     word = computerChoice.splice(answerIndex, 1);
    //     wordArray = word[0].split("");
    //     userProgress = [];
    //     for (let i=0; i < wordArray.length; i++) {
    //         userProgress.push("_ ");
    //     };
    //     document.getElementById("wrongLetters").textContent = "";
    //     chances = 10;
    //     document.getElementById("chances").textContent = chances;
    //     document.getElementById("userProgress").textContent = userProgress.join("");
    //     //render();
    // })

    
    
    render ();

}


document.getElementById("reset").addEventListener('click', function(){
    computerChoice = ["portend", "ornithology", "prescience", "wondrous"];
    answerIndex = Math.floor(Math.random() * computerChoice.length);
    word = computerChoice.splice(answerIndex, 1);
    wordArray = word[0].split("");
    userProgress = [];
    for (let i=0; i < wordArray.length; i++) {
        userProgress.push("_ ");
    };
    document.getElementById("wrongLetters").textContent = "";
    document.getElementById("correctAnswer").textContent = "";
    document.getElementById("gameOver").textContent = "";
    chances = 10;
    document.getElementById("chances").textContent = chances;
    console.log(userProgress)
    wrongLetters = [];
    document.getElementById("userProgress").style.display = "block";
    document.getElementById("userProgress").textContent = userProgress.join("");
    //render();
})
