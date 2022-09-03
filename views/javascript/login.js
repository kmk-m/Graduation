const signin = document.getElementById("btn");
const email = document.getElementById("email");

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  fetch("http://127.0.0.1:3000/signin", {
    method: "POST",
    body: JSON.stringify({
      email: formProps.email,
      password: formProps.password,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
}
var newdiv = false;
var token;
const form = document
  .getElementById("formSign")
  .addEventListener("submit", handleSubmit);
function data(json) {
  if (json.code !== "Success" && !newdiv) {
    newdiv = true;
    var tag = document.createElement("p");
    tag.classList.add("error");
    var text = document.createTextNode("*Email or Password isnot correct");
    tag.appendChild(text);
    var element = document.getElementById("test");
    element.appendChild(tag);
  } else if (json.code === "Success") {
    window.location.href = "http://127.0.0.1:3000/";
  }
}
//*************************************** */
