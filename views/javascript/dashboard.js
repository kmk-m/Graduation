// if (document.referrer !== "http://127.0.0.1:3000") {
//   window.location.href = "http://127.0.0.1:3000";
// }
let access_token = document.cookie;
console.log(access_token);
access_token.slice(access_token.indexOf("="));

if (document.URL.includes("auth")) {
  console.log("yes");
  window.location.href = "http://127.0.0.1:3000/go/" + access_token;
}
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

function hackathons(allHackathons) {
  console.log(allHackathons);
  for (let hack of allHackathons) {
    let hac = document.createElement("div");
    hac.className = "hac";
    let haca = document.querySelector(".allHackathons");
    haca.appendChild(hac);
    let countDownDate = new Date(hack.date).getTime();
    let counter = setInterval(() => {
      // Get Date Now
      let dateNow = new Date().getTime();
      // Find The Date Difference Between Now And Countdown Date
      let dateDiff = countDownDate - dateNow;
      // Get Time Units
      let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
      let str = " Days";

      if (days >= 2) {
        hac.innerHTML = `
        <h5>${hack.name} Round #${hack.round}</h5>
        <p><span class="days">${days} days</span><span class="day"></span></p>
        `;
      } else {
        hac.innerHTML = `
        <h5>${hack.name} Round #${hack.round}</h5>

                <p>
                <span class="hours">${
                  hours < 10 ? "0" + hours + ":" : hours + ":"
                }</span> 
                <span class="minutes">${
                  minutes < 10 ? "0" + minutes + ":" : minutes + ":"
                }</span>
                <span class="seconds">${
                  seconds < 10 ? "0" + seconds + ":" : seconds
                }</span> 
                </p> `;
      }
      if (dateDiff < 0) {
        clearInterval(counter);
      }
    }, 1000);
  }
}

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
  img.alt = "profile";
  img.title = "profile";
  img.setAttribute("id", "image1");
  console.log(img);

  hackathons(json.data.hackathons);
}

/* name of hack 
function data(json) {
  console.log(json.data.hackathons.name );
  let namehac = json.data.hackathons.name ;
  const parahac = document.createElement("div");
  para.innerHTML = "<h5>" + namehac + "</h5>";
  let elementhac = document.getElementById("hac");
  elementhac.appendChild(parahac);
  parahac.classList.add("namehack");
  
}
*/
/* Hakthon countdown */

/* countdown */
// let countDownDate2 = new Date("date").getTime();
// let counter2 = setInterval(() => {
//   // Get Date Now
//   let dateNow2 = new Date().getTime();
//   // Find The Date Difference Between Now And Countdown Date
//   let dateDiff2 = countDownDate2 - dateNow2;
//   // Get Time Units
//   let days2 = Math.floor(dateDiff2 / (1000 * 60 * 60 * 24));
//   let hours2 = Math.floor(
//     (dateDiff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   let minutes2 = Math.floor((dateDiff2 % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds2 = Math.floor((dateDiff2 % (1000 * 60)) / 1000);
//   let str2 = "  Days";
//   if (days2 > 0) {
//     document.querySelector(".days2").innerHTML =
//       days2 < 10 ? `0${days2}` : days2;
//     document.querySelector(".day2").innerHTML = str2;
//   } else {
//     document.querySelector(".hours2").innerHTML =
//       hours2 < 10 ? `0${hours2} :` : `${hours2} :`;
//     document.querySelector(".minutes2").innerHTML =
//       minutes2 < 10 ? `0${minutes2} :` : `${minutes2} :`;
//     document.querySelector(".seconds2").innerHTML =
//       seconds2 < 10 ? `0${seconds2}` : seconds2;
//   }
//   if (dateDiff2 < 0) {
//     clearInterval(counter2);
//   }
// }, 1000);
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  window.location.href = window.location.href;
});

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

let fontLight = "#ffffff";
let fontDark = "#000000";
let hackLight = "#f7f8fa";
let hackDark = "#000000";
let fontLight2 = "#000000";
let fontDark2 = "#ffffff";
let hack2Light = "#ffffff";
let hack2Dark = "#323232";
let them = localStorage.getItem("theme");
if (them == "dark") {
  let colors = document.querySelector(":root");
  colors.style.setProperty("--userLight", userBlack);
  colors.style.setProperty("--aLight", ablack);
  colors.style.setProperty("--rateLight", rateBlack);
  colors.style.setProperty("--backgroundLight", backgroundDark);
  colors.style.setProperty("--nameLight", nameDark);
  colors.style.setProperty("--fontLight", fontDark);
  colors.style.setProperty("--hackLight", hackDark);
  colors.style.setProperty("--hack2Light", hack2Dark);

  colors.style.setProperty("--fontLight2", fontDark2);
  //window.location.href = window.location.href;
} else {
  colors.style.setProperty("--userBlack", userLight);
  colors.style.setProperty("--ablack", aLight);
  colors.style.setProperty("--rateBlack", rateBlack);
  colors.style.setProperty("--backgroundDark", backgroundLight);
  colors.style.setProperty("--nameBlack", nameLight);
  colors.style.setProperty("--fontBlack", fontLight);
  colors.style.setProperty("--hackBlack", hackLight);
  colors.style.setProperty("--fontBlack2", fontLight2);
  colors.style.setProperty("--hack2Black2", hack2Light2);
  // window.location.href = window.location.href;
}
