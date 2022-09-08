console.log('Loaded index');

//Seleccionar elemento del DOM
const elementBody = document.querySelector('body');
console.dir(elementBody);
const elementP = document.querySelector('.highlighted');
console.dir(elementP);

//elementP.innerHTML += ' - Esto no estaba';

const elementInputName = document.querySelector('#user-name');

//Leer el contenido de los elementos del DOM 
const initialElementP = elementP.innerHTML;

let userName;

//Responder a eventos del DOM
elementInputName.addEventListener("input", () => {
    userName = elementInputName.value;
    //Modificar elementos del DOM
    elementP.innerHTML = initialElementP + " - " + userName;

})