const signin = document.getElementById("btn");
const email = document.getElementById("email");
let link = document.referrer;
document.getElementById("username").focus();
document.querySelector(".go").addEventListener("click", () => {
  window.location.href =
    "https://sleepy-bastion-99766.herokuapp.com/auth/google";
});
document.querySelector(".fb").addEventListener("click", () => {
  window.location.href =
    "https://sleepy-bastion-99766.herokuapp.com/auth/facebook";
});
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
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  fetch(`https://sleepy-bastion-99766.herokuapp.com/signin`, {
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
    console.log("sd");
    newdiv = true;
    var tag = document.createElement("p");
    tag.classList.add("error");
    var text = document.createTextNode("Email or Password isnot correct");
    tag.appendChild(text);
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("password").focus();

    var element = document.getElementById("formSign");
    console.log(element, tag);
    document.getElementById("butt").innerHTML = `
    <button id="btn">Create Account</button>
    `;
    document.getElementById("butt").style = "";
    element.insertBefore(tag, document.getElementById("forget"));
  } else if (json.code === "Success") {
    window.location.href =
      "https://sleepy-bastion-99766.herokuapp.com/homepage";
  }
}
//*************************************** */
