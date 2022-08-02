const name = ["Albert", "Valls", "32", "Barcelona"];
function myCityAdd() {
    let name3 = "";
    
        name3 = "City added to array! => " + name;
    return name3;
}
function myCityDelete() {
    let name3 = "";
        name.splice(3,1);
        name3 = "City deleted! => " + name;

    return name3;
}
const result = myCityAdd();
console.log(result);
const result2 = myCityDelete();
console.log(result2);
