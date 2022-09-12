// console.log("test");

// const NUM1 = 0

// const NUM2 = 1.321

// const SILLY = true;

// const MYARRAY = [0,1,1,2,3,5,8,13,21,34];

// let thing;

// const STRING ="Hello"

// const DUNNO = null;

// const USER_DATA = {
//     firstName: "",
//     lastName: "",
//     height: "",
//     weight: "",
//     eyeColour: "",
//     hairColour: "",
//     ethnicity: ""
// };

// console.log(typeof NUM1);
// console.log(typeof NUM2)
// console.log(typeof MYARRAY);
// console.log(typeof SILLY);
// console.log(typeof thing);
// console.log(typeof STRING);
// console.log(typeof DUNNO);
// console.log(typeof USER_DATA);

// // Globally scoped

const MYNAME = "Bob";

// Friend in block/ function scoped

// function greeting() {
//     const FRIEND = "sally";
//     return FRIEND;
// }

// console.log(friend); // friend cannot be accessed outside bc block scope

// but global can be accessed in functions

// function greeting() {
//     console.log(`Hello, ${MYNAME}`);
// }

// greeting();

// const X = 5;

// function addOne(num) {
//     const ANSWER = num + 1;
//     return ANSWER;
// }

// console.log(addOne(X));

// THIS

// the window object

console.log(this === window);
console.log(window);

a = 37;
console.log(window.a);

this.b = "MDN";
console.log(window.b);

console.log(b);

// const PERSON = {
//     firstName: "Andrew",
//     lastName: "Greenhorn",
//     greetings: function() {
//         console.log(`Hello, ${this.firstName}`); // we might want to use this.property
//         //we want to refer specifically to the object
//     }
// }

// PERSON.greetings();

// three main paradigms of programming

// 1) Procedural

//eg
let aNumber = 2;
if (aNumber > 2) {
  console.log("more than two");
} else {
  console.log("equal or less than 2");
}

// 2) Functional

//eg
const X = 5;

function addOne(num) {
  const ANSWER = num + 1;
  return ANSWER;
}

console.log(addOne(X));

// 3) Object-Oriented Programming
// The idea here is to make real world things.

const PERSON = {
  firstName: "Andrew",
  lastName: "Greenhorn",
  age: 23,
  greetings: function () {
    console.log(`Hello, ${this.firstName}`);
  },
  yearOfBirth: function () {
    return 2022 - this.age;
  },
};

PERSON.greetings();

console.log(PERSON.yearOfBirth());

// CLASSES - a template for creating objects.

//eg
// CLASS: PERSON
//Name[firstName, lastName]
//Age
//Gender
//Interests
//Bio{"[Name] is [Age] years old. They like [Interests]"}
//Greeting{"Hi! I'm [Name]."}

class User {
  //convention capitalise first letter NOT camelcase
  constructor(first, last, age, gender, interests) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeeting = `Hi!, I'm ${first}.`;
  }
  introduce() {
    console.log(`Hello my name is ${this.firstName}`);
  }
  displayAge() {
    console.log(`${this.firstName}'s age is ${this.age}.`);
  }
  bioGen() {
    if (this.gender === "Male") {
      this.pronouns = "He likes";
    } else if (this.gender === "Female") {
      this.pronouns = "She likes";
    } else {
      this.pronouns = "They like";
    }
    console.log(
      `${this.firstName} is ${this.age} years old. ${this.pronouns} ${this.interests}`
    );
  }
}

const user1 = new User(
  "Bob",
  "Freeman",
  "45",
  "Male",
  "Bowling, Shooting, and Whiskey"
);

console.log(user1);

const user2 = new User("Sally", "Rodgers");
console.log(user2);

user1.introduce();
user1.bioGen();

class Vehicle {
  constructor(model, manufacturer, yearOfManufacture, colour) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.colour = colour;
  }
  printColour() {
    console.log(`This car is ${this.colour}.`);
  }
}

const HONDA_CIVIC = new Vehicle("Civic", "Honda", "2006", "Cobalt Blue");
const MAZDA_DEMIO = new Vehicle("Demio", "Mazda", "2003", "Depressing Gray");

console.log(HONDA_CIVIC);
console.log(MAZDA_DEMIO);

HONDA_CIVIC.printColour();
MAZDA_DEMIO.printColour();
