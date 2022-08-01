const name = "Albert Valls";
function myName() {
    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {

            return " Your last name starts on position " + (i+1) ;
        }

    }

}
const result = myName();
console.log(result);