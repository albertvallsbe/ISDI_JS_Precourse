function calculator(n1, n2) {

    //askIfaNumber(n1);
    n1 = parseInt(n1);
    if (n2 !== undefined) {
        //askIfaNumber(n2);
        n2 = parseInt(n2);
    } 

    return (`${n1} and ${n2}`);
    
}



//Math.floor(Math.random() * 10)
let resultats = calculator(3, 6);
console.log(resultats);
