const name = ["Albert", "Valls", "32", "Barcelona"];
function myDeletefirst() {
    let name3 = "";
        name.shift();
        name3 = "Array content: => " + name;
    return name3;
}

const result = myDeletefirst();
console.log(result);