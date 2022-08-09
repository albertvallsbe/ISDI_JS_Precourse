function askForNumber() {

    let num1 = prompt("Tell a number: ");

    //num1 = parseInt(num1);

    if (num1 === null  || num1 === "") {
        alert("Campo vacío, Introduce un numero! ");
        askForNumber();
    } else if (num1 === Number.isNaN(num1)) {
        alert("No es un numero! Vuelve a provar: ");
        askForNumber();
    } else {
        alert("Es un numero!");
    }

};


//Math.floor(Math.random() * 10)
askForNumber();

