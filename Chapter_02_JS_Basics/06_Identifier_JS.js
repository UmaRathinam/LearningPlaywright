console.log("Learning - Identifier,Literals,Operators");
console.log("Usage of var,let,const");

console.log("Identifier");

var a=10;
console.log(a);
console.log("//Reassign the value");
a=20;
console.log("//printing a value After Reassign the value is");
console.log(a);
// a --> Variable name = Identifier (name which is given to container)
//10 --> Literal or Variable value --> Can be anything (10,20,uma,233,true,false,null)
//= --> Operator
//Var --> Keyword
/* in Js semicolon; is optional*/
console.log("**********************************************")
//Rules of Identifiers
//1. Must start with a letter, under score or $dollar sign
//2. can contain letters,numbers,Under scores and dollar signs
//3. cannot start with a numner
//4. cannot be a reserved word
//5. cannot contains spaces
//6. cannot contains special characters other than underscore & $dollar sign
//7. Case sensitive

console.log("//var 1=2; //identifier cannot start with a number");
console.log("//var @name='Uma'; //identifier cannot contains special characters other than underscore & $dollar sign");
console.log("//var first name='Uma'; //identifier cannot contains spaces");
console.log("//var var='Uma'; //identifier cannot be a reserved word");
console.log("***********************************************");
console.log("//Identifier can contain letters,numbers,Under scores and dollar signs");
var $name="Uma";
console.log($name);
var _name="Rathinam";   
console.log(_name);
var name_1="Uma";
console.log(name_1);
var name$2="Rathinam";
console.log(name$2);
console.log("***********************************************");
console.log("//Case sensitive");
var name="Uma";
console.log(name);
var NAME="Rathinam";
console.log(NAME);
console.log("***********************************************");
console.log("java script is a language which breaks its own rules");
var1 =10;
console.log(var1);