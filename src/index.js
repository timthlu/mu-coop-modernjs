console.log("Hello MU!");

console.log("=== Variable Declarations & Scope ===");

console.log("--- var ---");

//function scope
function varTest() {
  var x = 1;
  console.log("var x - initial: ", x); //x = 1

  if (x === 1) {
    var x = 2;
    console.log("var x - inside the block: ", x); //x = 2
  }

  console.log("var x - outside of the block: ", x); //x = 2, was changed in the if block
  //this happens because of hoisting to the top of the function block; x in the if statement
  //is the same variable!
}

varTest();

//global scope
var x_global = 1;
console.log("var x_global - initial: ", x_global); //x_global = 1

if (x_global === 1) {
  var x_global = 2;
  console.log("var x_global - inside the block: ", x_global); //x_global = 2
}

console.log("var x - outside of the block: ", x_global); //x_global = 2, was changed in the if block
//this happens because of hoisting to the top of the file; x is the same global variable
//in the if block!

//trying to access x here gives a referenceError! The code cannot find the variable x
//becuase it was only hoisted to the top of the function, not the file.

console.log("\n--- let ---");

function letTest() {
  let y = 1;
  console.log("let y - initial: ", y); //y = 1

  if (y === 1) {
    let y = 2;
    console.log("let y - inside block: ", y); //y = 2
  }

  console.log("let y - outside of the block: ", y); //y = 1. Because let is block scoped,
  //it is not hoisted; it is actually only scoped inside the if block. Hence the y inside
  //the if block is a different y from the the y defined oustide of it!
}

letTest();

console.log("\n--- const ---");

function constTest() {
  const z = 1;
  console.log("const z - initial: ", z); //z = 1

  if (z === 1) {
    const z = 2;
    console.log("const z - inside block: ", z); //z = 2
  }

  console.log("const z - outside of the block: ", z); //z = 1. Same thing happens as the let!

  //reassigning a constant variable gives an error.
  try {
    z = 2;
  } catch (error) {
    console.log("const z - error when reassigning values: ", z); //z = 1; it never succeeds!
    console.log(error);
    console.log("\n");
  }
}

constTest();

console.log("\n=== Hoisting ===");
console.log("hoisting - var: ", hoistedVar); //will be undefined since it's a var!
var hoistedVar = 10; //if this line does not exist, then the variable hasn't ever been
//declared; the console log above will be reference error!

//only from line 85 and below will hoistedVar be defined; it will be undefined if it
//is accessed anytime before then.

try {
  console.log("hoisting - let error: ", hoistedLet);
} catch (error) {
  console.log(error);
}
let hoistedLet = 10;
//will be a refernece error, since it never sees a declaration for hoistedLet before
//the console log line

for (var i = 0; i < 3; i++) { //i = 0, 1, 2
  console.log("var i - inside for block: ", i);
}
console.log("var i - outside for block: ", i); //i = 3, it is accessible outside
//of the for loop since it was hoisted.

for (let j = 0; j < 3; j++) { //j = 0, 1 ,2
  console.log("let i - inside for block: ", j);
}
try {
  console.log("var j - outside for block error: ", j); //refernece error because j is not
//defined outside of the for block, because lets are not hoisted
} catch (error) {
  console.log(error);
}

console.log("=== Objects ===");
const employee = {
  firstName: "Tim",
  lastName: "Lu"
};

console.log(`Employee: ${employee}`); //prints Object object; JavaScript tries to be
//smart and convert it to a string, which fails
console.log("Employee: ", employee); //prints the object data well!

//spread operator
const employeeWithInfo = {
  ...employee, //the spread operator, ..., essentially injects the properties of an object
  jobTitle: "Software Engineer", //into another object, kind of like object concatenation, can be used with arrays as well
  office: "250 Bloor East"
};

console.log("EmployeeWithInfo: ", employeeWithInfo);

// //destructuring: breaks down a complex structure into simpler parts
// const {firstName, lastName, jobTitle, office} = employeeWithInfo; //reads an object into their variables autoamtically!
// console.log(`Destructured variables: ${firstName}, ${lastName}, ${jobTitle}, ${office}`);

// //default values
// const {firstName, lastName} = employee; //What if employee contains some jobTItle or office? Use default values
// //so it's fine even if it doesn't
// const {firstName, lastName, jobTitle3 = "Manulife Employee", office3 = "500 King St"} = employee;

// //renaming keys inside object
// const {firstName: coolVarName,
//   lastName: coolVarName2,
//   jobTitle: coolVarName3 = "Manulife Employee",
//   office: coolVarName4 = "500 King St"} = employee;

//   console.log(`Using renamed variables: ${coolVarName}, ${coolVarName2}, ${coolVarName3}, ${coolVarName4}`);

//overwriting existing values with spread operator
const updatedEmployee = {
  ...employeeWithInfo,
  office: "500 King St"
}
console.log("Updated Employee: ", updatedEmployee);

console.log("=== Arrays ===");
const array1 = [1, 2, 3, 4];
console.log(`Array1: ${array1}`); //can use string template notation! Converts fine into string
console.log("Array1: ", array1); //looks slightly different because no longer parsed to string

//spread operator
const array2 = [0, ...array1, 5]; //order matters when it comes to arrays!
console.log("Array2: ", array2);

// Rest parameter: similar to spread operator, but works a little differently
function sumTwo(n1, n2, ...rest) { //makes functions more dynamic
  console.log("\n--- rest parameter ---");
  console.log("n1: ", n1); //1
  console.log("n2: ", n2); //2
  console.log("rest: ", rest); //[3, 4]
  return n1 + n2;
}

