const name = ["Albert", "Valls"];
function myName() {
    let name2 = name;
    for (let i = 0; i < name.length; i++) {
        name2 += name2[i];
        return name2;


    }

}
const result = myName();
console.log(result.substring(0, 1) + "." + result.substring(1, 1) );

//don't work!
//convertir a cadena?