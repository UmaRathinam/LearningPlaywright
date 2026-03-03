var a="global";
if (true) {
    console.log(a); //Output: global
    var a="temp";
    console.log(a); //Output: temp
}