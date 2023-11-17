//SetTimeOut ->it allow us to run a function once after the interval of time.
let h = document.getElementById("well")
alert("hiiiiiiiii")
const set = setTimeout(() => {
   h.innerHTML = "WELLCOME BACK BRO"
 }, 2000)

//clearTimeout ->it will clear the timeout
clearTimeout(set)

// setInterval ->it will run a function again and again after the interval of time.
// const set1 = setInterval(() => {
//   alert("hi") work as infinite loop
// }, 2000)
let a = prompt("enter the value of a")
a = Number.parseInt(a)
let b = prompt("enter the value of b")
b = Number.parseInt(b)

const sum=setTimeout(()=>{
  console.log(a+b)
},2000)


 