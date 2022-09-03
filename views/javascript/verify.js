var url;
async function handleSubmit(e) {
  e.preventDefault();
  url = window.location.href;
  url = url.slice(url.lastIndexOf("/:") + 2);
  console.log(url);
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  await fetch("http://127.0.0.1:3000/signin/verifycode/:" + url, {
    method: "POST",
    body: JSON.stringify({
      code: formProps.code,
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
  let children = document.querySelector(".pow");
  children.style.display = "none";
  children = document.querySelector(".pow2");
  children.style.display = "none";
}
function data(json) {
  console.log(json);
  if (json.code !== "Success") {
    newdiv = true;
    var tag = document.createElement("p");
    tag.classList.add("error");
    var text = document.createTextNode("*code is incorrect");
    tag.appendChild(text);
    var element = document.getElementById("test");
    element.appendChild(tag);
  } else {
    window.location.href =
      "http://127.0.0.1:3000/signin/changepassword/:" + url;
  }
}
