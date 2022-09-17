let cero = document.getElementById('cero');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let coma = document.getElementById('coma');

let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let porcentaje = document.getElementById('porcentaje');
let inverso = document.getElementById('inverso');
let igual = document.getElementById('igual');
let borrar = document.getElementById('borrar');

function Accion(x) {
    document.getElementById('resultado').innerHTML += x;
}

function limpiarPantalla() {
    document.getElementById('resultado').innerHTML = "";
}

function calculateResultado() {
    let resultado = eval(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = resultado;
}



coma.addEventListener("click", function() {
    Accion(".");
})
cero.addEventListener("click", function() {
    Accion(0);
})
uno.addEventListener("click", function() {
    Accion(1);
})
dos.addEventListener("click", function() {
    Accion(2);
})
tres.addEventListener("click", function() {
    Accion(3);
})
cuatro.addEventListener("click", function() {
    Accion(4);
})
cinco.addEventListener("click", function() {
    Accion(5);
})
seis.addEventListener("click", function() {
    Accion(6);
})
siete.addEventListener("click", function() {
    Accion(7);
})
ocho.addEventListener("click", function() {
    Accion(8);
})
nueve.addEventListener("click", function() {
    Accion(9);
})

suma.addEventListener("click", function() {
    Accion("+");
})
resta.addEventListener("click", function() {
    Accion("-");
})
multiplicacion.addEventListener("click", function() {
    Accion("*");
})
division.addEventListener("click", function() {
    Accion("/");
})
porcentaje.addEventListener("click", function() {
    Accion("%");
})
inverso.addEventListener("click", function() {
    Accion("+/-");
})
igual.addEventListener("click", function() {
    calculateResultado();
})
borrar.addEventListener("click", function() {
    limpiarPantalla();
})