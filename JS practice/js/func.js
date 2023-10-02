// Basic function in js
// function to find simple interest
let p = 5000;
let t = 2;
let r = 15;
function simpleInterest(principle,time,rate){
    return (principle*time*rate)/100;
}
console.log("Simple Interest: " + simpleInterest(p,t,r));

//defining arrow function
const sum = (x,y) =>{
    return x+y;
}
console.log("The sum of 3 and 5 is: "+ sum(3,5));

// Call back function is function inside a function
var Sname = ["Saman", "bibek", "Sachin"];
console.log(Sname);

Sname.forEach(
    function display(names){
        console.log(names);
    }
)

// callback function example
const cricketers = [
    {name: "AB De Villiers", speciality: "Batsman"},
    {name: "Virat Kohli", speciality: "Batsman"}
]

function addCricketer(cricketer, callback){
    cricketers.push(cricketer);
    console.log("Cricketers fetched");
    callback();

}
function getCricketer(){
    let names = "";
    cricketers.forEach(function(cricketer){
        let names = [];
        let specialities = [];
        names.push(cricketer.name);
        specialities.push(cricketer.speciality);
        console.log("Name of cricketer: " + names + " | Speciality: " + specialities);
    })
}

let newCricketer = {name: "Dale Steyn", speciality: "Bowling"}
addCricketer(newCricketer, getCricketer);

// callback Hell
// Callback hell is defined as the nested callback function
// We use Promises to overcome the problem of Callback hell
// f1 car -> chassis -> wheel -> engine

// For Engine
function getEngine(callback){
    setTimeout(()=>{
        const engine = "⚙️";
        console.log("Here the Engine: " + engine);
        callback(engine);
    }, 1000);
}

// For Wheel
function getWheel(engine, callback){
    setTimeout(()=>{
        
        const wheel = engine + "🛞";
        callback(wheel);
    }, 2000);
}

// getEngine((engine) => {
//     getWheel(engine, (wheel) => {
//         console.log("Adding Wheels: " +wheel);
//     })
// });



function makeW14(wheel, callback){
    setTimeout(() => {
        var f1w14 = wheel + "🔧🪛" 
        console.log("Making of the Mercedes-AMG W14: " + f1w14); 
        f1w14 = "🏎️";
        callback(f1w14);
    }, 3000);
}

getEngine((engine) => {
    getWheel(engine, (wheel) => {
        console.log("Adding Wheels: " +wheel);
        makeW14(wheel, (f1w14) => {
            setTimeout(() => {
                console.log("Mercedes-AMG W14 is ready: "+ f1w14); 
            }, 2000);
        })
    })
})
