var Fib1 = 1;
var Fib2 = 2;
var FibS = 0;
var FibSum = 2;

while(FibS < 4000001) {
	FibS = Fib1 + Fib2;
	Fib1 = Fib2;
	Fib2 = FibS;
	if (FibS % 2 === 0) {
	FibSum = FibSum + FibS;
	}
}

console.log(FibSum);
