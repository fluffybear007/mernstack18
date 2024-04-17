//Behaves as the snapshot or lookahead of the javascript code present, and gives behaviour of partial compilation
//It happens when we try to use a function or varible before its decaration
//1. Variable Hoisting - Variable gets an underfined value
//2. Functional Hoisting - Functions get hoisted with its definition


console.log(myVar) //undefined 
console.log(myVar()) //error: function expressions do not hoist with definition
// console.log(PrintName) //function definition
// console.log(PrintName("What in the name")) // can be executed


var myVar = "Assigne me a name"

myVar= function PrintName(name){
    console.log(name)
}

