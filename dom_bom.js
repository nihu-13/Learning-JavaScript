// DOM (Document Object Model) ->it is a programming interface for HTML and XML documents.
//childNodes -> return all child nodes of the element
let d1=document.getElementById("div1")
console.log(d1)
console.log(d1.childNodes) //it will return all child nodes of the element
console.log(d1.firstChild) //it will return first child node of the element
console.log(d1.lastChild) //it will return last child node of the element
console.log(d1.childNodes[0]) //it will return first child node of the element

//DOM Collections -> they are read only
//they are live elem.childNodes variable (reference) will automatically update if childNodes of elem is changed
// nextsSibling -> previousSibling -> parentNode -> parentElement
// firstChild -> lastChild -> childNodes -> children -> descendants -> sibling
//Element only navigation ->if we wont element  nodes then we can use Element only navigation
//previousEle.previousElementSibling -> previousEle.nextElementSibling -> previousEle.firstElementChild 

//Searching DOM->
document.getElementById("id") // it will return element with given id
document.getElementsByClassName("class") // it will return all elements with given class
document.getElementsByTagName("tag") // it will return all elements with given tag
document.querySelector("css") // it will return first element with given css selector
document.querySelectorAll("css") // it will return all elements with given css selector
//metches -> to check if element matches the given css selector
console.log(d1.matches("div2")) //false
//closest -> to look for the nearest ancestor that matches the given css selector. The element itself is also checked
console.log(d1.closest("div2")) //it will return div2
//contains -> returns true if elemB is inside elemA (a descendant of elemA) or when elemA == elemB
console.log(d1.contains(d1)) //true
// BOM (Browser Object Model) ->it represents additional objects provided by the browser (host environment) for working with everything except the document.
//The function alert/confirm/prompt are also a part of BOM
alert("helo")
let write=confirm("do you want to write it to the page")
if(write){
  document.write("hello")
}

let age=prompt("enter your age")  
if(age>=18){
  alert("you can drive")
}
// The whole HTML page is converted to a javascript object and named as document.

document.getElementsById("first").style.color="red" 
// color.style.background="yellow"
// color.style.border="2px solid black"
// color.style.borderRadius="10px"
// color.style.padding="10px"
// color.style.margin="10px"