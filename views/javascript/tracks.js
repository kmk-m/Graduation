let id = window.location.href;
id = id.slice(id.lastIndexOf("/") + 1);
let ass = document.getElementById("ass");
console.log(ass);
ass.href = `http://127.0.0.1:3000/Tracks/${id}/Assignments`;
console.log(id);
fetch(`http://127.0.0.1:3000/Tracks/data/` + id, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
function data(json) {
  /* return name */
  user(json);
  setTrackData(json.data.track);
  setCourses(json.data.TrackCourses);
  //console.log(json.data);
}
function user(json) {
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
  img.alt = "profile";
  img.title = "profile";
  img.setAttribute("id", "image1");
  console.log(img);
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
  let but = document.getElementById("image1");
  console.log("helllo ", but);

  but.addEventListener("click", gotoprofile);

  function gotoprofile() {
    window.location.href = "https:127.0.0.1:3000/profile";
  }
}
function setTrackData(track) {
  // console.log(track.image);
  document.getElementById("header").style.backgroundImage =
    "url(" + track.image + ")";
  document.getElementById("track_name").innerHTML = track.name;
  // introVideo
  document.getElementById("header").addEventListener("click", () => {
    window.location.href = "http:#";
  });
}
function setCourses(courses) {
  let gridContainer = document.getElementById("gridContainer");
  for (let index of courses) {
    let course = index;
    //GridElement
    let gridItemElement = document.createElement("div");
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.classList.add("lay");
    gridItemElement.appendChild(grid);
    gridItemElement.classList.add("grid-item");
    gridItemElement.id = index;

    if (course.show == 0) {
      console.log(course.show);
    } else {
      console.log(course.show);

      gridItemElement.classList.add("opp");
    }

    grid.style.backgroundImage = `url(${course.Course.image})`;

    //overlay

    // adding gridElement to gridContainer
    gridContainer.appendChild(gridItemElement);
    var overlayDiv = createOverlayDiv(course);
    gridItemElement.appendChild(overlayDiv);

    // adding childs to Parent
  }
}

function createOverlayDiv(course) {
  let par = document.querySelector(".grid-item");
  // childs
  let det = document.createElement("div");
  det.classList.add("det");
  console.log(par);
  let courseNameElement = document.createElement("p");
  courseNameElement.innerHTML = course.Course.name;

  let courseInstructorElement = document.createElement("p");
  courseInstructorElement.innerHTML = course.Course.instructor;
  courseInstructorElement.classList.add("ins");
  let courseDescriptionElement = document.createElement("div");
  let x = ((course.Course.rating * 5) / 100 / 5) * 100;
  console.log(x * 2.7);
  courseDescriptionElement.innerHTML = `
  <div class = "flex"> 
  <sanp class = "sta">${
    ((course.Course.rating * 5) / 100).toString().length === 1
      ? ((course.Course.rating * 5) / 100).toString()[0] + ".0"
      : ((course.Course.rating * 5) / 100).toString()[0] +
        "." +
        ((course.Course.rating * 5) / 100).toString()[2]
  } </sanp>
  <div class="star-ratings">
  
  <div class="fill-ratings" style="width: ${x}%;">
    <span>★★★★★</span>
  </div>
  <div class="empty-ratings">
    <span>★★★★★</span>
  </div>
</div> 
</div>
`;

  // append to parent
  det.appendChild(courseNameElement);
  det.appendChild(courseInstructorElement);
  det.appendChild(courseDescriptionElement);
  par.appendChild(det);
  return det;
}
document.getElementById("header").addEventListener("click", () => {
  window.location.href = `http://127.0.0.1:3000/Tracks/${id}/introVideo`;
});
function playTrackVideo() {
  window.alert("play track video");

  // document.getElementById('trackVideoModal').style.display='block';

  // var video = document.getElementById('videoPlayer');
  // video.src = trackData.introVideo;
  // video.play();
}
let userLight = "#0e1b3e";
let userBlack = "#323232";
let aLight = "orange";
let ablack = "#ff1e56";
let rateLight = "#b44b00";
let rateBlack = "#a00d32";
let backgroundLight = "#f7f8fa";
let backgroundDark = "#000000";
let nameLight = "black";
let nameDark = "#f3f3f3";
let them = localStorage.getItem("theme");
if (them == "dark") {
  let colors = document.querySelector(":root");
  colors.style.setProperty("--userLight", userBlack);
  colors.style.setProperty("--aLight", ablack);
  colors.style.setProperty("--rateLight", rateBlack);
  colors.style.setProperty("--backgroundLight", backgroundDark);
  colors.style.setProperty("--nameLight", nameDark);
} else {
  colors.style.setProperty("--userBlack", userLight);
  colors.style.setProperty("--ablack", aLight);
  colors.style.setProperty("--rateBlack", rateBlack);
  colors.style.setProperty("--backgroundDark", backgroundLight);
  colors.style.setProperty("--nameBlack", nameLight);
}
console.log(
  getComputedStyle(document.querySelector(":root")).getPropertyValue(
    "--userLight"
  )
);
