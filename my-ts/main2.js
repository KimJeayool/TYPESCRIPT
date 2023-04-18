"use strict";
// Spread
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(...numbers); // 1, 2, 3, 4, 5
console.log(Math.max(...numbers)); // 5
// Rest Agruments
function totalWage(fixedPayment, ...numbers) {
    let sum = 0;
    for (let i in numbers) {
        sum += numbers[i];
    }
    return sum + fixedPayment;
}
console.log(totalWage(100, 10, 20, 30, 40, 50));
