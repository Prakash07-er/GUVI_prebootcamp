Typecasting 


let i =0 ;
for(i=0;i<userInput.length;i++)
{
    console.log(typeof(userInput[i]))
}

let intvar = parseFloat(userInput[0]);
let strvar = userInput[1];
let bvar = (userInput[2] == 'true');
let arrvar = userInput[3].split(",");

console.log (typeof(intvar));
console.log (typeof(strvar));
console.log (typeof(bvar));
console.log (bvar);

console.log (arrvar);
console.log (typeof(arrvar));