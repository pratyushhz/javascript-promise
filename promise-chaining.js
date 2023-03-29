// Promise Chaining
let p1 = new Promise((promiseResolve,promiseReject) => {
  setTimeout(() => {
    promiseResolve("The promise resolved");
  }, 2000)
})
p1.then((value) => {
  console.log(value);
})