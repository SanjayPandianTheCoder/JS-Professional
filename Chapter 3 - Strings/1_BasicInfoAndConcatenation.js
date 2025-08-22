//Ways to declare a string
var string1 = "hello";
var string2 = 'hello';
var string3 = `hello`;

//String() - Convert other type to string
var intString = String(23); console.log(intString);
var booleanString = String(false); console.log(booleanString);
var nullString = String(null); console.log(nullString);

//toString() - Convert other type to string
var intString = (23).toString(); console.log(intString);
var booleanString = (false).toString(); console.log(booleanString);
var nullString = ({"name":"Sanjay"}).toString(); console.log(nullString);

//String can be created from fromCharCode() 
var charCodeString = String.fromCharCode(101,102,103,132);
console.log(charCodeString);

//Concatenation
var s1 = "Iron"; var s2 = "Man";
console.log(s1+s2); //IronMan
console.log(s1+" "+s2); //Iron Man
console.log(`${s1} ${s2}`); //Iron Man
console.log(s1.concat(s2)); //IronMan
console.log(s1.concat(' ',s2)); //Iron Man