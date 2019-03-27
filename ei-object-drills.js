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

function decode(word) {
  // look for 1st character of word
  let key = word[0]; // 'c'

  // create cipher
  let cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  // look up a key in cipher
  if (cipher[key]) {
    // if key exists, return it's value
    let wordIndex = cipher[key];
    return word[wordIndex].toUpperCase();
  } else {
    // if the key doesn't exist return a space character
    return ' ';
  }
}

function decodeWords(message) {
  let decodedMessage = '';
  // split message into words
  const words = message.split(' ');
  // look up each word in our decode function
  words.forEach(word => {
    decodedMessage += decode(word);
  });
  // return the decoded message
  return decodedMessage;
}

let secretMessage = 'craft block argon meter bells brown croon droop';
// console.log(decodeWords(secretMessage));


function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`);
    },
    evaluateFight: function(character) {
      let x = (this.attack - character.defense) > 0 ? (this.attack - character.defense) : 0;
      let y = (character.attack - this.defense) > 0 ? (character.attack - this.defense) : 0;
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'dagger'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'ring'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'sword'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'bow and arrow')
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 20, 2, 'battle axe'));

const aragorn = characters.find(character => character.nickname === 'aragorn');
// aragorn.describe();

const powerfulAttackers = characters.filter(character => character.attack > 5);
// console.log(powerfulAttackers);

// characters.forEach(character => character.describe());



const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let valid = [];
  return arr.find(hero => {
    Object.keys(query).forEach(key => {
      valid.push(query[key] === hero[key]);
    });
    let result = valid.filter(Boolean).length === Object.keys(query).length;
    valid = [];
    return result;
  });
}

console.log(findOne(HEROES, { id: 1 }));
// { id: 1, name: 'Captain America', squad: 'Avengers' }
console.log(findOne(HEROES, { id: 10 }));
// null
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// null
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
console.log(findOne(HEROES, { squad: 'Justice League' }));
// { id: 4, name: 'Superman', squad: 'Justice League' }