'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'Hello'; 
    }
  };
}

// console.log(createMyObject());
// console.log(createMyObject().sayHello());


// obj updater
function updateObject(obj = {}) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}
// console.log(updateObject());

function personMaker(firstName, lastName) {
  var person = {
    firstName: firstName,
    lastName: lastName,
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

// console.log( personMaker('Mike', 'Jung').fullName() );

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}
console.log(keyDeleter(sampleObj));