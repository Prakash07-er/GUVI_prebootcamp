Objects : create cars details 

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

let cars = [{
    "brand1123": "BMW",
    "color":"icewater",
    "make":"icewater",
    "year":"icewater",
    "reported":"icewater",
    "wheels":3,
    "stepinie":4
},
{
    "brand1123": "Audi",
    "color":"icewater",
    "make":"icewater",
    "year":"icewater",
    "reported":"icewater",
    "wheels":3,
    "stepinie":4
}
,

{
    "brand1123": "Rolls",
    "color":"red",
    "make":"icewater",
    "year":"icewater",
    "reported":"icewater",
    "wheels":3,
    "stepinie":4
}
]

cars[0].color = "red"
// console.log(cars)
// console.log(cars[0])
// console.log(cars[1]["brand1123"])

for( var i = 0 ; i<cars.length ; i ++)
{
    
    if(cars[i].color=="red")
    {
        console.log(cars[i])
    }
}



   // code  ends here.....

});