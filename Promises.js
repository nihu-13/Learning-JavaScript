//Promises -> it is a mechanism to handle asynchronous operations it is used to do work parrallelly
// -> resolve -> fulfilled
// -> reject -> rejected
//  resolve -> panding
//  reject -> undifind
//  fulfilled ->value(result)

let p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("Work pending") //work running 
    resolve(01) //work resolved
     console.log("successfully run 01")
  },2000)
})
 p1.then((value)=>{ //then is used to handle resolve
  console.log(value)
 })                    


let p3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
     console.log("successfully run 03")
    // reject(new Error("NOT WORKING"))
    resolve(03)
  },2000)
})
p3.then((value)=>{
  console.log(value)
 },(error)=>{  
  console.log("ERROR IS : " ,error)
 })
let p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("successfully run 02")
    // reject(new Error("NOT WORKING 02"))
    resolve(02)
  },2000)
})
p2.then((value)=>{
console.log(value)
})

// catch -> it is used to handle reject
// -> if there is any error in p2 then catch is used to handle it
