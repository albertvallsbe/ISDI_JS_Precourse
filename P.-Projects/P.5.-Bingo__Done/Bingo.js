//new Bingo();

//Extra, jugar contra la maquina...
//Revisar: 
//Al crear la guestCard de forma random necesito la variable card=[] para evitar los duplicados en la guessCard=[]

//Notas:
//Rango de Numeros de 1-30 para facilitar las pruebas

class Bingo {
    rankingPlayers = [];
    card = [];
    maxCardNumbers = 15;
    range = "1-30";
    minNumber = 1;
    maxNumber = 30;
    guessCard = [];
    usedNumbers = [];
    playerName;
    rounds = 0;
    won = false;
    guessPoints = 0;
    pointsForNumber = 2;
    pointsForLine = 10;
    pointsForWin = 25;
    wonLineOne = false;
    wonLineTwo = false;
    wonLineThree = false;
    alertLineOne = true;
    alertLineTwo = true;
    alertLineThree = true;
    isPlaying = true;
    extraGame = true;
    lineHasWon = false;

    constructor() {
        this.askForName();
        this.printWelcome();
        this.generateGuessCard();
        this.playGame();
    }

    getRandomNumber() {
        const randomNumber = (Math.floor(Math.random() * this.maxNumber) + 1);


        if (this.usedNumbers.includes(randomNumber)) {
            return this.getRandomNumber();
        };

        this.usedNumbers.push(randomNumber);
        return randomNumber;
    }

    getRandomCardNumber() {
        const randomCardNumber = (Math.floor(Math.random() * this.maxNumber) + 1);

        if (this.card.includes(randomCardNumber)) {
            return this.getRandomCardNumber();
        };

        //Aqui...
        this.card.push(randomCardNumber);
        return randomCardNumber;
    }

    getPointsForNumber() {
        this.guessPoints += this.pointsForNumber

        return this.guessPoints;
    }

    getPointsForLine() {
        this.guessPoints += this.pointsForLine

        return this.guessPoints;
    }

    getPointsForWin() {
        this.guessPoints += this.pointsForWin

        return this.guessPoints;
    }

    newTurn() {
        const randomNumber = this.getRandomNumber();
        //alert(`Your number is: ${randomNumber}`);

        this.guessCard.forEach(newNum => {
            if (newNum.number === randomNumber) {
                newNum.isGuessed = true;
                this.getPointsForNumber();
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
        if (this.lineHasWon) {
            return;
        }
        for (let i = 0; i <= 4; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }
        this.wonLineOne = true;
        this.lineHasWon = true;
        this.getPointsForLine();
        if (this.wonLineOne && this.alertLineOne) {
            alert(` Congratulations! You Won Line One in ${this.rounds} rounds`);
            this.alertLineOne = false;
        }

        return this.wonLineOne;
    }

    checkIfLineTwoWin() {
        if (this.lineHasWon) {
            return;
        }
        for (let i = 5; i <= 9; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }

        this.wonLineTwo = true;
        this.lineHasWon = true;
        this.getPointsForLine();
        if (this.wonLineTwo && this.alertLineTwo) {
            alert(` Congratulations! You Won Line Two in ${this.rounds} rounds`);
            this.alertLineTwo = false;
        }
        return this.wonLineTwo;
    }

    checkIfLineThreeWin() {
        if (this.lineHasWon) {
            return;
        }
        for (let i = 10; i <= 14; i++) {
            if (this.guessCard[i].isGuessed === false) {
                return;
            }
        }
        this.wonLineThree = true;
        this.lineHasWon = true;
        this.getPointsForLine();
        if (this.wonLineThree && this.alertLineThree) {
            alert(` Congratulations! You Won Line Three in ${this.rounds} rounds`);
            this.alertLineThree = false;
        }
        return this.wonLineThree;
    }

    generateGuessCard() {
        for (let i = 0; i < this.maxCardNumbers; i++) {
            //Aqui...
            this.guessCard.push({ number: this.getRandomCardNumber(), isGuessed: false });
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
        console.log(`----------Points: ${this.guessPoints}--Rounds: ${this.rounds}---`);

    }

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

    getResetParameters() {
        this.guessCard = [];
        this.usedNumbers = [];
        this.rounds = 0;
        this.won = false;
        this.guessPoints = 0;
        this.wonLineOne = false;
        this.wonLineTwo = false;
        this.wonLineThree = false;
        this.alertLineOne = true;
        this.alertLineTwo = true;
        this.alertLineThree = true;
        this.isPlaying = true;
        this.extraGame = true;
        this.lineHasWon = false;
    }

    generateRanking() {
        this.rankingPlayers.push({ name: this.playerName, points: this.guessPoints });

    }

    showRanking() {
        console.clear();
        console.log("------------------++------------------------");
        this.rankingPlayers.forEach((player) => {
            console.log(`Player:  ${player.name} Points:  ${player.points}`);
        });
    }

    newGame() {
        if (confirm("Do you want new game? ")) {
            this.getResetParameters();
            this.generateGuessCard();
            this.askForName();
            this.printWelcome();
            this.playGame();
        } else {
            this.extraGame = false;
            this.isPlaying = false;
        }
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
            do {
                this.getPointsForWin();
                alert(` Congratulations! You Won in ${this.rounds} rounds. You get: ${this.guessPoints}`);
                console.clear();
                console.log(` Congratulations! Mr/Mrs  ${this.playerName} You Won in ${this.rounds} rounds. You get: ${this.guessPoints}`);

                this.showGuestCard();
                this.generateRanking();
                this.newGame();

            } while (!this.extraGame && this.isPlaying)

        }
        if (confirm("Do you want view Ranking? ")) {
            this.showRanking();

        }
        if (confirm("Do you want new game? ")) {
            this.newGame();

        }
        if (!this.isPlaying) {
            alert(" Goodbye! ");
        }
    }
}