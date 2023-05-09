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



// Static Property
// static 선언을 하지 않으면, this(인스턴스) 인식이 되지 않는다.
class CalcConstants {
    static PI: number = 3.14;

    static calcCircumference1(diameter: number): number {
        // this = CalcConstants
        return diameter * this.PI;
    }
    public calcCircumference2(diameter: number): number {
        // this = instance of CalcConstants
        return diameter * CalcConstants.PI;
    }
}
let clac1 = new CalcConstants();
console.log(CalcConstants.PI);
console.log(CalcConstants.calcCircumference1(10));
console.log(clac1.calcCircumference2(10));