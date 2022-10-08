const socket = io();

fetch("http://127.0.0.1:3000/chat/users/", {
  method: "get",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json.data));
function data(json) {
  user(json.User);
  friends(json.Friends);
}

function user(data) {
  let logo = document.getElementById("logo");
  let img = document.createElement("img");
  img.src = data.image;
  img.alt = "userImage";
  logo.appendChild(img);

  //  ---------------------
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  h4.innerHTML = `${data.firstName + " " + data.lastName}`;
  p.innerHTML = `${data.bio}`;

  let myself = document.createElement("div");
  myself.classList.add("myself");
  logo.appendChild(myself);
  myself.appendChild(h4);
  myself.appendChild(p);
}
function friends(data) {
  data.forEach((x) => {
    let user = document.createElement("div");
    user.classList.add("user");
    console.log(x);
    user.setAttribute("id", `${x.id}`);
    let img = document.createElement("img");
    img.src = x.user.image;
    img.alt = "userImage";
    let myself2 = document.createElement("div");
    myself2.classList.add("myself2");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    h4.innerHTML = `${x.user.firstName + " " + x.user.lastName}`;
    p.innerHTML = `${x.allMessages[0].contant}`;
    let time = document.createElement("p");
    time.classList.add("time");
    let now = new Date();
    let date = new Date(x.allMessages[0].createdAt);
    console.log(now.getTime(), date.getTime());
    let Difference_In_Time =
      now.getTime() - (date.getTime() - 2 * 1000 * 60 * 60);
    let Difference_In_Hours = Difference_In_Time / (1000 * 60 * 60);
    let Difference_In_Min = Difference_In_Time / (1000 * 60);
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let Difference_In_Sec = Difference_In_Time / 1000;

    if (parseInt(Difference_In_Days) !== 0) {
      time.innerHTML = `${parseInt(Difference_In_Days)}d`;
    } else if (parseInt(Difference_In_Hours) !== 0) {
      time.innerHTML = `${parseInt(Difference_In_Hours)}h`;
    } else if (parseInt(Difference_In_Min) !== 0) {
      time.innerHTML = `${parseInt(Difference_In_Min)}m`;
    } else {
      time.innerHTML = `${parseInt(Difference_In_Sec)}s`;
    }
    // // time.innerHTML = `${hours}`;
    // -----------------------------
    let contacts = document.getElementById("contacts");
    contacts.appendChild(user);
    user.appendChild(img);
    user.appendChild(myself2);
    myself2.appendChild(h4);
    myself2.appendChild(p);
    user.appendChild(time);
  });
  let boxes = document.querySelectorAll(".user");
  boxes.forEach((x) => {
    x.addEventListener("click", (e) => {
      document.querySelector(".firstShow").className = "hide";
      document.querySelector(".chatContainer").className = "chatContainer";
      console.log(e.target.attribute);
      let dev = e.target.parentNode;

      if (
        e.target.className !== "info" &&
        e.target.parentNode.className !== "user"
      )
        dev = e.target.parentNode.parentNode;
      else dev = e.target;

      if (dev.className === "user") dev = dev.firstChild;

      if (dev.className === "myself2" || dev.className === "time")
        console.log(dev);

      if (dev.className !== "user") dev = dev.parentNode;

      let img = dev.children[0];
      console.log(dev);
      let name = dev.children[1].children[0];
      let info = document.querySelector(".info");
      info.setAttribute("id", `${dev.id}`);

      console.log(info.children[1].children[0]);
      info.children[0].src = `
       ${img.src}
      `;
      info.children[1].children[0].innerHTML = `
       ${name.innerHTML}
       `;
      //   console.log(dev.children[1]);
    });
  });
  document.getElementById("input").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      sendMessage(e.target.value);
    }
  });
  function sendMessage(message) {
    let info = document.querySelector(".info");
    console.log(info);
    let msg = {
      user: info.id,
      message: message.trim(),
    };
    appendMessage(msg, "out");

    socket.emit(`message`, msg);
  }
}

function appendMessage(msg, type) {
  let maindev = document.createElement("div");
  let className = type;
  maindev.classList.add(className, "message");
  let markup = `
  <h4>
  ${msg.message}
  </h4>
  `;
  maindev.innerHTML = markup;
  document.getElementById("messages").appendChild(maindev);
}

socket.on("message", (msg) => {
  appendMessage(msg, "in");
});
