function printTheNumber(func) {
	console.log(`-----------------------------------`);
	console.log(`This is the random Number, watch it!!! ${func()}`);
	console.log(`-----------------------------------`);
}

function randomDiceNumber() {
	return Math.floor(Math.random() * 6 + 1);
}

function maxValue(num1, num2) {
	return num1 > num2;
}

// 500 > 100 true / false

console.log(maxValue(500, 100));

const person2 = {
	name: 'Neeraj',
	age: 21,
	gender: 'male',
	printDetails: function() {
		console.log(`Hi this is ${person2.name}, I am ${person2.age} old and i am a strong ${person2.gender}`);
	},
	friends: [ 'rahul', 'karan', 'rajesh', 'harish' ]
};