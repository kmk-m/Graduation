var newdiv = "d";
var tag;
var element;
const form = document
  .getElementById("btn")
  .addEventListener("click", handleSubmit);
async function handleSubmit(e) {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;

  await fetch("https://sleepy-bastion-99766.herokuapp.com/signup", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
}

function data(json) {
  console.log(json);

  if (newdiv !== "d" && newdiv !== json.message) {
    console.log("1");
    var te = document.querySelector(".error");
    element.removeChild(te);
  }
  if (json.code !== "Success" && newdiv !== json.message) {
    newdiv = json.message;
    tag = document.createElement("p");
    tag.classList.add("error");
    console.log("2");

    var text = document.createTextNode(json.message);
    tag.appendChild(text);
    element = document.getElementById("test");

    element.appendChild(tag);
    newdiv = json.message;
  } else {
    window.location.href =
      "https://sleepy-bastion-99766.herokuapp.com/interests";
  }
}
