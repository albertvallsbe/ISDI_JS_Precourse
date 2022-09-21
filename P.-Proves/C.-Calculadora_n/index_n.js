const inputNumbers = [];
let actualInput = "";
let operator = "";
let newPanel = true;
let isKeyTotal = false;

const panel = document.querySelector(".panel");
const message = document.querySelector(".message");
const keyClear = document.querySelector(".clear");
const keysNums = document.querySelectorAll(".number");
const keysOperators = document.querySelectorAll(".operator");

const clearAll = () => {
    panel.innerHTML = "0";
    message.innerHTML = "";
    inputNumbers.length = 0;
    actualInput = "";
    operator = "";
    newPanel = true;
    isKeyTotal = false;
};

const updateData = (result) => {
    //debugger;
    let total = 0;
    if (result !== Math.floor(result)) {
        message.innerHTML = result.toLocaleString("ca");
        total = result.toFixed(2);
    } else {
        if (result.toString().length >= 8) {
            total = result.toExponential(1);
            message.innerHTML = result.toLocaleString("ca");
        } else {
            total = result;
        }
    }
    inputNumbers.length = 0;
    inputNumbers.push(result);
    panel.innerHTML = parseFloat(total).toLocaleString("ca");
};

const square = (num) => {
    results.push(`El cuadrado de ${num} es: ${num * num} `);
    return;
};

const sum = (args) => {
    let result = 0;
    for (num in args) {
        result += args[num];
    }
    return result;
};

const substract = (args) => {
    let result = args[0];
    for (let num = 1; num < args.length; num++) {
        result -= args[num];
    }
    return result;
};

const multip = (args) => {
    let result = 1;
    for (num in args) {
        result *= args[num];
    }
    return result;
};

const division = (args) => {
    let result = args[0];
    for (let num = 1; num < args.length; num++) {
        result /= args[num];
    }
    return result;
};

const changeSign = () => {
    let value = actualInput;
    if (value === "") {
        value = inputNumbers[0];
    }
    value = -value;
    if (!isNaN(parseFloat(value))) {
        inputNumbers.push(parseFloat(value));
    }
    return value;
};

const calculate = (operator) => {
    result = 0;
    switch (operator) {
        case "sum":
            result = sum(inputNumbers);
            updateData(result);
            break;
        case "sub":
            result = substract(inputNumbers);
            updateData(result);
            break;
        case "mult":
            result = multip(inputNumbers);
            updateData(result);
            break;
        case "div":
            result = division(inputNumbers);
            updateData(result);
            break;
        case "perc":
            result = actualInput / 100;
            updateData(result);
            break;
        case "changer":
            result = changeSign();
            updateData(result);
        default:
            break;
    }
};

const addNumber = (key) => {
    if (isKeyTotal) {
        inputNumbers.length = 0;
    }
    const value = key.dataset.value;
    if (value === "." && actualInput.includes(".")) return;
    actualInput += value;

    if (!newPanel) {
        panel.innerHTML += key.innerHTML;
    } else {
        panel.innerHTML = key.innerHTML;
        newPanel = false;
    }
};

const operate = (key) => {
    const value = key.dataset.value;
    newPanel = true;
    value === "total" ? (isKeyTotal = true) : (isKeyTotal = false);
    if (!isNaN(parseFloat(actualInput))) {
        inputNumbers.push(parseFloat(actualInput));
        if (inputNumbers.length >= 2) {
            calculate(operator);
        } else {
            if (value === "perc" || value === "changer") {
                calculate(value);
            }
        }
    } else {
        if (inputNumbers.length == 1 && value === "changer") {
            calculate(value);
        }
    }
    operator = value;
    actualInput = "";
};

keyClear.addEventListener("click", () => clearAll());

keysNums.forEach((key) => {
    key.addEventListener("click", () => addNumber(key));
});

keysOperators.forEach((key) => {
    key.addEventListener("click", () => operate(key));
});