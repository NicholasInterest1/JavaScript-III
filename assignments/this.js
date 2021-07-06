/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayWord(word) {
    console.log(this);
    return word;
  }
  sayWord("Boston FTW");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Nick');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const nick = new CordialPerson('Devin');
  const devin = new CordialPerson('Nick');
  
  nick.speak();
  devin.speak();

// Principle 4

// code example for Explicit Binding

nick.speak.call(devin); devin.speak.apply(nick);