// // Object Destructuring 

// const person = {
//   name: 'Kunal',
//   age: 23,
//   location: {
//     city: 'London',
//     temp: 53
//   }
// };

// // name has a default string 
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// // Renaming the temp variable to temperature 
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }


// ** CHALLENGE **
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'Unknown'] = address;
console.log(`You are in ${city} ${state}.`);

// ** CHALLENGE **
const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`);