fetch("http://127.0.0.1:3000/interests/data/", {
  method: "get",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
const interests = [];
function data(json) {
  let arr = json.data;
  let container = document.getElementById("container");
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].name;
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.className = "light";
    img.src = "/images/correct.png";
    img.alt = "image";
    div.innerHTML = `<h5>${name}</h5>`;
    div.appendChild(img);

    container.appendChild(div);
    div.classList.add("s");
    div.setAttribute("id", arr[i].id);
    div.addEventListener("click", () => {
      if (div.className === "s") {
        interests.push(div.id);
      } else {
        interests.pop(div.id);
      }
      console.log(interests);
      div.classList.toggle("clicked-div");
      img.classList.toggle("show");
    });
  }
}

document.getElementById("clickedd").addEventListener("click", () => {
  fetch("http://127.0.0.1:3000/interests/user", {
    method: "post",
    body: JSON.stringify({
      interests: interests,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
});
