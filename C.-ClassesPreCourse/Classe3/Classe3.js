const word = "codigo";
const wordToGuess = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const usedNumbers = [];
let rounds = 0;
let won = false;
let isPlaying = true;



const generateWordToGuess = () => {
    for (let i = 0; i < word.length; i++) {
        wordToGuess.push({ letter: word[i], isGuessed: false });
    };
};

const getRandomLetter = () => {
    const randomNumber = Math.floor(Math.random() * alphabet.length);
    //console.log(randomNumber);

    if (usedNumbers.includes(randomNumber)) {
        return getRandomLetter();
    };

    usedNumbers.push(randomNumber);
    return alphabet.charAt(randomNumber);
};

const newTurn = () => {
    const randomLetter = getRandomLetter();
    alert(`Your letter is: ${randomLetter.toUpperCase()}`);

    wordToGuess.forEach(character => {
        if (character.letter === randomLetter) {
            character.isGuessed = true;
        };
    });

    rounds++;
};

const checkIfWin = () => {
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i].isGuessed === false) {
            return;
        }
    }

    won = true;
    return;
}

const playGame = () => {
    do {
        if (confirm("Do you want a letter? 8-) ")) {
            newTurn();
            checkIfWin();
            console.table(wordToGuess);
        } else {
            isPlaying = false;
        }
    } while (!won && isPlaying);
    if (won) {
        alert(` Congratulations! You Won in ${rounds} rounds`);
    } else {
        alert(" Goodbye! 8-(");
    }
}

const letsPlay = () => {
    alert(" Hello! Welcome to THE GAME! ");
    generateWordToGuess();
    playGame();
};

letsPlay();