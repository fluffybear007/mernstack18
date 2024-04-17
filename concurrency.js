//callbacks /API's - registered call back of JS -XHR, Promises, SetTimeout, Setinterval, S


console.log("Concurret Execution Starts!!")

setTimeout(function ()){
    console.log("First Delayed Execution's Timeout - No 1.1")

    seteTimeout(function (){
        console.log("First Delayed Execution's Timeout - No 1.1")
    }, 0)

},1000)

setTimeout(function (){
    console.log("Second Delayed Execution's Timeout - No 2")
},2000)

setTimeout(function()){
    console.log("Third Delayed Execution's Timeout - No 3")
}, 1000)

console.log("Concurrent Execution Ends!!")
