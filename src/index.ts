/**
Problem 1 - Hello world
Write a function that greets a user given their first name. 
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything

function greet(firstName:string) {
    console.log("Hello" + firstName);
}
greet("Tanzeem");
*/

/**
Problem 2 - Sum function
Write a function that calculates the sum of two functions

function sum(a: number, b: number): number {
  return a + b;
}
let result = sum(2, 3);
console.log(result);
*/

/**
Problem 3 - Return true or false based on if a user is 18+(Type inference)
Function name - isLegal

function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
let result = isLegal(17);
console.log(result);
*/

/**
Problem 4 - 
Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}
delayedCall(function () {
  console.log("hi there");
});
*/

/**
 * tsconfig
 * rootDir:Where should the compiler look for .ts files.
 * outDir:where Where should the compiler look for spit out the .js files
 */

/**Interfaces: Generally used to assign types to object(increase code reusability) */
/**
interface ObjectType {
  name: string;
  age: number;
  country: string;
}
function showUserName(user: ObjectType) {
  console.log(user.name);
}
const user = {
  name: "Tanzeem",
  age: 22,
  country: "Country",
};
showUserName(user);
*/

/**Types: Very similar to interfaces , types let you aggregate data together. */

/**UNION
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
  console.log(`Id:${id}`);
}

printId(100);
printId("101"); 
*/

/**INTERSECTION
type Employee = {
  name: string;
  startDate: Date;
};
type ManagerLead = {
  name: string;
  department: string;
};
type TeamLead = Employee & ManagerLead;

const teamLead: TeamLead = {
  name: "Tanzeem",
  startDate: new Date(),
  department: "Software developer"
};
*/

/**
 // 1.Implementing Interface using variable
 interface People {
    name: string;
    age: number;
    greet: () => string;
    }
    
    let person: People = {
    name: "Tanzeem",
    age: 22,
    greet: () => {
        return "Hi";
    },
};

let greetings = person.greet();
console.log(greetings);
*/

/**
//2. Implement interfaces using class
interface People {
    name: string;
    age: number;
    isLegal: () => boolean;
}

class Manager implements People {
    //   name: string;
    //   age: number;
    //   constructor(name: string, age: number) {
        //     this.name = name;
        //     this.age = age;
        //   }
        //Both have same thing
        constructor(public name: string, public age: number) {}
        isLegal() {
            return this.age > 18;
        };
    }
    
    class God extends Manager {
        constructor(name: string, age: number) {
            super(name, age);
        }
    }
*/

/**
 * Abstract class have default funtion call while interface does not have default function call
 */
/**
 
abstract class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    
    abstract greet(): string;
    hello() {
        console.log("Hi there");
    }
}

class Employee extends User {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }
    
    greet() {
        return "Hi" + this.name;
    }
}
*/

/**
 * Difference between type and interface----->
 * 1.we can implement interface in class but type does not.
 * 2.types have union and intersection
 */

/// Interfaces vs types
// Create two types called User and Admin,
// Create a function that takes either a user or an admin as an input, and returns a string saying "Welcome, [name]".
/**
 
interface User {
    name: string;
    age: number;
}

interface Admin {
    name: string;
    permissions: string;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin) {
    console.log("Welcome " + user.name);
}

greet({ name: "Tanzeem", age: 22 });
greet({ name: "Harkirat", permissions: "Admin" });

*/

/**
 * Array in typescript
 * problem:filter out the user having age greater than 18
 */
interface User {
  name: string;
  age: number;
}

function filterAge(users: User[]) {
  return users.filter((user) => user.age > 18);
}

const filteredUsers = filterAge([
  {
    name: "Tanzeem",
    age: 22,
  },
]);

console.log(filteredUsers);
