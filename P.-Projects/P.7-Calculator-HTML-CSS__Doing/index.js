//cambiar getElemetById per querySelector a totes les funcions
//centrar el text als button...
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let point = document.getElementById('point');

let addition = document.getElementById('addition');
let substraction = document.getElementById('substraction');
let multiplication = document.querySelector('.multiplication');
let division = document.getElementById('division');

let result = document.getElementById('result');
let deleter = document.getElementById('deleter');

function Accion(x) {
    document.querySelector('.screen').innerHTML += x;
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