console.log('Loaded index');

const elementBody = document.querySelector('body');

console.dir(elementBody);

const elementP = document.querySelector('.highlighted');

console.dir(elementP);


elementP.innerHTML += ' - Esto no estaba';