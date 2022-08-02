const name = [0, 1,2,3,4,5,6,7,8,9,10];
function multByTwo() {
    let map1 = name.map(x => x*2);
    
    return map1;
}

const result = multByTwo();
console.log(result);