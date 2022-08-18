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
        askForMoreNumbers();
        return num1;
    }

};

const askForMoreNumbers = () => {
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
        calculatorSqrt();

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
const calculatorSqrt = () => {

    let squareRoot = Math.sqrt(num1);
    results.push(`Square root result is: ${squareRoot.toFixed(3)}`)

    printResults();
    return results;

};
const calculatorFull = () => {

    let suma = num1+num2;
    let resta = num1-num2;
    let multi = num1*num2;
    let divi = num1/num2;
    results.push(`Suma result is: ${suma}`);
    results.push(`Resta result is: ${resta}`);
    results.push(`Multi result is: ${multi}`);
    results.push(`Divi result is: ${divi}`); 

    printResults();
    return results;

};
const printResults =()=>{
    results.forEach((resultat) => console.log(`Resultat: ${resultat}`));   
};


//Math.floor(Math.random() * 10)
askForNumber();

