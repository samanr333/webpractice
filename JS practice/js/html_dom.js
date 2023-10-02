// Using HTML DOM getElementbyID method and innerHTML property
// HTML DOM Documents
// Changing HTML Elements
// Getting the content of div by using class name
// Changing the src and alt of image
var image = document.getElementsByClassName("logo");
image[0].alt = "Shield";
image[0].src = "img/capB.png";
image[0].style.width = "50px";
// Getting the content of div by using id.
var element1 = document.getElementById("myElement1");
element1.innerHTML = "Welcome!!";
// changing attribute of element
element1.setAttribute('class', 'formTitle')
// changing style of html elements
element1.style.color = "red";
element1.style.fontSize = "30px"
element1.style.fontWeight= "bold";
element1.style.textAlign= "center";

// DOM documents
// var element2 = document.getElementById("myElement2");
// element2.innerHTML = "Hello";

// Creating a button element which on click displays current date and time
var button = document.createElement("button");
// Giving text to the button
button.innerText = "Date and Time";
// Giving id to the button
button.id = "myDTButton";
// Accessing the button dib
var buttonContainer = document.getElementById("myButton");
// Adding the button element inside the div
buttonContainer.appendChild(button);
// Adding CSS to the button
button.style.color = "white";
button.style.borderRadius = "20px"
button.style.backgroundColor = "purple";

// Making a function such that it shows date and time when we click the button
function showDateandTime() {
    var currentDate = new Date();
    var dateTime = currentDate.toLocaleString();
    alert("Today's date and time: " + dateTime);
  }
  
  // Adding event listener to the button
 button.addEventListener("click", showDateandTime);
  
//  Form Validation
// Get a reference to the form element
var form = document.getElementById("myForm");

// Add form submit event listener
form.addEventListener("submit", validation);
function validation() {
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("cPassword").value; 
    if(name == "")
        alert("Name must be filled out");
    if(dob == "")
        alert("DOB must be filled out");
    if(username == "")
        alert("Username must be filled out");
    if(email == "")
        alert("Email must be filled out");
    if(password == "")
        alert("Password must be filled out");
    if(cPassword == "")
        alert("Please confirm your password");
    if(cPassword != password)
        alert("Password did not match");
    if(password.length < 6)
    alert("Password must be at least 6 characters");
    else
        alert("Form submitted successfully");
}

// DOM animation
form.addEventListener("submit", animateBox);
function animateBox() {
    var box = document.getElementById("boxDOM");
    var position = 0;
    var interval = setInterval(moveBox, 10);
  
    function moveBox() {
        box.innerHTML = "<h1>I am Moving</h1>";
        box.style.backgroundColor = "blue";
        box.style.textAlign = "center";

      if (position >= 660) {
        box.style.backgroundColor = "purple";
        box.style.height = "auto";
        box.innerHTML = "<h1>Please fill the form:</h1>";
        clearInterval(interval);

      } else {
        position += 2;
        box.style.left = position + "px";
      }
    }
  }