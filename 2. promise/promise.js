class MyPromise {
  static resolve = (value) => ({
    status: 'fulfilled',
    value: value
  })
  
  static reject = (value) => ({
    status: 'rejected',
    value: value
  })

  constructor(f) {
    const { status, value } = f(MyPromise.resolve, MyPromise.reject);
    this.status = status;
    this.value = value;
  }

  then = f => {
    this.value = f(this);

    return this;
  }
}

const promise = new MyPromise((res, rej) => {
   const int = Math.floor(Math.random() * 100) + 1;
   const response_type = (int > 50) ? res : rej;

   return response_type(int);
})

console.log(promise)

let result = promise.then(r => r.value * 3)
                    .then(r => r.value + 'hello');

console.log(result);
