const name = ["Albert", "Valls"];
function myName() {
    let name2 = name;
    let name3 = "";
    for (let i = 0; i < name.length; i++) {

        name2 = name[i];
        name3 += name2.substring(0,1) + ", ";

    }
    
    return name3.substring(0,4);


}
const result = myName();
console.log(result);
