//Callback- we pass a function as parameter to another function to increase the resuability is termed as caback function

//a common feature enabled function can be created and used as callback function when in need
function PrintDetails(printMsg, param1, param2){
    console.log(printMsg, param1, param2)
}

function GetUserInfo(firstName, lastName, printCallBk){
    printCallBk("User details are: ", firstName, lastName)  //callback function executes to give desired result
}

GetUserInfo("David", "Mier", PrintDetails)

function GetSesionInfo(sessionName, sessionTopic, printCallBk) {
    printCallBk("Session details are", sessionName, sessionTopic)
}

GetUserInfo("MERNSTack", "Core Javascript-CallBack", PrintDetails)
