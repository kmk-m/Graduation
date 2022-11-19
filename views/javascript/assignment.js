let id = window.location.href;
id = id.slice(id.indexOf("Tracks") + 7, id.lastIndexOf("/"));
fetch(
  `https://sleepy-bastion-99766.herokuapp.com/Tracks/${id}/Assignments/data`,
  {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }
)
  .then((response) => response.json())
  .then((json) => data(json));
function user(json) {
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
  img.alt = "profile";
  img.title = "profile";
  img.setAttribute("id", "image1");
  /* return text button */
  let butt = json.data.User.cretificate;
  const para2 = document.createElement("div");
  if (butt == null) {
    para2.innerHTML = "<h3>Enroll</h3>";
  } else {
    para.innerHTML = "<h5>" + butt + "</h5>";
  }
  let but = document.getElementById("image1");

  but.addEventListener("click", gotoprofile);

  function gotoprofile() {
    window.location.href = "https:127.0.0.1:3000/profile";
  }
}
function box(json) {
  let assignments = json.data.assignments;
  assignments.forEach((x) => {
    let time = x.updatedAt;
    time = time.slice(time.indexOf("T") + 1, time.lastIndexOf(":"));
    let date = x.updatedAt.slice(0, x.updatedAt.indexOf("T"));
    date = date.split("-");
    date.reverse();
    if (
      parseInt(time.split(":")[0]) > 12 ||
      (parseInt(time.split(":")[1]) > 0 && parseInt(time.split(":")[0]) == 12)
    ) {
      time =
        24 - parseInt(time.split(":")[0]) + ":" + time.split(":")[1] + "PM";
    } else {
      time = time.split(":")[0] + ":" + time.split(":")[1] + "AM";
    }
    let paren;
    let lastDate = date[0] + ":" + date[1] + ":" + date[2];

    let box = document.createElement("button");
    box.className = "list-item";
    box.draggable = "true";
    box.setAttribute("id", x.id);
    box.innerHTML = `${x.Assignment.name}`;
    date = document.createElement("div");
    date.classList.add("date");
    type = document.createElement("div");
    type.classList.add("type");
    p1 = document.createElement("p");
    p1.innerHTML = `${time}`;
    p2 = document.createElement("p");
    p2.innerHTML = `${lastDate}`;

    date.appendChild(p1);
    date.appendChild(p2);
    box.appendChild(date);
    box.appendChild(type);
    p1.setAttribute("id", x.id);
    p2.setAttribute("id", x.id);
    if (x.type === "New" || x.type === "Rejected") {
      paren = document.getElementById("todo");
      p3 = document.createElement("p");
      img = document.createElement("img");
      img.alt = "logo";

      if (x.type === "New") {
        p3.innerHTML = `New Task`;
        img.src = "/images/bookmark.png";
      } else if (x.type === "Rejected") {
        p3.innerHTML = `Rejected`;
        img.src = "/images/closed.png";
      } else {
        p3.innerHTML = `Changes`;
        img.src = "/images/exchange.png";
      }
      type.appendChild(img);
      p3.setAttribute("id", x.id);
      img.setAttribute("id", x.id);
      type.appendChild(p3);

      box.addEventListener("click", openForm);
    } else if (x.type === "Pending") {
      paren = document.getElementById("pending");
    } else {
      paren = document.getElementById("done");
    }
    paren.appendChild(box);
  });
}
document.getElementById("close").addEventListener("click", closeForm);
let all;
function data(json) {
  box(json);
  user(json);
  drag();
  all = json.data.assignments;
  /* return name */
}
/*  Derag N drop */
function drag() {
  const list_items = document.querySelectorAll(".list-item");
  const lists = document.querySelectorAll(".list");

  let draggedItem = null;

  for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];
    if (i === 1) {
      item.addEventListener("dragstart", function () {
        draggedItem = item;
        setTimeout(function () {
          item.style.display = "none";
        }, 0);
      });
    }
    if (i === 1) {
      item.addEventListener("dragend", function () {
        setTimeout(function () {
          draggedItem.style.display = "block";
          draggedItem = null;
        }, 0);
      });
    }
    for (let j = 0; j < lists.length; j++) {
      const list = lists[j];

      list.addEventListener("dragover", function (e) {
        e.preventDefault();
      });

      list.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      });

      list.addEventListener("dragleave", function (e) {
        this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      });

      list.addEventListener("drop", function (e) {
        if (this.id === "todo") {
          this.append(draggedItem);
          this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          console.log(list.id);
          fetch(
            `https://sleepy-bastion-99766.herokuapp.com/Assignments/changes` +
              item.id,
            {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
            .then((response) => response.json())
            .then((json) => reload());
        }
      });
    }
  }
}
function reload() {
  window.location.href = window.location.href;
}
/*   pop-up */
function data2(json) {
  let name = document.createElement("h1");
  name.innerHTML = `${json.Assignment.name}`;
  document.querySelector(".namee").appendChild(name);
  console.log(json.Assignment.name);
  let details = json.Assignment.details.split(",");
  if (json.type !== "New") {
    document.querySelector(".sub").innerHTML = `Update`;
  }
  details.forEach((x) => {
    let detail = document.createElement("p");
    detail.innerHTML = `${x}`;
    document.querySelector(".details").appendChild(detail);
  });
  document.getElementById("solution").value = json.solution;
}
let assid;
function fetc(id) {
  assid = id;
  document.getElementById("myform").style.visibility = "visible";
  let op = document.getElementById("op");
  fetch(`https://sleepy-bastion-99766.herokuapp.com/Assignments/` + id, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data2(json.data.assignments));
}
let vis = false;

