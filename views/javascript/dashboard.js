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
  console.log(json);
  let name = json.data.User.firstName + " " + json.data.User.lastName;
  document.getElementById("namewel").innerHTML = `${json.data.User.firstName}`;
  const para = document.createElement("div");
  para.innerHTML = `<h5>${name}</h5> <p>${json.data.User.bio}</p>`;
  para.className = "ui";
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
  posts(json.data.posts, json.data.User.image);
  tracks(json.data.tracks);
  func2();
}
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  window.location.href = window.location.href;
});
let yes = false;
function posts(posts, img) {
  posts.forEach((x) => {
    let videoCenter = document.createElement("div");
    videoCenter.className = "videoCenter";
    videoCenter.setAttribute("id", x.id);
    let parent = document.querySelector(".videos");
    parent.appendChild(videoCenter);
    let disc = document.createElement("p");
    disc.className = "disc";
    disc.innerHTML = `${x.content}`;
    videoCenter.appendChild(disc);
    let video = document.createElement("video");
    video.className = "video";
    video.src = `${x.link}`;
    video.controls = true;
    videoCenter.appendChild(video);
    let support = document.createElement("div");
    support.className = "support";
    videoCenter.appendChild(support);
    let a1 = document.createElement("div");
    support.appendChild(a1);
    console.log(x);
    let likes = JSON.stringify(x.like).toString();
    let like = likes.slice(8, likes.indexOf("love") - 2);
    let love = likes.slice(likes.indexOf("love") + 6, likes.indexOf("sad") - 2);
    let sad = likes.slice(likes.indexOf("sad") + 5, likes.indexOf("angry") - 2);
    let angry = likes.slice(likes.indexOf("angry") + 7, likes.indexOf("}"));
    let imgs = [];
    let li = like.like;
    console.log(li);
    if (like > 0) {
      let like1 = document.createElement("img");
      like1.className = "imo";
      a1.appendChild(like1);
      like1.src = "/images/likeblue.png";
      imgs.push(like1);
    }
    if (love > 0) {
      let love1 = document.createElement("img");
      love1.className = "imo";
      a1.appendChild(love1);
      love1.src = "/images/love.png";
      imgs.push(love1);
    }
    if (sad > 0) {
      let sad1 = document.createElement("img");
      sad1.className = "imo";
      a1.appendChild(sad1);
      sad1.src = "/images/sad.png";
      imgs.push(sad1);
    }
    if (angry > 0) {
      let angry1 = document.createElement("img");
      angry1.className = "imo";
      angry1.src = "/images/angry.png";
      a1.appendChild(angry1);
      imgs.push(angry1);
    }
    if (imgs.length > 1) {
      for (let i = 1; i < imgs.length; i++) {
        imgs[i].className += " rec";
      }
    }
    let Likes = document.createElement("p");
    Likes.setAttribute("id", "like" + x.id);
    support.appendChild(Likes);

    if (parseInt(like) + parseInt(love) + parseInt(sad) + parseInt(angry) > 0) {
      Likes.innerHTML = `${
        parseInt(like) + parseInt(love) + parseInt(sad) + parseInt(angry)
      } Users`;
    }
    let comment = document.createElement("div");
    comment.className = "comment";
    support.appendChild(comment);
    if (x.postComments.length) {
      let a2 = document.createElement("p");
      a2.innerHTML = `${x.postComments.length} Comments`;
      comment.appendChild(a2);
    }
    if (
      parseInt(like) + parseInt(love) + parseInt(sad) + parseInt(angry) > 0 ||
      x.postComments.length > 0
    ) {
      let hr = document.createElement("hr");
      videoCenter.appendChild(hr);
    }
    let postBottom = document.createElement("div");
    postBottom.className = "post-bottom";
    let contentt2 = document.createElement("div");
    contentt2.innerHTML = `
    <div class="emoji">
          <div class="hello emoClick">
            <img class="emoClick" src="/images/likeg.gif" id="likee.${x.id}" alt="">
            <p> Like</p>
          </div>
          <div class="hello emoClick">
            <img class="emoClick" src="/images/love2.gif" id="lovee.${x.id}" alt="">
            <p> Love</p>
          </div>
          <div class="hello emoClick">
            <img class="emoClick" src="/images/sad.gif" id="sade.${x.id}" alt="">
            <p> Sad</p>
          </div>
          <div class="hello emoClick">
            <img class="emoClick" src="/images/angry.gif" id="angrye.${x.id}" alt="">
            <p>Angry</p>
          </div>
        </div>
    `;
    contentt2.className = "contentt2";
    videoCenter.appendChild(postBottom);
    postBottom.appendChild(contentt2);
    for (let i = 0; i < 3; i++) {
      let action = document.createElement("action");
      action.className = "action";
      let span = "Like";
      let cs = "far fa-thumbs-up";
      action.setAttribute("id", `click.${x.id}`);

      if (i == 0) {
        action.className = "action action1";
      }
      if (i == 1) {
        span = "Comment";
        cs = "far fa-comment";
        action.className = "action action2";
      }
      if (i == 2) {
        span = "Share";
        cs = "fa fa-share";
        
      }
      /*  share javascript 
      const shareBtn = document.querySelector('.share-btn');
      const shareOptions = document.querySelector('.share-options');
      shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
      })*/
      postBottom.appendChild(action);
      let vote = document.createElement("i");
      vote.className = `${cs}`;
      action.appendChild(vote);
      let a3 = document.createElement("span");
      a3.innerHTML = `${span}`;
      action.appendChild(a3);
      console.log(action);
    }
    let comms = document.createElement("div");
    comms.className = "comms";
    videoCenter.appendChild(comms);
    let ph = document.createElement("div");
    ph.className = "ph";
    comms.appendChild(ph);
    ph.innerHTML = `
    <img src=${img}>
    `;
    let inputCom = document.createElement("div");
    inputCom.innerHTML = `
    <textarea  id = text.${x.id}
    class=addcoment placeholder="Type Comment"></textarea>
  <div class=com>
  <img  src="/images/image.png" width="15" height="15">
  </div>
    `;
    inputCom.className = "vis";
    comms.setAttribute("id", "comm" + x.id);
    comms.appendChild(inputCom);
    videoCenter.appendChild(comms);
  });
  let a = document.querySelectorAll(".action2");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", (e) => {
      let id = e.target.id;
      id = id.split(".")[1];
      if (!id) id = e.target.parentNode.id;
      id = id.split(".")[1];

      // console.log(document.getElementById(id));
      document.getElementById("comm" + id).className = "comms";
    });
  }
  let commets = document.querySelectorAll(".action2");
  commets.forEach((aa) => {
    aa.addEventListener("click", (e) => {
      let id = e.target.id;
      id = id.split(".")[1];
      if (!id) id = e.target.parentNode.id;
      id = id.split(".")[1];
      console.log("jkfj", id);
      console.log(document.getElementById("comm" + id));
      document.getElementById("comm" + id).className = "vos";
    });
  });

  let arr = document.querySelectorAll(".addcoment");
  arr.forEach((xx) => {
    xx.addEventListener("input", (e) => {
      console.log(document.getElementById(e.target.id).scrollHeight);
      document.getElementById(e.target.id).style.height =
        document.getElementById(e.target.id).scrollHeight + "px";
    });
  });
  let arr2 = document.querySelectorAll(".emoClick");
  arr2.forEach((xx) => {
    xx.addEventListener("click", (e) => {
      let id = e.target.id;
      if (!id) id = e.target.parentNode.id;
      let addemo = id.split(".")[0];
      id = id.split(".")[1];
      let x = document.getElementById("like" + id);
      let y = x;
      console.log("y", y);
      x = x.innerHTML;
      x = x.slice(0, x.indexOf(" "));
      //  x = x.slice(indexOf("l"));
      x = parseInt(x);
      console.log(x);
      for (let ii = 0; ii < posts.length; ii++) {
        let vs = false;
        if (posts[ii].id === id) {
          let yy = document.getElementById("click." + id);
          console.log(yy);
          if (addemo == "likee") {
            yy.innerHTML = `
            <img class="ht" src="/images/likeg.gif" id="like" alt="">
            <span class ="col1"> Like</span>            `;
          } else if (addemo == "lovee") {
            yy.innerHTML = `
            <img class ="ht" src="/images/love2.gif" id="love" alt="">
            <span class="col2"> Love</span>  `;
          } else if (addemo == "sade") {
            yy.innerHTML = `
            <img class="ht" src="/images/sad.gif" id="sad" alt="">
            <span class ="col3"> Sad</span>  `;
          } else if (addemo == "angrye") {
            yy.innerHTML = `
            <img class="ht" src="/images/angry.gif" id="angry" alt="">
            <span class= "col4"> Angry</span>  `;
          }
          yy.className = "action2";
          if (posts[ii].postFriends.length !== 0) {
            if (x == 0 || x == 1) y.innerHTML = "";
            else {
              posts[ii].postFriends.pop();
              x -= 1;
              y.innerHTML = `${x} Users`;
            }
          } else {
            if (isNaN(x)) x = 0;
            x += 1;
            y.innerHTML = `${x} Users`;
            posts[ii].postFriends.push(1);
          }
        }
      }
    });
  });
  let xy = document.getElementById("text.06a85b72-4266-11ed-ab26-0045e21c18f1");
  console.log("kkkkkkkkkkkkkkkkkk");
  console.log(xy);

  // arr = document.querySelectorAll(".addcoment");
  // arr.forEach((xx) => {
  //   console.log("hrllo");

  //   console.log("e.target.id");
  //   console.log(xx);
  //   $(`#text.06a85b72-4266-11ed-ab26-0045e21c18f1`).emojioneArea({
  //     pickerPosition: "bottom",
  //   });
  // });
}
function func2() {
  console.log(
    "dfksl;kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
  );
  $("textarea").emojioneArea({
    pickerPosition: "bottom",
  });
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
let commentLight = "#949494";
let commentDark = "#ffffff";
let fontLight = "#ffffff";
let fontDark = "#000000";
let hackLight = "#f7f8fa";
let hackDark = "#000000";
let fontLight2 = "#000000";
let fontDark2 = "#ffffff";
let hack2Light = "#ffffff";
let hack2Dark = "#323232";
let postLight = "#000000cc";
let postDark = "#ffffff";
let them = localStorage.getItem("theme");
if (them == "dark") {
  document.querySelector(".ball").className = "ball2";
  let colors = document.querySelector(":root");
  colors.style.setProperty("--userLight", userBlack);
  colors.style.setProperty("--aLight", ablack);
  colors.style.setProperty("--rateLight", rateBlack);
  colors.style.setProperty("--backgroundLight", backgroundDark);
  colors.style.setProperty("--nameLight", nameDark);
  colors.style.setProperty("--fontLight", fontDark);
  colors.style.setProperty("--hackLight", hackDark);
  colors.style.setProperty("--hack2Light", hack2Dark);
  colors.style.setProperty("--commentLight", commentDark);
  colors.style.setProperty("--fontLight2", fontDark2);
  colors.style.setProperty("--postLight", postDark);
  //window.location.href = window.location.href;
} else {
  document.querySelector(".ball2").className = "ball";
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
  colors.style.setProperty("--commentDark", commentLight);
  colors.style.setProperty("--postDark", postLight);
}
function tracks(tracks) {
  const drop = document.querySelector(".dropdown-content");
  console.log(drop);
  tracks.forEach((x) => {
    const parag = document.createElement("a");
    parag.href = `http://127.0.0.1:3000/Tracks/${x.trackId}`;
    parag.innerHTML = `${x.name}`;
    console.log(parag);
    drop.appendChild(parag);
  });
}

