
class Game {
    word = "codigo";
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    wordToGuess = [];
    usedNumbers = [];
    rounds = 0;
    won = false;
    isPlaying = true;

    generateWordToGuess() {
        for (let i = 0; i < this.word.length; i++) {
            this.wordToGuess.push({ letter: this.word[i], isGuessed: false });
        }
    }

    getRandomLetter() {
        const randomNumber = Math.floor(Math.random() * this.alphabet.length);


        if (this.usedNumbers.includes(randomNumber)) {
            return this.getRandomLetter();
        };

        this.usedNumbers.push(randomNumber);
        return this.alphabet.charAt(randomNumber);
    }

    newTurn() {
        const randomLetter = this.getRandomLetter();
        alert(`Your letter is: ${randomLetter.toUpperCase()}`);

        this.wordToGuess.forEach(character => {
            if (character.letter === randomLetter) {
                character.isGuessed = true;
            };
        });

        this.rounds++;
    }

}



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