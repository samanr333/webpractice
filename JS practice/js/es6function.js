// Use simple arrow function
// Here greet is the implicit name for the anonymous arrow function.
const greet = (greeting, name) =>  {
    console.log("Hello! " + greeting +" "+ name);
}
greet("Good morning", "Saman");

// In a regular function, this keyword refers to the object that the function is being called on or the object that is calling the function.
// In arrow functions, the value of this is determined by the surrounding context in which the arrow function is defined.
const info = {
    name: "AB De Villiers",
    role: "Batting",
    // Using this in regular function.
    displayInfoRegular: function() {
        console.log("Name: " + this.name + "\nRole: "+ this.role);
        // setTimeout(function(){
        //     console.log("Name: " + this.name + "\nRole: "+ this.role);
        // }, 2000); 
    },
    // Using this in arrow function.
    displayInfoArrow:() => {
        console.log("Name: " + this.name + "\nRole: "+ this.role); 
    }
}
info.displayInfoRegular();
info.displayInfoArrow();

// Regular function with the arguments object
function sum() {
    let result = 0;
    for (let i in arguments) {
      result += arguments[i];
    }
    return result;
  };
  
  console.log(sum(5, 4)); 
  console.log(sum(1, 13,5)); 

// Es6 
// Template literal in js
let title = "Sir"
let fname = "Lewis";
let lname = "Hamilton";
console.log(`This is ${title} ${fname} ${lname}`);

// Spread Operators
const firstArray = [1, 2, 3];
const secondArray = ["Lewis Hamilton", "George Russel", "Max Verstappen"];
// Expanding an array into individual elements
console.log(...firstArray);
console.log(...secondArray);
// Merging two arrays
const mergedArray = [...firstArray, ...secondArray];
console.log(mergedArray);
// Copying firstArray to copyArray
const copyArray = [...firstArray];
console.log(copyArray);
// Concatenating two strings
const firstName = "Saman";
const lastName = "Raut";
const fullName = [...firstName, ...lastName].join('');
console.log(fullName);
// Copying and modifying an object
const realObj = {
    name: "AB De Villiers",
    age: 40
}
const modifiedObj = {...realObj, age: 39};
console.log(realObj);
console.log(modifiedObj)

// Rest Operator is used to overcome functions with the arguments objcts when different datatype is passed to the function.
// Adding string to numbers using rest operator
function sumRest(name, ...arguments){
    let res1 = 0;
    for(let i in arguments){
        res1 += arguments[i];
    }
    console.log(`Hello ${name}. Your sum is: ${res1}`);
}
sumRest("Saman",2,3,13);

// Ternary Operator 
var x = 25;
var y;
(x == 35)? y="Equal to 25" : y = "Not equal to 25";

// Switch statement in js
var day = 4;
switch(day){
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;
        
    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number!");
        break;
}

// Strict equality vs Loose equality
// In loose equality there is only comparison of the content but not the datatype
// In strict equality there is comparison of content as well as datatype.
// Loose equality
console.log("2" == 2);
console.log("" == 0);
// Strict equality
console.log("2" === 2);
console.log("" === 0);