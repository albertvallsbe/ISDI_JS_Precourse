const name = "Albert Valls";
function myName() {
    let name2 = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {

            for (let j = i+1; j < name.length; j++) {
                name2 += name[j];
            }
            return "My lastname is " + name2;
        }

    }

}
const result = myName();
console.log(result);