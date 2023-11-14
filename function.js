//Anonymous function -> it is a function without a name that is defined inside a variable 
let name= function(a,b){return a+b}
console.log(name(2,3));

//callBack function -> it is a function that is passed as an argument to another function 
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'Some fetched data';
    callback(data);   

  }, 5000); // Simulating a delay of 5 seconds
}

function processFetchedData(data) {
  console.log('Processing data:', data);
}

// Calling fetchData and passing processFetchedData as a callback
fetchData(processFetchedData);
//another example of callback function
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
function sayGoodbye() {
  console.log('Goodbye!');
}
greet('John', sayGoodbye);

//IIFE(Immediately Invoked Function Expression) -> it is a function that is executed right after it is created,they dont have a name
let n=(function(){
  console.log("hello")
  return 3+5
 })()


//Arrow function -> it is a function that is defined using the arrow syntax and it is a shorter syntax of function and this keyword behavoir is different from normal function becuse it does not have its own this keyword
let add=(a,b)=>a+b;
console.log(add(2,3));
let objArrow = {
  
};
let obj="niju"
let n1=obj.greet01= () => {
  console.log(`Hello, my name is ${this.obj}`); // Output: Hello, my name is undefined
}
o.n1()
