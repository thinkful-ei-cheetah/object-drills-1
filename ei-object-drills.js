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

