const name = ["A", "L", "B", "E", "R", "T", "V", "A", "L", "L", "S"];
let name3 = name.slice(6)
let name2 = "";
function myLastname(name2) {
    

    for(var i = 0; i < name3.length ; i++){

    name2 += [i]+ "º " + name3[i]+ ", ";
    
    }
    
    return  name2;

}

const result = myLastname(name2);
console.log(result);  