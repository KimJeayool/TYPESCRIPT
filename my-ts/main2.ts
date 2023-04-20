// Spread
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(...numbers); // 1, 2, 3, 4, 5
console.log(Math.max(...numbers)); // 5

// Rest Agruments
function totalWage(fixedPayment: number, ...numbers: number[]) {
    let sum = 0;
    for (let i in numbers) {
        sum += numbers[i];
    }
    return sum + fixedPayment;
}
console.log(totalWage(100, 10, 20, 30, 40, 50));



// Template Literals
let hero = "Spiderman";
let addr = "Seoul";
let str = `${hero} live at ${addr}`;
console.log(str);