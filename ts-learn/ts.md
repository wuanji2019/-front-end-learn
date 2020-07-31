# typescript


## 基础类型
* 布尔值  let isDone:boolean =false;
* 数字 let sum:number = 6;
* 字符串 let name:string = "An"
* 数组 
  * 类型元素数组 let list:number[] =[1,2,3]
  * 数组泛型  let list:Array<number> = [1,2,3];
* 元组Tuple 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
  let x:[string,number];
* 枚举 
* Any 任何类型
* Void 没有任何类型 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
* null undefined
* never 
* object    
* 类型断言

## 变量声明 let const 同es6

## 接口 interface
readonly vs const
最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
可继承 混合类型

## 类
继承 
公共，私有与受保护的修饰符 public private protected
readonly修饰符
静态属性


