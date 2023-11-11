//Array in javascript-> it is a collection of items store diffrent data types

const arr=[2,3,"nihu",true]
console.log(arr)
console.log(typeof arr) // it will return object becouse it is not primitive data type

//acces element - using loop
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
//for...of->
for(let item of arr){
  console.log(item) // return value
}
//for...in->
for(let index in arr){
  console.log(index) //return key (index)
}

//Array methods 
//1. toString() -> convert array to string
let arr1=[1,2,3,4,5]
console.log(arr1)
console.log(arr1.toString()) // return string
console.log(typeof arr1[0])

//2. join() -> join all array element using seperator
console.log(arr1.join("-")) // return string

//3. pop() -> remove last element from array
let arr2=[1,2,3,4,5]
console.log(arr2.pop()) // return popped element
console.log(arr2) // return updated array

//4. push() -> add new element at last
let arr3=[1,2,3,4,5]
console.log(arr3.push(6)) // return new array length
console.log(arr3) // return updated array
//5. shift() -> remove first element from array
let arr4=[1,2,3,4,5]
console.log(arr4.shift()) // return removed element
console.log(arr4) // return updated array
//6. unshift() -> add new element at first
let arr5=[1,2,3,4,5]
console.log(arr5.unshift(0)) // return new array length
console.log(arr5) // return updated array
//7. delete -> delete element from array
let arr6=[1,2,3,4,5]
console.log(delete arr6[2]) // return true
console.log(arr6) // return updated array
//8. concat() -> join arrays
let arr7=[1,2,3,4,5]
let arr8=[6,7,8,9,10]
console.log(arr7.concat(arr8)) // return new array
//9. sort() -> sort array alphabetically
let arr9=[111,6,3,44,5]
console.log(arr9.sort()) // return updated array
const compare=(a,b)=>{
  return a-b
}
console.log(arr9.sort(compare)) // return updated array

//10. reverse() -> reverse array
let arr10=[1,2,3,4,5]
console.log(arr10.reverse()) // return updated array
//11. splice() -> add new element in array
let arr11=[1,2,3,4,5]
console.log(arr11.splice(2,1,"nihu")) // return deleted element 1st arguent is index 2nd argument is number of element to remove and 3rd argument is element to add
console.log(arr11) // return updated array
//12. slice() -> slice out a piece from array
let arr12=[1,2,3,4,5]
console.log(arr12.slice(3))


// Map() -> create new array by performing some operation on each array element orignal array will not change
let arr13=[1,2,3,4,5]
let a=arr13.map((value,index,array)=>{
  console.log(value,index,array)
  return value*value
})
console.log(a)
// Filter() -> filter an array with values that passes a test create a new array
let arr14=[1,2,3,4,5]
let a1=arr14.filter((value)=>{
  return value>3
})
console.log(a1)
// Reduce() -> reduce an array to a single value
let arr15=[1,2,3,4,5]
let a2=arr15.reduce((value1,value2)=>{
  return value1+value2
})
console.log(a2)

//forEac() -> perform operation on each element of array and orignal array will not change
let arr16=[1,2,3,4,5]
arr16.forEach((value)=>{
  console.log(value*value)
})
// Array.from() -> create an array from any other object(string..etc)
let name="Nihu"
let arr17=Array.from(name)
console.log(arr17)

//practice quetions-
//1) take input from the user add number to this array ->
let arr18=[1,2,3,4,5]
let a3=prompt("Enter a number")
a3=Number.parseInt(a3)
arr18.push(a3)
console.log(arr18)

 //2) keep adding number to the array in 1 until 0 is added to the array ->
let arr19=[1,2,3,4,5]
let a4;
do{
  a4=prompt("Enter a number")
  a4=Number.parseInt(a4)
  arr19.push(a4)
}while(a4!=0)
console.log(arr19)

//3) fiilter for number divisible by 10 from a given array ->
let arr20=[1,2,30,4,50,6,7,83,670]
let a5=arr20.filter((value)=>{
  return value%10==0
})
console.log(a5)

//4) create an array of square of given number ->
let arr21=[1,2,30,4,50,6,7,83,670]
let a6=arr21.map((value)=>{
  return value*value
})
console.log(a6)

//5) use reduce to calculate factorial of a given number from an array of first n natural number (n being the number whose factorial needs to be calculated) ->
let arr22=[1,2,3,4,5]
let a7=arr22.reduce((value1,value2)=>{
  return value1*value2
})
console.log(a7)
