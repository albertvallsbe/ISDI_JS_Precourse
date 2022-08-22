const word = "codigo";
const wordToGuess = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const usedNumbers = [];

const generateWordToGuess = () => {
    for (let i = 0; i < word.length; i++) {
        wordToGuess.push({ letter: word[i], isGuessed: false });
    }
}

const getRandomLetter = () => {
    const randomNumber = Math.floor(Math.random() * alphabet.length);
    //console.log(randomNumber);

    if (usedNumbers.includes(randomNumber)) {
        return getRandomLetter();
    }

    usedNumbers.push(randomNumber);
    return alphabet.charAt(randomNumber);
}

const newTurn = () => {
    const randomLetter = getRandomLetter();
    alert(`Your letter is: ${randomLetter.toUppercase()}`);

    wordToGuess.forEach(character=> {
        if(character.letter === randomLetter ){
            character.isGuessed = true;
        }
    });
}

generateWordToGuess();
console.table(wordToGuess);