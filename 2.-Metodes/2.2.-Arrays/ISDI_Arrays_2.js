const name = ["A", "L", "B", "E", "R", "T", "V", "A", "L", "L", "S"];
let name2 = name;
function myName(name2) {

    return name2.join("|");

}

const result = myName(name2.slice(6));
console.log(result); // output: J/O/N/S/N/O/W