let number1 = 7;
let number2 = 3;
let sumResult = undefined;
let resResult = undefined;
let multiResult = undefined;
let diviResult = undefined;
function suma() {
    
    sumResult = number1+number2

    return sumResult;
    
}
function resta() {
    
    resResult = number1-number2

    return resResult;
    
}
function multi() {
    
    multiResult = number1*number2

    return multiResult;
    
}
function divi() {
    
    diviResult = number1/number2

    return diviResult;
    
}

const result = suma() + "," + resta() + "," + multi()+ "," + divi();
console.log(result);