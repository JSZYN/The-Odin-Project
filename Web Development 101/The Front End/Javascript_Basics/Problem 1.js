var sum = 0;
var num = 0;

while (num < 999) {
    num++;
    if (num % 3 === 0) {
        sum = sum + num;
    } else if (num % 5 === 0) {
        sum = sum + num;
    } else {
        sum = sum + 0;
    }
}

console.log(sum);
