//object in Js
const age = {
    "Saman" : 22,
    "Bibek" : 23,
    "Sachin" : 24
}
console.log("Age of Saman: "+age["Saman"]);
console.log("Age of Bibek: "+age["Bibek"]);
console.log("Age of Sachin: "+age["Sachin"]);

//Creating an object info
let info = {
    firstName: "Saman",
    lastName : "Raut",
    age: 22,
    nationality: "Nepali"
}

console.log(info);
console.log("Name: " + info.firstName+" "+info.lastName);
console.log("Age: " + info.age);
console.log("Nationality: " + info.nationality);

// Array in js

var car = ["Bugatti", "Lamborghini", "Mercedes"];
var bike = ["Yamaha", "Ducati", "Royal Enfield"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(car);
//push function in array
car.push("Volkswagen");
console.log(car);
// pop function in array
car.pop();
console.log(car);
// concat function in array
var vehicle = car.concat(bike);
console.log(vehicle);
// indexof finction in array
console.log(car.indexOf("Mercedes"));
// slice function in array
console.log(bike.slice(1,3));
// forEach function in array
var salaryinUSD = [10000, 15000, 12000];
console.log("Salary in USD: " + salaryinUSD);
var salaryinNPR = [];
// It uses callback function
salaryinUSD.forEach(function(inc)
    {
        salaryinNPR.push(inc*130);
    })
console.log("Salary in NPR: " + salaryinNPR);
// Filter function in array
const evenNumbers = nums.filter(num => num % 2 == 0);
console.log(evenNumbers);
// Reduce function in array
// Reduce takes two arguments. First it takes a callback function and then initial value. 
const sum = nums.reduce((temp, value) => temp + value, 0);
console.log(sum); 
// Splice function in array
// Here the splice function removes two elements from index 3
nums.splice(3,2);
console.log(nums);
// Shift and unshift function in array
console.log("Shift: " + car.shift());
car.unshift()
console.log("unshift: " + car);


