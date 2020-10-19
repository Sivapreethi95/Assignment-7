//STEP 1
function halfNumber(num) {
    var half = num / 2;
    window.console.log('Half of ' + num + ' is ' +  half);
    return half;
}
halfNumber(5);

//STEP 2
function squareNumber(num) {
    var squared = num * num;
    window.console.log('The result of squaring the number ' + num + ' is ' + squared);
    return squared;
}
squareNumber(3);

//STEP 3
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    window.console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}
percentOf(2, 4);

//STEP 4
function findModulus(num1, num2) {
    var remainder = (num1) % (num2);
    window.console.log(remainder + " is the modulus of " + num2 + " and " + num1 + ".");
    return remainder;
}
findModulus(10, 4);

//STEP 5
function addNumbers(){
    var result = 0;
    for(var i=0; i<arguments[0].length;i++){
        result = result + arguments[0][i];
    }
    return result;
}
var numbersEntered = window.prompt("Please enter your numbers", "");
var stringNumbers = numbersEntered.split(",");
var integerNumbers = stringNumbers.map(function (a){
    return parseInt(a);
});
var result = addNumbers(integerNumbers);
console.log(result);
