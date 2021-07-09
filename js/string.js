let myFirstName = 'neeraj';
let mySecondName = 'tiwari'

console.log(`Hi this is me ${myFirstName.toUpperCase()}`)
console.log(myFirstName.toUpperCase());
console.log(mySecondName)
let myFullName = myFirstName + mySecondName;
console.log(myFirstName + mySecondName)
console.log(myFullName.charAt(0).toUpperCase() + myFullName.substring(1,12));
console.log('----------------------------')

const myName = 'Nick';
for (let myAlphabet of myName)
console.log(myAlphabet)
console.log('----------------------------')

const guruji = {
name: 'mr.Rachit rastogi',
wife: 'mrs.Anubha rastogi',
son: 'Arnav rastogi',
daughter: 'Aarohi rastogi',
place: 'america',
proffession:'software engeeniar'
};
//console.log(guruji)


for (let value in guruji)
console.log(value)
console.log('----------------------------')