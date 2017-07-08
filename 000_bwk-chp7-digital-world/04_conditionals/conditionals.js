/**/
var max, num;
num = prompt ("Enter new value, or 0 to end");
max = num;
while (num != 0) {
    if (parseInt(num) > max) {
        max = num;
    }
    num = prompt ("Enter new value, or 0 to end");
}
alert ("Maximum is " + max)