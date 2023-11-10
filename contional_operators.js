//1) use logical operator to find the age lies between 10 to 20

const { log } = require("console")

const age=prompt("enter your age")

if(age>=10 && age<=20){
  console.log("your age lies between 10 to 20")
}
else{
  console.log("your age not lies between 10 to 20")
}

// 2) find day using switch if we dont use break it will go next case 
const day=new Date().getDay()

switch(day){
  case 0:
    console.log("sunday")
    break
  case 1:
    console.log("monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wensday")
    break
  case 4:
    console.log("Thursday")
    break
  case 5:
    console.log("Friday")
    break
  case 6:
    console.log("Sarturday")
    break 
}
// flow of switch case
let age=7
switch(age){
  case 5:
    console.log("is 5")//if age =5 ->is 5 is 6
  case 6:
    console.log("is 6") //if age =6 ->is 6
    break
  case 7:
    console.log("is 7") //if age =7 ->is 7 nothing
  default:
    console.log("nothing")//if age not in 7 5 6 -> nothing
}

// 3) turniry operator 
const person=10
person>=18?console.log("you can drive"):console.log("you can not drive")

