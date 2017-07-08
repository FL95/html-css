/*This script adds up a sequence of numbers
* and displays the sum when 0 is entered.
* parseInt() function looks for numbers in a string,
* see MDN documentation for more info
* Syntax for parseInt: parseInt(variable/string/radix)*/
var num, sum;
sum = 0;
num = prompt ("Enter new value, or 0 to end");
while (num != 0) {
    sum = sum + parseInt(num);
    num = prompt ("Enter new value, or 0 to end");
}
alert ("Sum = " + sum);

/*Syntax for while loop:
while (test-condition) {
    statements if condition is true
}
*/