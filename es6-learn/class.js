/**
 * 类
 * 不可重复声明
 */

// //ES5 模拟类
// function People(name) {
//     this.name =name;
// }
// People.prototype.getName = function () {
//     return this.name;
// }
// var people =new People("strick");
// people.getName(); //"strick"

// //匿名类
// let Example = class {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// //命名类 
// let Example2  = class Example2 {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }

//属性 prototype
// Example.prototype={
//     //methods
// }

//静态属性 static
// class Example {
//     static test() {
//         console.log(this === Example); //true
//     }
// }
// Example.test();

//公共属性
// class Example{}
// Example.prototype.a = 2;

// //实例属性 定义在实例对象（this）上的属性
// class Example {
//     a = 2;
//     constructor () {
//         console.log(this.a);
//     }
// }

// //name属性 返回跟在 class 后的类名(存在时)。
// let Example=class Exam {
//     constructor(a) {
//         this.a = a;
//     }
// }
// console.log(Example.name); // Exam
 
// let Example=class {
//     constructor(a) {
//         this.a = a;
//     }
// }
// console.log(Example.name); // Example

//方法
//constructor 方法 默认方法
// class Example{
//     constructor(){
//       console.log('我是constructor');
//     }
// }
// new Example(); // 我是constructor
// //静态方法
// class Example{
//     static sum(a, b) {
//         console.log(a+b);
//     }
// }
// Example.sum(1, 2); // 3

//原型方法
// class Example {
//     sum(a,b) {
//         console.log(a + b);
//     }
// }
// let exam = new Example();
// exam.sum(1,2);

//实例方法
// class Example {
//     constructor() {
//         this.sum = (a, b) => {
//             console.log(a + b);
//         }
//     }
// }

//实例化对象
// class Example {
//     constructor(a,b) {
//         this.a = a;
//         this.b = b;
//         console.log("Example");
//     }
//     sum() {
//         return this.a + this.b;
//     }
// }
// let exam1 = new Example(2,1);
// let exam2 = new Example(3,1);
// console.log(exam1._proto_ == exam2._proto_);
// exam1._proto_.sub = function() {
//     return this.a - this.b;
// }
// console.log(exam1.sub());
// console.log(exam2.sub());

//私有属性方法
const name = Symbol("name");
const print = Symbol("print");
class Person {
    constructor(age) {
        this[name] = "Bruce";
        this.age =age;
    }
    [print]() {
        console.log(`${this[name]} is ${this.age} years old`);
    }
}

//继承混合类
function CopyProperties(target, source) {
    for (const key of Reflect.ownKeys(source)) {
        if(key !== "constructor" && key !== "prototype" && key !=="name") {
            const desc = Object.getOwnPropertyDescriptor(source,key);
            Object.defineProperty(target,key,desc);
        }
    }
}
function MixClass(...mixins) {
    class Mix {
        constructor() {
            for (const mixin of mixins) {
                CopyProperties(this, new mixin());
            }
        }
    }
    for (const mixin of mixins) {
        CopyProperties(Mix, mixin);
        CopyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
}
class Student extends MixClass(Person, Kid) {}