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
*/
