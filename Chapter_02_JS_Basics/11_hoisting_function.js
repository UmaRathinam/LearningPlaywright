//dtep 1-- Function declaration
function getUserStatus()
{
 console.log(status_code); //Output: undefined
 var status_code=200;
 console.log("status_code is "+status_code);
}
//step -- Calling of the functions
getUserStatus(); // This will work because of hoisting