//Promises methods -> resolve, reject, all, allSettled, race, any

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1")
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve("Value 2")
    // reject(new Error("Error"))
  }, 2000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3")
  }, 3000)
})

// 1) all -> if all promises are resolved, it will return an array of all their values
let promis=Promise.all([p1,p2,p3])
promis.then((value)=>{
  console.log(value)
})
// 2) allSettled -> if any promise is rejected, it will return an array of all their values and statuses
let promis1=Promise.allSettled([p1,p2,p3])
promis1.then((value)=>{
  console.log(value)
})
// 3) race -> if any promise is resolved, it will return the value of that promise 
let promis2=Promise.race([p1,p2,p3])
promis2.then((value)=>{
  console.log(value,"race")
})
// 4) any -> if any promise is resolved, it will return the value of that promise
//any vs race -> race will return the first resolved promise, any will return the first rejected promise
let promis3=Promise.any([p1,p2,p3])
promis3.then((value)=>{
  console.log(value,"any")
})
// 5) resolve -> if any promise is resolved, it will return the value of that promise
let promis4=Promise.resolve(6)
promis4.then((value)=>{
  console.log(value,"resolved")
})
// 6) reject -> if any promise is rejected, it will return the error
// let promis5=Promise.reject(new Error("Hey"))
// promis5.then((value)=>{
//   console.log(value)
// })
