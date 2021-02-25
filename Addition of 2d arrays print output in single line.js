Addition of 2d arrays print output in single line


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

