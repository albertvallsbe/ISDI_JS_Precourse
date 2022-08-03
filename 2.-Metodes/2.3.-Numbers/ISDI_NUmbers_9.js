let number1 = 7;
let number2 = 3;

let multiResult = undefined;

function multi() {

    if (!isNaN(number1) && !isNaN(number2)) {
        multiResult = number1 * number2

    } else {

        multiResult = "No es numero"

    }
    return multiResult;

}

const result = multi();
console.log(result);