const numberButton = document.getElementsByName('number');
const operationalButton = document.getElementsByName('operational');
const resultButton = document.getElementsByName('equal')[0];
const clearButton = document.getElementsByName('clear')[0];

let result = document.getElementById('result');
let displayedNumber = '';
let previousNumber = '';
let operation = undefined;

numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        addNumber(button.innerText);
    })
});

operationalButton.forEach((button) => {
    button.addEventListener('click', () => {
        addOperational(button.innerText);
    })
});

resultButton.addEventListener('click', () => {
    calculate();
    displayRefresh();
});

clearButton.addEventListener('click', () => {
    clear();
    displayRefresh();
});

const addNumber = (number) => {
    displayedNumber = displayedNumber.toString() + number.toString();
    displayRefresh();
};

const addOperational = (oper) => {
    if (displayedNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = oper.toString();
    previousNumber = displayedNumber;
    displayedNumber = '';
}

const calculate = () => {
    let calculation;
    const previous = parseFloat(previousNumber);
    const displayed = parseFloat(displayedNumber);
    if (isNaN(previous) || isNaN(displayed)) return;
    switch (operation) {
        case '+':
            calculation = previous + displayed;
            break;
        case '-':
            calculation = previous - displayed;
            break;
        case 'x':
            calculation = previous * displayed;
            break;
        case '/':
            calculation = previous / displayed;
            break;
        default:
            return;
    }
    displayedNumber = calculation;
    previousNumber = '';
    operation = undefined;
}

const displayRefresh = () => {
    result.value = displayedNumber;
}

const clear = () => {
    displayedNumber = '';
    operation = undefined;
}

clear();