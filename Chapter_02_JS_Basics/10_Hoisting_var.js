console.log(greeting); //Output: undefined
var greeting="Hello World";
console.log(greeting);// Output: Hello World
//In Js, we can access the variable before declaration and initialization. This is called Hoisting.
//In Js, only var keyword is hoisted, let and const are not hoisted.
//phase 1 --> memory Creattion var greeting is undefined; //Declaration is hoisted
//phase 2 --> greeting="Hello World"; //Initialization is not hoisted
