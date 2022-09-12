//new Bingo();

//Pendientes: 
//Crear guestCard de forma random
//Preguntar por partida nueva al ganar
//Sistema de puntaje y ranking

//Notas:
//Rango de Numeros de 1-30 para facilitar las pruebas

class Bingo {
    card = [2, 3, 4, 5, 7, 11, 13, 15, 16, 18, 21, 24, 25, 27, 29];
    range = "1-30";
    minNumber = 1;
    maxNumber = 30;
    guessCard = [];
    usedNumbers = [];
    playerName;
    rounds = 0;
    won = false;
    wonLineOne = false;
    wonLineTwo = false;
    wonLineThree = false;
    alertLineOne = true;
    alertLineTwo = true;
    alertLineThree = true;
    isPlaying = true;

    constructor() {
        this.askForName();
        this.printWelcome();
        this.generateGuessCard();

        //alert(`This are your numbers to the game: ${this.card}`);
        
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
        //alert(`Your number is: ${randomNumber}`);

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

    checkIfLineOneWin() {
        for (let i = 0; i <= 4; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }
        this.wonLineOne = true;
        if (this.wonLineOne && this.alertLineOne) {
            alert(` Congratulations! You Won Line One in ${this.rounds} rounds`);
            this.alertLineOne = false;
        }

        return this.wonLineOne;
    }
    checkIfLineTwoWin() {
        for (let i = 5; i <= 9; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }

        this.wonLineTwo = true;
        if (this.wonLineTwo && this.alertLineTwo) {
            alert(` Congratulations! You Won Line Two in ${this.rounds} rounds`);
            this.alertLineTwo = false;
        }
        return this.wonLineTwo;
    }
    checkIfLineThreeWin() {
        for (let i = 10; i <= 14; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }

        this.wonLineThree = true;
        if (this.wonLineThree && this.alertLineThree) {
            alert(` Congratulations! You Won Line Three in ${this.rounds} rounds`);
            this.alertLineThree = false;
        }
        return this.wonLineThree;
    }


    generateGuessCard() {
        for (let i = 0; i < this.card.length; i++) {
            this.guessCard.push({ number: this.card[i], isGuessed: false });
        }
    }

    showGuestCard() {
        this.showUsedNumbers();
        console.log("------------------------------------------");
        let counter = 0;
        this.guessCard.forEach((num) => {
            if (counter % 5 === 0 && counter !== 0) {
                console.log("------------------**------------------------");
            }
            console.log(`Card:  ${num.number} Mached:  ${this.numberIsGuessed(num.isGuessed)}`);
            counter++;
        });
        //numberIsGuessed(flight.scale)
        console.log(`-----------------------------Rounds: ${this.rounds}---`);
        //this.showUsedNumbers();
    }
    // showGuestCardBis() {
    //     console.log("---------------------//---------------------");
    //     this.card.forEach((num) => {
    //         console.log(`Card:  ${num}`);
    //     });

    //     console.log("--------------------//----------------------");

    // }

    numberIsGuessed(isGuessed) {
        let guessed = (isGuessed) ? "X" : " "
        return guessed;
    }
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
        this.showGuestCard();
        this.newTurn();

        do {
            if (confirm("Do you want next round? ")) {
                //console.clear();


                console.clear();
                console.log(`Welcome to our Bingo: Mr/Mrs  ${this.playerName}`);
                this.showGuestCard();
                this.newTurn();
                this.checkIfLineOneWin();
                this.checkIfLineTwoWin();
                this.checkIfLineThreeWin();
                this.checkIfWin();


            } else {
                this.isPlaying = false;
            }
        } while (!this.won && this.isPlaying);

        if (this.won) {
            alert(` Congratulations! You Won in ${this.rounds} rounds`);
            console.clear();
            console.log(` Congratulations! Mr/Mrs  ${this.playerName} You Won in ${this.rounds} rounds`);
            this.showGuestCard();
        } else {
            alert(" Goodbye! ");
        }
    }
}