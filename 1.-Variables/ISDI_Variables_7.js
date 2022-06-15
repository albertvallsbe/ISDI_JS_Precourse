const numbers1 = [2, 9, 6, 7, 8];
let message = "We are in the middle of loop";

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
    if (i == 2) {
        console.log(message);
    }
}