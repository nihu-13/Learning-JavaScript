//String ->Sequence of character
let a="niharika"
console.log(a)
// escape sequence character -> it is used to print the quote inside the string
let b='niharika\'s'
console.log(b)
//String methods
console.log(a.length)
console.log(a.startsWith("n")) //retur true or false
console.log(a.endsWith("a")) //retur true or false
console.log(a.includes("harika")) //retur true or false
console.log(a.indexOf("harika")) //retur index of character
console.log(a.slice(0,4)) //retur substring
console.log(a.lastIndexOf("a")) //retur last index of character
console.log(a.slice(2,5))//retur substring
console.log(a.replace("harika","niharika"))//replace character
console.log(a.toUpperCase())//convert to upper case
console.log(a.toLowerCase())//convert to lower case
console.log(a.trim())//remove whitespaces in staart and end
console.log(a.trimStart())//remove whitespaces in start
console.log(a.trimEnd())//remove whitespaces in end
console.log(a.concat(" ","is"," a"," ","good"," ","girl"))//concatinate string
console.log(a.charAt(0)) //retur character at index
console.log(a.charCodeAt(0))//retur unicode of character at index
console.log(a.split(" "))//retur array of characters

//2) extract the number of given string
let c="Please give Rs 1000"
let num=Number.parseInt(c.slice("Please give Rs ".length))
console.log(typeof num)

//3) replace the 4th character of a given string
let d="niharika"
console.log(d.replace(d[3],"p")) //retur new string but not change the original string



