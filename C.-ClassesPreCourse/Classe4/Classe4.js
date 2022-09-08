//declarar
const validWords = [
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
const requiredLetterPosition = 0;
const validLetters = ["c", "o", "d", "e", "r", "s"];
const requiredLetter = validLetters[requiredLetterPosition];

const userWords = [];

const getPlayerName = () => {
    const playerName = prompt('Hola amigo, dime tu nombre');
    if (!playerName) {
        return getPlayerName();
    }
    return playerName;
}
const getWord = (name) => {
    const newWord = prompt(`Hola ${name} , dime una palabra con ${validLetters}`);
    if (!newWord) {
        return getWord();
    }
    return newWord.toLowerCase();
};

const checkWord = (word, validWords, validLetters, userWords) => {

    if (userWords.includes(word)) {
        alert("la palabra está repetida ")
        return;
    }
    if (word.length < 3) {
        alert("la palabra tiene menos de 3 letras ")
        return;
    }
    if (!word.includes(requiredLetter)) {
        alert("La palabra no tiene la palabra requerida");
        return;
    };
    if (!validWords.includes(word)) {
        alert("La palabra no es valida");
        return;
    }
    userWords.push(word);
    alert("La palabra es correcta! ");
    return;

};

const newTurn = () => confirm("Try again? ");


const game = () => {
    const playerName = getPlayerName();

    do {
        const newWord = getWord(playerName);
        checkWord(newWord, validWords, validLetters, userWords);
    }
    while (newTurn());

    alert("Felicidades esta es tu lista de aciertos " + userWords.join(', '))
}

game();