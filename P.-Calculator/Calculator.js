let num1;
let num2;

const askForNumber = () => {

    //let 
    num1 = prompt("Tell a number: ");

    if (num1 === null || num1 === "") {
        alert("Campo vacío, Introduce un numero! ");
        askForNumber();
    } else if (isNaN(num1)) {
        alert("No es un numero! Vuelve a provar: ");
        askForNumber();
    } else {
        //alert("Es un numero!");
        num1 = parseInt(num1);
        askForMoreNumbers();
        
    }

};

const askForMoreNumbers = () => {
    let action = prompt("Tell a number? (y/n): ");

    if (action === null || action === "") {
        alert("Campo vacío, Introduce un numero! ");
        askForMoreNumbers();
    } else if (action.toLowerCase() !== "y" && action.toLowerCase() !== "n") {
        alert("Please insert a valid action");
        askForMoreNumbers();
    } else if (action.toLowerCase() === "y"){
        //alert("Es un numero!");
        askForSecondNumber();
    } else {
        calculatorSqrt();
        
    }
}
const askForSecondNumber = () => {

    //let 
    num2 = prompt("Tell a second number: ");


    if (num2 === null || num2 === "") {
        alert("Campo vacío, Introduce un numero! ");
        askForSecondNumber();
    } else if (isNaN(num2)) {
        alert("No es un numero! Vuelve a provar: ");
        askForSecondNumber();
    } else {
        //alert("Es un numero!");
        
        calculatorFull();
        
    }


};
const calculatorSqrt = () => {

    console.log("Square root Results");
    console.log(num2);

};
const calculatorFull = () => {

    console.log("Full Results");
    console.log(`num1: ${num1} num2: ${num2}`);


};


//Math.floor(Math.random() * 10)
askForNumber();