console.log(`SumTwo: ${sumTwo(...array1)}`); //we feed in an array; it takes in the first
//two values! All the other values are taken in as an array

console.log("\n=== function regular and arrow notation ===");

//regular function notation
function regularFunctionArea(height, width) {
  return height*width;
}

console.log(`function - regular notation: ${regularFunctionArea(3, 5)}`);

//same function but in arrow function notation:
const arrowFunctionArea = (height, width) => {
  return height*width;
}

console.log(`function - arrow notation: ${arrowFunctionArea(3, 5)}`);

//concise arrow function notation: no need for curly brackets around body
const arrowFunctionAreaConcise = (height, width) => height * width;

console.log(`function - concise arrow notation: ${arrowFunctionAreaConcise(3, 5)}`);

console.log("\n=== Array Methods ===");
console.log("Original array: ", array1); //1, 2, 3, 4

//map method: takes a callback function, goes through every element of the array
//and uses the callback function on every one of those elements

const array1_map = array1.map(element => element * 2); //arrow function notation!
//we can use arrow function notation because it's an anonymous function and we don't
//care about class variables like this, super, etc.

console.log("Array1 map: ", array1_map); //2, 4, 6, 8

//filter method: takes a callback function returning a boolean, goes through every element
//of the array and runs the callback function on every element, only keeping the ones that have
//the callback function returning true
const array1_filter = array1.filter(element => element > 2);

console.log("Array1 filter: ", array1_filter); //3, 4

//chaining array functions
console.log("Array1 map + filter chained: ", array1.map(element => element * 2).filter(element => element > 2));
//goes through the array to map, then goes through that array to filter
//gives 4, 6, 8

//find method: only returns a single element; the FIRST one that it finds that has its
//callback function returning true
const employees = [
  { id: 1, name: "Michelle"},
  { id: 2, name: "Michael"},
  { id: 3, name: "Mykull"}
];

console.log("Array find: ", employees.find((employee) => employee.id === 1)); //{id:1, name:"Michelle"}

//array1 remains unchanged through these functions! map, filter, find just return a new array

//push method: lets you append an element to an array
employees.push({id: 4, name: "Miekale"});
console.log("Array push: ", employees); //all employees with the new one appended

//note that the push method actually modifies the array!

// reduce method
// first let's go over a basic example of wanting to take the sum of all elements in an array.
//i.e. we want to *reduce* an array of multiple elements to one value.
const arrayToSum = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arrayToSum) {
  sum += num;
}
console.log(`Sum using for loop: ${sum}`);
// now let's convert that to the Array.reduce function
const reducerFcn = (accumulator, currentNumber) => accumulator + currentNumber;
//first parameter should be the parameter that is the result from the previous element
//second parameter is the current element
//return value is the new result after this element

const sumUsingReduce = arrayToSum.reduce(reducerFcn, 0); //the reduce method takes in
//the reducer function and also the initialValue for the accumulator (what will it take
//in before reducing the first element?)
console.log(`Sum with Array Reduce: ${sumUsingReduce}`);

// Using reduce to return an object: example: counting a tally of items in the collection
const fruitsBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];
// we want: { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
const counts = fruitsBasket.reduce((fruitCounts, fruit) => {
  fruitCounts[fruit] = (fruitCounts[fruit] || 0) + 1;
  return fruitCounts;
}, {});
console.log(`Fruits Basket Counts: `, counts);

console.log("\n==== Classes ====");
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }
}
const polygon = new Polygon(5, 4);
console.log(`Polygon class area: ${polygon.area}`); //since area is a getter, we don't need the
//brackets when we call the method! We can use it as an object attribute

// inheritance
class Square extends Polygon {
  constructor(length) {
    super(length, length);
  }
}
const square = new Square(3);
console.log(`Square class: ${square.area}`); //Square inherits all public and protected
//properties of polygon, meaning it can use area

console.log("\n==== Promises ====");
// Promises
// A promise represents an operation that hasn't completed yet.
// A promise can be:
// fulfilled - The action relating to the promise succeeded
// rejected - The action relating to the promise failed
// pending - Hasn't fulfilled or rejected yet
// The promise constructor takes one argument, a callback with two parameters,
// resolve and reject. Do something within the callback, perhaps async,
// then call resolve if everything worked, otherwise call reject.
// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…
//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });

//you don't actually define the resolve and reject functions! They are defined by the promise class
//itself. We use these functions when we want the promise to resolve successfully or reject
//due to errors. Each take in 1 parameter, which .then and .catch elements use respectively.

function mySum(num1, num2) { //when a promise is "new"ed, it executes immediately.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 !== "number" || typeof num2 !== "number") {
        reject("Please provide valid numbers");
      }
      resolve(num1 + num2);
    }, 2000);
  });
}

//when a promise is resolved, it is chained into its .then if resolve was called in it,
//and .catch if reject was called on it.

//Both .then and .catch take in a callback function which takes in a the result passed into the
//resolve and reject calls in the promise respectively, and invokes the callback function
//body passing in the result when the promise is finished.

const myPromise = mySum(5, 10);
myPromise
  .then((result) => {
    console.log(`Promise result: ${result}`);
    return mySum(result, null);
  })
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
console.log("Promise function invoked");


console.log("\n==== Async/Await ====");

// Async/Await
async function myAsyncAwait() { //since the function uses await, it must be async.
  try {
    const result = await mySum(5, 10); //only executes next line of code when this returns!
    //await can take on promises (which mySum returns in this case) or async function calls.
    console.log(`Async/await result: ${result}`);
  } catch (err) {
    console.error(err);
  }
}
myAsyncAwait();
