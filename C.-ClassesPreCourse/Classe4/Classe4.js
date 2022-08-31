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
    return newWord;
};

const game = (name) => {
    const playerName = getPlayerName();
    const word = getWord(playerName);
}

game();