"use strict";
// console.log(`Hello World at console`); 
/////////////////////////////////////////////////////////
// Type 이란?
/////////////////////////////////////////////////////////
let myName = 'chestNut';
// myName = 35;
let myAge = 35;
// myAge = '35';
let isHeCome = false;
// isHeCome = 'chestNut';
let hisBag; // 타입 미할당
hisBag = 35;
hisBag = "Name";
let heroes = ['Superman', 'Hulk', 'Batman'];
// heroes = 50;
heroes = ["50"];
// Tuple
let classB = ["Students", 20];
// classB = ["Teacher"];
classB = ["Teacher", 2];
// enum : 숫자를 문자로 표현
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Red"] = 11] = "Red";
})(Color || (Color = {}));
let color1 = Color.Blue;
let color2 = Color.Green;
let color3 = Color.Red;
console.log(color1); // 0
console.log(color2); // 10
console.log(color3); // 11
// function return type
function returnMyname() {
    return myName;
}
console.log(returnMyname());
// function argument type
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 3));
// function Types (Varialbes)
let superMultiply;
superMultiply = multiply;
console.log(superMultiply(2, 4));
let resultMultiply;
resultMultiply = multiply(20, 10);
console.log(resultMultiply);
let heroOne = { name: 'Spiderman', age: 22, addr: (arg) => arg };
console.log(heroOne);
// Union Type
let heroTeam;
heroTeam = ['Superman', 'Batman', 'Flash'];
heroTeam = [11, 33, 44];
heroTeam = [true, false, true];
// Check Types = typeof
let finalWinner = 'IronMan';
if (typeof finalWinner == "string")
    console.log(`This Object type is String`);
// Fat Arrow Functions
let multiply2 = (num1, num2) => num1 + num2;
console.log(multiply2(1, 10));
