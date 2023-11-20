//clouser -> closure is a function that remembers its lexical scope even after it is executed.

const n=() =>{
  let name="nihu"
  const b=() =>{
    console.log(name) //output ->sahu
  }
name="sahu"
  b()
}
n()

// using iife -> Immediately invoked function expression
  const fun = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text)
      }, 1000 * n)
    })
  }
(
  async()=>{
    let text=await fun("hello",2)
    console.log(text)
    text=await fun("hello2",4)
    console.log(text)
  }
)()

//spread()-> spread operator is used to spread the elements of an array or object into a function.
function sum(a,b,c){
  return a+b+c
}
let arr=[1,2,3]
console.log(sum(...arr))

const obj={
  name:"nihu",
  age:23
}
console.log({...obj,name:"sahu"}) //output -> {name:"sahu",age:23}