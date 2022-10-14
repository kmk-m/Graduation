let access_token = document.cookie;
access_token.slice(access_token.indexOf("="));

if (document.URL.includes("auth")) {
  window.location.href = "http://127.0.0.1:3000/go/" + access_token;
}
fetch("http://127.0.0.1:3000/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => json);
fetch("http://127.0.0.1:3000/dashboard", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));

function hackathons(allHackathons) {
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

  hackathons(json.data.hackathons);
  posts(json.data.posts, json.data.User.image, json.data.userposts);
  tracks(json.data.tracks);
}
const checkbox = document.getElementById("checkbox");
document.getElementById("drop").addEventListener("click", () => {
  document.getElementById("vsc").className = "vsc";
  document.getElementById("jj").className = "jj";
  document.getElementById("vsc").addEventListener("mouseleave", () => {
    //document.getElementById("vsc").classList.add("vsc");
    document.getElementById("vsc").className = "drop";
    document.getElementById("jj").className = "treat";
  });
  // document.getElementById("vsc").classList.remove("vsc");
  // document.getElementById("vsc").classList.remove("vsc");
});
checkbox.addEventListener("change", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  window.location.href = window.location.href;
});
let yes = false;
let blackList = [];
let iconList = [];
const map1 = new Map();
const ForbeddinReaction = new Map();
const canRemove = new Map();
const alreadyCliked = new Map();
const postLikes = new Map();
const postRec = new Map();
function posts(posts, img, userposts) {
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
    a1.className = "toflex";
    a1.setAttribute("id", `a1.${x.id}`);
    support.appendChild(a1);
    let likes = JSON.stringify(x.like).toString();
    let like = likes.slice(8, likes.indexOf("love") - 2);
    let love = likes.slice(likes.indexOf("love") + 6, likes.indexOf("sad") - 2);
    let sad = likes.slice(likes.indexOf("sad") + 5, likes.indexOf("angry") - 2);
    let angry = likes.slice(likes.indexOf("angry") + 7, likes.indexOf("}"));
    let imgs = [];
    let li = like.like;
    let reactions = [];
    reactions.push(like, love, sad, angry);
    reactions.sort((a, b) => {
      return a > b ? -1 : 1;
    });
    let vslike = false;
    let vslove = false;
    let vssad = false;
    let vsangry = false;

    for (let i = 0; i < 3; i++) {
      if (reactions[i] == 0) break;
      if (like === reactions[i] && !vslike) {
        ForbeddinReaction.set(x.id, "like");
        vslike = true;
        let like1 = document.createElement("img");
        like1.className = `imo h${x.id}`;
        like1.setAttribute("id", "likepost." + x.id);
        a1.appendChild(like1);
        like1.src = "/images/likeg.gif";
        imgs.push(like1);
      } else if (love === reactions[i] && !vslove) {
        vslove = true;
        ForbeddinReaction.set(x.id, "like,love");

        let love1 = document.createElement("img");
        love1.className = `imo h${x.id}`;
        love1.setAttribute("id", "lovepost." + x.id);

        a1.appendChild(love1);
        love1.src = "/images/love2.gif";

        imgs.push(love1);
      } else if (sad === reactions[i] && !vssad) {
        ForbeddinReaction.set(x.id, "like,love,sad");
        vssad = true;
        let sad1 = document.createElement("img");
        sad1.setAttribute("id", "sadpost." + x.id);

        sad1.className = `imo h${x.id}`;
        a1.appendChild(sad1);
        sad1.src = "/images/sad.gif";
        imgs.push(sad1);
      } else if (angry === reactions[i] && !vsangry) {
        vsangry = true;
        ForbeddinReaction.set(x.id, "like,love,sad,angry");

        let angry1 = document.createElement("img");
        angry1.className = `imo h${x.id}`;
        angry1.src = "/images/angry.gif";
        angry1.setAttribute("id", "angrypost." + x.id);
        a1.appendChild(angry1);
        imgs.push(angry1);
      }
    }
    //ps
    const ps = userposts.filter((e) => {
      return e.postId == x.id;
    });
    if (ps.length > 0) alreadyCliked.set(x.id, true);
    else alreadyCliked.set(x.id, false);
    if (imgs.length > 1) {
      for (let i = 1; i < imgs.length; i++) {
        imgs[i].className += " rec";
      }
    }
    let Likes = document.createElement("p");
    Likes.setAttribute("id", "like" + x.id);
    support.appendChild(Likes);
    postRec.set(x.id, {
      like: parseInt(like),
      love: parseInt(love),
      sad: parseInt(sad),
      angry: parseInt(angry),
    });
    postLikes.set(
      x.id,
      parseInt(like) + parseInt(love) + parseInt(sad) + parseInt(angry)
    );
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
    <div class="emoji" id =emojis.${x.id}>
          <div class="hello emoClick" id =rec.${x.id}>
            <img class="emoClick" src="/images/likeg.gif" id="likee.${x.id}" alt="">
            <p> Like</p>
          </div>
          <div class="hello emoClick" id =rec.${x.id}>
            <img class="emoClick" src="/images/love2.gif" id="lovee.${x.id}" alt="">
            <p> Love</p>
          </div>
          <div class="hello emoClick" id =rec.${x.id}>
            <img class="emoClick" src="/images/sad.gif" id="sade.${x.id}" alt="">
            <p> Sad</p>
          </div>
          <div class="hello emoClick" id =rec.${x.id}>
            <img class="emoClick" src="/images/angry.gif" id="angrye.${x.id}" alt="">
            <p>Angry</p>
          </div>
        </div>
    `;

    contentt2.className = "contentt2";
    contentt2.setAttribute("id", `contentt2.${x.id}`);
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
    }
    ///liu

    if (ps.length > 0) {
      if (ps[0].type === "like") {
        document.getElementById("click." + x.id).innerHTML = `
      <img class="ht" src="/images/likeg.gif" id="like" alt="">
      <span class ="col1" style=color:blue> Like</span>   
      `;
      } else if (ps[0].type === "love") {
        document.getElementById("click." + x.id).innerHTML = `
        <img class="ht" src="/images/love2.gif" id="like" alt="">
        <span class ="col2" style=color:red> Love</span>   
        `;
      } else if (ps[0].type === "sad") {
        document.getElementById("click." + x.id).innerHTML = `
        <img class="ht" src="/images/sad.gif" id="like" alt="">
        <span class ="col3" style=color:yellow> Sad</span>   
        `;
      } else if (ps[0].type === "angry") {
        document.getElementById("click." + x.id).innerHTML = `
        <img class="ht" src="/images/angry.gif" id="like" alt="">
        <span style=color:orange> Angry</span>   
        `;
      }
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
  <div class=com >
  <input id=input.${x.id} class = "inpu x" placeholder ="Type any comment..">
  <img src="/images/emoticon.png" width="20" height="20" class="btn1" id = emo.${x.id}>
  <img  src="/images/image.png" width="20" height="20" class="btn2" >
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

  let acc = document.querySelectorAll(".action1");

  acc.forEach((ac) => {
    let id = ac.id.split(".")[1];
    let yy = document.getElementById("click." + id);
    let x = document.getElementById("like" + id);
    let y = x;
    document.getElementById("click." + id).addEventListener("click", () => {
      document.getElementById("emojis." + id).className = "emoji";

      document.getElementById("contentt2." + id).className = "contentt2";
      if (alreadyCliked.get(id)) {
        yy.innerHTML = `
          <i class="far fa-thumbs-up" aria-hidden="true"></i><span>Like</span></action>
          `;
        if (postLikes.get(id) === 1) {
          y.innerHTML = "";
          document
            .getElementById("a1." + id)
            .removeChild(document.getElementById("a1." + id).firstChild);
        } else {
          postLikes.set(id, postLikes.get(id) - 1);
          y.innerHTML = `${postLikes.get(id)} Users`;
        }
        alreadyCliked.set(id, false);
        let postrec = postRec.get(id);
        postRec.set(id, {
          like: map1.get(id) === "likeg.gif" ? postrec.like - 1 : postrec.like,
          love: map1.get(id) === "love2.gif" ? postrec.love - 1 : postrec.love,
          sad: map1.get(id) === "sad.gif" ? postrec.sad - 1 : postrec.sad,
          angry:
            map1.get(id) === "angry.gif" ? postrec.angry - 1 : postrec.angry,
        });

        let allPhotos = document.getElementById("a1." + id);

        for (let i = 0; i < allPhotos.children.length; i++) {
          let check = allPhotos.children[i].src.split("/");
          check = check[check.length - 1];
          if (check === "likeg.gif" && postRec.get(id).like === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          } else if (check === "love2.gif" && postRec.get(id).love === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          } else if (check === "sad.gif" && postRec.get(id).sad === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          } else if (check === "angry.gif" && postRec.get(id).angry === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          }
        }
      } else {
        yy.innerHTML = `
        <img class="ht" src="/images/likeg.gif" id="like" alt="">
        <span class ="col1"> Like</span>            `;
        alreadyCliked.set(id, true);
      }
    });
    ac.addEventListener("mouseover", () => {
      document.getElementById("emojis." + id).className = "emoji emoshow2";

      document.getElementById("contentt2." + id).className =
        "contentt2 emoshow";
    });

    ac.addEventListener("mouseleave", () => {
      document.getElementById("emojis." + id).className = "emoji";

      document.getElementById("contentt2." + id).className = "contentt2";
    });
  });

  let emoac = document.querySelectorAll(".hello");
  emoac.forEach((def) => {
    let id = def.id.split(".")[1];

    def.addEventListener("mouseover", () => {
      document.getElementById("emojis." + id).className = "emoji emoshow2";

      document.getElementById("contentt2." + id).className =
        "contentt2 emoshow";
    });
    def.addEventListener("mouseleave", () => {
      document.getElementById("emojis." + id).className = "emoji";

      document.getElementById("contentt2." + id).className = "contentt2";
    });
  });

  // ac.addEventListener("mouseover").className = "emoClick emoshow";
  let commets = document.querySelectorAll(".action2");
  commets.forEach((aa) => {
    aa.addEventListener("click", (e) => {
      let id = e.target.id;
      id = id.split(".")[1];
      if (!id) id = e.target.parentNode.id;
      id = id.split(".")[1];
      document.getElementById("comm" + id).className = "vos";
    });
  });

  let arr = document.querySelectorAll(".addcoment");
  arr.forEach((xx) => {
    xx.addEventListener("input", (e) => {
      document.getElementById(e.target.id).style.height =
        document.getElementById(e.target.id).scrollHeight + "px";
    });
  });
  let arr2 = document.querySelectorAll(".emoClick");

  for (let ij = 0; ij < arr2.length; ij++) {
    xx = arr2[ij];
    if (xx.className === "emoClick") continue;
    if (xx.className === "emoClick") continue;
    xx.addEventListener("click", (e) => {
      let id = e.target.id;
      if (!id) id = e.target.parentNode.id;
      let addemo = id.split(".")[0];
      id = id.split(".")[1];
      let x = document.getElementById("like" + id);
      let y = x;
      x = x.innerHTML;
      x = x.slice(0, x.indexOf(" "));
      x = parseInt(x);

      let z = document.getElementById("rec." + id);
      console.log("clicked", z);
    });
  }
  let buttons = document.querySelectorAll(".btn1");
  buttons.forEach((x) => {
    x.addEventListener("click", (e) => {
      let id = e.target.id.split(".")[1];
      let inputId = `input.${id}`;

      new EmojiPicker({
        trigger: [
          {
            insertInto: ["#txt1", `input.6d23f126-4373-11ed-98bd-0045e21c18f1`],
            selector: ".btn1",
          },
        ],
        closeButton: true,
        dragButton: false,
      });
    });
  });

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

let userLight = "#0e1b3e";
let userBlack = "rgb(24, 26, 27)";

let rateLight = "#b44b00";
let rateBlack = "#a00d32";
let backgroundLight = "#f7f8fa";
let backgroundDark = "rgb(28, 30, 31)";
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
  const drop = document.getElementById("vsc2");
  tracks.forEach((x) => {
    const parag = document.createElement("h1");
    parag.onclick = () => {
      window.location.href = `http://127.0.0.1:3000/Tracks/${x.trackId}`;
    };
    // parag.href = `http://127.0.0.1:3000/Tracks/${x.trackId}`;
    parag.innerHTML = `${x.name}`;
    drop.appendChild(parag);
  });
}

//*************** */
