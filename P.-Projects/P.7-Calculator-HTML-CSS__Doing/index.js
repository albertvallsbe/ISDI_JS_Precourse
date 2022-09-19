
let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let point = document.querySelector('.point');

let addition = document.querySelector('.addition');
let substraction = document.querySelector('.substraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');

let result = document.querySelector('.result');
let deleter = document.querySelector('.deleter');

function Accion(value) {
    document.querySelector('.screen').innerHTML += value;
    // document.getElementById('.screen').innerHTML += x;
}

function limpiarPantalla() {
    document.querySelector('.screen').innerHTML = "";
}

function calculateResultado() {
    let resultado = eval(document.querySelector('.screen').innerHTML);
    document.querySelector('.screen').innerHTML = resultado;
}



point.addEventListener("click", function() {
    Accion(".");
})
zero.addEventListener("click", function() {
    Accion(0);
})
one.addEventListener("click", function() {
    Accion(1);
})
two.addEventListener("click", function() {
    Accion(2);
})
three.addEventListener("click", function() {
    Accion(3);
})
four.addEventListener("click", function() {
    Accion(4);
})
five.addEventListener("click", function() {
    Accion(5);
})
six.addEventListener("click", function() {
    Accion(6);
})
seven.addEventListener("click", function() {
    Accion(7);
})
eight.addEventListener("click", function() {
    Accion(8);
})
nine.addEventListener("click", function() {
    Accion(9);
})

addition.addEventListener("click", function() {
    Accion("+");
})
substraction.addEventListener("click", function() {
    Accion("-");
})
multiplication.addEventListener("click", function() {
    Accion("*");
})
division.addEventListener("click", function() {
    Accion("/");
})

result.addEventListener("click", function() {
    calculateResultado();
})
deleter.addEventListener("click", function() {
    limpiarPantalla();
})