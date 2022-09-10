class Game {
    word;
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    wordToGuess = [];
    usedNumbers = [];
    rounds = 0;
    won = false;
    isPlaying = true;

    constructor() {
        //Per demanar la paraula al jugador utilitzem el prompt i afegim parametre al constructor... 'constructor(word)'
        //this.word = prompt('Danos una palabra!');
        this.word = word;
        alert(" Hello! Welcome to THE GAME! ");
        this.generateWordToGuess();
        this.playGame();
    }



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

    checkIfWin() {
        for (let i = 0; i < this.wordToGuess.length; i++) {
            if (this.wordToGuess[i].isGuessed === false) {
                return;
            }
        }

        this.won = true;
        return;
    }

    playGame() {
        do {
            if (confirm("Do you want a letter? 8-) ")) {
                this.newTurn();
                this.checkIfWin();
                console.table(this.wordToGuess);
            } else {
                this.isPlaying = false;
            }
        } while (!this.won && this.isPlaying);
        if (this.won) {
            alert(` Congratulations! You Won in ${this.rounds} rounds`);
        } else {
            alert(" Goodbye! 8-(");
        }
    }
};
 
