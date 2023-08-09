/* function myFunction() {
    document.getElementById("form-control").innerHTML = "Paragraph changed";


} */

function sayHello() {
  let userName = prompt("Please enter your name here: ");

  //   alert("Hello " + userName + ",");

  document.getElementById("special-word").innerHTML = userName + "!";
}

sayHello();
