// console.log(`Hello World at console`); 

/////////////////////////////////////////////////////////
// Type 이란?
/////////////////////////////////////////////////////////
let myName: string = 'chestNut';
// myName = 35;

let myAge: number = 35;
// myAge = '35';

let isHeCome: boolean = false;
// isHeCome = 'chestNut';

let hisBag: any;  // 타입 미할당
hisBag = 35;
hisBag = "Name";

let heroes: string[] = ['Superman', 'Hulk', 'Batman'];
// heroes = 50;
heroes = ["50"];



// Tuple
let classB: [string, number] = ["Students", 20];
// classB = ["Teacher"];
classB = ["Teacher", 2];



// enum : 숫자를 문자로 표현
enum Color {
    Blue,
    Green = 10,
    Red
}

let color1 = Color.Blue;
let color2 = Color.Green;
let color3 = Color.Red;
console.log(color1);  // 0
console.log(color2);  // 10
console.log(color3);  // 11
