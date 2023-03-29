// Promise
let p = new Promise((promiseResolve, promiseReject) => {
  console.log("Promise is pending")
  setTimeout(() => {
    console.log("The promise is fulfilled");
    promiseResolve(true);
  }, 4000)
})
console.log(p);
p.then((value) => {
  let a = 10; let b = 10;
  let result = a + b;
  console.log(result);
  console.log(value)
})

let p2 = new Promise((resolve, reject) => {
  reject(new Error())
})
p2.catch((error) => {
  console.log(error)
  console.log("An error occured");
})


