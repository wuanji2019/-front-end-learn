var bankAccount = {"RMB":1000, "dollar":0}
//创建一个Proxy代理实例
var banker = new Proxy(bankAccount,{
  get(target, property){
    //判断余额是否大于0
    if(target[property]>0) {
      //有余额返回余额值
      return target[property]
    } else {
      return "余额不足"
    }
  },
  set(target,property,value){
    //存入的数值必须是一个数字
    if(!Number.isInteger(value)) {
      return "请设置正确的数值"
    } 
    //修改属性的值
    target[property] = value;
  }
})
// console.log(banker.RMB)
// console.log(banker.dollar)
// console.log(banker.dollar = "五")
// console.log(banker.dollar = 500)
// console.log(banker.dollar)


//ownKeys
let person = { "name":"老王", "age":40, "height":1.8 }
//创建一个代理对象
let proxy = new Proxy(person,{
  //ownKeys过滤对对象的属性遍历
  ownKeys(target){
    return ["name","age"]
  }
})
// console.log(person)
// console.log(proxy)
// console.log(Object.keys(person))
// console.log(Object.keys(proxy))

//has() 拦截操作：拦截key in object的操作，结果会返回一个布尔值

let person2 = {
  name:"张三",
  age:20
}
let proxy2 = new Proxy(person2,{
  has(target,prop) {
    if(target[prop] === undefined) {
      return false
    } else {
      return true
    }
  }
})
// console.log(proxy2)
// console.log("name" in proxy2)
// console.log("height" in proxy2)

//apply()方法 除了对象类型的变量可以被代理，函数也可以被代理。如果被代理的变量是一个函数，那么还会支持一个拦截程序：apply调用。
let fn = function() {
  console.log("awsl")
}
//创建一个代理实例，代理函数fn
let proxy3 =new Proxy(fn,{
  apply() {
    console.log('xswl')
  }
})
// fn();
// proxy3();

//Proxy.revocable( )取消代理  
let person4 = {name: "张三"};
//定义一个代理处理程序
let handle = {
  get(target,prop) {
    return "李四"
  }
};
//使用Proxy.revocable()进行代理
let object = Proxy.revocable(person4,handle);
// console.log(object.proxy.name) //李四
object.revoke();
// console.log(object.proxy.name) //报错

//getOwnPropertyDescriptor(target, propKey)
let handler = {
  getOwnPropertyDescriptor(target,propKey) {
    return Object.getOwnPropertyDescriptor(target,propKey)
  }
}
let target = { name: "Tom"}
let proxy5 = new Proxy(target,handler)
// console.log(Object.getOwnPropertyDescriptor(proxy5,"name"))
// console.log(Object.getOwnPropertyDescriptor(target,"name"))

let exam = {}
let proxy6 = new Proxy({},{
  getPrototypeOf(target) {
    return exam;
  }
})
// console.log(Object.getPrototypeOf(proxy6))
// console.log(Object.getPrototypeOf(exam))

let proxy7 = new Proxy({},{
  isExtensible(target) {
    return true;
  }
})
// console.log(Object.isExtensible(proxy))

let proto = {}
let proxy8 = new Proxy(function(){},{
  setPrototypeOf(target,proto) {
    console.log("setPrototypeof");
    return true;
  }
});
console.log(Object.setPrototypeOf(proxy8,proto))




