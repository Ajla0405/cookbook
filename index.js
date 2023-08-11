/* function myFunction() {
    document.getElementById("form-control").innerHTML = "Paragraph changed";


} */

function sayHello() {
  let userName = prompt("Please enter your name here: ");

  //   alert("Hello " + userName + ",");

  document.getElementById("special-word").innerHTML = userName + "!";
}

// sayHello();



function set_to_greeting() {
  // var element = document.getElementById("userGreeting");
  // element.classList.add("mystyle");
  const name = document.getElementById("fname").value;
  var element = document.getElementById("name_form");
  element.classList.add("begone");
  element = document.getElementById("userGreeting");
  element.classList.remove("begone");
  document.getElementById("special-word").innerHTML = name + "!";
} 


var element = document.getElementById("userGreeting");
element.classList.add("begone");

let loginForm = document.getElementById("loginForm");
name_form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  set_to_greeting();
});
