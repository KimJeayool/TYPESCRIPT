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
