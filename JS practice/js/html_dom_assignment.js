// Q2. Extract the text label of a button
function buttonText() {
    var button = document.getElementById("myButton");
    var buttonText = button.textContent;
    alert("Button Text: " + buttonText);
}
// Q3. Create an element in DOM
var myContainer = document.getElementById("answer");
var newContainer = document.createElement("div");
newContainer.innerHTML = "<b>Hello, <b>";
myContainer.appendChild(newContainer);
console.log("First element:", newContainer);

// Q4. Create a new child element in DOM
var childElement = document.createElement("p");
childElement.innerHTML = "<b>I am Lewis Hemilton<b>";
newContainer.appendChild(childElement);
console.log("New child element:", childElement);

// Q5. Replace the child element with new child element
var newChildElement = document.createElement("span");
newChildElement.innerHTML = "<b>I am a Mercedes-AMG f1 Driver<b>";
newContainer.replaceChild(newChildElement, childElement);
console.log("Replaced child element:", newChildElement);

// Q6. Select an element by element ID
var selectElementById = document.getElementById("answer");
selectElementById.style.color = "blue";
console.log("Selected Element by ID:", selectElementById);

// Q7. Select an element by element Name
var selectElementByName = document.getElementsByName("button")[0];
selectElementByName.style.backgroundColor = "purple";
selectElementByName.style.color = "white";
selectElementByName.style.borderRadius = "20px";
selectElementById.style.padding = "20px";
console.log("Selected Element by Name:", selectElementByName);

// 8. Select elements with tag name using querySelector function
var selectElementsByQuery = document.querySelector("div");
selectElementsByQuery.style.padding = "10px";
console.log("Selected Elements with Tag Name:", selectElementsByQuery);
