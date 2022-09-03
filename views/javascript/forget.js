async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  fetch("http://127.0.0.1:3000/signin/forgetpassword", {
    method: "POST",
    body: JSON.stringify({
      email: formProps.email,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
}
const form = document
  .getElementById("recover")
  .addEventListener("submit", handleSubmit);

function hide() {
  let children = document.querySelector(".pow");
  children.style.display = "none";
  children = document.querySelector(".pow2");
  children.style.display = "none";
}
var newdiv = false;
function data(json) {
  if (json.code !== "Success" && !newdiv) {
    newdiv = true;
    var tag = document.createElement("p");
    tag.classList.add("error");
    var text = document.createTextNode("*User not Found");
    tag.appendChild(text);
    var element = document.getElementById("test");
    element.appendChild(tag);
  } else if (json.code === "Success") {
    hide();
    document.querySelector(".pp").innerHTML = "Thank You";
    var tag = document.createElement("p");
    var text = document.createTextNode("Code is sent to Your email");
    tag.appendChild(text);
    var element = document.getElementById("test");
    element.appendChild(tag);
  }
}
