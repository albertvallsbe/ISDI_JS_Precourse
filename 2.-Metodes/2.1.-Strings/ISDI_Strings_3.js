const name = "Albert Valls";
function myName() {
    let name2 = "";
    for (let i = 0; i < name.length; i++) {
        name2 += name[i];

        if (name[i] == " ") {
            return "My name is " + name2;
        }

    }

}
const result = myName();
console.log(result);