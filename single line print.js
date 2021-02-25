Single line print 



const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var str = userInput[0].split(" ");
var ss = [];
var zz = "";
for(var i=0;i<str.length;i++)
{
    ss.push(str[i])
    zz+=str[i] + " "
    //console.log(str[i]);
}
console.log(ss.join(" "));
console.log(zz.trim());

//end-here
});
