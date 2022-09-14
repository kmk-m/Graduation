let id = "2e0cd456-33de-11ed-a1c3-0a33a65a227b";
fetch("http://127.0.0.1:3000/Tracks/data/" + id, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
function data(json) {
  /* return name */
  console.log(json.data.User.firstName + " " + json.data.User.lastName);
  let name = json.data.User.firstName + " " + json.data.User.lastName;
  const para = document.createElement("div");
  para.innerHTML = "<h5>" + name + "</h5>";
  let element = document.getElementById("practice");
  element.appendChild(para);
  para.classList.add("op");
  /* return image */
  let img = document.createElement("img");
  img.src = json.data.User.image;
  let elementimg = document.getElementById("practice");
  elementimg.appendChild(img);
  img.classList.add("image1");
  /* return text button */
  console.log(json.data.User.cretificate);
  let butt = json.data.User.cretificate;
  const para2 = document.createElement("div");
  if (butt == null) {
    para2.innerHTML = "<h3>Enroll</h3>";
  } else {
    para.innerHTML = "<h5>" + butt + "</h5>";
  }
  let elementbutton = document.getElementById("buton");
  elementbutton.appendChild(para2);
  para2.classList.add("textbutton");
}
