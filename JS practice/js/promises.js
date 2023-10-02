/*
->Promise is constructor which allows to handle asynchronous operations in a structured way.
->It is used to find out if the asynchronous operation is successfully completed or not.
->A promis may have one of three states:
 -Pending: It refers to initial state when promise is created. It is neither fulfilled nor rejected. 
 -Resolved: It is a state when promise is fulfilled or the operation successfully completed.
 -Rejected: It is a state when the promise is not fulfilled or the operation is rejected.
*/

/* 
->Fulfilled: "fulfilled" means that the promise has successfully completed its operation and has a resolved value. It indicates that the promise has transitioned from the pending state to the resolved state. When a promise is fulfilled, it means that the asynchronous operation associated with the promise has finished successfully.

->Resolved: "Resolved" is a broader term that encompasses both fulfillment and rejection. It signifies that the promise has transitioned from the pending state to either the fulfilled or rejected state. When a promise is resolved, it means that the final outcome of the promise, whether successful or failed, has been determined.
*/

/* 
Basic example of synchronous promise
Creating a promise:
-> A promise object is created using the promise() constructor.
-> The constructor takes a function as an argument, which takes two function resolve() and reject().
-> If the promise returns successfully, the resolved() function is called and if any error occurs, the rejected() function is called.
*/
// for age1
const age1 = new Promise(function (resolved, rejected) {
    const isAdult = false;
    if(isAdult) 
        resolved("You can vote.");
    else
        rejected("You cannot vote.");
});
/*
Methods used in promise:
then() -> It is used as the callback to tell that the promise is successfully fulfilled or resolved.
catch() -> It is used as the callback to tell that the promise is rejected or any error occured.
finally() -> It is executed when the promise is either successfully resolved or rejected.
*/

age1
    .then((data) => {
        console.log("yes! " + data);
    })
    .catch((data) => {
        console.log("Sorry! " + data);
    })
    .finally((data) => {
        console.log("Thank You");
    })

// for age-2
const age2 = new Promise(function (resolved, rejected) {
    const isAdult = true;
    if(isAdult) 
        resolved("You can vote.");
    else
        rejected("You cannot vote.");
});
age2
    .then((data) => {
        console.log("yes! " + data);
    })
    .catch((data) => {
        console.log("Sorry! " + data);
    })
    .finally((data) => {
        console.log("Thank You");
    })
/*
Using Promise to overcome callback hell
*/

/*
This function returns a promise to resolve when the engine is ready 
After 1 second, the promise is resolved with the value of the engine.
*/
function getEngine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const engine = "⚙️";
            resolve(engine);
        }, 1000);
    });
}

// Pending state of promise:
// Console.log(getEngine());

/*
This function returns a promise to resolve when the wheels are added to the engine.
After 1 second, the promise is resolved with the value of the wheel.
*/
function getWheel(engine){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const wheel = engine + "🛞";
            resolve(wheel);
        }, 1000);
    });
}

/*
This function returns a promise to resolve when the wheels and engines are assembled.
After 2 seconds, the promise is resolved with the value of the assembling and assembled F1W14.
*/
function makeW14(wheel){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var f1w14 = wheel + "🔧🪛" 
            resolve(f1w14);
        }, 2000);
    });
}

// Methods of promise
getEngine()
    .then((engine) => {
        console.log("Here the Engine: " + engine);
        return getWheel(engine);
    })
    .then((wheel) => {
        console.log("Adding Wheels: " +wheel);
        return makeW14(wheel);
    })
    .then((f1w14) => {
        console.log("Making of the Mercedes-AMG W14: " + f1w14); 
        f1w14 = "🏎️";
        setTimeout(() => {
            console.log("Mercedes-AMG W14 is ready: "+ f1w14); 
        }, 3000);
    })
    .catch((data) => {
        console.log("Error !! " + data);
    })
    .finally(() => {
        setTimeout(() => {
            console.log("The making of W14 is completed");
        }, 3500);
    })