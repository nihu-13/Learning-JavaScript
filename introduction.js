//this is a beginning
//print hello world
console.log("hello world");

//variable in javascript

var first=2; // var have globle scope
{
  var first=4;
  console.log(first);  // print 4
}
console.log(first) //print 4 

let first=2; // var have blcked scope
{
  var first=4;
  console.log(first);  // print 4
}
console.log(first) //print 2

var first=2; // var have globle scope
{
  var first=4; // genrate error we can not modify const variable it is constant
  console.log(first);  
}
console.log(first) 



/* data type in js --> 1) primitive data type --> 1) null
                                                  2) number
                                                  3) string
                                                  4) symbol
                                                  5) bigInt
                                                  6) boolean
                                                  7) undefine */

let a=null
let b=123;
let c="Nihu"
let d=Symbol(1,2,3,4)
let e=BigInt(1234)
let f=true
let g; //undefine by defoult

console.log(a,b,c,d,e,f,g)

// data type in js --> 2) Non-primitive data type --> 1) object = if you have been learned python so it is work as same dictionary in pythin dict 

//wite a program which store name phone number markes and student_id
let student={
  "Name":"Niharika Sahu",
  "mobile_no.":123456789,
  "Student_id":101
}
console.log(student)

