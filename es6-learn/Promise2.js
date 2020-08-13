class MyPromise {
    constructor(handle) {
        // 判断handle函数与否
        if(typeof handle !== 'function') {
            throw new Error('MyPromise must accept a function as a parameter')
        }

        //添加状态
        this._status = 'PENDING';
        //添加状态
        this._value = undefined;
        // 添加成功回调函数队列
        this._fulfilledQueues = [];
        // 添加失败回调函数队列
        this._rejectedQueues = [];
        try {
            handle(this._resolve.bind(this),this.reject.bind(this))
        } catch (err) {
            this._reject(err)
            
        }
    }
}