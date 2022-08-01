const name = "Albert Valls";
function myName() {
    let name2 = "";
    for (let i = 0; i < name.length; i++) {
        name2 += name[i];

        if (name[i] == " ") {
            return name2;
        }

    }

}
const result = myName();
let something = result + "is awesome";
console.log(something);