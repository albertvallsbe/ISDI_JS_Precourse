let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let point = document.querySelector('.point');

let addition = document.querySelector('.addition');
let substraction = document.querySelector('.substraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');

let result = document.querySelector('.result');
let deleter = document.querySelector('.deleter');

function action(value) {
    if (!isNaN(value)) {
        document.querySelector('.screen').innerHTML;
    }
    document.querySelector('.screen').innerHTML += value;
}

function cleanScreen() {
    document.querySelector('.screen').innerHTML = "";
}

function calculateResult() {
    let result = eval(document.querySelector('.screen').innerHTML);
    document.querySelector('.screen').innerHTML = result;
}
point.addEventListener("click", function() {
    action(".");
})
zero.addEventListener("click", function() {
    action(0);
})
one.addEventListener("click", function() {
    action(1);
})
two.addEventListener("click", function() {
    action(2);
})
three.addEventListener("click", function() {
    action(3);
})
four.addEventListener("click", function() {
    action(4);
})
five.addEventListener("click", function() {
    action(5);
})
six.addEventListener("click", function() {
    action(6);
})
seven.addEventListener("click", function() {
    action(7);
})
eight.addEventListener("click", function() {
    action(8);
})
nine.addEventListener("click", function() {
    action(9);
})
addition.addEventListener("click", function() {
    action("+");
})
substraction.addEventListener("click", function() {
    action("-");
})
multiplication.addEventListener("click", function() {
    action("*");
})
division.addEventListener("click", function() {
    action("/");
})
result.addEventListener("click", function() {
    calculateResult();
})
deleter.addEventListener("click", function() {
    cleanScreen();
})