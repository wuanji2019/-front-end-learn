class MyPromise {
    constructor(handle) {
        //  判断handle函数
        if (typeof handle !== 'function') {
            throw new Error('MyPromise must accept a function as a parameter')
        }
        //  添加状态
        this._status = 'PENDING'
        //  添加状态
        this._value = undefined

        //  执行handle
        try {
            handle(this._resolve.bind(this),this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    // 添加resovle时执行的函数
  _resolve (val) {
    if (this._status !== 'PENDING') return
    this._status = 'FULFILLED'
    this._value = val
  }

  // 添加reject时执行的函数
  _reject (err) { 
    if (this._status !== 'PENDING') return
    this._status = 'REJECTED'
    this._value = err
  } 
}
const obj=new MyPromise((resolve,reject)=>{
    resolve('这是第一个 resolve 值')
  })
  console.log(obj) 