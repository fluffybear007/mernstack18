//Q1
//javascript features -interpreted languages and Partially Compiled as well due to hoisting feature
//clinet side scripting language, interpreted, oojs, functional, dynamic typing, case sensitive, aoto 

//Q2
var s= "Robert"
console.log(s)
console.log("data type", typeof s )

s=.0266
console.log(s)
console.log("data type", typeof s )

s=false
console.log(s)
console.log("data type", typeof s )

s={myname : "Test Me"}
console.log(s)
console.log("data type", typeof s )

s=25166665
console.log(s)
console.log("data type", typeof s )

s=undefined
console.log(s)
console.log("data type", typeof s )

s=true
console.log(s)
console.log("data type", typeof s )

s="Robert Jr."
console.log(s)
console.log("data type", typeof s )

s=null
console.log(s)
console.log("data type", typeof s )

s={}
console.log(s)
console.log("data type", typeof s )

s=-32767
console.log(s)
console.log("data type", typeof s )

//Q3.Create a function with name show user info, this function expects three params, firstname, lastname and age
//print all the details in the given function

function UserInfo(firstname, lastname, age){
    console.log(firstname)
    console.log(lastname)
    console.log(age)
}

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doaddition (param1, param2, param3){
    console.log(param1+param2 + param3)
}
doaddition(2,3,4)//right parameter type 
doaddition(2)//missing parameter
doaddition(2,3,3)//right parameter 
doaddition("first", 2, "three")//wrong parameter type

//Q5. Give me an example of your choice on closure, objects, prototype, each
//closure: limit the external user access the through the child function
