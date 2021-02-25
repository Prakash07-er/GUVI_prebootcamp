Frequency sort using objects


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
    
function sortByFrequency(a) 
{
    return Array.from( a.reduce( (acc, o) => 
    {
        const key = Object.keys(o)[0];
            const obj = acc.get(key) || Object.assign({ key, count: 0 }, o[key]);
            obj.count++;
            return acc.set(key, obj);
    }, new Map),
        ([key, obj]) => obj
    ).sort( (a, b) => b.count - a.count || b.price - a.price );
}

// Sample input
const a = [{X: { price: "5"  }}, { Y: { price: "3"  }},
          { Y: { price: "3"  }}, { Z: { price: "4"  }}, 
          { Q: { price: "2"  }}, { X: { price: "5"  }}, 
          { Z: { price: "4"  }}, { X: { price: "5"  }}];

// Perform transformation & output
const res = sortByFrequency(a);
console.log(res);
   // code  ends here.....

});