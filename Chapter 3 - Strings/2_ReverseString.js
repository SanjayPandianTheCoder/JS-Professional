//This will reverse the char in string
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("Iron Man")) // naM norI


//This will reverse words in the sentences
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWords("Iron Man")) // Man Iron

//using Spread Operator
function reverseUsingSpread(str){
    return [...String(str)].reverse().join('');
}
console.log(reverseUsingSpread(456)) // 654
console.log(reverseUsingSpread("ScarletWitch")) //hctiWtelracS

//custom Reverse Function
function customReverse(str){
    revStr = "";
    for(var i=str.length - 1; i>=0; i--){
        revStr += str[i];
    }
    return revStr;
}
console.log(customReverse("Loki")) //ikoL