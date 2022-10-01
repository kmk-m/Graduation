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
let countDownDate = new Date("nov 26, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  let str=" Days";
  let str2= " : ";
  let str3=" : ";
  if ( days>0 ){
      document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
      document.querySelector(".day").innerHTML = str ;
  }
  else {
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours} :` : `${hours} :` ;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes} :` :`${minutes} :` ;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  }
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
/* countdown */
let countDownDate2 = new Date("date").getTime();
let counter2 = setInterval(() => {
  // Get Date Now
  let dateNow2 = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff2 = countDownDate2 - dateNow2;
  // Get Time Units
  let days2 = Math.floor(dateDiff2 / (1000 * 60 * 60 * 24));
  let hours2 = Math.floor((dateDiff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes2 = Math.floor((dateDiff2 % (1000 * 60 * 60)) / (1000 * 60));
  let seconds2 = Math.floor((dateDiff2 % (1000 * 60)) / 1000);
  let str2="  Days";
  if ( days2>0 ){
      document.querySelector(".days2").innerHTML = days2 < 10 ? `0${days2}` : days2;
      document.querySelector(".day2").innerHTML = str2 ;
  }
  else {
  document.querySelector(".hours2").innerHTML = hours2 < 10 ? `0${hours2} :` : `${hours2} :` ;
  document.querySelector(".minutes2").innerHTML = minutes2 < 10 ? `0${minutes2} :` :`${minutes2} :` ;
  document.querySelector(".seconds2").innerHTML = seconds2 < 10 ? `0${seconds2}` : seconds2;
  }
  if (dateDiff2 < 0) {
    clearInterval(counter2);
  }
}, 1000);