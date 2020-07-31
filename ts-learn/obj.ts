/**
 * 基础类型
 */

// let isDone:boolean =false;
// let sum:number = 6;
// let name:string = "An";
// let list:number[] =[1,2,3];
// let list2:Array<number> = [1,2,3];
// let x:[string,number];
// x=["hello",10];
// x=[10,"hello"]; //报错

// console.log(x[0].substr(1))
// console.log(x[1].substr(1)) //报错
// x[3] = "world"; // 字符串可以赋值给(string | number)类型
// console.log(x[5].toString());
// x[6] = true; 

//枚举
// enum Color {Red,Green,Blue}
// let c:Color =Color.Green;

// enum Color { Red = 1, Green = 2, Blue = 4}
// let c:Color =Color.Green;
// enum Color { Red = 1, Green, Blue}
// let colorName:string = Color[2];
// console.log(colorName)

// let list: any[] = [1, true, "free"];
// list[1] = 100;

// function warnUser(): void {
//     console.log("This is my warning message");
// }
// let unusable: void = undefined;
// let u: undefined = undefined;
// let n: null = null;

// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }

// declare function create(o: object | null):void;
// create({prop:0})

//类型断言 1
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// 2
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

//接口
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface LabelledValue {
//     label:string
// }

// function printLabel(labelledObj:LabelledValue) {
//     console.log(labelledObj.label)
// }
// let myObj = { size: 10, label: "size 10 object"};
// printLabel(myObj)

// interface SquareConfig {
//     color?:string;
//     width?:number;
// }

// function createSquare(config:SquareConfig):{color:string, area:number} {
//     let newSquare = { color:"white", area:100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width    
//     }
//     console.log(newSquare)
//     return newSquare
// }
// let mySquare = createSquare({color:"black"})

//只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// let a:number[] =[1,2,3,4];
// let ro:ReadonlyArray<number> = a;
// a = ro as number;

// interface SquareConfig {
//     color?:string;
//     width?:number;
//     [propName:string]:any;
// }

// interface SearchFunc {
//     (source:string, substring:string):boolean;
// }

// let mySearch:SearchFunc;
// mySearch = function (source: string, subString: string): boolean {
//     let result = source.search(subString);
//     return result >-1
// }
// interface StringArray {
//     [index: number]: string;
//   }
  
//   let myArray: StringArray;
//   myArray = ["Bob", "Fred"];
  
//   let myStr: string = myArray[0];
// class Animal {
//     name:string;
// }
// class Dog extends Animal {
//     breed:string;
// }
// interface Notkay {
//   [index: string]: number;
//   length: number;
// }

// interface ReadonlyStringArray {
//     readonly [index:number]: string;
// }
// let myArray:ReadonlyStringArray = ["Alice","Bob"];
// myArray[2] = "Mallory"



// interface ClockConstructor {
//     new (hour:number,minute:number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;

// interface Shape {
//     color: string;
// }

// interface PenStroke {
//     penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;

// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
// function getCounter():Counter {
//     let counter = <Counter>function (start:number) {};
//     counter.interval = 123;
//     counter.reset = function() {};
//     return counter;
// }
// let c =getCounter();
// console.log(c(10))
// console.log(c.reset())
// console.log(c.interval =5.0)

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);


// class Animal {
//     public name: string;
//     public constructor(theName: string) {
//         this.name =theName;
//     }
//     public move(distanceInMeters:number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }


// class Animal {
//     private name:string;
//     constructor(theName:string) {
//         this.name = theName;
//     }
// }
// new Animal("Cat").name; //error

// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.

// class Penson {
//     protected name:string
//     constructor(name: string) {
//         this.name =name;
//     }
// }
// class Employee extends Penson {
//     private department:string;
//     constructor(name: string, department: string) {
//         super(name)
//         this.department =department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// class Person {
//     protected name:string;
//     protected constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string,department: string) {
//         super(name);
//         this.department =department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {
//     }
// }

//存取器
//  tsc obj.ts -t es5 编译
// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }  

//静态属性
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));