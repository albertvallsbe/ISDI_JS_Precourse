//Declaracions

let name;
const name2 = "Nacho";

//Mostrar text 

const phrase = "Hello world!"
console.log("Facu");
console.log(phrase);

//Mostrar text interactiu

const phrase2 = prompt("Ingresa tu nombre")
console.log(phrase2);

//Control d'errors

const phrase3 = prompt("Ingresa tu nombre")
const age3 = +prompt("Ingresa tu edad")

console.log(typeof phrase3);
console.log(typeof age3);

//Intro funcions

const phrase4 = prompt("Ingresa tu nombre")
const age4 = +prompt("Ingresa tu edad")

const showUserInfo = () => {
    console.log(phrase4);
    console.log(age4);
}

showUserInfo();

//Intro funcions 2

const age5 = +prompt("Ingresa tu edad")
let userName = getFullName();

const getFullName = () => {
    const fullName = prompt("Ingresa tu nombre");
    if  (fullName === ""){
        fullName = "randomGuest";
    }
    return fullName;
};

const showUserInfo2 = () => {
    console.log(userName);
    console.log(age5);
};

showUserInfo2();

//Array


const age6 = +prompt("Ingresa tu edad")
let userName2;
let hobbies;

const getFullName2 = () => {
    let fullName = prompt("Ingresa tu nombre");
    if  (fullName === ""){
        fullName = "randomGuest";
    }
    return fullName;
};

const getUserHobbies = () => {
    const userHobbies = [];
    let hobby;

    do {
        hobby = prompt("Ingresa tu hobby")
        if(hobby !== null){
            userHobbies.push(hobby);
        }
    }while (hobby !== null)

    return userHobbies;
};

const showUserInfo3 = () => {
    console.log("Nombre: "+userName2);
    console.log("Edad: "+age6);

    //Utilitzem un bucle Foreach
    hobbies.forEach((hobby) => {
        console.log("Hobby: "+ hobby);
    });
    
};

userName2 = getFullName2();
hobbies = getUserHobbies();

showUserInfo3();