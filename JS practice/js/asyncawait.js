/*
-> To replace the methods of promises and to make the flow of the code more structured and readable, async and await was introduced.
-> Async is a function which is used to define the set of asynchronous tasks which is executed asynchronously. 
-> Await is a wait function which is defined within an asynchronous function to wait for a Promise to resolve.
*/
// Here we are going to use asyncawait to improve the flow of the code to make a Mercedes-AMG W14.(This is the same example used in promise)
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

/*
This function returns a promise to resolve when everything is assembled and the machine is ready to race.
After 3seconds, the promise is resolved with the value of the final machine.
*/
function AMGW14(f1w14){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            f1w14 = "🏎️"; 
            console.log("Mercedes-AMG W14 is ready: "+ f1w14);
        }, 3000);
    });
}
/*
Here we define an async function to manage the work flow of the above code.
*/
async function readyW14() {
    // Here try and catch is used for exception handling
        try{
                // Here the function awaits until it gets the engine from getEngine() function.
                const engine = await getEngine();
                console.log("Here the Engine: " + engine);
                // Here the function awaits until wheels are added to the engine in getWheel() function.
                const wheel = await getWheel(engine);
                console.log("Adding Wheels: " +wheel);
                // Here the function awaits until the body of w14 is assembled in makeW14() function.
                const f1w14 = await makeW14(wheel);
                console.log("Making of the Mercedes-AMG W14: " + f1w14); 
                // Here the function sends the body of W14 for final testing and the machine is deployed for Race Circuit
                AMGW14(f1w14);
    
    
        } catch(err) {
            console.log("Error occured");
        } 
    }
    readyW14();