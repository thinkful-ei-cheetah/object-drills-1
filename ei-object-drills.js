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

// Exercise to add boss property
// randomCharacters.forEach(person => {
//   if ('boss' in person) {
//     console.log( `${person.jobTitle} ${person.name} reports to ${person.boss}.` );
//   } else {
//     console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
//   }
// });


function decodeWords(sentance) {
  let cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
}

let secretMessage = 'craft block argon meter bells brown croon droop';

function decode(word) {
  // look for 1st character of word
  let key = word[0];
  // look up a key in cipher
  let cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  // if the key is not in cipher place space
  let space = word.split(' ');
  // if the key is in cipher
  let wordIndex = cipher[key];

  // return the letter that matches word index
  return word[wordIndex].toUpperCase();


}
console.log(decode('craft'));