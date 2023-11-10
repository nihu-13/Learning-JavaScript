//There are 6 loops in js 
// 1) Loop
// 2) For Loop
// 3) For In Loop
// 4) For Of Loop
// 5) While Loop
// 6) Do While Loop  
// Loops are used to perform repeated actions.
// Loops are used to iterate over data.
//1)For Loop
for(let i=1;i<8;i++){
  console.log(i)
}

//2)For in Loop ->use to get key-value and work on itrable and object both

// Find Marks of each Student
const student={
  aman:56,
  nihu:88,
  nishant:55,
  sibi:87
}

for(let a in student){
  console.log(a + " got is " + student[a])
}

//3)For of Loop -> use to get value of itrable only like array string etc..
// Print Student Name
let name="Ashu"
for(let b of name){
  console.log(b)
}

const arr=["aman","nihu","disha"]
for(let a of arr){
  console.log(a)
}

//4)While Loop -> Loops through a block of code as long as a specified condition is true.
// Print Numbers from 1 to 5
let i=1;
while(i<6){
  console.log(i)
  i++ // if not write this then it will print infinitly
}

//5)Do While Loop -> Loops through a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// Print Numbers from 1 to 5
let j=1;
do{
  console.log(j)
  j++
}while(j<6)





