//Inheritance
//Encapsulation - Privte, Public, internal, protected
//Polymorphism
//Abstraction
//Enncapsulation -access modifiers: in languages like java help us to prevent/limit the usage of class members

//In Javascript: When ve have a function within a function and parent function returns child function, 
//then we can limit what can be accessed by external user through child function this is termed as closure

//currying - when a function returns another instead of values and also repeats same thing we call it currying
function Parent(userName, userPin){
    //Private scope of parent function
    var name ="David"
    var pin ="234556"
    var accountName = "Savings Acccount" //public - on authentication success
    var accountBalance = "$20000" //public - on authentication success
    var accountPassword = "1234545" //private - shouldn't be eaccessed outside

    var child =function(getBalance){  //getBalance - is the parameter for child function
        //Public scope which is accessible to others
        if (getBalance && name == userName && pin == userPin){
            return {
                name : name,  //key value pair
                accountName : accountName, //key value pair
                accountBalance : accountBalance //key value pair
            }
        }

    }
    return child;
}

var child = Parent("David", "234556") // child function- example of curring
console.log(child(true))
