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

const fooObj = {
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
// console.log(keyDeleter(fooObj));


function makeStudentReport(data) {
  return testData.map(student => `${student.name}: ${student.grade}`);
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

// console.log(makeStudentReport(testData));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  return students.map(student => {
    student.status = 'In Summer School';
    return student;
  });
}

// console.log(enrollInSummerSchool(studentData));


