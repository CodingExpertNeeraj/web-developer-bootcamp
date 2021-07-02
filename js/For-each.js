//   0     1       2       3       4
const numbers = [ 1, 2, 3, 4, 5 ];

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
	if (i == 2) console.log(numbers[i] * 5);
	else console.log(numbers[i] * 10);
}

numbers.forEach(function(num) {});

console.log(numbers);

numbers.forEach(function(num) {
	if (num % 2 == 0) console.log(num);
});
