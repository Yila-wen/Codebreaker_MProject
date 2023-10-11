let code = generateCode();
let guess = "";
let attempts = 0;

function generateCode() {
    
    let code = "";
    for (let i = 0; i < 3; i++) {
        code += Math.floor(Math.random() * 3) + 1;
    }
    return code;
}

function addToGuess(number) {
    if (guess.length < 3) {
        guess += number;
        document.getElementById("guess").innerText = guess;
    }
    if (guess.length === 3) {
        checkGuess();
    }
}

function clearGuess() {
    guess = "";
    document.getElementById("guess").innerText = guess;
}

function checkGuess() {
    attempts++;
    document.getElementById("clock").innerText = 7 - attempts;

    let result = "";

    if (guess === code) {
        result = "Correct! You cracked the vault!";
        code = generateCode();
        attempts = 0;
    } else {
        if (guess < code){
            result = "Higher";
        }
        else {
            result = "Lower";
        }
    }

    
    document.getElementById("log").innerHTML = "<p>Attempt " + attempts + ": " + guess + " - " + result + "</p> " + document.getElementById("log").innerHTML;

    clearGuess();

    if (attempts === 7) {
        document.getElementById("log").innerHTML = "Out of attempts. Generating a new code." + document.getElementById("log").innerHTML;
        code = generateCode();
        attempts = 0;
    }
}