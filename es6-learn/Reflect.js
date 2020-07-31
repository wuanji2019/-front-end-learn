//Reflect.get(target,name,receiver)
// let exam = {
//     name:"Tom",
//     age:24,
//     get info(){
//         return this.name + this.age;
//     }
// }
// console.log(Reflect.get(exam,"name"));
// let receiver = {
//     name:"Jerry",
//     age:20
// }
// console.log(Reflect.get(exam,"info",receiver))

//Reflect.set(target,name,value,receiver)
// let exam = {
//     name:"Tpm",
//     age:24,
//     set info(value) {
//         return this.age =value;
//     }
// }
// console.log(exam.age)
// console.log(Reflect.set(exam,"age",25))
// console.log(exam.age)
// value 为空时会将 name 属性清除
// console.log(Reflect.set(exam,"age",))
// console.log(exam.age)

// let receiver = {
//     age:18
// }
// Reflect.set(exam,'info', 1,receiver); //true
// console.log(receiver.age)

// let receiver = {
//     name:'an'
// }
// Reflect.set(exam,'info',1 ,receiver)
// console.log(receiver.age)

//Reflect.deleteProperty(obj,property)
// let exam = {
//     name:'Tom',
//     age:24
// }
// console.log(Reflect.deleteProperty(exam,'name'))
// console.log(exam)
// // property 不存在时，也会返回 true
// console.log(Reflect.deleteProperty(exam,'name'))

//Reflect.construct(obj,args)
// function exam(name) {
//     this.name = name;
// }
// console.log(Reflect.construct(exam,['Tom'])); 

// Reflect.getPrototypeOf(obj)

// class Exam {}
// let obj = new Exam()
// Reflect.getPrototypeOf(obj) === Exam.prototype

// Reflect.setPrototypeOf(obj, newProto)
// let obj2 = {}
// console.log(Reflect.setPrototypeOf(obj2,Array.prototype))
// console.log(obj2)

//Reflect.apply(func,thisArg, args)
// console.log(Reflect.apply(Math.max,Math,[1, 3, 5, 3,1]))

//Reflect.defineProperty(target, propertyKey, attributes)
// let myDate= {}
// console.log(Reflect.defineProperty(myDate,'now',{
//     value:() => Date.now()
// })); 
// console.log(myDate)
// const student = {};
// console.log(Reflect.defineProperty(student,"name",{value: "Mike"}));
// console.log(student)

// Reflect.getOwnPropertyDescriptor(target,propertyKey)
// var exam = {}
// Reflect.defineProperty(exam,"name",{
//     value:true,
//     enumerable:false
// })
// console.log(Reflect.getOwnPropertyDescriptor(exam,"name"))
// // propertyKey 属性在 target 对象中不存在时，返回 undefined
// console.log(Reflect.getOwnPropertyDescriptor(exam,"age"))

//Reflect.isExtensible(target)
// let exam = {}
// console.log(Reflect.isExtensible(exam))

// let exam = {}
// console.log(Reflect.preventExtensions(exam)) 

//用于返回target对象的所有属性
// let exam = {
//     name:1,
//     [Symbol.for('age')]: 4
// }
// console.log(Reflect.ownKeys(exam)) 


// let exam = {
//     name: "Tom",
//     age:24
// }
// let handler = {
//     get(target,key) {
//         console.log("getting " + key);
//         return Reflect.get(target,key);
//     },
//     set(target, key, value) {
//         console.log("setting " +key+" to "+value)
//         Reflect.set(target,key,value);
//     }
// }
// let proxy = new Proxy(exam,handler)
// console.log(proxy.name = "Jerry") 
// console.log(proxy.name)

// 定义 Set 集合 数据绑定：观察者模式
const observerQueue = new Set();
// 把观察者函数都放入 Set 集合中
const observe = fn => observerQueue.add(fn);
// observable 返回原始对象的代理，拦截赋值操作
const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
    const result = Reflect.set(target,key,value,receiver);
    observerQueue.forEach(v => v());
    return result
}
const person = observable({ age: 25, name:"Yajun"});
const print = () => console.log(`${person.name} is ${person.age} years old`);
observe(print);
person.name = "Joway";

//Class



    