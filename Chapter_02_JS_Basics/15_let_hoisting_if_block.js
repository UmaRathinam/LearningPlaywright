let x="global";
if (true) {
    console.log(x); //Output: global
}
    //Let is block-scoped, so it is not hoisted to the global scope. 
    // It is only accessible within the block it is declared in. 
    // In this case, the variable x is declared in the global scope, so it is accessible within the if block. 
    // //Therefore, it will print "global".

//Example 2
let a="global2";
if (true) {
    console.log(a); //will get reference error because a is not defined in the block scope, it is only defined in the global scope.
    let a="block scope";
    console.log(a); //Output: block scope
}