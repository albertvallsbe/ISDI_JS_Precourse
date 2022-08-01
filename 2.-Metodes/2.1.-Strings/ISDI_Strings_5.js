const name = "Albert Valls";
function mySr() {
    let name2 = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {

            for (let j = i+1; j < name.length; j++) {
                name2 += name[j];
            }
            return "Hello, " + "Sr. "+ name2;
        }

    }

}
const myNewString = mySr();
console.log(myNewString);