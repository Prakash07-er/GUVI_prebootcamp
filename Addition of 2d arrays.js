Addition of 2d arrays


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
    // code starts here........

var arr =[  [1, 2], [1, 2], [1, 2] ];
var sum = 0;
 for(var i=0; i<arr.length; i++){
    for(var j=0;j<arr[i].length;j++){
        sum += arr[i][j];
    }
}
console.log(sum);

   // code  ends here.....

});

Get input from user 


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
    // code starts here........

var a =userInput[0].split(" ")
var b = userInput[1].split(" ")
var c = userInput[2].split(" ")

let a1 = +a[0]+ +a[1]
let b1 = +b[0]+ +b[1]
let c1 = +c[0]+ +c[1]


console.log(a1)
console.log(b1)
console.log(c1)

   // code  ends here.....

});