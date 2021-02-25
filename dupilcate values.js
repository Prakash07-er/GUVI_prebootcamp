Find the dupilcate values

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



let elem = [12,12,12,34,34,45,45,56,67,67,78,78,78,78,78]

let count = {};

for(i=0;i<elem.length;i++)
{

  if (count[elem[i]] === undefined)
  {
     count[elem[i]] = 1;
  }
  else
  {
     count[elem[i]] = count[elem[i]] + 1
     console.log(count)
  }

}



   // code  ends here.....

});