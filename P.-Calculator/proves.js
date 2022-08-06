function calculadora(n1, n2) {
    n1 = parseInt(n1);
    if(n2 != undefined){
        n2 = parseInt(n2)
    }
    let results = []
    let sumar
    let restar
    let multiplicar
    let dividir
    let cuadrado;

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        return ' No es un numero'
    }
    if (n2 != undefined) {
        sumar = suma(n1, n2)
        restar = resta(n1, n2)
        multiplicar = multiplica(n1, n2)
        dividir = divide(n1, n2)

        results.push('El resultado de la suma es:' + sumar);
        results.push('El resultado de la resta es:' + restar);
        results.push('El resultado de la multiplicacion es:' + multiplicar);
        results.push('El resultado de la division es:' + dividir);
    } else {
        cuadrado = raizCuadrada(n1);
        results.push('El resultado de la raiz cuadrada es:' + cuadrado);
    }
    return results;
}


function suma(n1, n2) {
    let res = n1 + n2;
    if (Number.isInteger(res)) {
        return res;
    } else {
        return res.toFixed(3)
    }
}

function resta(n1, n2) {
    let res = n1 - n2;
    if (Number.isInteger(res)) {
        return res;
    } else {
        return res.toFixed(3)
    }
}

function multiplica(n1, n2) {
    let res = n1 * n2;
    if (Number.isInteger(res)) {
        return res;
    } else {
        return res.toFixed(3)
    }
}

function divide(n1, n2) {
    if (n2 === 0) {
        return 'No se puede dividir por 0';
    }
    let res = n1 / n2;
    if (Number.isInteger(res)) {
        return res;
    } else {
        return res.toFixed(3)
    }
}

function raizCuadrada(n1) {
    let res = Math.sqrt(n1)
    if (Number.isInteger(res)) {
        return res;
    } else {
        return res.toFixed(3)
    }
}


// Llama la función calculadora 

let calculos = calculadora(5,"qq");


for(let i = 0; i < calculos.length; i++){
    console.log(calculos[i]);
}