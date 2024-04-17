//Objects - defined with class Object in js are the back bone or basic allocations of js
//var User = new Object({}) // constructor based

//1. Using two curly brackets
var Employee = {
    Name: "Yao",
    ID: 2123,
    GroupCode: "Permanent",
    GetEmployeeInfo : function(){
        return this.Name + " "+this.ID+" "+this.GroupCode+" "+this.Salary
    }
}

Employee.Salary ="$25000" //adding property to class

console.log(Employee.GetEmployeeInfo())//how to output object properties


//This is not recommended for inheritance
//2. We can use object constructor to create a copy and provide partial inheritance
var SoftwareEngg = new Object(Employee);

 SoftwareEngg.Salary = "$30000"// new property into child class

 //over-riding - GetEmployeeInfo
 SoftwareEngg.GetEmployeeInfo = function(){
    return this.Name + " "+this.ID+" "+this.GroupCode+" "+this.Salary
 }

console.log(Employee.GetEmployeeInfo())
console.log(SoftwareEngg.GetEmployeeInfo())

//3. We should use Object.create to create a copy and provide inheritance 
var SoftwareEngg = Object.create(Employee);//static method

 SoftwareEngg.Name="Joe"
 SoftwareEngg.Salary = "$30000"// new property into child class

 SoftwareEngg.GetEmployeeInfo = function(){
    return this.Name + " "+this.ID+" "+this.GroupCode+" "+this.Salary
 }

console.log(Employee.GetEmployeeInfo())
console.log(SoftwareEngg.GetEmployeeInfo())

//this inheritance in javascript is possible only due to prototype
//prototype - is an object in JS to create link between child and parent 

console.log(SoftwareEngg.__proto__)//returns Employee object

//4. Empty Object
var EmptyObj ={} //new Object({})
console.log(EmptyObj.__proto__)

//5. Breaking the protoype chain and defining base functions- passing null in constructor method
var nullPrototype =Object.create(null)
nullPrototype.toString =function(params){
    return "Do something interesting"
}

//6. Object.Assign -mergin two objects
var User ={name : "Aileen", add1:"Lake City 1", mobile : "9889889" }
var Address = {name : "Aileen", add1 : "wal streets", productName: "New product" }

//var Delivery ={User, Address}

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
var Delivery = Object.assign(User, Address)

console.log(Delivery)


//create one object with name person, and inherit it to Student and create two new propertoes and one new method
var person={
    name: "vanessa",
    age: 4,
    addr: "somewhere in US"
}

var Student=Object.create(person)
Student.name="Aaron"
Student.hobby="play"
Student.grade=1

console.log(Student)