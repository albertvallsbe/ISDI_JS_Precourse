const workers = [
    ["Marta", 32],
    ["Albert", 32],
    ["Fran", 25],
    ["Albert", 32]
];
let name = "Albert";
let age = 32;

for (let i =0 ;i < workers.length; i ++) {
    if (name == workers[i][0] && age == workers[i][1]) {
        console.log("Hi!! Glad to see u again!");
    } else {
        console.log("this is not you")
    }
}