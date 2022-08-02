
function timeToString() {
    let time = new Date().getHours();

    let now = time;

    return "It's around " + now + " hours";
    
}

const result = timeToString();
console.log(result);