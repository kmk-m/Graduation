fetch("https://sleepy-bastion-99766.herokuapp.com/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
fetch("https://sleepy-bastion-99766.herokuapp.com/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
function data(json) {
  let tracks = json.data.tracks;
  tracks.forEach((x) => {
    let link = document.createElement("a");
    link.innerText = x.name;
    link.href =
      "https://sleepy-bastion-99766.herokuapp.com/Tracks/" + x.trackId;
    let parent = document.getElementById("myDropdown");
    parent.appendChild(link);
  });
  tracks.forEach((x) => {
    let link = document.createElement("a");
    link.innerText = x.name;
    link.href =
      "https://sleepy-bastion-99766.herokuapp.com/Tracks/" + x.trackId;
    let parent1 = document.getElementById("myDropdown1");
    parent1.appendChild(link);
  });
  var img = document.createElement("img");
  img.src = json.data.User.image;
  var element = document.getElementById("icons");
  element.appendChild(img);
  element.insertBefore(img, element.firstChild);
  var hacks = json.data.hackathons;
  for (let i = 0; i < hacks.length; i += 1) {
    var box = document.createElement("div");
    var time = new Date();
    var str = time.toLocaleString({
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const currdate = new Date(str);
    const date = new Date(hacks[i].date);
    var diff = date - currdate;
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24) - 1);
    var min = Math.ceil(diff / (1000 * 60) - diffDays * 60 - 120);
    box.classList.add("box");
    box.innerHTML =
      "<h3>Before Hackathon</h3><a href=#>" +
      hacks[i].name +
      " Round#" +
      hacks[i].round +
      "</a> <h4>" +
      "Days " +
      diffDays +
      "</h4>";
    var element = document.getElementById("boxes");
    element.appendChild(box);
  }
  for (let i = 0; i < json.data.videos.length; i += 1) {
    console.log(json.data.videos[i]);
    var video = document.createElement("div");
    video.classList.add("video");
    video.innerHTML =
      "<p>" +
      json.data.videos[i].comment +
      "  </p>" +
      "<video width=95% height=100% controls>  <source src=" +
      json.data.videos[i] +
      "#t=0.6" +
      " type=video/mp4></video>";
    var element = document.getElementById("all");
    element.appendChild(video);
  }
}

// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link rel="stylesheet" href="/css/dashboard.css" />
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
//   <title>Accept</title>

// </head>

// <body>

//   <div class="container">
//     <div class="nav1">
//       <div class="text">
//         <h1>Accept</h1>
//         <input id="search" type="text" class="search" placeholder="Search for anything..." />
//       </div>
//       <div class="icons" id="icons">
//         <img src="images/message1.png" />
//         <img src="images/notfication.png" />
//       </div>
//     </div>
//     <hr class="hr" />
//     <div class="nav2" id="nav2">
//       <!-- Drop1 -->
//       <div class="dropdown">
//         <button class="dropbtn">Rooms</button>
//         <div id="myDropdown" class="dropdown-content">

//         </div>
//       </div>

//       <a href="#" class="notdrp">Teach on Accept</a>
//       <a href="#" class="notdrp">Courses</a>
//       <a href="#" class="notdrp">Standing</a>
//       <a href="#" class="notdrp">Hackathons</a>

//       <div class="dropdown">
//         <button class="dropbtn dropbtn2">Tracks</button>
//         <div id="myDropdown1" class="dropdown-content">

//         </div>
//       </div>
//     </div>
//     <div class="all" id="all">
//       <div class="boxes" id="boxes">

//       </div>

//     </div>
//     <script src="/dashboard.js"></script>

// </body>

// </html>
