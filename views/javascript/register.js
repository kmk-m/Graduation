async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  fetch("http://127.0.0.1:3000/signup", {
    method: "POST",
    body: JSON.stringify({
      firstName: formProps.firstname,
      lastName: formProps.lastname,
      email: formProps.email,
      password: formProps.password,
      confirmpassword: formProps.confirmpassword,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
}
var newdiv = "d";
var tag;
var element;
const form = document
  .getElementById("reg")
  .addEventListener("submit", handleSubmit);
function data(json) {
  if (newdiv !== "d" && newdiv !== json.message) {
    var te = document.querySelector(".error");
    element.removeChild(te);
  }
  if (json.code !== "Success" && newdiv !== json.message) {
    newdiv = json.message;
    tag = document.createElement("p");
    tag.classList.add("error");

    var text = document.createTextNode(json.message);
    tag.appendChild(text);
    element = document.getElementById("test");

    element.appendChild(tag);
    newdiv = json.message;
  } else if (json.code === "Success") {
    window.location.href = "dashboard.html";
  }
}
