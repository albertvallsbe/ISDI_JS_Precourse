const name = ["Valls", "32", "Barcelona"];
function myAddName() {
    let name3 = "";
        name.splice(0,0, 'Albert');
        name3 = "Array content: => " + name;
    return name3;
}

const result = myAddName();
console.log(result);