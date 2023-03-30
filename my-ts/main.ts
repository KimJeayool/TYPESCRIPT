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
