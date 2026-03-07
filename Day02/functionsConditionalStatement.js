//Define the launchBrowser function
function launchBrowser(browserName){
if(browserName==="chrome")
    console.log("its Chrome")
else
    console.log("Other Browser")
}
//Defining the runTest function
function runTests( testType){
switch (testType) {
case "smoke":
    console.log("Smoke")
    break

case "sanity":
    console.log("sanity")
    break

case "regression":
    console.log("regression")
    break

default:
    console.log("Smoke")
    break
 }
}
//calling the functions
launchBrowser("chrome")
launchBrowser("Firefox")
runTests("regression")
runTests()
