fetch("http://127.0.0.1:3000/interests/data/", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));

function data(json) {
  let arr = json.data;
  let container = document.getElementById("container");
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].name;
    let div = document.createElement("div");
    div.innerHTML = `<h5>${name}</h5>`;
    container.appendChild(div);
    div.classList.add("s");

    div.addEventListener('click', () => {
      div.classList.toggle("clicked-div");;
    });
  }

}