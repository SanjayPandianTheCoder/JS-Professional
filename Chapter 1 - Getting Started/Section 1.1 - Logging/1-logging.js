//Hello World
console.log("Hello World");

//Logging Variables
var message = "Hello World";
console.log(message);

//Logging with placeholders
var message1 = "Hello";
var message2 = "World";
console.log("%s %s!",message1, message2);

//Logging objects
var aObject = {
    name : "Sanjay Pandian",
    role : "Developer",
    age : 20,
    isMarried : false,
    address : {
        country : "India",
        state: "TN"
    }
};

console.log(aObject);

//Log entire html element
console.log(document.body)