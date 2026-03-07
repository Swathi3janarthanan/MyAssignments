//Define the checkNumberType function
function checkNumberType(num)
{
if(num>0)
    return "number is positive " 
else if(num    <0)
    return"number is negative "
else
    return "number is zero "
}
//declare & initialize the variable
let num=-9
//Calling function
let result =checkNumberType(num)
console.log(result)