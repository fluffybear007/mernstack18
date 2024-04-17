//Polymorphism - No overloading present in JS functions it gets over- written by last definition
//1. Overriding - runtime polymorphism, <we'll explore, throught object>
//2. Overloading - compile time polymorphism <same name multiple methods with different params and their types>
//only run the last function 
//run variable (function expression) wherever it placed


printData()//no param
var PrintData = function (param1, param2, param3, param4){
    console.log("4 - Params ", param1, param2, param3, param4)
}

PrintData("One", "Two", "Three", "Four")


function printData(param1){
   console.log("1 - Param", param1)
}
printData("One") //1 param



function printData(param1, param2){
    console.log("2 - Params", param1, param2)
}
printData("One", "Two")//2 param




function printData(param1, param2, param3){
    console.log("3- Params", param1, param2, param3)
}
printData("One", "Two", "Three")//3 param




// function printData(){
//     console.log("No Param")
// }
// printData()//no param

