'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};

// console.log(loaf.hydration());


const newObjects = {
  foo: '1',
  bar: '2',
  fum: '3',
  quux: '4',
  spam: '5'
};

// for (let key in newObjects) {
//   console.log(`${key}: ${newObjects[key]}`);
// }

const mealObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(mealObj.meals[3]);


const randomCharacters = [
  {name: 'Mike', jobTitle: 'Unemployeed', boss: 'Doug'},
  {name: 'Michael', jobTitle: 'Engineer', boss: 'Doug'},
  {name: 'John', jobTitle: 'Chief', boss: 'Doug'},
  {name: 'Doug', jobTitle: 'Founder'}
];

// randomCharacters.forEach(person => {
//   console.log(`${person.name} - ${person.jobTitle}`);
// });

// Looping through an Array
// for (let i=0; i<arr.length; i++){}
// array.forEach(){} -- returns the original array
// array.map(){} -- returns a new array

// Looping through an Object
// for (let key in obj) {}
// Object.keys.forEach(key => obj[key])

// for (let i in randomCharacters) {
//   let temp = '';
//   for (const key in randomCharacters[i]) {
//     temp += `${randomCharacters[i][key]} `;
//   }
//   console.log(temp.trim());
// }

randomCharacters.forEach(person => {
  if ('boss' in person) {
    console.log( `${person.jobTitle} ${person.name} reports to ${person.boss}.` );
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  }
});