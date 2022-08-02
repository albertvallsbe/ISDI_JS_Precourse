
function timeToString() {
    let time = new Date();

    let now = time.toLocaleTimeString('ca-ES');

    return now;
    
}

const result = timeToString();
console.log(result);