var newdiv = "d";
var tag;
var element;
const form = document
  .getElementById("btn")
  .addEventListener("click", handleSubmit);
async function handleSubmit(e) {
  e.preventDefault();

  document.getElementById("butt").innerHTML = `
  <i class="fa fa-circle-o-notch fa-spin" style="margin-right:15px"></i>Creating
  `;
  document.getElementById("butt").style = `margin-top: 20px;
  width: 100%;
  background-color: var(--main-color);
  color: white;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  opacity:0.5;
  text-align: center;
  `;

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  await fetch("http://127.0.0.1:3000/signup", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmpassword: confirmPassword,
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
  if (json.code !== "Success") {
    if (newdiv != json.message) {
      newdiv = json.message;
      tag = document.createElement("p");
      tag.classList.add("error");
      console.log("2");

      var text = document.createTextNode(json.message);
      tag.appendChild(text);
      element = document.getElementById("formSign");
      document.getElementById("butt").innerHTML = `
      <button id="btn">Create Account</button>
      `;
      document.getElementById("butt").style = "";

      element.insertBefore(tag, document.getElementById("butt"));

      newdiv = json.message;
    }
  } else {
    console.log("YU");
    window.location.href = "http://127.0.0.1:3000/interests";
  }
}