function data3(json) {
  console.log(json);
  if (
    json.code !== "Success" &&
    !document.getElementById("error").lastElementChild
  ) {
    let error = document.createElement("p");
    error.classList = "er";
    error.innerHTML = "*Error it isnot github link";
    vis = true;
    document.getElementById("error").appendChild(error);
  } else if (json.code === "Success") {
    if (vis === true) {
      console.log("yes");
      document.querySelector(".er").innerHTML = "";
    }
    let a = document.createElement("a");
    console.log(json.data);
    a.href = json.data;
    a.classList.add("link");
    console.log(a);
    a.innerHTML = `${json.data}`;
    document.getElementById("ok").appendChild(a);
    vis2 = true;
    let but = document.createElement("button");
    but.innerHTML = `Update`;
    but.classList = "update";
    document.getElementById("myform").appendChild(but);
    but.addEventListener("click", () => {
      console.log("here");
      a.innerHTML = "";
      error.innerHTML = "";
      vis = false;
      func();
      //  document.querySelector(".sub").addEventListener("click", func(e) )
    });
    //    .insertBefore(a, document.querySelector(".solution").firstChild);
  }
}
let vis2 = false;
function func() {
  fetch(`https://sleepy-bastion-99766.herokuapp.com/Assignments/` + assid, {
    method: "POST",
    body: JSON.stringify({
      solution: document.getElementById("solution").value,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data3(json));
}
function data4() {}
document.querySelector(".sub").addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`https://sleepy-bastion-99766.herokuapp.com/Assignments/` + assid, {
    method: "POST",
    body: JSON.stringify({
      solution: document.getElementById("solution").value,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data3(json));
});

function openForm(e) {
  // if(!e.target.id){

  // }
  fetc(e.target.id);
  let op = document.getElementById("op");
  op.style.visibility = "hidden";

  document.getElementById("myform").style.visibility = "visible";
}

function closeForm() {
  let op = document.getElementById("op");
  op.style.visibility = "hidden";
  let child = document.querySelector(".details").lastElementChild;
  while (child) {
    document.querySelector(".details").removeChild(child);
    child = document.querySelector(".details").lastElementChild;
  }
  child = document.querySelector(".namee").lastElementChild;
  while (child) {
    document.querySelector(".namee").removeChild(child);
    child = document.querySelector(".namee").lastElementChild;
  }
  document.querySelector(".sub").innerHTML = "Submit";
  if (vis2) {
    document
      .getElementById("ok")
      .removeChild(document.getElementById("ok").lastElementChild);
    window.location.href = window.location.href;
  }
  if (vis) {
    document
      .getElementById("error")
      .removeChild(document.getElementById("error").lastElementChild);
  }
  vis = false;
  vis2 = false;

  document.getElementById("myform").style.visibility = "hidden";
}
