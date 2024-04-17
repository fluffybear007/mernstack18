//class - template/absrtaction -Area
//functions/methods circle, rectangle, square, etc

// Area arr = new Area()//

// arr.circle()//
// arr.rectangle()//
// arr.square()//


//functions in javascript are first class member citizens and hold almost all power present in runtime.

session = "MERNStack Session"
//keyword is function, name of the function, then params
//return  - is mandatory in js function, by default js will return default value -  undefined
//Pure Functions - which must have something returned 

function UserName(params) {
    console.log(params)
    //definition and the scope of the function
    console.log(this)
}

UserName("Yao")// it execute in global scope --this


console.log(validUser(5,9));//test it and see

var validUser =function(a,b){
    return a+b
}

console.log(validUser(5,9));