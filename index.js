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
  let uname = localStorage.getItem("name");
  console.log('uname: '+uname);
  if (uname) {
    console.log('uname: '+uname);
  } else {
    uname = document.getElementById("fname").value;
    localStorage.setItem("name", uname);
  }
  var element = document.getElementById("name_form");
  element.classList.add("begone");
  element = document.getElementById("userGreeting");
  element.classList.remove("begone");
  element = document.getElementById("pastries");
  element.classList.remove("begone");
  document.getElementById("special-word").innerHTML = uname + "!";
}

//todo: check if name is set

const uname = localStorage.getItem("name");
console.log('uname: '+uname);
if (uname) {
  set_to_greeting();
} else {
  var element = document.getElementById("userGreeting");
  element.classList.add("begone");

  name_form.addEventListener("submit", (e) => {
    e.preventDefault();

    set_to_greeting();
  });
}
