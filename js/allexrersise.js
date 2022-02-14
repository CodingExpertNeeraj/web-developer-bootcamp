// var isGreater = 10 > 9;
// console.log(isGreater);
// let x = 15, y = 23;
//  console.log(x+y);
 
//  let name = "nick";
//  let msg ="Good-morning";
//  let greet = "How are you doing?";
//  console.log("Hello mr" + " "  + name + " " + msg + " " + greet);
// function sum()

// {

// var result=0;

// for(let i=0;i<arguments.length;i++)

// {

// result+=arguments[i];

// }

// console.log(result);

// }

// sum(3,5,2);

var func=function(x,y,f)

{

f(x+y);

}

 

function print(result)

{

console.log(result);

}

 

func(5,4,print);