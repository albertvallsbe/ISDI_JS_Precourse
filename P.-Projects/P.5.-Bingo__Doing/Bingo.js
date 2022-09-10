//new Bingo();

class Bingo {
    card = [2, 8, 12, 15];
    range = "1-99";
    minNumber = 1;
    maxNumber = 16;
    guessCard = [];
    usedNumbers = [];
    playerName;
    rounds = 0;
    won = false;
    isPlaying = true;

    constructor() {
        this.askForName();
        this.printWelcome();
        this.generateGuessCard();
        alert(`This are your numbers to the game: ${this.card}`);
        this.playGame();

    }

    getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * this.maxNumber);


        if (this.usedNumbers.includes(randomNumber)) {
            return this.getRandomNumber();
        };

        this.usedNumbers.push(randomNumber);
        return randomNumber;
    }


    newTurn() {
        const randomNumber = this.getRandomNumber();
        alert(`Your number is: ${randomNumber}`);

        this.guessCard.forEach(newNum => {
            if (newNum.number === randomNumber) {
                newNum.isGuessed = true;
            };
        });

        this.rounds++;
    }

    checkIfWin() {
        for (let i = 0; i < this.guessCard.length; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }

        this.won = true;
        return this.won;
    }


    generateGuessCard() {
        for (let i = 0; i < this.card.length; i++) {
            this.guessCard.push({ number: this.card[i], isGuessed: false });
        }
    }

    showGuestCard() {
        console.log("------------------------------------------");
        this.guessCard.forEach((num) => {
            console.log(`Card:  ${num.number} Mached:  ${num.isGuessed}`);
        });
        console.log(`-----------------------------Rounds: ${this.rounds}---`);
        this.showUsedNumbers();
    }
    // showGuestCardBis() {
    //     console.log("---------------------//---------------------");
    //     this.card.forEach((num) => {
    //         console.log(`Card:  ${num}`);
    //     });

    //     console.log("--------------------//----------------------");

    // }

    showUsedNumbers() {
        console.log("----------------/Used Numbers/-----------------");
        console.log(this.usedNumbers.join(', '))
        // this.usedNumbers.forEach((num) => {
        //     console.log(`Card:  ${num}`);            
        // });

        console.log("--------------------//----------------------");

    }
    askForName() {

        this.playerName = prompt(" Tell your name: ");

        if (this.playerName === null || this.playerName === "") {
            alert(" Empty, Please tell your name! ");
            this.askForName();
        } else if (!isNaN(this.playerName)) {
            alert(" It's not a name! Try again: ");
            this.askForName();
        } else {
            //this.printWelcome();
            return this.playerName;
        }
    }

    printWelcome() {
        console.log(`Welcome to our Bingo: Mr/Mrs  ${this.playerName}`);
        alert(`Welcome to our Bingo: Mr/Mrs  ${this.playerName}`);
    }

    playGame() {
        
        do {
            if (confirm("Do you want next round? ")) {
                this.newTurn();
                this.checkIfWin();
                this.showGuestCard();
            } else {
                this.isPlaying = false;
            }
        } while (!this.won && this.isPlaying);
        if (this.won) {
            alert(` Congratulations! You Won in ${this.rounds} rounds`);
            console.log(` Congratulations! You Won in ${this.rounds} rounds`);
        } else {
            alert(" Goodbye! 8-(");
        }
    }
}