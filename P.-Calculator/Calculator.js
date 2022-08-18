let num1;
let num2;
const results =[];

const askForNumber = () => {

    num1 = prompt(" Tell a number: ");

    if (num1 === null || num1 === "") {
        alert(" Empty, Please tell a number! ");
        askForNumber();
    } else if (isNaN(num1)) {
        alert(" It's not a number! Try again: ");
        askForNumber();
    } else {
        num1 = parseInt(num1);
        askForMoreNumbers(num1);

    }

};

const askForMoreNumbers = (num1) => {
    let action = prompt(" Tell a number? (y/n): ");

    if (action === null || action === "") {
        alert(" Empty, Please tell a number! ");
        askForMoreNumbers();
    } else if (action.toLowerCase() !== "y" && action.toLowerCase() !== "n") {
        alert("Please insert a valid action");
        askForMoreNumbers();
    } else if (action.toLowerCase() === "y") {
        //alert("Es un numero!");
        askForSecondNumber();
    } else {
        calculatorSqrt(num1);

    }
}
const askForSecondNumber = () => {

    num2 = prompt(" Tell a second number: ");

    if (num2 === null || num2 === "") {
        alert(" Empty, Please tell a number! ");
        askForSecondNumber();
    } else if (isNaN(num2)) {
        alert(" It's not a number! Try again: ");
        askForSecondNumber();
    } else {
        calculatorFull();
    }

};
const calculatorSqrt = (num1) => {

    let squareRoot = Math.sqrt(mum1);
    results.push(`Square root result is: ${squareRoot.toFixed(3)}`)

    console.log(" Square root Results: ");
    console.log(squareRoot.toFixed(3));
    return results;

};
const calculatorFull = () => {

    console.log("Full Results");
    console.log(`num1: ${num1} num2: ${num2}`);

};


//Math.floor(Math.random() * 10)
askForNumber();

