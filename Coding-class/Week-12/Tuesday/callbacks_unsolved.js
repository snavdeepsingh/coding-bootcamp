var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

function logBefore(func, message){
    console.log(message);

    func();
}

// Write a function that runs a function argument if
// its other argument is truthy.

function runIf(func, bool){
    if(bool){
        func();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function takesArg(func, value){
    return function(){
        return func(value);
    }
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?
fs.writeFile("log.txt", "message logged again", function(err, data){
    if(err) console.log(err);

    console.log("success!");
})

var writeMessage = function(err){
    if(err) console.log(err);

    console.log("I succeeded");
}

fs.writeFile("log.txt", "Message2", writeMessage);