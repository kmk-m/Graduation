var url;
async function handleSubmit(e) {
  e.preventDefault();
  url = window.location.href;
  url = url.slice(url.lastIndexOf("/:") + 2);
  console.log(url);
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  await fetch("http://127.0.0.1:3000/signin/changepassword/:" + url, {
    method: "POST",
    body: JSON.stringify({
      password: formProps.password,
      confirmpassword: formProps.conpassword,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
}
var newdiv = false;
const form = document
  .getElementById("recover")
  .addEventListener("submit", handleSubmit);
function hide() {
  let children = document.querySelectorAll(".pow");
  children[0].style.display = "none";
  children[1].style.display = "none";
  children[2].style.display = "none";
}
var newdiv = "d";
var tag;
var element;
function data(json) {
  if (newdiv !== "d" && newdiv !== json.message) {
    var te = document.querySelector(".error");
    element.removeChild(te);
  }
  if (json.code !== "Success" && newdiv !== json.message) {
    console.log(1);
    newdiv = json.message;
    tag = document.createElement("p");
    tag.classList.add("error");

    var text = document.createTextNode(json.message);
    tag.appendChild(text);
    element = document.getElementById("test");

    element.appendChild(tag);
    newdiv = json.message;
  }
  if (json.code === "Success") {
    hide();
    document.querySelector(".pp").innerHTML = "Successfully";
    tag = document.createElement("p");
    var text = document.createTextNode("Change password Successfully");
    tag.appendChild(text);
    element = document.getElementById("test");
    element.appendChild(tag);

    tag.appendChild(text);
  }
}
