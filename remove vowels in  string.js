Remove vowels in string

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

var strings = ["aeiou AEIOU dArums", "guitar", 
  "flute", "double bass", "xylophone","piano"];                          

   string = strings.map(x=>x.replace( /[aeiouAEIOU]/g, '' ));              

  console.log(string.join(" ")); 
   // code  ends here.....

});