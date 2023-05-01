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



// Class
class Hero {
    // // 일반 생성자
    // name: string;
    // age: number;
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

    // // public 생성자
    // constructor(public name: string, public age: number) {}

    // private 생성자
    constructor(private name: string, private age: number) {}

    get getName() {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    password(arg: number) {
        if (arg === 1234) {
            // Private function 사용.
            this.sendMoney();
        } else {
            console.log('Wrong Password');
        }

    }

    // Private Function 선언.
    private sendMoney() {
        console.log('This is money');
    }
}
let hero1 = new Hero("Superman", 25);
hero1.password(1234);