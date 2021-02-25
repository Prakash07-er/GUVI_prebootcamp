Looping - Nested for loop for addition


var total = 0;

for(var i = 0 ; i < userInput.length ; i++)
{
   var dummy = userInput[i].split(" ");

    for(var j = 0 ; j< dummy.length ; j = j+1)
    {
        total = total + +dummy[j]
        
    }
    
}

//var dummy = ["1","2","3"];

console.log(total);