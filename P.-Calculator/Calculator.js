function calculator(n1, n2) {

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        return ' No es un numero'
    }

    return (`${n1} and ${n2}`);

}



//Math.floor(Math.random() * 10)
let resultats = calculator("q", 2.35);



console.log(resultats);

