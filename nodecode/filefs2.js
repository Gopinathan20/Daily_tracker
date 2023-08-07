//non-blocking code - async code

//even with errors in the callback block :: remaining code would execute with the error logs
var fs = require("fs");

fs.readFile('node1.txt',function (err,data){
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");
console.log("Program Ended2");