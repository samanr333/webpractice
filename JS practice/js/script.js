// Working with variable

// Add
var x = 2;
var y = 3;
var sum = x + y;
console.log("The result is: "+ sum);

// Working with const and 

// Area of circle
const pi = 3.14;
let r = 5;
var area_of_circle = pi*r*r;
console.log("Area of circle: "+ area_of_circle);

// Operators
let a = 10;
let b = 5;

// Arithmetic operators
console.log("Sum: " + (a + b));
console.log("Difference: " + (a - b));
console.log("Product: " + (a * b));
console.log("Quotient: " + (a / b));
console.log("Remainder: " + (a % b));
console.log("Increment: " + (++a));
console.log("Decrement: " + (--b));

//Assignment operator
console.log("Assignment: " + (a));
console.log("Add and assign: " + (a += b));
console.log("Subtract and assign: " + (a -= b));
console.log("Multiply and assign: " + (a *= b));
console.log("Divide and assign: " + (a /= b));
console.log("Modulus and assign: " + (a %= b));


// Comparison operator
console.log("Equal: " + (a === b));
console.log("Not equal: " + (a !== b));
console.log("Greater than: " + (a > b));
console.log("Less than: " + (a < b));
console.log("Greater than or equal to: " + (a >= b));
console.log("Less than or equal to: " + (a <= b));

//Logical Operator
console.log("AND: " + (a > 0 && b > 0));
console.log("OR: " + (a > 0 || b > 0));
console.log("NOT a: " + (!a));
console.log("NOT b: " + (!b));

// Bitwise operator
console.log("Bitwise AND: " + (a & b));
console.log("Bitwise OR: " + (a | b));
console.log("Bitwise XOR: " + (a ^ b));
console.log("Bitwise NOT a: " + (~a));
console.log("Bitwise NOT b: " + (~b));
console.log("Left shift: " + (a << b));
console.log("Right rhift: " + (a >> b));


// Datatype in js

// String datatype
let stringData = "Avengers assemble !!";
console.log("String: " + stringData + ", Type: " + typeof(stringData));

// Number datatype
let numberData = 17;
console.log("Value: " + numberData + ", Type: " + typeof(numberData));

// Object datatype
let objectData = { name: "AB De Villiers", age: 39 };
console.log("Name: " + objectData.name + " Age: " + objectData.age + ", Type: " + typeof(objectData));

// Array datatype
let arrayData = [1, 2, 3];
console.log("Value: " + arrayData + ", Type: " + typeof(arrayData) + " (Array)");

// Boolean datatype
let booleanData = true;
console.log("Value: " + booleanData + ", Type: " + typeof(booleanData));

//Non Premitive datatype

//Object
let person = {
    name: "Saman",
    age : 22
};
console.log("Name: " + person.name + " Age: " + person.age);

let person1 = person;
person1.name = "Bibek";
person1.age = 21;
console.log("Name: " + person1.name + " Age: " + person1.age);

//Array
let cars = ["Bugatti", "Mercedes", "Ferrari"];
let numbers = new Array(1, 2, 3);

console.log(cars);
console.log(numbers);


