let number1 = 7;
let number2 = 3;
let sumResult = undefined;
let resResult = undefined;
function suma() {
    
    sumResult = number1+number2

    return sumResult;
    
}
function resta() {
    
    resResult = number1-number2

    return resResult;
    
}

const result = "The sum and rest of "+ number1 + " + " + number2 + " is " + suma() + " and " + resta();
console.log(result);