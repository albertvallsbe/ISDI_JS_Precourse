const name = ["Albert", "Valls", "32", "Barcelona"];
function myCityAdd() {
    let name3 = "";
    if(name[3]!=""){
        name3 = "City added to array! => " + name;

    }else{
        name3 = name;
    }


    return name3;
}
const result = myCityAdd();
console.log(result);
