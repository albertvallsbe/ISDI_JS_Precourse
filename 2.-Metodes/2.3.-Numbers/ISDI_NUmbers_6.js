let number1 = 7;
let number2 = 3;
let sumResult = undefined;
let resResult = undefined;
let multiResult = undefined;
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

const result = suma() + "," + resta() + "," + multi();
console.log(result);