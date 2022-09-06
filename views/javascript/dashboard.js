fetch("http://127.0.0.1:3000/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
fetch("http://127.0.0.1:3000/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
function data(json) {
  console.log(json);
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
      "</p><video width=95% height=100% controls>  <source src=" +
      json.data.videos[i] +
      "#t=0.6" +
      " type=video/mp4></video>";
    var element = document.getElementById("all");
    element.appendChild(video);
  }
}
