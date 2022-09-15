const words = [
    "doc",
    "cedo",
    "code",
    "codo",
    "déco",
    "doce",
    "cedro",
    "cerdo",
    "credo",
    "decor",
    "codero",
    "codeso",
    "deceso",
    "decoro",
    "deseco",
    "escodo",
    "recodo",
    "record",
    "récord",
    "cerdoso",
    "cocedor",
    "codorro",
    "cordero",
    "cosedor",
    "creedor",
    "cocedero",
    "corredor",
    "creedero",
    "decoroso",
    "descocer",
    "descoser",
    "corredero",
    "corroedor",
    "crecedero",
    "descorreo",
    "descorrer",
    "escorredor",
    "socorredor",
    "escorredero",
];
const guessedWords = [];
const gameLetters = ["c", "o", "d", "e", "r", "s"];
const requiredLetter = gameLetters[2];
const getPlayerName = () => {
    const playerName = prompt("Welcome to ISDIlogic! What's your name?");
    if (!playerName) {
        return getPlayerName();
    }
    return playerName;
};
const getNewWords = () => {
    const newWord = prompt("Add a new word:");
    if (!newWord) {
        return getNewWords();
    }
    return newWord;
};
const checkWord = (word, wordList, requiredLetter, guessedWords) => {
    if (guessedWords.includes(word)) {
        alert("You already used this word!");
        return;
    }
    if (word.length < 3) {
        alert("Minimum word length is 3 letters");
        return;
    }
    if (!word.includes(requiredLetter)) {
        alert(`You didn't use the required letter: ${requiredLetter}`);
        return;
    }
    if (!wordList.includes(word)) {
        alert("Wrong!");
        return;
    }
    guessedWords.push(word);
    console.log(`Guessed word: ${word}`);
    alert("Correct!");
    return;
};
const newTurn = () => confirm("Try again?");
const getPoints = (wordsArray) => {
    const pointsArray = wordsArray.map((word) => {
        if (word.length === 3) {
            return 1;
        }
        if (word.length === 4) {
            return 2;
        }
        if (word.length >= 5) {
            return word.length;
        }
    });
    return pointsArray.reduce((a, b) => a + b);
};
const game = () => {
    const playerName = getPlayerName();
    alert(
        `Hi ${playerName}! The letters for this game are ${gameLetters.join(
        ", "
      )}. The required letter is ${requiredLetter}. Let's start!`
    );
    console.log(
        `Hi ${playerName}! The letters for this game are ${gameLetters.join(
        ", "
      )}. The required letter is ${requiredLetter}. Let's start!`
    );
    do {
        const newWord = getNewWords();
        checkWord(newWord, words, requiredLetter, guessedWords);
    } while (newTurn());
    alert(
        `Good job! You have guessed ${
        guessedWords.length
      } words! These are your points: ${getPoints(guessedWords)}`
    );
};
game();