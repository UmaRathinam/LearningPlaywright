console.log("Learning - Hoisting");
console.log(a);
var a=10;
console.log(a);
//In Js, we can access the variable before declaration and initialization. This is called Hoisting.
//In Js, only var keyword is hoisted, let and const are not hoisted.
//phase 1 --> memory Creattion var a is undefined; //Declaration is hoisted
//phase 2 --> a=10; //Initialization is not hoisted
