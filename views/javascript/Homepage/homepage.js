let access_token = document.cookie;
access_token.slice(access_token.indexOf("="));
let alreadyClicked = new Map();
let emojiCliced = new Map();
let triggerEmo = new Map();
let numberOfCommentsNow = new Map();
let numberOfReplies = new Map();
let allPost = 0;
let userId;
let bol = false;
let files = new Map();
// document.getElementById("link2").addEventListener("click", () => {
//   //.log("jbjkjkbjkbhjvfcg", document.getElementById("link2"));
//   document.getElementById("link22").style.color = "#2196f3";
// });
// adding scroll event
// if (
//   document
//     .getElementById(`file-input.user`)
//     .files[0].type.split("/")[0] === "image"
// ) {
//   files.set(
//     post.id,
//     document.getElementById(`file-input.` + post.id).files[0]
//   );
//   if (files.get(post.id)) {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(files.get(post.id));
//     fileReader.addEventListener("load", function () {
//       document.getElementById("imr." + post.id).style.display = "block";
//       //.log(document.getElementById(`imr.${post.id}`));

//       document.getElementById(
//         "imr." + post.id
//       ).innerHTML = `<img class="imgUploaded" id =imgUploaded.${post.id}  src=${this.result} />
//     <img class="closed" id=closed.${post.id}  src="/images/close.png" />
//     `;
//       open(post.id);

//       document
//         .getElementById("closed." + post.id)
//         .addEventListener("click", () => {
//           document.getElementById(`imr.${post.id}`).innerHTML = ``;
//           document.getElementById(`imr.${post.id}`).style.display = "none";
//           files.set(post.id, null);
//           document.getElementById("file-input." + post.id).value = "";
//         });
//     });
//   }
// }
// });
let last = 0;
let vis = false;
this.window.addEventListener("scroll", function () {
  var scrolltop = $(this).scrollTop();
  let scroll = Math.round(
    ((scrolltop + this.innerHeight) / this.document.body.scrollHeight) * 100
  );
  console.log(vis);
  if (scroll >= 80 && !vis) {
    vis = true;
    var scrollTo = -1;
    fetch(`http://127.0.0.1:3000/homepage/posts?postnum=${allPost}`, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(async (json) => await posts(json.data, userId));
    console.log("Sd");
  } else if (scroll < 80) {
    vis = false;
  }
});

realDate();

async function realDate() {
  fetch("http://127.0.0.1:3000/homepage/data", {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => data(json));
}
async function data(json) {
  if (json.code === "not has Interests") {
    //.log("DS");
    window.location.href = "http://127.0.0.1:3000/interests";
  }
  await hackathons(json.data.hackthons, json.data.numberOfHackathons);
  await nav(json.data.User);
  await posts(json.data.allPost, json.data.User.userId);
  await friends(json.data.Friends);
  Tracks(json.data.tracks);
}
//.log("F:");
function nav(data) {
  document.getElementById("currentUserImage").src = data.image;
  document.getElementById("currentUserImage2").src = data.image;
  document.getElementById("userInfo").children[0].innerHTML =
    data.firstName + " " + data.lastName;
  document.getElementById("userInfo").children[1].innerHTML = data.bio;
  let x = document.querySelector(".userTab");
  document.getElementById("currentUserImage").addEventListener("click", () => {
    if (x.className.includes("hide")) x.className = "userTab";
    else x.className = "userTab hide";
  });
  document.getElementById("logout").addEventListener("click", () => {
    deleteCookies();
    window.location.href = "http://127.0.0.1:3000/";
  });
}
async function deleteCookies() {
  //.log("D");
  await fetch("http://127.0.0.1:3000/logout", {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(async (json) => json);
}
// if (!x.className.includes("hide")) {
let x = document.querySelector(".profileNav");

window.addEventListener("click", function (e) {
  if (
    !x.contains(e.target) &&
    !document.querySelector(".userTab").className.includes("hide")
  ) {
    document.querySelector(".userTab").className = "userTab hide";
    //click inside of element
  }
});

function Tracks(tracks) {
  const par = document.querySelector(".drops");
  tracks.forEach((e) => {
    let a = document.createElement("a");
    a.innerHTML = `${e.name}`;
    a.href = `http://127.0.0.1:3000/Tracks/${e.trackId}`;
    let hr = document.createElement("hr");
    hr.className = "kill";
    par.appendChild(a);
    par.appendChild(hr);
  });
}

async function hackathons(hack, users) {
  console.log(hack);
  // for (let hack of allHackathons) {
  //   let hac = document.createElement("div");
  //   hac.className = "hac";
  let haca = document.querySelector(".allHackathons");
  //   haca.appendChild(hac);
  let countDownDate = new Date(hack[0].startDate).getTime();
  let counter = setInterval(() => {
    let now = new Date();
    now.setHours(now.getHours());
    let dateDiff = countDownDate - now;
    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    haca.innerHTML = `
         

               <h5 style="color: #dcdcdc">Upcomming Hackathons</h5>
              <div class="dates-container">
                <div class="date">
                  <span>${days}</span>
                  <span>Days</span>
                </div>
                <div class="date">
                  <span>${hours}</span>
                  <span>Hours</span>
                </div>
                <div class="date">
                  <span>${minutes}</span>
                  <span>Minutes</span>
                </div>
                <div class="date">
                  <span>${seconds}</span>
                  <span>Seconds</span>
                </div>
              </div>
              <div class="boxHack">
                <img src=${hack[0].image} width="100%" />

                <div class="contt">
                  <h4>Search about myster</h4>
                  <h4
                    style="color: #dcdcdc; font-weight: 600; font-size: small;"
                  >
                    ${hack[0].category.name}
                  </h4>

                  <p>
                    <i
                      class="fas fa-user-alt"
                      style="
                        color: #2196f3;
                        font-size: large;
                        z-index: 100;
                        margin-right: 5%;
                      "
                    ></i>
                    ${users} users
                  </p>
                  <p>
                    <i
                      class="fas fa-dollar-sign"
                      style="
                        color: #2196f3;
                        border-radius: 50%;
                        margin-right: 9%;
                      "
                    ></i>
                   ${hack[0].free ? "Free" : hack[0].price}
                  </p>
                  <p class="balls">
                    <i
                      class="fa fa-circle cir"
                      style="
                        color: ${hack[0].online ? "green" : "red"}   ;
                        border-radius: 50%;
                        font-size: small;
                        margin-right: 5.5%;
                      "
                    ></i>
                    ${hack[0].online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <a href="/hackathons" class="seeAll"> See All </a>            `;

    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }, 1000);
  // }
}
let triggr = [];

async function posts(allPosts, UserId) {
  userId = UserId;
  //.log("oper");
  allPost += allPosts.length;
  allPosts.forEach((x) => {
    addPost(x, UserId);

    triggr.push({
      selector: `.btn${x.id}`,
      insertInto: `input.${x.id}`, // '.selector' can be used without array
    });
  });
}

function addPost(postt, UserId, key) {
  const post = postt.post;
  post.userPost
    ? alreadyClicked.set(post.id, true)
    : alreadyClicked.set(post.id, false);
  let numberOfComments = postt.numberOfComments;
  numberOfCommentsNow.set(post.id, { now: 0, all: postt.numberOfCommentsOnly });
  numberOfComments === 0 || post.upVote + post.downVote === 0
    ? (bool = false)
    : (bool = true);
  const parent = document.querySelector(".allPosts");
  const post2 = document.createElement("div");
  const d = new Date(post.createdAt);
  let date = d.toString().split("GMT")[0];
  post2.className = "post";
  post2.innerHTML = `
  <div class="user">
  <img
    src=${post.user.image}
    width="40px"
    height="40px;"
  />
  <div class="info2" style="margin-top: -2.5%">
    <h5 style="color: #2196f3">${
      post.user.firstName + " " + post.user.lastName
    }</h5>
    <p style="margin-top: -20px; color: #DCDCDC; font-size: small">
      ${date}
    </p>
  </div>
  <i class="fas fa-ellipsis-h dots" id=dots.${post.id}>
  </i>
  <div  class="userTab2 hide" id=dotsBox.${post.id}>
              <ul>
                <li style="padding: 5%">
                <i class="fa-solid fa-pen"></i>  
                <a style= "margin-left:8%">
                  
                  edit post</a>
                </li>
                <hr>
                <li style="padding: 5%">
                <i class="fa-sharp fa-solid fa-trash"></i>
                                  <a style= "margin-left:8%">delete post</a>
                </li>
                <hr>

                <li style="padding: 5%" >
                <i class="fa-solid fa-link"></i>
                  <a style="margin-left:8%">copy link</a>
                </li>
                <hr>

              </ul>
            </div>
</div>

  <p style="white-space: pre-wrap; margin-top:0;display: inline-block;">
  ${post.content}
</p>
<iframe src="https://player.vimeo.com/video/772852137?h=9d6a9e3f3b&title=0&byline=0&portrait=0" width="640" height="352" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="image"></iframe><div class="reactions">
  <div class="emojis">

    <div class="userLikes">
      <span id =votes.${post.id}>${
    post.upVote + post.downVote > 0 ? post.upVote + post.downVote : ""
  }</span>
      <span id =votes1.${post.id}>${
    post.upVote + post.downVote > 0 ? "Loves" : ""
  }</span>
    </div>
  </div>
  <div class="commentsPost">
    <span id =comments.${post.id}>${
    numberOfComments > 0 ? numberOfComments : ""
  }</span>
    <span>${numberOfComments > 0 ? "Comments" : ""}</span>
  </div>
</div>
<hr />
<div class="actions">
  <div class="action1 action" id = vote.${post.id}>
    <img
      id="not12"
      src=${
        post.userPost ? (src = "/images/Love.gif") : (src = "/images/heart.png")
      }
      alt=""
      width="30"
      height="30"
    />
    
    <span style="color:${post.userPost ? "Red" : "#111111"}">Love </span>
  </div>
  <div class="action2 action" id =box.${post.id}>
    <img
      id="not12"
      src="/images/message4.png"
      alt=""
      width="20"
      height="20"
    />
    <span>Comment</span>
  </div>
  <div class="action3 action" id=share.${post.id}>
    <img
      id="not12"
      src="/images/share3.png"
      alt=""
      width="20"
      height="20"
    />
    <span>Share</span>
  </div>
</div>
<div class="commentBox" id=commentShow.${post.id}>
  <input id=input.${post.id} type="text" placeholder="Type Any Thing">
  <div class="collection" id=collection.${post.id}>
  <div class="image-upload">
  <label id=choose.${post.id} for=file-input.${post.id} 
  >
  <img
  src="/images/camera.png"
  id=pre.${post.id}
  alt=""
  width="20"
  height="20"
  
  />    
  
  </label>
  
  <input  id=file-input.${post.id} type="file"  name="video" multiple />
  </div>

  <img
  id =btn.${post.id}
  class="btn btn${post.id}"

  src="/images/emoticon.png"
  alt=""
  width="20"
  height="20"
/>
  <span>
  </div>
</div>
<div class="images" id=imr.${post.id}>
</div>
<div class="em" id=em.${post.id}></div>
<div class="allComments" id = post.${post.id}>

</div>

  
  `;

  let showMore = document.createElement("a");
  showMore.innerHTML = `
  showMore
  `;
  showMore.className = "showMore hide";
  showMore.setAttribute("id", `showMore.${post.id}`);
  showMore.addEventListener("click", async () => {
    await fetch(
      `http://127.0.0.1:3000/homepage/comments/${post.id}?Comments=${
        numberOfCommentsNow.get(post.id).now
      }`,
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then(async (json) => toAddComments(json.data, UserId, post.id));
  });
  const emo = document.createElement("div");
  emo.className = "em";
  emo.setAttribute("id", `em.${post.id}`);
  if (key) {
    parent.insertBefore(post2, parent.children[0]);
  } else {
    parent.appendChild(post2);

    post2.appendChild(showMore);
  }
  // parent.appendChild(showMore);
  const vote = document.getElementById("vote." + post.id);
  vote.addEventListener("click", () => {
    if (alreadyClicked.get(post.id)) {
      vote.children[0].src = "/images/heart.png";
      vote.children[1].style.color = "#111111";
    } else {
      vote.children[0].src = "/images/Love.gif";
      vote.children[1].style.color = "Red";
    }
    addVote(post.id);
  });
  emojiCliced.set(post.id, false);
  triggerEmo.set(post.id, false);

  const box = document.getElementById("box." + post.id);
  box.addEventListener("click", async () => {
    document.getElementById("commentShow." + post.id).style.display = "flex";
    document.getElementById("post." + post.id).style.display = "block";
    document.getElementById(`showMore.${post.id}`).className = "showMore";
    await fetch(
      `http://127.0.0.1:3000/homepage/comments/${post.id}?Comments=${
        numberOfCommentsNow.get(post.id).now
      }`,
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then(async (json) => toAddComments(json.data, UserId, post.id));
    //  addComment(x, UserId, false, null, post.id);
  });
  document
    .getElementById("file-input." + post.id)
    .addEventListener("change", () => {
      if (
        document
          .getElementById(`file-input.` + post.id)
          .files[0].type.split("/")[0] === "image"
      ) {
        files.set(
          post.id,
          document.getElementById(`file-input.` + post.id).files[0]
        );
        if (files.get(post.id)) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(files.get(post.id));
          fileReader.addEventListener("load", function () {
            document.getElementById("imr." + post.id).style.display = "block";
            //.log(document.getElementById(`imr.${post.id}`));

            document.getElementById(
              "imr." + post.id
            ).innerHTML = `<img class="imgUploaded" id =imgUploaded.${post.id}  src=${this.result} />
            <img class="closed" id=closed.${post.id}  src="/images/close.png" />
            `;
            open(post.id);

            document
              .getElementById("closed." + post.id)
              .addEventListener("click", () => {
                document.getElementById(`imr.${post.id}`).innerHTML = ``;
                document.getElementById(`imr.${post.id}`).style.display =
                  "none";
                files.set(post.id, null);
                document.getElementById("file-input." + post.id).value = "";
              });
          });
        }
      }
    });
  document.getElementById(`dots.${post.id}`).addEventListener("click", () => {
    let dic = document.getElementById(`dotsBox.${post.id}`);
    console.log(dic);
    dic.classList.toggle("hide");
  });
  document.getElementById(`share.${post.id}`).addEventListener("click", () => {
    document.querySelector(".copy").innerHTML = `
    <i class="fa-solid fa-square-check" style="color:#2196f3; margin-left:-20%;"></i>
  <p>Link copied to clipboard.</p>
    <a href="http://127.0.0.1:3000/${post.id}">View</a>
        <img
          class="in2"
          src="/images/close.png"
          alt="profile"
          style="width: 20px; height: 20px; border-radius: 21px"
        />
    `;
    document.querySelector(".copy").className = "copy";
    navigator.clipboard.writeText(
      `http://127.0.0.1:3000/6b51e5d4-4c0b-11ed-a729-0045e21c18f1`
    );

    document.querySelector(".in2").addEventListener("click", () => {
      document.querySelector(".copy").className = "copy hide2";
    });
  });
  // document
  document
    .getElementById("input." + post.id)
    .addEventListener("keyup", async (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();

        let x = document.getElementById("input." + post.id).value;
        document.getElementById("input." + post.id).value = "";

        if (
          files.get(post.id) &&
          files.get(post.id).type.split("/")[0] !== "image"
        ) {
          files.set(post.id, null);
        }

        await fetch("http://127.0.0.1:3000/homepage/comment/addComment", {
          method: "POST",
          body: JSON.stringify({
            comment: x,
            postId: post.id,
            image: files.get(post.id) ? files.get(post.id).name : null,
          }),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then(async (json) => {
            await sendData(
              `http://127.0.0.1:3000/upload/addComment/${json.data.data.id}`,
              document.getElementById(`file-input.` + post.id).files[0],
              UserId,
              "comment"
            );
            incComments(`comments.${post.id}`, 1);
            document.getElementById(`imr.${post.id}`).innerHTML = ``;
            document.getElementById(`imr.${post.id}`).style.display = "none";
            files.set(post.id, null);
            document.getElementById("file-input." + post.id).value = "";
          });
      }
    });
  document.getElementById(`btn.${post.id}`).addEventListener("click", () => {
    emojis(post.id);
  });
  //og("enter1");

  //og(document.querySelector(".fg-emoji-container"));
  // post.postComments.forEach((x) => {
  //   addComment(x, UserId, false, null, post.id);
  // });
}
window.scrollY = -1;

function toAddComments(all, UserId, postId) {
  numberOfCommentsNow.set(postId, {
    now: numberOfCommentsNow.get(postId).now + all.length,
    all: numberOfCommentsNow.get(postId).all,
  });
  all.forEach((x) => {
    numberOfReplies.set(x.comment.id, {
      now: x.replay ? 1 : 0,
      all: x.numberOfReplies,
    });
    addComment(x, UserId, false, null, postId);
  });
  console.log(
    numberOfCommentsNow.get(postId).now,
    numberOfCommentsNow.get(postId).all
  );
  if (
    numberOfCommentsNow.get(postId).now === numberOfCommentsNow.get(postId).all
  ) {
    document.getElementById(`showMore.${postId}`).className = "hide";
  }
}
function toAddReplay(all, UserId, commentId) {
  numberOfReplies.set(commentId, {
    now: numberOfReplies.get(commentId).now + all.length,
    all: numberOfReplies.get(commentId).all,
  });
  all.forEach((x) => {
    addReplay(x, UserId, false, null, commentId);
  });
  if (
    numberOfReplies.get(commentId).now >= numberOfReplies.get(commentId).all
  ) {
    document.getElementById(`showMore2.${commentId}`).className = "hide";
  }
}
function addComment(Comment, UserId, neww, Image, postId) {
  //.log("kl", comment);
  //og("hello", comment.upvote + comment.downvote);
  //og(comment.updatedAt);
  let comment = Comment.comment;
  console.log(Comment);
  comment.userPost
    ? alreadyClicked.set(comment.id, true)
    : alreadyClicked.set(comment.id, false);

  const parent = document.getElementById("post." + comment.postId);
  const comment2 = document.createElement("div");
  let countDownDate = new Date(comment.updatedAt);
  countDownDate.setHours(countDownDate.getHours() + 2);
  countDownDate = countDownDate.getTime();
  // Get Date Now
  let dateNow = new Date();
  dateNow.setHours(dateNow.getHours() + 2);

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = dateNow - countDownDate;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  let date;
  if (days > 0) {
    date = days + "d";
  } else if (hours > 0) {
    date = hours + "h";
  } else if (minutes > 0) {
    date = minutes + "m";
  } else if (seconds > 0) {
    date = seconds + "s";
  }
  if (typeof date === "undefined") date = "1s";
  //.log(date);
  //og("times", days, hours, minutes, seconds);
  //.log(comment);
  comment2.className = "comment";
  comment2.setAttribute("id", `comment.${comment.id}`);
  comment2.innerHTML = `
  <img
  src=${comment.user.image}
  alt=""
  width="50"
  height="50"
  style="border-radius:31px;"
/>
<div class="box" id =box2.${comment.id}>

<div class="info" id =info.${comment}>
<h5>${comment.user.firstName + " " + comment.user.lastName}</h5>
<p class="p1">${comment.user.bio}</p>
<p class="p2" id=p2.${comment.id}>${comment.comment}</p>
${
  comment.image || Image
    ? `<img src=
    ${
      comment.image
        ? `${comment.image.split(`public`)[1]}`
        : `images/comment/${Image}`
    } 
    width =100% height =auto class="upImages2" id=upImages.${comment.id}>`
    : `<p></p>`
}

</div>

  <div class="settingsAndDate">
    
    <div class="settings">
    <span id=edit.${comment.id}>${
    comment.user.userId === UserId ? "Edit" : ""
  }</span>
    <span id=delete.${comment.id}>${
    comment.user.userId === UserId ? "Delete" : ""
  }</span>
    </div>
  
    <div class="date">
     <span id=date.${comment.id}>${date}</span>
     </div>

  </div>
</div>
`;
  const feedss = document.createElement("div");
  feedss.className = "feeds";
  feedss.setAttribute("id", `feed.${comment.id}`);
  feedss.innerHTML = `
<div class="emojiClick" id=emo.${comment.id}>
  <img
  src=${
    comment.userPost ? (src = "/images/Love.gif") : (src = "/images/heart.png")
  }  alt=""
  width="25"
  height="25"
  style="border-radius:31px;"
/>
</div>
<div class="numberOfLikes">
<span id=votes.${comment.id} style="color:${
    comment.upvote > 0 ? "Red" : "#111111"
  }">${
    comment.upvote + comment.downvote > 0
      ? comment.upvote + comment.downvote + " Loves"
      : ""
  }</span>
</div>
<div class="replayClick" id =box.${comment.id}>
  <img
  src="/images/reply.png"
  alt=""
  width="25"
  height="25"
  style="border-radius:31px;"
/>
</div>
`;
  const commentBox = document.createElement("div");
  commentBox.className = "commentBox commentBoxComment";
  commentBox.setAttribute("id", `commentShow.${comment.id}`);
  commentBox.innerHTML = `
<input type="text" placeholder="Type Any Thing" id=input.${comment.id} >
<div class="collection">
<div class="image-upload">
<label id=choose.${comment.id} for=file-input.${comment.id} 
>
<img
src="/images/camera.png"
id=pre.${comment.id}
alt=""
width="20"
height="20"

/>    

</label>

<input  id=file-input.${comment.id} type="file"  name="video" multiple />
</div>

<img
src="/images/emoticon.png"
alt=""
width="20"
height="20"
class=btn${comment.id}
id =btn.${comment.id}
/>
<span>
</div>
</div>
`;
  let esc = document.createElement("p");
  esc.innerHTML = `press ESC to cancel`;
  esc.className = "hide";
  esc.setAttribute("id", `esc.${comment.id}`);

  let imr = document.createElement("div");
  imr.className = "images images2";
  imr.setAttribute("id", `imr.${comment.id}`);

  const emo = document.createElement("div");
  emo.className = "em";
  emo.setAttribute("id", `em.${comment.id}`);
  //.log(neww);
  console.log("sfdsfs", comment);

  if (neww) {
    let showMore = document.createElement("a");
    showMore.innerHTML = `
    show more replies
    `;
    showMore.className = "showMore2";
    showMore.setAttribute("id", `showMore2.${comment.id}`);
    parent.insertBefore(showMore, parent.firstChild);

    parent.insertBefore(esc, parent.firstChild);
    parent.insertBefore(imr, parent.firstChild);
    parent.insertBefore(emo, parent.firstChild);
    parent.insertBefore(commentBox, parent.firstChild);
    parent.insertBefore(feedss, parent.firstChild);

    parent.insertBefore(comment2, parent.firstChild);
  } else {
    parent.appendChild(comment2);
    parent.appendChild(feedss);
    parent.appendChild(commentBox);
    parent.appendChild(emo);

    parent.appendChild(imr);
    parent.appendChild(esc);

    let showMore = document.createElement("a");
    showMore.innerHTML = `
      show more replies
      `;
    showMore.className = "showMore2";
    showMore.setAttribute("id", `showMore2.${comment.id}`);
    parent.appendChild(showMore);
  }
  if (
    numberOfReplies.get(comment.id).now >= numberOfReplies.get(comment.id).all
  ) {
    document.getElementById(`showMore2.${comment.id}`).style.display = "none";
  }
  document
    .getElementById(`showMore2.${comment.id}`)
    .addEventListener("click", async () => {
      await fetch(
        `http://127.0.0.1:3000/homepage/replay/${comment.id}?replays=${
          numberOfReplies.get(comment.id).now
        }`,
        {
          method: "GET",

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then(async (json) => await toAddReplay(json.data, UserId, comment.id));
    });
  //og(parent);
  triggr.push({
    selector: `.btn${comment.id}`,
    insertInto: `input.${comment.id}`, // '.selector' can be used without array
  });

  //.log(triggr);

  const vote = document.getElementById("emo." + comment.id);
  vote.addEventListener("click", () => {
    if (alreadyClicked.get(comment.id)) {
      vote.children[0].src = "/images/heart.png";
    } else {
      vote.children[0].src = "/images/Love.gif";
    }
    addVote(comment.id);
  });

  const box = document.getElementById("box." + comment.id);
  document.getElementById("input." + comment.id).value = `${
    comment.user.firstName + " " + comment.user.lastName + " "
  }`;
  box.addEventListener("click", () => {
    let beel = true;
    document.getElementById("commentShow." + comment.id).style.display = "flex";
    if (document.querySelector(".commentEdit")) {
      let id = document.querySelector(".commentEdit").id.split(".")[1];
      document.getElementById(`imr.${id}`).innerHTML = ``;
      document.getElementById(`imr.${id}`).style.display = "none";
      hideWhenClick(document.querySelector(".commentEdit").id.split(".")[1]);
    }
    document
      .getElementById("input." + comment.id)
      .addEventListener("keyup", async (e) => {
        if (e.keyCode === 13) {
          //.log("ops1");
          e.preventDefault();
          let x = document.getElementById("input." + comment.id).value;
          document.getElementById("input." + comment.id).value = "";
          if (
            files.get(comment.id) &&
            files.get(comment.id).type.split("/")[0] !== "image"
          ) {
            files.set(comment.id, null);
          }
          await fetch("http://127.0.0.1:3000/homepage/replay/addReplay", {
            method: "POST",
            body: JSON.stringify({
              replay: x,
              commentId: comment.id,
              image: files.get(comment.id) ? files.get(comment.id).name : null,
            }),

            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(async (json) => {
              await sendData(
                `http://127.0.0.1:3000/upload/addReplay/${json.data.data.id}`,
                document.getElementById(`file-input.` + comment.id).files[0],
                UserId,
                "replay",
                comment.postId
              );
              incComments(`comments.${comment.postId}`, 1);
              document.getElementById(`imr.${comment.id}`).innerHTML = ``;
              document.getElementById(`imr.${comment.id}`).style.display =
                "none";
              files.set(comment.id, null);
              document.getElementById("file-input." + comment.id).value = "";
            });
        }
      });
  });
  document
    .getElementById("file-input." + comment.id)
    .addEventListener("change", () => {
      files.set(
        comment.id,
        document.getElementById(`file-input.` + comment.id).files[0]
      );
      if (files.get(comment.id)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files.get(comment.id));
        fileReader.addEventListener("load", function () {
          document.getElementById("imr." + comment.id).style.display = "block";
          //.log(document.getElementById(`imr.${comment.id}`));

          document.getElementById(
            "imr." + comment.id
          ).innerHTML = `<img class="imgUploaded" id =imgUploaded.${comment.id}  src=${this.result} />
          <img class="closed" id=closed.${comment.id}  src="/images/close.png" />
          `;
          open(comment.id);

          document
            .getElementById("closed." + comment.id)
            .addEventListener("click", () => {
              document.getElementById(`imr.${comment.id}`).innerHTML = ``;
              document.getElementById(`imr.${comment.id}`).style.display =
                "none";
              files.set(comment.id, null);
              document.getElementById("file-input." + comment.id).value = "";
            });
        });
      }
    });

  // 27
  document.getElementById(`btn.${comment.id}`).addEventListener("click", () => {
    emojis(comment.id);
  });
  editClickComment(comment.id);
  deleteClickComment(comment);
  if (document.getElementById(`upImages.${comment.id}`)) {
    document
      .getElementById(`upImages.${comment.id}`)
      .addEventListener("click", () => {
        document.querySelector(".overlay").className = "overlay";
        document.getElementById("over").className = "confirmDelete full";
        document.body.style.overflow = "hidden";

        document.getElementById("over").innerHTML = `

        <img src=${
          document.getElementById(`upImages.${comment.id}`).src
        } width =100% height =auto class="upImages" id=upImages.${comment.id}>
        <img class="closed2" id=closed.${comment.id}  src="/images/close.png" />

        `;
        document
          .getElementById(`closed.${comment.id}`)
          .addEventListener("click", () => {
            document.querySelector(".overlay").className = "overlay hide";
            document.getElementById("over").className = "hide";
            document.getElementById("over").innerHTML = ``;
            document.body.style.overflow = "auto";
          });
      });
  }
  if (Comment.numberOfReplies > 0) {
    addReplay(Comment.replay, UserId, false, null, comment.postId);
  }
}

function addReplay(replay, UserId, neww, Image, postId) {
  //.log("op", postId);
  replay.userPost
    ? alreadyClicked.set(replay.id, true)
    : alreadyClicked.set(replay.id, false);

  let countDownDate = new Date(replay.updatedAt);
  countDownDate.setHours(countDownDate.getHours() + 2);
  countDownDate = countDownDate.getTime();
  // Get Date Now
  let dateNow = new Date();
  dateNow.setHours(dateNow.getHours() + 2);

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = dateNow - countDownDate;
  //og("time", dateDiff);

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  let date;
  if (days > 0) {
    date = days + "d";
  } else if (hours > 0) {
    date = hours + "h";
  } else if (minutes > 0) {
    date = minutes + "m";
  } else if (seconds > 0) {
    date = seconds + "s";
  }
  if (typeof date === "undefined") date = "1s";

  const parent = document.getElementById(
    "comment." + replay.commentId
  ).parentNode;
  //og("pare", parent.parentNode);
  const replay2 = document.createElement("div");
  replay2.className = "comment replay";
  replay2.setAttribute("id", `rep.${replay.commentId}`);
  replay2.innerHTML = `
  <img
  src=${replay.user.image}
  alt=""
  width="50"
  height="50"
  class ="operr"
 
/>
<div class="box" id =box2.${replay.id}>
  <div class="info">
  <h5>${replay.user.firstName + " " + replay.user.lastName}</h5>
  <p class="p1">${replay.user.bio}</p>
  <p class="p2" id=p2.${replay.id}>${replay.reply}</p>
  ${
    replay.image || Image
      ? `<img src=
      ${
        replay.image
          ? `${replay.image.split(`public`)[1]}`
          : `images/replay/${Image}`
      } 
      width =100% height =auto class="upImages2 upImages3" id=upImages.${
        replay.id
      }>`
      : `<p></p>`
  }
  </div>
  <div class="settingsAndDate">
  
    <div class="settings">
      <span id=edit.${replay.id}>${
    replay.user.userId === UserId ? "Edit" : ""
  }</span>
      <span id=delete.${replay.id}>${
    replay.user.userId === UserId ? "Delete" : ""
  }</span>
      </div>
     <div class="date">
      <span id=date.${replay.id}>${date}</span>
     </div>
  </div>
</div>
`;

  const feedss = document.createElement("div");
  feedss.className = "feeds feedsReplay";
  feedss.setAttribute("id", `feed.${replay.id}`);
  feedss.innerHTML = `
<div class="emojiClick" id=emo.${replay.id}>
  <img
  src=${
    replay.userPost ? (src = "/images/Love.gif") : (src = "/images/heart.png")
  }  alt=""
  width="25"
  height="25"
  style="border-radius:31px;"
/>
</div>
<div class="numberOfLikes">
<span id=votes.${replay.id} style="color:${
    replay.upvote > 0 ? "Red" : "#111111"
  }">${
    replay.upvote + replay.downvote > 0
      ? replay.upvote + replay.downvote + " Loves"
      : ""
  }</span>
</div>
<div class="replayClick" id =box.${replay.id}>
  <img
  src="/images/reply.png"
  alt=""
  width="25"
  height="25"
  style="border-radius:31px;"
/>
</div>
`;

  const commentBox = document.createElement("div");
  commentBox.className = "commentBox commentBoxReplay";
  commentBox.setAttribute("id", `commentShow.` + replay.id);
  commentBox.innerHTML = `
  <input type="text" placeholder="Type Any Thing" id=input.${replay.id} >
  <div class="collection">
  <div class="image-upload">
  <label id=choose.${replay.id} for=file-input.${replay.id} 
  >
  <img
  src="/images/camera.png"
  id=pre.${replay.id}
  alt=""
  width="20"
  height="20"
  
  />    
  
  </label>
  
  <input id=file-input.${replay.id} name="file-input" type="file"/>
  </div>

<img
src="/images/emoticon.png"
alt=""
width="20"
height="20"
class=btn${replay.id}
id=btn.${replay.id}
/>
<span>
</div>
`;

  let esc = document.createElement("p");
  esc.innerHTML = `press ESC to cancel`;
  esc.className = "hide";
  esc.setAttribute("id", `esc.${replay.id}`);
  let imr = document.createElement("div");
  imr.className = "images images3";
  imr.setAttribute("id", `imr.${replay.id}`);
  const emo = document.createElement("div");
  emo.className = "em";
  emo.setAttribute("id", `em.${replay.id}`);

  if (neww) {
    document.getElementById("esc." + replay.commentId).after(esc);
    document.getElementById("esc." + replay.commentId).after(imr);
    document.getElementById("esc." + replay.commentId).after(emo);
    document.getElementById("esc." + replay.commentId).after(commentBox);
    document.getElementById("esc." + replay.commentId).after(feedss);
    document.getElementById("esc." + replay.commentId).after(replay2);
    document.getElementById(`commentShow.${replay.commentId}`).style.display =
      "none";
  } else {
    parent.appendChild(replay2);
    parent.appendChild(feedss);
    parent.appendChild(commentBox);
    parent.appendChild(emo);
    parent.appendChild(imr);
    parent.appendChild(esc);
  }

  // if (!neww) {
  //   triggr.push({
  //     selector: `.btn${replay.id}`,
  //     insertInto: `input.${replay.id}`, // '.selector' can be used without array
  //   });
  // }
  // if (neww) {
  //   triggr = [];
  //   triggr.push({
  //     selector: `.btn${replay.id}`,
  //     insertInto: `input.${replay.id}`, // '.selector' can be used without array
  //   });
  // }
  triggr.push({
    selector: `.btn${replay.id}`,
    insertInto: `input.${replay.id}`, // '.selector' can be used without array
  });

  const vote = document.getElementById("emo." + replay.id);
  vote.addEventListener("click", () => {
    if (alreadyClicked.get(replay.id)) {
      vote.children[0].src = "/images/heart.png";
    } else {
      vote.children[0].src = "/images/Love.gif";
    }
    addVote(replay.id);
  });

  const box = document.getElementById("box." + replay.id);
  box.addEventListener("click", () => {
    //.log("kp", document.getElementById("input." + replay.id).value);

    document.getElementById("input." + replay.id).value = `${
      replay.user.firstName + " " + replay.user.lastName + " "
    }`;
    //.log("klklklklklk", postId);

    let beel = false;
    if (document.querySelector(".commentEdit")) {
      let id = document.querySelector(".commentEdit").id.split(".")[1];
      document.getElementById(`imr.${id}`).innerHTML = ``;
      document.getElementById(`imr.${id}`).style.display = "none";
      hideWhenClick(document.querySelector(".commentEdit").id.split(".")[1]);
    }
    document.getElementById("commentShow." + replay.id).style.display = "flex";
    document
      .getElementById("input." + replay.id)
      .addEventListener("keyup", async (e) => {
        if (e.keyCode === 13) {
          //.log("ops1");
          e.preventDefault();
          let x = document.getElementById("input." + replay.id).value;
          document.getElementById("commentShow." + replay.id).style.display =
            "none";
          document.getElementById("input." + replay.id).value = "";
          beel = false;

          await fetch("http://127.0.0.1:3000/homepage/replay/addReplay", {
            method: "POST",
            body: JSON.stringify({
              replay: x,
              commentId: replay.commentId,
            }),

            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(async (json) => {
              await sendData(
                `http://127.0.0.1:3000/upload/addReplay/${json.data.data.id}`,
                document.getElementById(`file-input.` + replay.id).files[0],
                UserId,
                "replay",
                postId
              );
              //.log(
              //   "jk",
              //   document.getElementById(`comments.${postId}`),
              //   postId
              // ),
              incComments(`comments.${postId}`, 1);
              document.getElementById(`imr.${replay.id}`).innerHTML = ``;
              document.getElementById(`imr.${replay.id}`).style.display =
                "none";
              files.set(replay.id, null);
              document.getElementById("file-input." + replay.id).value = "";
            });
        }
      });
  });

  document
    .getElementById("file-input." + replay.id)
    .addEventListener("change", () => {
      files.set(
        replay.id,
        document.getElementById(`file-input.` + replay.id).files[0]
      );
      if (files.get(replay.id)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files.get(replay.id));
        fileReader.addEventListener("load", function () {
          document.getElementById("imr." + replay.id).style.display = "block";
          //.log(document.getElementById(`imr.${replay.id}`));
          document.getElementById(
            "imr." + replay.id
          ).innerHTML = `<img class="imgUploaded" id =imgUploaded.${replay.id} src=${this.result} />
            <img class="closed" id=closed.${replay.id}  src="/images/close.png" />
            `;
          open(replay.id);

          document
            .getElementById("closed." + replay.id)
            .addEventListener("click", () => {
              document.getElementById(`imr.${replay.id}`).innerHTML = ``;
              document.getElementById(`imr.${replay.id}`).style.display =
                "none";
              files.set(replay.id, null);
              document.getElementById(`file-input.` + replay.id).files = [];
              document.getElementById("file-input." + replay.id).value = "";
            });
        });
      }
    });
  editClick(replay.id);
  deleteClick(replay);
  document.getElementById(`btn.${replay.id}`).addEventListener("click", () => {
    emojis(replay.id);
  });
}
function addVote(id) {
  let dev = document.getElementById("votes." + id);
  let before = parseInt(dev.innerHTML);
  if (isNaN(before)) before = 0;
  let after = before;
  if (alreadyClicked.get(id)) {
    alreadyClicked.set(id, false);
    after -= 1;
  } else {
    alreadyClicked.set(id, true);
    after += 1;
  }
  //.log("vote", alreadyClicked.get(id), after);

  if (after === 0) {
    if (document.getElementById("votes1." + id)) {
      document.getElementById("votes." + id).innerHTML = ``;
      document.getElementById("votes1." + id).innerHTML = ``;
    } else {
      document.getElementById("votes." + id).innerHTML = ``;
      document.getElementById("votes." + id).style.color = "#111111";
    }
  } else {
    if (document.getElementById("votes1." + id)) {
      document.getElementById("votes." + id).innerHTML = `${after}`;
      document.getElementById("votes1." + id).innerHTML = `Loves`;
    } else {
      document.getElementById("votes." + id).innerHTML = `${after} Loves`;
      document.getElementById("votes." + id).style.color = "Red";
    }
  }
}

/**/ /*/*/
let bool = false;
document.getElementById("not12").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:3000/chat";
});

document.getElementById("drop").addEventListener("click", () => {
  if (!bool) {
    document.querySelector(".drops").className = "drops hidden";
    document.querySelector(".center").className = "center center2";
    bool = true;
  } else {
    document.querySelector(".drops").className = "drops";
    document.querySelector(".center").className = "center";
    bool = false;
  }
});

function calcDate(datee) {
  let countDownDate = new Date(datee);
  countDownDate.setHours(countDownDate.getHours() + 2);
  countDownDate = countDownDate.getTime();
  // Get Date Now
  let dateNow = new Date();
  dateNow.setHours(dateNow.getHours() + 2);

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = dateNow - countDownDate;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  let date;
  if (days > 0) {
    date = days + "d";
  } else if (hours > 0) {
    date = hours + "h";
  } else if (minutes > 0) {
    date = minutes + "m";
  } else if (seconds > 0) {
    date = seconds + "s";
  }
  if (typeof date === "undefined") date = "1s";
  return date;
}
function decComments(id, x) {
  let y = parseInt(document.getElementById(id).innerHTML);
  y -= x;
  if (y == 0) {
    document.getElementById(id).innerHTML = ``;
    document.getElementById(id).nextElementSibling.innerHTML = ``;
  } else {
    document.getElementById(id).innerHTML = `${y}`;
  }
}
function incComments(id, x) {
  let y = parseInt(document.getElementById(id).innerHTML);
  if (y == 0) {
    document.getElementById(id).innerHTML = `1`;
    document.getElementById(id).nextElementSibling.innerHTML = `Comment`;
    y += x;
  } else if (y == 1) {
    document.getElementById(id).innerHTML = `2`;
    document.getElementById(id).nextElementSibling.innerHTML = `Comments`;
    y += x;
  } else {
    y += x;

    document.getElementById(id).innerHTML = `${y}`;
  }
}

function open(id) {
  const sr = document.getElementById(`imgUploaded.${id}`).src;
  document.querySelector(`.imgUploaded`).addEventListener("click", () => {
    //.log("okey");
    document.querySelector(".overlay").className = "overlay";
    document.getElementById("over").className = "confirmDelete full";
    document.body.style.overflow = "hidden";

    document.getElementById("over").innerHTML = `

        <img src=${sr} width =90% height =auto class="upImages" id=upImages.${id}>
        <img class="closed2" id=closed.${id}  src="/images/close.png" />

        `;
    document.getElementById(`closed.${id}`).addEventListener("click", () => {
      document.querySelector(".overlay").className = "overlay hide";
      document.getElementById("over").className = "hide";
      document.getElementById("over").innerHTML = ``;
      document.body.style.overflow = "auto";
    });
  });
}

function emojis(id) {
  let cat = [];
  cat.push("People");
  cat.push("Nature");
  cat.push("Food-dring");
  cat.push("Activity");
  cat.push("Travel-places");
  cat.push("Objects");
  cat.push("Symbols");
  cat.push("Flags");

  let categoriesHTML = "";
  let emojiesHTML = "";
  const emojiObj = {
    People: [
      {
        emoji: "😀",
        title: "Grinning Face",
      },
      {
        emoji: "😃",
        title: "Grinning Face with Big Eyes",
      },
      {
        emoji: "😄",
        title: "Grinning Face with Smiling Eyes",
      },
      {
        emoji: "😁",
        title: "Beaming Face with Smiling Eyes",
      },
      {
        emoji: "😆",
        title: "Grinning Squinting Face",
      },
      {
        emoji: "😅",
        title: "Grinning Face with Sweat",
      },
      {
        emoji: "🤣",
        title: "Rolling on the Floor Laughing",
      },
      {
        emoji: "😂",
        title: "Face with Tears of Joy",
      },
      {
        emoji: "🙂",
        title: "Slightly Smiling Face",
      },
      {
        emoji: "🙃",
        title: "Upside-Down Face",
      },
      {
        emoji: "😉",
        title: "Winking Face",
      },
      {
        emoji: "😊",
        title: "Smiling Face with Smiling Eyes",
      },
      {
        emoji: "😇",
        title: "Smiling Face with Halo",
      },
      {
        emoji: "🥰",
        title: "Smiling Face with Hearts",
      },
      {
        emoji: "😍",
        title: "Smiling Face with Heart-Eyes",
      },
      {
        emoji: "🤩",
        title: "Star-Struck",
      },
      {
        emoji: "😘",
        title: "Face Blowing a Kiss",
      },
      {
        emoji: "😗",
        title: "Kissing Face",
      },
      {
        emoji: "☺️",
        title: "Smiling Face",
      },
      {
        emoji: "😚",
        title: "Kissing Face with Closed Eyes",
      },
      {
        emoji: "😙",
        title: "Kissing Face with Smiling Eyes",
      },
      {
        emoji: "🥲",
        title: "Smiling Face with Tear",
      },
      {
        emoji: "😋",
        title: "Face Savoring Food",
      },
      {
        emoji: "😛",
        title: "Face with Tongue",
      },
      {
        emoji: "😜",
        title: "Winking Face with Tongue",
      },
      {
        emoji: "🤪",
        title: "Zany Face",
      },
      {
        emoji: "😝",
        title: "Squinting Face with Tongue",
      },
      {
        emoji: "🤑",
        title: "Money-Mouth Face",
      },
      {
        emoji: "🤗",
        title: "Smiling Face with Open Hands",
      },
      {
        emoji: "🤭",
        title: "Face with Hand Over Mouth",
      },
      {
        emoji: "🤫",
        title: "Shushing Face",
      },
      {
        emoji: "🤔",
        title: "Thinking Face",
      },
      {
        emoji: "🤐",
        title: "Zipper-Mouth Face",
      },
      {
        emoji: "🤨",
        title: "Face with Raised Eyebrow",
      },
      {
        emoji: "😐",
        title: "Neutral Face",
      },
      {
        emoji: "😑",
        title: "Expressionless Face",
      },
      {
        emoji: "😶",
        title: "Face Without Mouth",
      },
      {
        emoji: "😶‍🌫️",
        title: "Face in Clouds",
      },
      {
        emoji: "😏",
        title: "Smirking Face",
      },
      {
        emoji: "😒",
        title: "Unamused Face",
      },
      {
        emoji: "🙄",
        title: "Face with Rolling Eyes",
      },
      {
        emoji: "😬",
        title: "Grimacing Face",
      },
      {
        emoji: "😮‍💨",
        title: "Face Exhaling",
      },
      {
        emoji: "🤥",
        title: "Lying Face",
      },
      {
        emoji: "😌",
        title: "Relieved Face",
      },
      {
        emoji: "😔",
        title: "Pensive Face",
      },
      {
        emoji: "😪",
        title: "Sleepy Face",
      },
      {
        emoji: "🤤",
        title: "Drooling Face",
      },
      {
        emoji: "😴",
        title: "Sleeping Face",
      },
      {
        emoji: "😷",
        title: "Face with Medical Mask",
      },
      {
        emoji: "🤒",
        title: "Face with Thermometer",
      },
      {
        emoji: "🤕",
        title: "Face with Head-Bandage",
      },
      {
        emoji: "🤢",
        title: "Nauseated Face",
      },
      {
        emoji: "🤮",
        title: "Face Vomiting",
      },
      {
        emoji: "🤧",
        title: "Sneezing Face",
      },
      {
        emoji: "🥵",
        title: "Hot Face",
      },
      {
        emoji: "🥶",
        title: "Cold Face",
      },
      {
        emoji: "🥴",
        title: "Woozy Face",
      },
      {
        emoji: "😵",
        title: "Face with Crossed-Out Eyes",
      },
      {
        emoji: "😵‍💫",
        title: "Face with Spiral Eyes",
      },
      {
        emoji: "🤯",
        title: "Exploding Head",
      },
      {
        emoji: "🤠",
        title: "Cowboy Hat Face",
      },
      {
        emoji: "🥳",
        title: "Partying Face",
      },
      {
        emoji: "🥸",
        title: "Disguised Face",
      },
      {
        emoji: "😎",
        title: "Smiling Face with Sunglasses",
      },
      {
        emoji: "🤓",
        title: "Nerd Face",
      },
      {
        emoji: "🧐",
        title: "Face with Monocle",
      },
      {
        emoji: "😕",
        title: "Confused Face",
      },
      {
        emoji: "😟",
        title: "Worried Face",
      },
      {
        emoji: "🙁",
        title: "Slightly Frowning Face",
      },
      {
        emoji: "☹️",
        title: "Frowning Face",
      },
      {
        emoji: "😮",
        title: "Face with Open Mouth",
      },
      {
        emoji: "😯",
        title: "Hushed Face",
      },
      {
        emoji: "😲",
        title: "Astonished Face",
      },
      {
        emoji: "😳",
        title: "Flushed Face",
      },
      {
        emoji: "🥺",
        title: "Pleading Face",
      },
      {
        emoji: "😦",
        title: "Frowning Face with Open Mouth",
      },
      {
        emoji: "😧",
        title: "Anguished Face",
      },
      {
        emoji: "😨",
        title: "Fearful Face",
      },
      {
        emoji: "😰",
        title: "Anxious Face with Sweat",
      },
      {
        emoji: "😥",
        title: "Sad but Relieved Face",
      },
      {
        emoji: "😢",
        title: "Crying Face",
      },
      {
        emoji: "😭",
        title: "Loudly Crying Face",
      },
      {
        emoji: "😱",
        title: "Face Screaming in Fear",
      },
      {
        emoji: "😖",
        title: "Confounded Face",
      },
      {
        emoji: "😣",
        title: "Persevering Face",
      },
      {
        emoji: "😞",
        title: "Disappointed Face",
      },
      {
        emoji: "😓",
        title: "Downcast Face with Sweat",
      },
      {
        emoji: "😩",
        title: "Weary Face",
      },
      {
        emoji: "😫",
        title: "Tired Face",
      },
      {
        emoji: "🥱",
        title: "Yawning Face",
      },
      {
        emoji: "😤",
        title: "Face with Steam From Nose",
      },
      {
        emoji: "😡",
        title: "Enraged Face",
      },
      {
        emoji: "😠",
        title: "Angry Face",
      },
      {
        emoji: "🤬",
        title: "Face with Symbols on Mouth",
      },
      {
        emoji: "😈",
        title: "Smiling Face with Horns",
      },
      {
        emoji: "👿",
        title: "Angry Face with Horns",
      },
      {
        emoji: "💀",
        title: "Skull",
      },
      {
        emoji: "☠️",
        title: "Skull and Crossbones",
      },
      {
        emoji: "💩",
        title: "Pile of Poo",
      },
      {
        emoji: "🤡",
        title: "Clown Face",
      },
      {
        emoji: "👹",
        title: "Ogre",
      },
      {
        emoji: "👺",
        title: "Goblin",
      },
      {
        emoji: "👻",
        title: "Ghost",
      },
      {
        emoji: "👽",
        title: "Alien",
      },
      {
        emoji: "👾",
        title: "Alien Monster",
      },
      {
        emoji: "🤖",
        title: "Robot",
      },
      {
        emoji: "😺",
        title: "Grinning Cat",
      },
      {
        emoji: "😸",
        title: "Grinning Cat with Smiling Eyes",
      },
      {
        emoji: "😹",
        title: "Cat with Tears of Joy",
      },
      {
        emoji: "😻",
        title: "Smiling Cat with Heart-Eyes",
      },
      {
        emoji: "😼",
        title: "Cat with Wry Smile",
      },
      {
        emoji: "😽",
        title: "Kissing Cat",
      },
      {
        emoji: "🙀",
        title: "Weary Cat",
      },
      {
        emoji: "😿",
        title: "Crying Cat",
      },
      {
        emoji: "😾",
        title: "Pouting Cat",
      },
      {
        emoji: "💋",
        title: "Kiss Mark",
      },
      {
        emoji: "👋",
        title: "Waving Hand",
      },
      {
        emoji: "🤚",
        title: "Raised Back of Hand",
      },
      {
        emoji: "🖐️",
        title: "Hand with Fingers Splayed",
      },
      {
        emoji: "✋",
        title: "Raised Hand",
      },
      {
        emoji: "🖖",
        title: "Vulcan Salute",
      },
      {
        emoji: "👌",
        title: "OK Hand",
      },
      {
        emoji: "🤌",
        title: "Pinched Fingers",
      },
      {
        emoji: "🤏",
        title: "Pinching Hand",
      },
      {
        emoji: "✌️",
        title: "Victory Hand",
      },
      {
        emoji: "🤞",
        title: "Crossed Fingers",
      },
      {
        emoji: "🤟",
        title: "Love-You Gesture",
      },
      {
        emoji: "🤘",
        title: "Sign of the Horns",
      },
      {
        emoji: "🤙",
        title: "Call Me Hand",
      },
      {
        emoji: "👈",
        title: "Backhand Index Pointing Left",
      },
      {
        emoji: "👉",
        title: "Backhand Index Pointing Right",
      },
      {
        emoji: "👆",
        title: "Backhand Index Pointing Up",
      },
      {
        emoji: "🖕",
        title: "Middle Finger",
      },
      {
        emoji: "👇",
        title: "Backhand Index Pointing Down",
      },
      {
        emoji: "☝️",
        title: "Index Pointing Up",
      },
      {
        emoji: "👍",
        title: "Thumbs Up",
      },
      {
        emoji: "👎",
        title: "Thumbs Down",
      },
      {
        emoji: "✊",
        title: "Raised Fist",
      },
      {
        emoji: "👊",
        title: "Oncoming Fist",
      },
      {
        emoji: "🤛",
        title: "Left-Facing Fist",
      },
      {
        emoji: "🤜",
        title: "Right-Facing Fist",
      },
      {
        emoji: "👏",
        title: "Clapping Hands",
      },
      {
        emoji: "🙌",
        title: "Raising Hands",
      },
      {
        emoji: "👐",
        title: "Open Hands",
      },
      {
        emoji: "🤲",
        title: "Palms Up Together",
      },
      {
        emoji: "🤝",
        title: "Handshake",
      },
      {
        emoji: "🙏",
        title: "Folded Hands",
      },
      {
        emoji: "✍️",
        title: "Writing Hand",
      },
      {
        emoji: "💅",
        title: "Nail Polish",
      },
      {
        emoji: "🤳",
        title: "Selfie",
      },
      {
        emoji: "💪",
        title: "Flexed Biceps",
      },
      {
        emoji: "🦾",
        title: "Mechanical Arm",
      },
      {
        emoji: "🦿",
        title: "Mechanical Leg",
      },
      {
        emoji: "🦵",
        title: "Leg",
      },
      {
        emoji: "🦶",
        title: "Foot",
      },
      {
        emoji: "👂",
        title: "Ear",
      },
      {
        emoji: "🦻",
        title: "Ear with Hearing Aid",
      },
      {
        emoji: "👃",
        title: "Nose",
      },
      {
        emoji: "🧠",
        title: "Brain",
      },
      {
        emoji: "🫀",
        title: "Anatomical Heart",
      },
      {
        emoji: "🫁",
        title: "Lungs",
      },
      {
        emoji: "🦷",
        title: "Tooth",
      },
      {
        emoji: "🦴",
        title: "Bone",
      },
      {
        emoji: "👀",
        title: "Eyes",
      },
      {
        emoji: "👁️",
        title: "Eye",
      },
      {
        emoji: "👅",
        title: "Tongue",
      },
      {
        emoji: "👄",
        title: "Mouth",
      },
      {
        emoji: "👶",
        title: "Baby",
      },
      {
        emoji: "🧒",
        title: "Child",
      },
      {
        emoji: "👦",
        title: "Boy",
      },
      {
        emoji: "👧",
        title: "Girl",
      },
      {
        emoji: "🧑",
        title: "Person",
      },
      {
        emoji: "👱",
        title: "Person: Blond Hair",
      },
      {
        emoji: "👨",
        title: "Man",
      },
      {
        emoji: "🧔",
        title: "Person: Beard",
      },
      {
        emoji: "👨‍🦰",
        title: "Man: Red Hair",
      },
      {
        emoji: "👨‍🦱",
        title: "Man: Curly Hair",
      },
      {
        emoji: "👨‍🦳",
        title: "Man: White Hair",
      },
      {
        emoji: "👨‍🦲",
        title: "Man: Bald",
      },
      {
        emoji: "👩",
        title: "Woman",
      },
      {
        emoji: "👩‍🦰",
        title: "Woman: Red Hair",
      },
      {
        emoji: "🧑‍🦰",
        title: "Person: Red Hair",
      },
      {
        emoji: "👩‍🦱",
        title: "Woman: Curly Hair",
      },
      {
        emoji: "🧑‍🦱",
        title: "Person: Curly Hair",
      },
      {
        emoji: "👩‍🦳",
        title: "Woman: White Hair",
      },
      {
        emoji: "🧑‍🦳",
        title: "Person: White Hair",
      },
      {
        emoji: "👩‍🦲",
        title: "Woman: Bald",
      },
      {
        emoji: "🧑‍🦲",
        title: "Person: Bald",
      },
      {
        emoji: "👱‍♀️",
        title: "Woman: Blond Hair",
      },
      {
        emoji: "👱‍♂️",
        title: "Man: Blond Hair",
      },
      {
        emoji: "🧓",
        title: "Older Person",
      },
      {
        emoji: "👴",
        title: "Old Man",
      },
      {
        emoji: "👵",
        title: "Old Woman",
      },
      {
        emoji: "🙍",
        title: "Person Frowning",
      },
      {
        emoji: "🙍‍♂️",
        title: "Man Frowning",
      },
      {
        emoji: "🙍‍♀️",
        title: "Woman Frowning",
      },
      {
        emoji: "🙎",
        title: "Person Pouting",
      },
      {
        emoji: "🙎‍♂️",
        title: "Man Pouting",
      },
      {
        emoji: "🙎‍♀️",
        title: "Woman Pouting",
      },
      {
        emoji: "🙅",
        title: "Person Gesturing No",
      },
      {
        emoji: "🙅‍♂️",
        title: "Man Gesturing No",
      },
      {
        emoji: "🙅‍♀️",
        title: "Woman Gesturing No",
      },
      {
        emoji: "🙆",
        title: "Person Gesturing OK",
      },
      {
        emoji: "🙆‍♂️",
        title: "Man Gesturing OK",
      },
      {
        emoji: "🙆‍♀️",
        title: "Woman Gesturing OK",
      },
      {
        emoji: "💁",
        title: "Person Tipping Hand",
      },
      {
        emoji: "💁‍♂️",
        title: "Man Tipping Hand",
      },
      {
        emoji: "💁‍♀️",
        title: "Woman Tipping Hand",
      },
      {
        emoji: "🙋",
        title: "Person Raising Hand",
      },
      {
        emoji: "🙋‍♂️",
        title: "Man Raising Hand",
      },
      {
        emoji: "🙋‍♀️",
        title: "Woman Raising Hand",
      },
      {
        emoji: "🧏",
        title: "Deaf Person",
      },
      {
        emoji: "🧏‍♂️",
        title: "Deaf Man",
      },
      {
        emoji: "🧏‍♀️",
        title: "Deaf Woman",
      },
      {
        emoji: "🙇",
        title: "Person Bowing",
      },
      {
        emoji: "🙇‍♂️",
        title: "Man Bowing",
      },
      {
        emoji: "🙇‍♀️",
        title: "Woman Bowing",
      },
      {
        emoji: "🤦",
        title: "Person Facepalming",
      },
      {
        emoji: "🤦‍♂️",
        title: "Man Facepalming",
      },
      {
        emoji: "🤦‍♀️",
        title: "Woman Facepalming",
      },
      {
        emoji: "🤷",
        title: "Person Shrugging",
      },
      {
        emoji: "🤷‍♂️",
        title: "Man Shrugging",
      },
      {
        emoji: "🤷‍♀️",
        title: "Woman Shrugging",
      },
      {
        emoji: "🧑‍⚕️",
        title: "Health Worker",
      },
      {
        emoji: "👨‍⚕️",
        title: "Man Health Worker",
      },
      {
        emoji: "👩‍⚕️",
        title: "Woman Health Worker",
      },
      {
        emoji: "🧑‍🎓",
        title: "Student",
      },
      {
        emoji: "👨‍🎓",
        title: "Man Student",
      },
      {
        emoji: "👩‍🎓",
        title: "Woman Student",
      },
      {
        emoji: "🧑‍🏫",
        title: "Teacher",
      },
      {
        emoji: "👨‍🏫",
        title: "Man Teacher",
      },
      {
        emoji: "👩‍🏫",
        title: "Woman Teacher",
      },
      {
        emoji: "🧑‍⚖️",
        title: "Judge",
      },
      {
        emoji: "👨‍⚖️",
        title: "Man Judge",
      },
      {
        emoji: "👩‍⚖️",
        title: "Woman Judge",
      },
      {
        emoji: "🧑‍🌾",
        title: "Farmer",
      },
      {
        emoji: "👨‍🌾",
        title: "Man Farmer",
      },
      {
        emoji: "👩‍🌾",
        title: "Woman Farmer",
      },
      {
        emoji: "🧑‍🍳",
        title: "Cook",
      },
      {
        emoji: "👨‍🍳",
        title: "Man Cook",
      },
      {
        emoji: "👩‍🍳",
        title: "Woman Cook",
      },
      {
        emoji: "🧑‍🔧",
        title: "Mechanic",
      },
      {
        emoji: "👨‍🔧",
        title: "Man Mechanic",
      },
      {
        emoji: "👩‍🔧",
        title: "Woman Mechanic",
      },
      {
        emoji: "🧑‍🏭",
        title: "Factory Worker",
      },
      {
        emoji: "👨‍🏭",
        title: "Man Factory Worker",
      },
      {
        emoji: "👩‍🏭",
        title: "Woman Factory Worker",
      },
      {
        emoji: "🧑‍💼",
        title: "Office Worker",
      },
      {
        emoji: "👨‍💼",
        title: "Man Office Worker",
      },
      {
        emoji: "👩‍💼",
        title: "Woman Office Worker",
      },
      {
        emoji: "🧑‍🔬",
        title: "Scientist",
      },
      {
        emoji: "👨‍🔬",
        title: "Man Scientist",
      },
      {
        emoji: "👩‍🔬",
        title: "Woman Scientist",
      },
      {
        emoji: "🧑‍💻",
        title: "Technologist",
      },
      {
        emoji: "👨‍💻",
        title: "Man Technologist",
      },
      {
        emoji: "👩‍💻",
        title: "Woman Technologist",
      },
      {
        emoji: "🧑‍🎤",
        title: "Singer",
      },
      {
        emoji: "👨‍🎤",
        title: "Man Singer",
      },
      {
        emoji: "👩‍🎤",
        title: "Woman Singer",
      },
      {
        emoji: "🧑‍🎨",
        title: "Artist",
      },
      {
        emoji: "👨‍🎨",
        title: "Man Artist",
      },
      {
        emoji: "👩‍🎨",
        title: "Woman Artist",
      },
      {
        emoji: "🧑‍✈️",
        title: "Pilot",
      },
      {
        emoji: "👨‍✈️",
        title: "Man Pilot",
      },
      {
        emoji: "👩‍✈️",
        title: "Woman Pilot",
      },
      {
        emoji: "🧑‍🚀",
        title: "Astronaut",
      },
      {
        emoji: "👨‍🚀",
        title: "Man Astronaut",
      },
      {
        emoji: "👩‍🚀",
        title: "Woman Astronaut",
      },
      {
        emoji: "🧑‍🚒",
        title: "Firefighter",
      },
      {
        emoji: "👨‍🚒",
        title: "Man Firefighter",
      },
      {
        emoji: "👩‍🚒",
        title: "Woman Firefighter",
      },
      {
        emoji: "👮",
        title: "Police Officer",
      },
      {
        emoji: "👮‍♂️",
        title: "Man Police Officer",
      },
      {
        emoji: "👮‍♀️",
        title: "Woman Police Officer",
      },
      {
        emoji: "🕵️",
        title: "Detective",
      },
      {
        emoji: "🕵️‍♂️",
        title: "Man Detective",
      },
      {
        emoji: "🕵️‍♀️",
        title: "Woman Detective",
      },
      {
        emoji: "💂",
        title: "Guard",
      },
      {
        emoji: "💂‍♂️",
        title: "Man Guard",
      },
      {
        emoji: "💂‍♀️",
        title: "Woman Guard",
      },
      {
        emoji: "🥷",
        title: "Ninja",
      },
      {
        emoji: "👷",
        title: "Construction Worker",
      },
      {
        emoji: "👷‍♂️",
        title: "Man Construction Worker",
      },
      {
        emoji: "👷‍♀️",
        title: "Woman Construction Worker",
      },
      {
        emoji: "🤴",
        title: "Prince",
      },
      {
        emoji: "👸",
        title: "Princess",
      },
      {
        emoji: "👳",
        title: "Person Wearing Turban",
      },
      {
        emoji: "👳‍♂️",
        title: "Man Wearing Turban",
      },
      {
        emoji: "👳‍♀️",
        title: "Woman Wearing Turban",
      },
      {
        emoji: "👲",
        title: "Person with Skullcap",
      },
      {
        emoji: "🧕",
        title: "Woman with Headscarf",
      },
      {
        emoji: "🤵",
        title: "Person in Tuxedo",
      },
      {
        emoji: "🤵‍♂️",
        title: "Man in Tuxedo",
      },
      {
        emoji: "🤵‍♀️",
        title: "Woman in Tuxedo",
      },
      {
        emoji: "👰",
        title: "Person with Veil",
      },
      {
        emoji: "👰‍♂️",
        title: "Man with Veil",
      },
      {
        emoji: "👰‍♀️",
        title: "Woman with Veil",
      },
      {
        emoji: "🤰",
        title: "Pregnant Woman",
      },
      {
        emoji: "🤱",
        title: "Breast-Feeding",
      },
      {
        emoji: "👩‍🍼",
        title: "Woman Feeding Baby",
      },
      {
        emoji: "👨‍🍼",
        title: "Man Feeding Baby",
      },
      {
        emoji: "🧑‍🍼",
        title: "Person Feeding Baby",
      },
      {
        emoji: "👼",
        title: "Baby Angel",
      },
      {
        emoji: "🎅",
        title: "Santa Claus",
      },
      {
        emoji: "🤶",
        title: "Mrs. Claus",
      },
      {
        emoji: "🧑‍🎄",
        title: "Mx Claus",
      },
      {
        emoji: "🦸",
        title: "Superhero",
      },
      {
        emoji: "🦸‍♂️",
        title: "Man Superhero",
      },
      {
        emoji: "🦸‍♀️",
        title: "Woman Superhero",
      },
      {
        emoji: "🦹",
        title: "Supervillain",
      },
      {
        emoji: "🦹‍♂️",
        title: "Man Supervillain",
      },
      {
        emoji: "🦹‍♀️",
        title: "Woman Supervillain",
      },
      {
        emoji: "🧙",
        title: "Mage",
      },
      {
        emoji: "🧙‍♂️",
        title: "Man Mage",
      },
      {
        emoji: "🧙‍♀️",
        title: "Woman Mage",
      },
      {
        emoji: "🧚",
        title: "Fairy",
      },
      {
        emoji: "🧚‍♂️",
        title: "Man Fairy",
      },
      {
        emoji: "🧚‍♀️",
        title: "Woman Fairy",
      },
      {
        emoji: "🧛",
        title: "Vampire",
      },
      {
        emoji: "🧛‍♂️",
        title: "Man Vampire",
      },
      {
        emoji: "🧛‍♀️",
        title: "Woman Vampire",
      },
      {
        emoji: "🧜",
        title: "Merperson",
      },
      {
        emoji: "🧜‍♂️",
        title: "Merman",
      },
      {
        emoji: "🧜‍♀️",
        title: "Mermaid",
      },
      {
        emoji: "🧝",
        title: "Elf",
      },
      {
        emoji: "🧝‍♂️",
        title: "Man Elf",
      },
      {
        emoji: "🧝‍♀️",
        title: "Woman Elf",
      },
      {
        emoji: "🧞",
        title: "Genie",
      },
      {
        emoji: "🧞‍♂️",
        title: "Man Genie",
      },
      {
        emoji: "🧞‍♀️",
        title: "Woman Genie",
      },
      {
        emoji: "🧟",
        title: "Zombie",
      },
      {
        emoji: "🧟‍♂️",
        title: "Man Zombie",
      },
      {
        emoji: "🧟‍♀️",
        title: "Woman Zombie",
      },
      {
        emoji: "💆",
        title: "Person Getting Massage",
      },
      {
        emoji: "💆‍♂️",
        title: "Man Getting Massage",
      },
      {
        emoji: "💆‍♀️",
        title: "Woman Getting Massage",
      },
      {
        emoji: "💇",
        title: "Person Getting Haircut",
      },
      {
        emoji: "💇‍♂️",
        title: "Man Getting Haircut",
      },
      {
        emoji: "💇‍♀️",
        title: "Woman Getting Haircut",
      },
      {
        emoji: "🚶",
        title: "Person Walking",
      },
      {
        emoji: "🚶‍♂️",
        title: "Man Walking",
      },
      {
        emoji: "🚶‍♀️",
        title: "Woman Walking",
      },
      {
        emoji: "🧍",
        title: "Person Standing",
      },
      {
        emoji: "🧍‍♂️",
        title: "Man Standing",
      },
      {
        emoji: "🧍‍♀️",
        title: "Woman Standing",
      },
      {
        emoji: "🧎",
        title: "Person Kneeling",
      },
      {
        emoji: "🧎‍♂️",
        title: "Man Kneeling",
      },
      {
        emoji: "🧎‍♀️",
        title: "Woman Kneeling",
      },
      {
        emoji: "🧑‍🦯",
        title: "Person with White Cane",
      },
      {
        emoji: "👨‍🦯",
        title: "Man with White Cane",
      },
      {
        emoji: "👩‍🦯",
        title: "Woman with White Cane",
      },
      {
        emoji: "🧑‍🦼",
        title: "Person in Motorized Wheelchair",
      },
      {
        emoji: "👨‍🦼",
        title: "Man in Motorized Wheelchair",
      },
      {
        emoji: "👩‍🦼",
        title: "Woman in Motorized Wheelchair",
      },
      {
        emoji: "🧑‍🦽",
        title: "Person in Manual Wheelchair",
      },
      {
        emoji: "👨‍🦽",
        title: "Man in Manual Wheelchair",
      },
      {
        emoji: "👩‍🦽",
        title: "Woman in Manual Wheelchair",
      },
      {
        emoji: "🏃",
        title: "Person Running",
      },
      {
        emoji: "🏃‍♂️",
        title: "Man Running",
      },
      {
        emoji: "🏃‍♀️",
        title: "Woman Running",
      },
      {
        emoji: "💃",
        title: "Woman Dancing",
      },
      {
        emoji: "🕺",
        title: "Man Dancing",
      },
      {
        emoji: "🕴️",
        title: "Person in Suit Levitating",
      },
      {
        emoji: "👯",
        title: "People with Bunny Ears",
      },
      {
        emoji: "👯‍♂️",
        title: "Men with Bunny Ears",
      },
      {
        emoji: "👯‍♀️",
        title: "Women with Bunny Ears",
      },
      {
        emoji: "🧖",
        title: "Person in Steamy Room",
      },
      {
        emoji: "🧖‍♂️",
        title: "Man in Steamy Room",
      },
      {
        emoji: "🧖‍♀️",
        title: "Woman in Steamy Room",
      },
      {
        emoji: "🧘",
        title: "Person in Lotus Position",
      },
      {
        emoji: "🧑‍🤝‍🧑",
        title: "People Holding Hands",
      },
      {
        emoji: "👭",
        title: "Women Holding Hands",
      },
      {
        emoji: "👫",
        title: "Woman and Man Holding Hands",
      },
      {
        emoji: "👬",
        title: "Men Holding Hands",
      },
      {
        emoji: "💏",
        title: "Kiss",
      },
      {
        emoji: "👩‍❤️‍💋‍👨",
        title: "Kiss: Woman, Man",
      },
      {
        emoji: "👨‍❤️‍💋‍👨",
        title: "Kiss: Man, Man",
      },
      {
        emoji: "👩‍❤️‍💋‍👩",
        title: "Kiss: Woman, Woman",
      },
      {
        emoji: "💑",
        title: "Couple with Heart",
      },
      {
        emoji: "👩‍❤️‍👨",
        title: "Couple with Heart: Woman, Man",
      },
      {
        emoji: "👨‍❤️‍👨",
        title: "Couple with Heart: Man, Man",
      },
      {
        emoji: "👩‍❤️‍👩",
        title: "Couple with Heart: Woman, Woman",
      },
      {
        emoji: "👪",
        title: "Family",
      },
      {
        emoji: "👨‍👩‍👦",
        title: "Family: Man, Woman, Boy",
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Family: Man, Woman, Girl",
      },
      {
        emoji: "👨‍👩‍👧‍👦",
        title: "Family: Man, Woman, Girl, Boy",
      },
      {
        emoji: "👨‍👩‍👦‍👦",
        title: "Family: Man, Woman, Boy, Boy",
      },
      {
        emoji: "👨‍👩‍👧‍👧",
        title: "Family: Man, Woman, Girl, Girl",
      },
      {
        emoji: "👨‍👨‍👦",
        title: "Family: Man, Man, Boy",
      },
      {
        emoji: "👨‍👨‍👧",
        title: "Family: Man, Man, Girl",
      },
      {
        emoji: "👨‍👨‍👧‍👦",
        title: "Family: Man, Man, Girl, Boy",
      },
      {
        emoji: "👨‍👨‍👦‍👦",
        title: "Family: Man, Man, Boy, Boy",
      },
      {
        emoji: "👨‍👨‍👧‍👧",
        title: "Family: Man, Man, Girl, Girl",
      },
      {
        emoji: "👩‍👩‍👦",
        title: "Family: Woman, Woman, Boy",
      },
      {
        emoji: "👩‍👩‍👧",
        title: "Family: Woman, Woman, Girl",
      },
      {
        emoji: "👩‍👩‍👧‍👦",
        title: "Family: Woman, Woman, Girl, Boy",
      },
      {
        emoji: "👩‍👩‍👦‍👦",
        title: "Family: Woman, Woman, Boy, Boy",
      },
      {
        emoji: "👩‍👩‍👧‍👧",
        title: "Family: Woman, Woman, Girl, Girl",
      },
      {
        emoji: "👨‍👦",
        title: "Family: Man, Boy",
      },
      {
        emoji: "👨‍👦‍👦",
        title: "Family: Man, Boy, Boy",
      },
      {
        emoji: "👨‍👧",
        title: "Family: Man, Girl",
      },
      {
        emoji: "👨‍👧‍👦",
        title: "Family: Man, Girl, Boy",
      },
      {
        emoji: "👨‍👧‍👧",
        title: "Family: Man, Girl, Girl",
      },
      {
        emoji: "👩‍👦",
        title: "Family: Woman, Boy",
      },
      {
        emoji: "👩‍👦‍👦",
        title: "Family: Woman, Boy, Boy",
      },
      {
        emoji: "👩‍👧",
        title: "Family: Woman, Girl",
      },
      {
        emoji: "👩‍👧‍👦",
        title: "Family: Woman, Girl, Boy",
      },
      {
        emoji: "👩‍👧‍👧",
        title: "Family: Woman, Girl, Girl",
      },
      {
        emoji: "🗣️",
        title: "Speaking Head",
      },
      {
        emoji: "👤",
        title: "Bust in Silhouette",
      },
      {
        emoji: "👥",
        title: "Busts in Silhouette",
      },
      {
        emoji: "🫂",
        title: "People Hugging",
      },
      {
        emoji: "👣",
        title: "Footprints",
      },
      {
        emoji: "🧳",
        title: "Luggage",
      },
      {
        emoji: "🌂",
        title: "Closed Umbrella",
      },
      {
        emoji: "☂️",
        title: "Umbrella",
      },
      {
        emoji: "🎃",
        title: "Jack-O-Lantern",
      },
      {
        emoji: "🧵",
        title: "Thread",
      },
      {
        emoji: "🧶",
        title: "Yarn",
      },
      {
        emoji: "👓",
        title: "Glasses",
      },
      {
        emoji: "🕶️",
        title: "Sunglasses",
      },
      {
        emoji: "🥽",
        title: "Goggles",
      },
      {
        emoji: "🥼",
        title: "Lab Coat",
      },
      {
        emoji: "🦺",
        title: "Safety Vest",
      },
      {
        emoji: "👔",
        title: "Necktie",
      },
      {
        emoji: "👕",
        title: "T-Shirt",
      },
      {
        emoji: "👖",
        title: "Jeans",
      },
      {
        emoji: "🧣",
        title: "Scarf",
      },
      {
        emoji: "🧤",
        title: "Gloves",
      },
      {
        emoji: "🧥",
        title: "Coat",
      },
      {
        emoji: "🧦",
        title: "Socks",
      },
      {
        emoji: "👗",
        title: "Dress",
      },
      {
        emoji: "👘",
        title: "Kimono",
      },
      {
        emoji: "🥻",
        title: "Sari",
      },
      {
        emoji: "🩱",
        title: "One-Piece Swimsuit",
      },
      {
        emoji: "🩲",
        title: "Briefs",
      },
      {
        emoji: "🩳",
        title: "Shorts",
      },
      {
        emoji: "👙",
        title: "Bikini",
      },
      {
        emoji: "👚",
        title: "Woman’s Clothes",
      },
      {
        emoji: "👛",
        title: "Purse",
      },
      {
        emoji: "👜",
        title: "Handbag",
      },
      {
        emoji: "👝",
        title: "Clutch Bag",
      },
      {
        emoji: "🎒",
        title: "Backpack",
      },
      {
        emoji: "🩴",
        title: "Thong Sandal",
      },
      {
        emoji: "👞",
        title: "Man’s Shoe",
      },
      {
        emoji: "👟",
        title: "Running Shoe",
      },
      {
        emoji: "🥾",
        title: "Hiking Boot",
      },
      {
        emoji: "🥿",
        title: "Flat Shoe",
      },
      {
        emoji: "👠",
        title: "High-Heeled Shoe",
      },
      {
        emoji: "👡",
        title: "Woman’s Sandal",
      },
      {
        emoji: "🩰",
        title: "Ballet Shoes",
      },
      {
        emoji: "👢",
        title: "Woman’s Boot",
      },
      {
        emoji: "👑",
        title: "Crown",
      },
      {
        emoji: "👒",
        title: "Woman’s Hat",
      },
      {
        emoji: "🎩",
        title: "Top Hat",
      },
      {
        emoji: "🎓",
        title: "Graduation Cap",
      },
      {
        emoji: "🧢",
        title: "Billed Cap",
      },
      {
        emoji: "🪖",
        title: "Military Helmet",
      },
      {
        emoji: "⛑️",
        title: "Rescue Worker’s Helmet",
      },
      {
        emoji: "💄",
        title: "Lipstick",
      },
      {
        emoji: "💍",
        title: "Ring",
      },
      {
        emoji: "💼",
        title: "Briefcase",
      },
      {
        emoji: "🩸",
        title: "Drop of Blood",
      },
    ],
    Nature: [
      {
        emoji: "🙈",
        title: "See-No-Evil Monkey",
      },
      {
        emoji: "🙉",
        title: "Hear-No-Evil Monkey",
      },
      {
        emoji: "🙊",
        title: "Speak-No-Evil Monkey",
      },
      {
        emoji: "💥",
        title: "Collision",
      },
      {
        emoji: "💫",
        title: "Dizzy",
      },
      {
        emoji: "💦",
        title: "Sweat Droplets",
      },
      {
        emoji: "💨",
        title: "Dashing Away",
      },
      {
        emoji: "🐵",
        title: "Monkey Face",
      },
      {
        emoji: "🐒",
        title: "Monkey",
      },
      {
        emoji: "🦍",
        title: "Gorilla",
      },
      {
        emoji: "🦧",
        title: "Orangutan",
      },
      {
        emoji: "🐶",
        title: "Dog Face",
      },
      {
        emoji: "🐕",
        title: "Dog",
      },
      {
        emoji: "🦮",
        title: "Guide Dog",
      },
      {
        emoji: "🐕‍🦺",
        title: "Service Dog",
      },
      {
        emoji: "🐩",
        title: "Poodle",
      },
      {
        emoji: "🐺",
        title: "Wolf",
      },
      {
        emoji: "🦊",
        title: "Fox",
      },
      {
        emoji: "🦝",
        title: "Raccoon",
      },
      {
        emoji: "🐱",
        title: "Cat Face",
      },
      {
        emoji: "🐈",
        title: "Cat",
      },
      {
        emoji: "🐈‍⬛",
        title: "Black Cat",
      },
      {
        emoji: "🦁",
        title: "Lion",
      },
      {
        emoji: "🐯",
        title: "Tiger Face",
      },
      {
        emoji: "🐅",
        title: "Tiger",
      },
      {
        emoji: "🐆",
        title: "Leopard",
      },
      {
        emoji: "🐴",
        title: "Horse Face",
      },
      {
        emoji: "🐎",
        title: "Horse",
      },
      {
        emoji: "🦄",
        title: "Unicorn",
      },
      {
        emoji: "🦓",
        title: "Zebra",
      },
      {
        emoji: "🦌",
        title: "Deer",
      },
      {
        emoji: "🦬",
        title: "Bison",
      },
      {
        emoji: "🐮",
        title: "Cow Face",
      },
      {
        emoji: "🐂",
        title: "Ox",
      },
      {
        emoji: "🐃",
        title: "Water Buffalo",
      },
      {
        emoji: "🐄",
        title: "Cow",
      },
      {
        emoji: "🐷",
        title: "Pig Face",
      },
      {
        emoji: "🐖",
        title: "Pig",
      },
      {
        emoji: "🐗",
        title: "Boar",
      },
      {
        emoji: "🐽",
        title: "Pig Nose",
      },
      {
        emoji: "🐏",
        title: "Ram",
      },
      {
        emoji: "🐑",
        title: "Ewe",
      },
      {
        emoji: "🐐",
        title: "Goat",
      },
      {
        emoji: "🐪",
        title: "Camel",
      },
      {
        emoji: "🐫",
        title: "Two-Hump Camel",
      },
      {
        emoji: "🦙",
        title: "Llama",
      },
      {
        emoji: "🦒",
        title: "Giraffe",
      },
      {
        emoji: "🐘",
        title: "Elephant",
      },
      {
        emoji: "🦣",
        title: "Mammoth",
      },
      {
        emoji: "🦏",
        title: "Rhinoceros",
      },
      {
        emoji: "🦛",
        title: "Hippopotamus",
      },
      {
        emoji: "🐭",
        title: "Mouse Face",
      },
      {
        emoji: "🐁",
        title: "Mouse",
      },
      {
        emoji: "🐀",
        title: "Rat",
      },
      {
        emoji: "🐹",
        title: "Hamster",
      },
      {
        emoji: "🐰",
        title: "Rabbit Face",
      },
      {
        emoji: "🐇",
        title: "Rabbit",
      },
      {
        emoji: "🐿️",
        title: "Chipmunk",
      },
      {
        emoji: "🦫",
        title: "Beaver",
      },
      {
        emoji: "🦔",
        title: "Hedgehog",
      },
      {
        emoji: "🦇",
        title: "Bat",
      },
      {
        emoji: "🐻",
        title: "Bear",
      },
      {
        emoji: "🐻‍❄️",
        title: "Polar Bear",
      },
      {
        emoji: "🐨",
        title: "Koala",
      },
      {
        emoji: "🐼",
        title: "Panda",
      },
      {
        emoji: "🦥",
        title: "Sloth",
      },
      {
        emoji: "🦦",
        title: "Otter",
      },
      {
        emoji: "🦨",
        title: "Skunk",
      },
      {
        emoji: "🦘",
        title: "Kangaroo",
      },
      {
        emoji: "🦡",
        title: "Badger",
      },
      {
        emoji: "🐾",
        title: "Paw Prints",
      },
      {
        emoji: "🦃",
        title: "Turkey",
      },
      {
        emoji: "🐔",
        title: "Chicken",
      },
      {
        emoji: "🐓",
        title: "Rooster",
      },
      {
        emoji: "🐣",
        title: "Hatching Chick",
      },
      {
        emoji: "🐤",
        title: "Baby Chick",
      },
      {
        emoji: "🐥",
        title: "Front-Facing Baby Chick",
      },
      {
        emoji: "🐦",
        title: "Bird",
      },
      {
        emoji: "🐧",
        title: "Penguin",
      },
      {
        emoji: "🕊️",
        title: "Dove",
      },
      {
        emoji: "🦅",
        title: "Eagle",
      },
      {
        emoji: "🦆",
        title: "Duck",
      },
      {
        emoji: "🦢",
        title: "Swan",
      },
      {
        emoji: "🦉",
        title: "Owl",
      },
      {
        emoji: "🦤",
        title: "Dodo",
      },
      {
        emoji: "🪶",
        title: "Feather",
      },
      {
        emoji: "🦩",
        title: "Flamingo",
      },
      {
        emoji: "🦚",
        title: "Peacock",
      },
      {
        emoji: "🦜",
        title: "Parrot",
      },
      {
        emoji: "🐸",
        title: "Frog",
      },
      {
        emoji: "🐊",
        title: "Crocodile",
      },
      {
        emoji: "🐢",
        title: "Turtle",
      },
      {
        emoji: "🦎",
        title: "Lizard",
      },
      {
        emoji: "🐍",
        title: "Snake",
      },
      {
        emoji: "🐲",
        title: "Dragon Face",
      },
      {
        emoji: "🐉",
        title: "Dragon",
      },
      {
        emoji: "🦕",
        title: "Sauropod",
      },
      {
        emoji: "🦖",
        title: "T-Rex",
      },
      {
        emoji: "🐳",
        title: "Spouting Whale",
      },
      {
        emoji: "🐋",
        title: "Whale",
      },
      {
        emoji: "🐬",
        title: "Dolphin",
      },
      {
        emoji: "🦭",
        title: "Seal",
      },
      {
        emoji: "🐟",
        title: "Fish",
      },
      {
        emoji: "🐠",
        title: "Tropical Fish",
      },
      {
        emoji: "🐡",
        title: "Blowfish",
      },
      {
        emoji: "🦈",
        title: "Shark",
      },
      {
        emoji: "🐙",
        title: "Octopus",
      },
      {
        emoji: "🐚",
        title: "Spiral Shell",
      },
      {
        emoji: "🐌",
        title: "Snail",
      },
      {
        emoji: "🦋",
        title: "Butterfly",
      },
      {
        emoji: "🐛",
        title: "Bug",
      },
      {
        emoji: "🐜",
        title: "Ant",
      },
      {
        emoji: "🐝",
        title: "Honeybee",
      },
      {
        emoji: "🪲",
        title: "Beetle",
      },
      {
        emoji: "🐞",
        title: "Lady Beetle",
      },
      {
        emoji: "🦗",
        title: "Cricket",
      },
      {
        emoji: "🪳",
        title: "Cockroach",
      },
      {
        emoji: "🕷️",
        title: "Spider",
      },
      {
        emoji: "🕸️",
        title: "Spider Web",
      },
      {
        emoji: "🦂",
        title: "Scorpion",
      },
      {
        emoji: "🦟",
        title: "Mosquito",
      },
      {
        emoji: "🪰",
        title: "Fly",
      },
      {
        emoji: "🪱",
        title: "Worm",
      },
      {
        emoji: "🦠",
        title: "Microbe",
      },
      {
        emoji: "💐",
        title: "Bouquet",
      },
      {
        emoji: "🌸",
        title: "Cherry Blossom",
      },
      {
        emoji: "💮",
        title: "White Flower",
      },
      {
        emoji: "🏵️",
        title: "Rosette",
      },
      {
        emoji: "🌹",
        title: "Rose",
      },
      {
        emoji: "🥀",
        title: "Wilted Flower",
      },
      {
        emoji: "🌺",
        title: "Hibiscus",
      },
      {
        emoji: "🌻",
        title: "Sunflower",
      },
      {
        emoji: "🌼",
        title: "Blossom",
      },
      {
        emoji: "🌷",
        title: "Tulip",
      },
      {
        emoji: "🌱",
        title: "Seedling",
      },
      {
        emoji: "🪴",
        title: "Potted Plant",
      },
      {
        emoji: "🌲",
        title: "Evergreen Tree",
      },
      {
        emoji: "🌳",
        title: "Deciduous Tree",
      },
      {
        emoji: "🌴",
        title: "Palm Tree",
      },
      {
        emoji: "🌵",
        title: "Cactus",
      },
      {
        emoji: "🌾",
        title: "Sheaf of Rice",
      },
      {
        emoji: "🌿",
        title: "Herb",
      },
      {
        emoji: "☘️",
        title: "Shamrock",
      },
      {
        emoji: "🍀",
        title: "Four Leaf Clover",
      },
      {
        emoji: "🍁",
        title: "Maple Leaf",
      },
      {
        emoji: "🍂",
        title: "Fallen Leaf",
      },
      {
        emoji: "🍃",
        title: "Leaf Fluttering in Wind",
      },
      {
        emoji: "🍄",
        title: "Mushroom",
      },
      {
        emoji: "🌰",
        title: "Chestnut",
      },
      {
        emoji: "🦀",
        title: "Crab",
      },
      {
        emoji: "🦞",
        title: "Lobster",
      },
      {
        emoji: "🦐",
        title: "Shrimp",
      },
      {
        emoji: "🦑",
        title: "Squid",
      },
      {
        emoji: "🌍",
        title: "Globe Showing Europe-Africa",
      },
      {
        emoji: "🌎",
        title: "Globe Showing Americas",
      },
      {
        emoji: "🌏",
        title: "Globe Showing Asia-Australia",
      },
      {
        emoji: "🌐",
        title: "Globe with Meridians",
      },
      {
        emoji: "🪨",
        title: "Rock",
      },
      {
        emoji: "🌑",
        title: "New Moon",
      },
      {
        emoji: "🌒",
        title: "Waxing Crescent Moon",
      },
      {
        emoji: "🌓",
        title: "First Quarter Moon",
      },
      {
        emoji: "🌔",
        title: "Waxing Gibbous Moon",
      },
      {
        emoji: "🌕",
        title: "Full Moon",
      },
      {
        emoji: "🌖",
        title: "Waning Gibbous Moon",
      },
      {
        emoji: "🌗",
        title: "Last Quarter Moon",
      },
      {
        emoji: "🌘",
        title: "Waning Crescent Moon",
      },
      {
        emoji: "🌙",
        title: "Crescent Moon",
      },
      {
        emoji: "🌚",
        title: "New Moon Face",
      },
      {
        emoji: "🌛",
        title: "First Quarter Moon Face",
      },
      {
        emoji: "🌜",
        title: "Last Quarter Moon Face",
      },
      {
        emoji: "☀️",
        title: "Sun",
      },
      {
        emoji: "🌝",
        title: "Full Moon Face",
      },
      {
        emoji: "🌞",
        title: "Sun with Face",
      },
      {
        emoji: "⭐",
        title: "Star",
      },
      {
        emoji: "🌟",
        title: "Glowing Star",
      },
      {
        emoji: "🌠",
        title: "Shooting Star",
      },
      {
        emoji: "☁️",
        title: "Cloud",
      },
      {
        emoji: "⛅",
        title: "Sun Behind Cloud",
      },
      {
        emoji: "⛈️",
        title: "Cloud with Lightning and Rain",
      },
      {
        emoji: "🌤️",
        title: "Sun Behind Small Cloud",
      },
      {
        emoji: "🌥️",
        title: "Sun Behind Large Cloud",
      },
      {
        emoji: "🌦️",
        title: "Sun Behind Rain Cloud",
      },
      {
        emoji: "🌧️",
        title: "Cloud with Rain",
      },
      {
        emoji: "🌨️",
        title: "Cloud with Snow",
      },
      {
        emoji: "🌩️",
        title: "Cloud with Lightning",
      },
      {
        emoji: "🌪️",
        title: "Tornado",
      },
      {
        emoji: "🌫️",
        title: "Fog",
      },
      {
        emoji: "🌬️",
        title: "Wind Face",
      },
      {
        emoji: "🌈",
        title: "Rainbow",
      },
      {
        emoji: "☂️",
        title: "Umbrella",
      },
      {
        emoji: "☔",
        title: "Umbrella with Rain Drops",
      },
      {
        emoji: "⚡",
        title: "High Voltage",
      },
      {
        emoji: "❄️",
        title: "Snowflake",
      },
      {
        emoji: "☃️",
        title: "Snowman",
      },
      {
        emoji: "⛄",
        title: "Snowman Without Snow",
      },
      {
        emoji: "☄️",
        title: "Comet",
      },
      {
        emoji: "🔥",
        title: "Fire",
      },
      {
        emoji: "💧",
        title: "Droplet",
      },
      {
        emoji: "🌊",
        title: "Water Wave",
      },
      {
        emoji: "🎄",
        title: "Christmas Tree",
      },
      {
        emoji: "✨",
        title: "Sparkles",
      },
      {
        emoji: "🎋",
        title: "Tanabata Tree",
      },
      {
        emoji: "🎍",
        title: "Pine Decoration",
      },
    ],
    "Food-dring": [
      {
        emoji: "🍇",
        title: "Grapes",
      },
      {
        emoji: "🍈",
        title: "Melon",
      },
      {
        emoji: "🍉",
        title: "Watermelon",
      },
      {
        emoji: "🍊",
        title: "Tangerine",
      },
      {
        emoji: "🍋",
        title: "Lemon",
      },
      {
        emoji: "🍌",
        title: "Banana",
      },
      {
        emoji: "🍍",
        title: "Pineapple",
      },
      {
        emoji: "🥭",
        title: "Mango",
      },
      {
        emoji: "🍎",
        title: "Red Apple",
      },
      {
        emoji: "🍏",
        title: "Green Apple",
      },
      {
        emoji: "🍐",
        title: "Pear",
      },
      {
        emoji: "🍑",
        title: "Peach",
      },
      {
        emoji: "🍒",
        title: "Cherries",
      },
      {
        emoji: "🍓",
        title: "Strawberry",
      },
      {
        emoji: "🫐",
        title: "Blueberries",
      },
      {
        emoji: "🥝",
        title: "Kiwi Fruit",
      },
      {
        emoji: "🍅",
        title: "Tomato",
      },
      {
        emoji: "🫒",
        title: "Olive",
      },
      {
        emoji: "🥥",
        title: "Coconut",
      },
      {
        emoji: "🥑",
        title: "Avocado",
      },
      {
        emoji: "🍆",
        title: "Eggplant",
      },
      {
        emoji: "🥔",
        title: "Potato",
      },
      {
        emoji: "🥕",
        title: "Carrot",
      },
      {
        emoji: "🌽",
        title: "Ear of Corn",
      },
      {
        emoji: "🌶️",
        title: "Hot Pepper",
      },
      {
        emoji: "🫑",
        title: "Bell Pepper",
      },
      {
        emoji: "🥒",
        title: "Cucumber",
      },
      {
        emoji: "🥬",
        title: "Leafy Green",
      },
      {
        emoji: "🥦",
        title: "Broccoli",
      },
      {
        emoji: "🧄",
        title: "Garlic",
      },
      {
        emoji: "🧅",
        title: "Onion",
      },
      {
        emoji: "🍄",
        title: "Mushroom",
      },
      {
        emoji: "🥜",
        title: "Peanuts",
      },
      {
        emoji: "🌰",
        title: "Chestnut",
      },
      {
        emoji: "🍞",
        title: "Bread",
      },
      {
        emoji: "🥐",
        title: "Croissant",
      },
      {
        emoji: "🥖",
        title: "Baguette Bread",
      },
      {
        emoji: "🫓",
        title: "Flatbread",
      },
      {
        emoji: "🥨",
        title: "Pretzel",
      },
      {
        emoji: "🥯",
        title: "Bagel",
      },
      {
        emoji: "🥞",
        title: "Pancakes",
      },
      {
        emoji: "🧇",
        title: "Waffle",
      },
      {
        emoji: "🧀",
        title: "Cheese Wedge",
      },
      {
        emoji: "🍖",
        title: "Meat on Bone",
      },
      {
        emoji: "🍗",
        title: "Poultry Leg",
      },
      {
        emoji: "🥩",
        title: "Cut of Meat",
      },
      {
        emoji: "🥓",
        title: "Bacon",
      },
      {
        emoji: "🍔",
        title: "Hamburger",
      },
      {
        emoji: "🍟",
        title: "French Fries",
      },
      {
        emoji: "🍕",
        title: "Pizza",
      },
      {
        emoji: "🌭",
        title: "Hot Dog",
      },
      {
        emoji: "🥪",
        title: "Sandwich",
      },
      {
        emoji: "🌮",
        title: "Taco",
      },
      {
        emoji: "🌯",
        title: "Burrito",
      },
      {
        emoji: "🫔",
        title: "Tamale",
      },
      {
        emoji: "🥙",
        title: "Stuffed Flatbread",
      },
      {
        emoji: "🧆",
        title: "Falafel",
      },
      {
        emoji: "🥚",
        title: "Egg",
      },
      {
        emoji: "🍳",
        title: "Cooking",
      },
      {
        emoji: "🥘",
        title: "Shallow Pan of Food",
      },
      {
        emoji: "🍲",
        title: "Pot of Food",
      },
      {
        emoji: "🫕",
        title: "Fondue",
      },
      {
        emoji: "🥣",
        title: "Bowl with Spoon",
      },
      {
        emoji: "🥗",
        title: "Green Salad",
      },
      {
        emoji: "🍿",
        title: "Popcorn",
      },
      {
        emoji: "🧈",
        title: "Butter",
      },
      {
        emoji: "🧂",
        title: "Salt",
      },
      {
        emoji: "🥫",
        title: "Canned Food",
      },
      {
        emoji: "🍱",
        title: "Bento Box",
      },
      {
        emoji: "🍘",
        title: "Rice Cracker",
      },
      {
        emoji: "🍙",
        title: "Rice Ball",
      },
      {
        emoji: "🍚",
        title: "Cooked Rice",
      },
      {
        emoji: "🍛",
        title: "Curry Rice",
      },
      {
        emoji: "🍜",
        title: "Steaming Bowl",
      },
      {
        emoji: "🍝",
        title: "Spaghetti",
      },
      {
        emoji: "🍠",
        title: "Roasted Sweet Potato",
      },
      {
        emoji: "🍢",
        title: "Oden",
      },
      {
        emoji: "🍣",
        title: "Sushi",
      },
      {
        emoji: "🍤",
        title: "Fried Shrimp",
      },
      {
        emoji: "🍥",
        title: "Fish Cake with Swirl",
      },
      {
        emoji: "🥮",
        title: "Moon Cake",
      },
      {
        emoji: "🍡",
        title: "Dango",
      },
      {
        emoji: "🥟",
        title: "Dumpling",
      },
      {
        emoji: "🥠",
        title: "Fortune Cookie",
      },
      {
        emoji: "🥡",
        title: "Takeout Box",
      },
      {
        emoji: "🦪",
        title: "Oyster",
      },
      {
        emoji: "🍦",
        title: "Soft Ice Cream",
      },
      {
        emoji: "🍧",
        title: "Shaved Ice",
      },
      {
        emoji: "🍨",
        title: "Ice Cream",
      },
      {
        emoji: "🍩",
        title: "Doughnut",
      },
      {
        emoji: "🍪",
        title: "Cookie",
      },
      {
        emoji: "🎂",
        title: "Birthday Cake",
      },
      {
        emoji: "🍰",
        title: "Shortcake",
      },
      {
        emoji: "🧁",
        title: "Cupcake",
      },
      {
        emoji: "🥧",
        title: "Pie",
      },
      {
        emoji: "🍫",
        title: "Chocolate Bar",
      },
      {
        emoji: "🍬",
        title: "Candy",
      },
      {
        emoji: "🍭",
        title: "Lollipop",
      },
      {
        emoji: "🍮",
        title: "Custard",
      },
      {
        emoji: "🍯",
        title: "Honey Pot",
      },
      {
        emoji: "🍼",
        title: "Baby Bottle",
      },
      {
        emoji: "🥛",
        title: "Glass of Milk",
      },
      {
        emoji: "☕",
        title: "Hot Beverage",
      },
      {
        emoji: "🫖",
        title: "Teapot",
      },
      {
        emoji: "🍵",
        title: "Teacup Without Handle",
      },
      {
        emoji: "🍶",
        title: "Sake",
      },
      {
        emoji: "🍾",
        title: "Bottle with Popping Cork",
      },
      {
        emoji: "🍷",
        title: "Wine Glass",
      },
      {
        emoji: "🍸",
        title: "Cocktail Glass",
      },
      {
        emoji: "🍹",
        title: "Tropical Drink",
      },
      {
        emoji: "🍺",
        title: "Beer Mug",
      },
      {
        emoji: "🍻",
        title: "Clinking Beer Mugs",
      },
      {
        emoji: "🥂",
        title: "Clinking Glasses",
      },
      {
        emoji: "🥃",
        title: "Tumbler Glass",
      },
      {
        emoji: "🥤",
        title: "Cup with Straw",
      },
      {
        emoji: "🧋",
        title: "Bubble Tea",
      },
      {
        emoji: "🧃",
        title: "Beverage Box",
      },
      {
        emoji: "🧉",
        title: "Mate",
      },
      {
        emoji: "🧊",
        title: "Ice",
      },
      {
        emoji: "🥢",
        title: "Chopsticks",
      },
      {
        emoji: "🍽️",
        title: "Fork and Knife with Plate",
      },
      {
        emoji: "🍴",
        title: "Fork and Knife",
      },
      {
        emoji: "🥄",
        title: "Spoon",
      },
    ],
    Activity: [
      {
        emoji: "🕴️",
        title: "Person in Suit Levitating",
      },
      {
        emoji: "🧗",
        title: "Person Climbing",
      },
      {
        emoji: "🧗‍♂️",
        title: "Man Climbing",
      },
      {
        emoji: "🧗‍♀️",
        title: "Woman Climbing",
      },
      {
        emoji: "🤺",
        title: "Person Fencing",
      },
      {
        emoji: "🏇",
        title: "Horse Racing",
      },
      {
        emoji: "⛷️",
        title: "Skier",
      },
      {
        emoji: "🏂",
        title: "Snowboarder",
      },
      {
        emoji: "🏌️",
        title: "Person Golfing",
      },
      {
        emoji: "🏌️‍♂️",
        title: "Man Golfing",
      },
      {
        emoji: "🏌️‍♀️",
        title: "Woman Golfing",
      },
      {
        emoji: "🏄",
        title: "Person Surfing",
      },
      {
        emoji: "🏄‍♂️",
        title: "Man Surfing",
      },
      {
        emoji: "🏄‍♀️",
        title: "Woman Surfing",
      },
      {
        emoji: "🚣",
        title: "Person Rowing Boat",
      },
      {
        emoji: "🚣‍♂️",
        title: "Man Rowing Boat",
      },
      {
        emoji: "🚣‍♀️",
        title: "Woman Rowing Boat",
      },
      {
        emoji: "🏊",
        title: "Person Swimming",
      },
      {
        emoji: "🏊‍♂️",
        title: "Man Swimming",
      },
      {
        emoji: "🏊‍♀️",
        title: "Woman Swimming",
      },
      {
        emoji: "⛹️",
        title: "Person Bouncing Ball",
      },
      {
        emoji: "⛹️‍♂️",
        title: "Man Bouncing Ball",
      },
      {
        emoji: "⛹️‍♀️",
        title: "Woman Bouncing Ball",
      },
      {
        emoji: "🏋️",
        title: "Person Lifting Weights",
      },
      {
        emoji: "🏋️‍♂️",
        title: "Man Lifting Weights",
      },
      {
        emoji: "🏋️‍♀️",
        title: "Woman Lifting Weights",
      },
      {
        emoji: "🚴",
        title: "Person Biking",
      },
      {
        emoji: "🚴‍♂️",
        title: "Man Biking",
      },
      {
        emoji: "🚴‍♀️",
        title: "Woman Biking",
      },
      {
        emoji: "🚵",
        title: "Person Mountain Biking",
      },
      {
        emoji: "🚵‍♂️",
        title: "Man Mountain Biking",
      },
      {
        emoji: "🚵‍♀️",
        title: "Woman Mountain Biking",
      },
      {
        emoji: "🤸",
        title: "Person Cartwheeling",
      },
      {
        emoji: "🤸‍♂️",
        title: "Man Cartwheeling",
      },
      {
        emoji: "🤸‍♀️",
        title: "Woman Cartwheeling",
      },
      {
        emoji: "🤼",
        title: "People Wrestling",
      },
      {
        emoji: "🤼‍♂️",
        title: "Men Wrestling",
      },
      {
        emoji: "🤼‍♀️",
        title: "Women Wrestling",
      },
      {
        emoji: "🤽",
        title: "Person Playing Water Polo",
      },
      {
        emoji: "🤽‍♂️",
        title: "Man Playing Water Polo",
      },
      {
        emoji: "🤽‍♀️",
        title: "Woman Playing Water Polo",
      },
      {
        emoji: "🤾",
        title: "Person Playing Handball",
      },
      {
        emoji: "🤾‍♂️",
        title: "Man Playing Handball",
      },
      {
        emoji: "🤾‍♀️",
        title: "Woman Playing Handball",
      },
      {
        emoji: "🤹",
        title: "Person Juggling",
      },
      {
        emoji: "🤹‍♂️",
        title: "Man Juggling",
      },
      {
        emoji: "🤹‍♀️",
        title: "Woman Juggling",
      },
      {
        emoji: "🧘",
        title: "Person in Lotus Position",
      },
      {
        emoji: "🧘‍♂️",
        title: "Man in Lotus Position",
      },
      {
        emoji: "🧘‍♀️",
        title: "Woman in Lotus Position",
      },
      {
        emoji: "🎪",
        title: "Circus Tent",
      },
      {
        emoji: "🛹",
        title: "Skateboard",
      },
      {
        emoji: "🛼",
        title: "Roller Skate",
      },
      {
        emoji: "🛶",
        title: "Canoe",
      },
      {
        emoji: "🎗️",
        title: "Reminder Ribbon",
      },
      {
        emoji: "🎟️",
        title: "Admission Tickets",
      },
      {
        emoji: "🎫",
        title: "Ticket",
      },
      {
        emoji: "🎖️",
        title: "Military Medal",
      },
      {
        emoji: "🏆",
        title: "Trophy",
      },
      {
        emoji: "🏅",
        title: "Sports Medal",
      },
      {
        emoji: "🥇",
        title: "1st Place Medal",
      },
      {
        emoji: "🥈",
        title: "2nd Place Medal",
      },
      {
        emoji: "🥉",
        title: "3rd Place Medal",
      },
      {
        emoji: "⚽",
        title: "Soccer Ball",
      },
      {
        emoji: "⚾",
        title: "Baseball",
      },
      {
        emoji: "🥎",
        title: "Softball",
      },
      {
        emoji: "🏀",
        title: "Basketball",
      },
      {
        emoji: "🏐",
        title: "Volleyball",
      },
      {
        emoji: "🏈",
        title: "American Football",
      },
      {
        emoji: "🏉",
        title: "Rugby Football",
      },
      {
        emoji: "🎾",
        title: "Tennis",
      },
      {
        emoji: "🥏",
        title: "Flying Disc",
      },
      {
        emoji: "🎳",
        title: "Bowling",
      },
      {
        emoji: "🏏",
        title: "Cricket Game",
      },
      {
        emoji: "🏑",
        title: "Field Hockey",
      },
      {
        emoji: "🏒",
        title: "Ice Hockey",
      },
      {
        emoji: "🥍",
        title: "Lacrosse",
      },
      {
        emoji: "🏓",
        title: "Ping Pong",
      },
      {
        emoji: "🏸",
        title: "Badminton",
      },
      {
        emoji: "🥊",
        title: "Boxing Glove",
      },
      {
        emoji: "🥋",
        title: "Martial Arts Uniform",
      },
      {
        emoji: "🥅",
        title: "Goal Net",
      },
      {
        emoji: "⛳",
        title: "Flag in Hole",
      },
      {
        emoji: "⛸️",
        title: "Ice Skate",
      },
      {
        emoji: "🎣",
        title: "Fishing Pole",
      },
      {
        emoji: "🎽",
        title: "Running Shirt",
      },
      {
        emoji: "🎿",
        title: "Skis",
      },
      {
        emoji: "🛷",
        title: "Sled",
      },
      {
        emoji: "🥌",
        title: "Curling Stone",
      },
      {
        emoji: "🎯",
        title: "Bullseye",
      },
      {
        emoji: "🎱",
        title: "Pool 8 Ball",
      },
      {
        emoji: "🎮",
        title: "Video Game",
      },
      {
        emoji: "🎰",
        title: "Slot Machine",
      },
      {
        emoji: "🎲",
        title: "Game Die",
      },
      {
        emoji: "🧩",
        title: "Puzzle Piece",
      },
      {
        emoji: "♟️",
        title: "Chess Pawn",
      },
      {
        emoji: "🎭",
        title: "Performing Arts",
      },
      {
        emoji: "🎨",
        title: "Artist Palette",
      },
      {
        emoji: "🧵",
        title: "Thread",
      },
      {
        emoji: "🧶",
        title: "Yarn",
      },
      {
        emoji: "🎼",
        title: "Musical Score",
      },
      {
        emoji: "🎤",
        title: "Microphone",
      },
      {
        emoji: "🎧",
        title: "Headphone",
      },
      {
        emoji: "🎷",
        title: "Saxophone",
      },
      {
        emoji: "🪗",
        title: "Accordion",
      },
      {
        emoji: "🎸",
        title: "Guitar",
      },
      {
        emoji: "🎹",
        title: "Musical Keyboard",
      },
      {
        emoji: "🎺",
        title: "Trumpet",
      },
      {
        emoji: "🎻",
        title: "Violin",
      },
      {
        emoji: "🥁",
        title: "Drum",
      },
      {
        emoji: "🪘",
        title: "Long Drum",
      },
      {
        emoji: "🎬",
        title: "Clapper Board",
      },
      {
        emoji: "🏹",
        title: "Bow and Arrow",
      },
    ],
    "Travel-places": [
      {
        emoji: "🚣",
        title: "Person Rowing Boat",
      },
      {
        emoji: "🗾",
        title: "Map of Japan",
      },
      {
        emoji: "🏔️",
        title: "Snow-Capped Mountain",
      },
      {
        emoji: "⛰️",
        title: "Mountain",
      },
      {
        emoji: "🌋",
        title: "Volcano",
      },
      {
        emoji: "🗻",
        title: "Mount Fuji",
      },
      {
        emoji: "🏕️",
        title: "Camping",
      },
      {
        emoji: "🏖️",
        title: "Beach with Umbrella",
      },
      {
        emoji: "🏜️",
        title: "Desert",
      },
      {
        emoji: "🏝️",
        title: "Desert Island",
      },
      {
        emoji: "🏞️",
        title: "National Park",
      },
      {
        emoji: "🏟️",
        title: "Stadium",
      },
      {
        emoji: "🏛️",
        title: "Classical Building",
      },
      {
        emoji: "🏗️",
        title: "Building Construction",
      },
      {
        emoji: "🛖",
        title: "Hut",
      },
      {
        emoji: "🏘️",
        title: "Houses",
      },
      {
        emoji: "🏚️",
        title: "Derelict House",
      },
      {
        emoji: "🏠",
        title: "House",
      },
      {
        emoji: "🏡",
        title: "House with Garden",
      },
      {
        emoji: "🏢",
        title: "Office Building",
      },
      {
        emoji: "🏣",
        title: "Japanese Post Office",
      },
      {
        emoji: "🏤",
        title: "Post Office",
      },
      {
        emoji: "🏥",
        title: "Hospital",
      },
      {
        emoji: "🏦",
        title: "Bank",
      },
      {
        emoji: "🏨",
        title: "Hotel",
      },
      {
        emoji: "🏩",
        title: "Love Hotel",
      },
      {
        emoji: "🏪",
        title: "Convenience Store",
      },
      {
        emoji: "🏫",
        title: "School",
      },
      {
        emoji: "🏬",
        title: "Department Store",
      },
      {
        emoji: "🏭",
        title: "Factory",
      },
      {
        emoji: "🏯",
        title: "Japanese Castle",
      },
      {
        emoji: "🏰",
        title: "Castle",
      },
      {
        emoji: "💒",
        title: "Wedding",
      },
      {
        emoji: "🗼",
        title: "Tokyo Tower",
      },
      {
        emoji: "🗽",
        title: "Statue of Liberty",
      },
      {
        emoji: "⛪",
        title: "Church",
      },
      {
        emoji: "🕌",
        title: "Mosque",
      },
      {
        emoji: "🛕",
        title: "Hindu Temple",
      },
      {
        emoji: "🕍",
        title: "Synagogue",
      },
      {
        emoji: "⛩️",
        title: "Shinto Shrine",
      },
      {
        emoji: "🕋",
        title: "Kaaba",
      },
      {
        emoji: "⛲",
        title: "Fountain",
      },
      {
        emoji: "⛺",
        title: "Tent",
      },
      {
        emoji: "🌁",
        title: "Foggy",
      },
      {
        emoji: "🌃",
        title: "Night with Stars",
      },
      {
        emoji: "🏙️",
        title: "Cityscape",
      },
      {
        emoji: "🌄",
        title: "Sunrise Over Mountains",
      },
      {
        emoji: "🌅",
        title: "Sunrise",
      },
      {
        emoji: "🌆",
        title: "Cityscape at Dusk",
      },
      {
        emoji: "🌇",
        title: "Sunset",
      },
      {
        emoji: "🌉",
        title: "Bridge at Night",
      },
      {
        emoji: "🎠",
        title: "Carousel Horse",
      },
      {
        emoji: "🎡",
        title: "Ferris Wheel",
      },
      {
        emoji: "🎢",
        title: "Roller Coaster",
      },
      {
        emoji: "🚂",
        title: "Locomotive",
      },
      {
        emoji: "🚃",
        title: "Railway Car",
      },
      {
        emoji: "🚄",
        title: "High-Speed Train",
      },
      {
        emoji: "🚅",
        title: "Bullet Train",
      },
      {
        emoji: "🚆",
        title: "Train",
      },
      {
        emoji: "🚇",
        title: "Metro",
      },
      {
        emoji: "🚈",
        title: "Light Rail",
      },
      {
        emoji: "🚉",
        title: "Station",
      },
      {
        emoji: "🚊",
        title: "Tram",
      },
      {
        emoji: "🚝",
        title: "Monorail",
      },
      {
        emoji: "🚞",
        title: "Mountain Railway",
      },
      {
        emoji: "🚋",
        title: "Tram Car",
      },
      {
        emoji: "🚌",
        title: "Bus",
      },
      {
        emoji: "🚍",
        title: "Oncoming Bus",
      },
      {
        emoji: "🚎",
        title: "Trolleybus",
      },
      {
        emoji: "🚐",
        title: "Minibus",
      },
      {
        emoji: "🚑",
        title: "Ambulance",
      },
      {
        emoji: "🚒",
        title: "Fire Engine",
      },
      {
        emoji: "🚓",
        title: "Police Car",
      },
      {
        emoji: "🚔",
        title: "Oncoming Police Car",
      },
      {
        emoji: "🚕",
        title: "Taxi",
      },
      {
        emoji: "🚖",
        title: "Oncoming Taxi",
      },
      {
        emoji: "🚗",
        title: "Automobile",
      },
      {
        emoji: "🚘",
        title: "Oncoming Automobile",
      },
      {
        emoji: "🚙",
        title: "Sport Utility Vehicle",
      },
      {
        emoji: "🛻",
        title: "Pickup Truck",
      },
      {
        emoji: "🚚",
        title: "Delivery Truck",
      },
      {
        emoji: "🚛",
        title: "Articulated Lorry",
      },
      {
        emoji: "🚜",
        title: "Tractor",
      },
      {
        emoji: "🏎️",
        title: "Racing Car",
      },
      {
        emoji: "🏍️",
        title: "Motorcycle",
      },
      {
        emoji: "🛵",
        title: "Motor Scooter",
      },
      {
        emoji: "🛺",
        title: "Auto Rickshaw",
      },
      {
        emoji: "🚲",
        title: "Bicycle",
      },
      {
        emoji: "🛴",
        title: "Kick Scooter",
      },
      {
        emoji: "🚏",
        title: "Bus Stop",
      },
      {
        emoji: "🛣️",
        title: "Motorway",
      },
      {
        emoji: "🛤️",
        title: "Railway Track",
      },
      {
        emoji: "⛽",
        title: "Fuel Pump",
      },
      {
        emoji: "🚨",
        title: "Police Car Light",
      },
      {
        emoji: "🚥",
        title: "Horizontal Traffic Light",
      },
      {
        emoji: "🚦",
        title: "Vertical Traffic Light",
      },
      {
        emoji: "🚧",
        title: "Construction",
      },
      {
        emoji: "⚓",
        title: "Anchor",
      },
      {
        emoji: "⛵",
        title: "Sailboat",
      },
      {
        emoji: "🚤",
        title: "Speedboat",
      },
      {
        emoji: "🛳️",
        title: "Passenger Ship",
      },
      {
        emoji: "⛴️",
        title: "Ferry",
      },
      {
        emoji: "🛥️",
        title: "Motor Boat",
      },
      {
        emoji: "🚢",
        title: "Ship",
      },
      {
        emoji: "✈️",
        title: "Airplane",
      },
      {
        emoji: "🛩️",
        title: "Small Airplane",
      },
      {
        emoji: "🛫",
        title: "Airplane Departure",
      },
      {
        emoji: "🛬",
        title: "Airplane Arrival",
      },
      {
        emoji: "🪂",
        title: "Parachute",
      },
      {
        emoji: "💺",
        title: "Seat",
      },
      {
        emoji: "🚁",
        title: "Helicopter",
      },
      {
        emoji: "🚟",
        title: "Suspension Railway",
      },
      {
        emoji: "🚠",
        title: "Mountain Cableway",
      },
      {
        emoji: "🚡",
        title: "Aerial Tramway",
      },
      {
        emoji: "🛰️",
        title: "Satellite",
      },
      {
        emoji: "🚀",
        title: "Rocket",
      },
      {
        emoji: "🛸",
        title: "Flying Saucer",
      },
      {
        emoji: "🪐",
        title: "Ringed Planet",
      },
      {
        emoji: "🌠",
        title: "Shooting Star",
      },
      {
        emoji: "🌌",
        title: "Milky Way",
      },
      {
        emoji: "⛱️",
        title: "Umbrella on Ground",
      },
      {
        emoji: "🎆",
        title: "Fireworks",
      },
      {
        emoji: "🎇",
        title: "Sparkler",
      },
      {
        emoji: "🎑",
        title: "Moon Viewing Ceremony",
      },
      {
        emoji: "💴",
        title: "Yen Banknote",
      },
      {
        emoji: "💵",
        title: "Dollar Banknote",
      },
      {
        emoji: "💶",
        title: "Euro Banknote",
      },
      {
        emoji: "💷",
        title: "Pound Banknote",
      },
      {
        emoji: "🗿",
        title: "Moai",
      },
      {
        emoji: "🛂",
        title: "Passport Control",
      },
      {
        emoji: "🛃",
        title: "Customs",
      },
      {
        emoji: "🛄",
        title: "Baggage Claim",
      },
      {
        emoji: "🛅",
        title: "Left Luggage",
      },
    ],
    Objects: [
      {
        emoji: "💌",
        title: "Love Letter",
      },
      {
        emoji: "🕳️",
        title: "Hole",
      },
      {
        emoji: "💣",
        title: "Bomb",
      },
      {
        emoji: "🛀",
        title: "Person Taking Bath",
      },
      {
        emoji: "🛌",
        title: "Person in Bed",
      },
      {
        emoji: "🔪",
        title: "Kitchen Knife",
      },
      {
        emoji: "🏺",
        title: "Amphora",
      },
      {
        emoji: "🗺️",
        title: "World Map",
      },
      {
        emoji: "🧭",
        title: "Compass",
      },
      {
        emoji: "🧱",
        title: "Brick",
      },
      {
        emoji: "💈",
        title: "Barber Pole",
      },
      {
        emoji: "🦽",
        title: "Manual Wheelchair",
      },
      {
        emoji: "🦼",
        title: "Motorized Wheelchair",
      },
      {
        emoji: "🛢️",
        title: "Oil Drum",
      },
      {
        emoji: "🛎️",
        title: "Bellhop Bell",
      },
      {
        emoji: "🧳",
        title: "Luggage",
      },
      {
        emoji: "⌛",
        title: "Hourglass Done",
      },
      {
        emoji: "⏳",
        title: "Hourglass Not Done",
      },
      {
        emoji: "⌚",
        title: "Watch",
      },
      {
        emoji: "⏰",
        title: "Alarm Clock",
      },
      {
        emoji: "⏱️",
        title: "Stopwatch",
      },
      {
        emoji: "⏲️",
        title: "Timer Clock",
      },
      {
        emoji: "🕰️",
        title: "Mantelpiece Clock",
      },
      {
        emoji: "🌡️",
        title: "Thermometer",
      },
      {
        emoji: "⛱️",
        title: "Umbrella on Ground",
      },
      {
        emoji: "🧨",
        title: "Firecracker",
      },
      {
        emoji: "🎈",
        title: "Balloon",
      },
      {
        emoji: "🎉",
        title: "Party Popper",
      },
      {
        emoji: "🎊",
        title: "Confetti Ball",
      },
      {
        emoji: "🎎",
        title: "Japanese Dolls",
      },
      {
        emoji: "🎏",
        title: "Carp Streamer",
      },
      {
        emoji: "🎐",
        title: "Wind Chime",
      },
      {
        emoji: "🧧",
        title: "Red Envelope",
      },
      {
        emoji: "🎀",
        title: "Ribbon",
      },
      {
        emoji: "🎁",
        title: "Wrapped Gift",
      },
      {
        emoji: "🤿",
        title: "Diving Mask",
      },
      {
        emoji: "🪀",
        title: "Yo-Yo",
      },
      {
        emoji: "🪁",
        title: "Kite",
      },
      {
        emoji: "🔮",
        title: "Crystal Ball",
      },
      {
        emoji: "🪄",
        title: "Magic Wand",
      },
      {
        emoji: "🧿",
        title: "Nazar Amulet",
      },
      {
        emoji: "🕹️",
        title: "Joystick",
      },
      {
        emoji: "🧸",
        title: "Teddy Bear",
      },
      {
        emoji: "🪅",
        title: "Piñata",
      },
      {
        emoji: "🪆",
        title: "Nesting Dolls",
      },
      {
        emoji: "🖼️",
        title: "Framed Picture",
      },
      {
        emoji: "🧵",
        title: "Thread",
      },
      {
        emoji: "🪡",
        title: "Sewing Needle",
      },
      {
        emoji: "🧶",
        title: "Yarn",
      },
      {
        emoji: "🪢",
        title: "Knot",
      },
      {
        emoji: "🛍️",
        title: "Shopping Bags",
      },
      {
        emoji: "📿",
        title: "Prayer Beads",
      },
      {
        emoji: "💎",
        title: "Gem Stone",
      },
      {
        emoji: "📯",
        title: "Postal Horn",
      },
      {
        emoji: "🎙️",
        title: "Studio Microphone",
      },
      {
        emoji: "🎚️",
        title: "Level Slider",
      },
      {
        emoji: "🎛️",
        title: "Control Knobs",
      },
      {
        emoji: "📻",
        title: "Radio",
      },
      {
        emoji: "🪕",
        title: "Banjo",
      },
      {
        emoji: "📱",
        title: "Mobile Phone",
      },
      {
        emoji: "📲",
        title: "Mobile Phone with Arrow",
      },
      {
        emoji: "☎️",
        title: "Telephone",
      },
      {
        emoji: "📞",
        title: "Telephone Receiver",
      },
      {
        emoji: "📟",
        title: "Pager",
      },
      {
        emoji: "📠",
        title: "Fax Machine",
      },
      {
        emoji: "🔋",
        title: "Battery",
      },
      {
        emoji: "🔌",
        title: "Electric Plug",
      },
      {
        emoji: "💻",
        title: "Laptop",
      },
      {
        emoji: "🖥️",
        title: "Desktop Computer",
      },
      {
        emoji: "🖨️",
        title: "Printer",
      },
      {
        emoji: "⌨️",
        title: "Keyboard",
      },
      {
        emoji: "🖱️",
        title: "Computer Mouse",
      },
      {
        emoji: "🖲️",
        title: "Trackball",
      },
      {
        emoji: "💽",
        title: "Computer Disk",
      },
      {
        emoji: "💾",
        title: "Floppy Disk",
      },
      {
        emoji: "💿",
        title: "Optical Disk",
      },
      {
        emoji: "📀",
        title: "DVD",
      },
      {
        emoji: "🧮",
        title: "Abacus",
      },
      {
        emoji: "🎥",
        title: "Movie Camera",
      },
      {
        emoji: "🎞️",
        title: "Film Frames",
      },
      {
        emoji: "📽️",
        title: "Film Projector",
      },
      {
        emoji: "📺",
        title: "Television",
      },
      {
        emoji: "📷",
        title: "Camera",
      },
      {
        emoji: "📸",
        title: "Camera with Flash",
      },
      {
        emoji: "📹",
        title: "Video Camera",
      },
      {
        emoji: "📼",
        title: "Videocassette",
      },
      {
        emoji: "🔍",
        title: "Magnifying Glass Tilted Left",
      },
      {
        emoji: "🔎",
        title: "Magnifying Glass Tilted Right",
      },
      {
        emoji: "🕯️",
        title: "Candle",
      },
      {
        emoji: "💡",
        title: "Light Bulb",
      },
      {
        emoji: "🔦",
        title: "Flashlight",
      },
      {
        emoji: "🏮",
        title: "Red Paper Lantern",
      },
      {
        emoji: "🪔",
        title: "Diya Lamp",
      },
      {
        emoji: "📔",
        title: "Notebook with Decorative Cover",
      },
      {
        emoji: "📕",
        title: "Closed Book",
      },
      {
        emoji: "📖",
        title: "Open Book",
      },
      {
        emoji: "📗",
        title: "Green Book",
      },
      {
        emoji: "📘",
        title: "Blue Book",
      },
      {
        emoji: "📙",
        title: "Orange Book",
      },
      {
        emoji: "📚",
        title: "Books",
      },
      {
        emoji: "📓",
        title: "Notebook",
      },
      {
        emoji: "📒",
        title: "Ledger",
      },
      {
        emoji: "📃",
        title: "Page with Curl",
      },
      {
        emoji: "📜",
        title: "Scroll",
      },
      {
        emoji: "📄",
        title: "Page Facing Up",
      },
      {
        emoji: "📰",
        title: "Newspaper",
      },
      {
        emoji: "🗞️",
        title: "Rolled-Up Newspaper",
      },
      {
        emoji: "📑",
        title: "Bookmark Tabs",
      },
      {
        emoji: "🔖",
        title: "Bookmark",
      },
      {
        emoji: "🏷️",
        title: "Label",
      },
      {
        emoji: "💰",
        title: "Money Bag",
      },
      {
        emoji: "🪙",
        title: "Coin",
      },
      {
        emoji: "💴",
        title: "Yen Banknote",
      },
      {
        emoji: "💵",
        title: "Dollar Banknote",
      },
      {
        emoji: "💶",
        title: "Euro Banknote",
      },
      {
        emoji: "💷",
        title: "Pound Banknote",
      },
      {
        emoji: "💸",
        title: "Money with Wings",
      },
      {
        emoji: "💳",
        title: "Credit Card",
      },
      {
        emoji: "🧾",
        title: "Receipt",
      },
      {
        emoji: "✉️",
        title: "Envelope",
      },
      {
        emoji: "📧",
        title: "E-Mail",
      },
      {
        emoji: "📨",
        title: "Incoming Envelope",
      },
      {
        emoji: "📩",
        title: "Envelope with Arrow",
      },
      {
        emoji: "📤",
        title: "Outbox Tray",
      },
      {
        emoji: "📥",
        title: "Inbox Tray",
      },
      {
        emoji: "📦",
        title: "Package",
      },
      {
        emoji: "📫",
        title: "Closed Mailbox with Raised Flag",
      },
      {
        emoji: "📪",
        title: "Closed Mailbox with Lowered Flag",
      },
      {
        emoji: "📬",
        title: "Open Mailbox with Raised Flag",
      },
      {
        emoji: "📭",
        title: "Open Mailbox with Lowered Flag",
      },
      {
        emoji: "📮",
        title: "Postbox",
      },
      {
        emoji: "🗳️",
        title: "Ballot Box with Ballot",
      },
      {
        emoji: "✏️",
        title: "Pencil",
      },
      {
        emoji: "✒️",
        title: "Black Nib",
      },
      {
        emoji: "🖋️",
        title: "Fountain Pen",
      },
      {
        emoji: "🖊️",
        title: "Pen",
      },
      {
        emoji: "🖌️",
        title: "Paintbrush",
      },
      {
        emoji: "🖍️",
        title: "Crayon",
      },
      {
        emoji: "📝",
        title: "Memo",
      },
      {
        emoji: "📁",
        title: "File Folder",
      },
      {
        emoji: "📂",
        title: "Open File Folder",
      },
      {
        emoji: "🗂️",
        title: "Card Index Dividers",
      },
      {
        emoji: "📅",
        title: "Calendar",
      },
      {
        emoji: "📆",
        title: "Tear-Off Calendar",
      },
      {
        emoji: "🗒️",
        title: "Spiral Notepad",
      },
      {
        emoji: "🗓️",
        title: "Spiral Calendar",
      },
      {
        emoji: "📇",
        title: "Card Index",
      },
      {
        emoji: "📈",
        title: "Chart Increasing",
      },
      {
        emoji: "📉",
        title: "Chart Decreasing",
      },
      {
        emoji: "📊",
        title: "Bar Chart",
      },
      {
        emoji: "📋",
        title: "Clipboard",
      },
      {
        emoji: "📌",
        title: "Pushpin",
      },
      {
        emoji: "📍",
        title: "Round Pushpin",
      },
      {
        emoji: "📎",
        title: "Paperclip",
      },
      {
        emoji: "🖇️",
        title: "Linked Paperclips",
      },
      {
        emoji: "📏",
        title: "Straight Ruler",
      },
      {
        emoji: "📐",
        title: "Triangular Ruler",
      },
      {
        emoji: "✂️",
        title: "Scissors",
      },
      {
        emoji: "🗃️",
        title: "Card File Box",
      },
      {
        emoji: "🗄️",
        title: "File Cabinet",
      },
      {
        emoji: "🗑️",
        title: "Wastebasket",
      },
      {
        emoji: "🔒",
        title: "Locked",
      },
      {
        emoji: "🔓",
        title: "Unlocked",
      },
      {
        emoji: "🔏",
        title: "Locked with Pen",
      },
      {
        emoji: "🔐",
        title: "Locked with Key",
      },
      {
        emoji: "🔑",
        title: "Key",
      },
      {
        emoji: "🗝️",
        title: "Old Key",
      },
      {
        emoji: "🔨",
        title: "Hammer",
      },
      {
        emoji: "🪓",
        title: "Axe",
      },
      {
        emoji: "⛏️",
        title: "Pick",
      },
      {
        emoji: "⚒️",
        title: "Hammer and Pick",
      },
      {
        emoji: "🛠️",
        title: "Hammer and Wrench",
      },
      {
        emoji: "🗡️",
        title: "Dagger",
      },
      {
        emoji: "⚔️",
        title: "Crossed Swords",
      },
      {
        emoji: "🔫",
        title: "Water Pistol",
      },
      {
        emoji: "🪃",
        title: "Boomerang",
      },
      {
        emoji: "🛡️",
        title: "Shield",
      },
      {
        emoji: "🪚",
        title: "Carpentry Saw",
      },
      {
        emoji: "🔧",
        title: "Wrench",
      },
      {
        emoji: "🪛",
        title: "Screwdriver",
      },
      {
        emoji: "🔩",
        title: "Nut and Bolt",
      },
      {
        emoji: "⚙️",
        title: "Gear",
      },
      {
        emoji: "🗜️",
        title: "Clamp",
      },
      {
        emoji: "⚖️",
        title: "Balance Scale",
      },
      {
        emoji: "🦯",
        title: "White Cane",
      },
      {
        emoji: "🔗",
        title: "Link",
      },
      {
        emoji: "⛓️",
        title: "Chains",
      },
      {
        emoji: "🪝",
        title: "Hook",
      },
      {
        emoji: "🧰",
        title: "Toolbox",
      },
      {
        emoji: "🧲",
        title: "Magnet",
      },
      {
        emoji: "🪜",
        title: "Ladder",
      },
      {
        emoji: "⚗️",
        title: "Alembic",
      },
      {
        emoji: "🧪",
        title: "Test Tube",
      },
      {
        emoji: "🧫",
        title: "Petri Dish",
      },
      {
        emoji: "🧬",
        title: "DNA",
      },
      {
        emoji: "🔬",
        title: "Microscope",
      },
      {
        emoji: "🔭",
        title: "Telescope",
      },
      {
        emoji: "📡",
        title: "Satellite Antenna",
      },
      {
        emoji: "💉",
        title: "Syringe",
      },
      {
        emoji: "🩸",
        title: "Drop of Blood",
      },
      {
        emoji: "💊",
        title: "Pill",
      },
      {
        emoji: "🩹",
        title: "Adhesive Bandage",
      },
      {
        emoji: "🩺",
        title: "Stethoscope",
      },
      {
        emoji: "🚪",
        title: "Door",
      },
      {
        emoji: "🪞",
        title: "Mirror",
      },
      {
        emoji: "🪟",
        title: "Window",
      },
      {
        emoji: "🛏️",
        title: "Bed",
      },
      {
        emoji: "🛋️",
        title: "Couch and Lamp",
      },
      {
        emoji: "🪑",
        title: "Chair",
      },
      {
        emoji: "🚽",
        title: "Toilet",
      },
      {
        emoji: "🪠",
        title: "Plunger",
      },
      {
        emoji: "🚿",
        title: "Shower",
      },
      {
        emoji: "🛁",
        title: "Bathtub",
      },
      {
        emoji: "🪤",
        title: "Mouse Trap",
      },
      {
        emoji: "🪒",
        title: "Razor",
      },
      {
        emoji: "🧴",
        title: "Lotion Bottle",
      },
      {
        emoji: "🧷",
        title: "Safety Pin",
      },
      {
        emoji: "🧹",
        title: "Broom",
      },
      {
        emoji: "🧺",
        title: "Basket",
      },
      {
        emoji: "🧻",
        title: "Roll of Paper",
      },
      {
        emoji: "🪣",
        title: "Bucket",
      },
      {
        emoji: "🧼",
        title: "Soap",
      },
      {
        emoji: "🪥",
        title: "Toothbrush",
      },
      {
        emoji: "🧽",
        title: "Sponge",
      },
      {
        emoji: "🧯",
        title: "Fire Extinguisher",
      },
      {
        emoji: "🛒",
        title: "Shopping Cart",
      },
      {
        emoji: "🚬",
        title: "Cigarette",
      },
      {
        emoji: "⚰️",
        title: "Coffin",
      },
      {
        emoji: "🪦",
        title: "Headstone",
      },
      {
        emoji: "⚱️",
        title: "Funeral Urn",
      },
      {
        emoji: "🗿",
        title: "Moai",
      },
      {
        emoji: "🪧",
        title: "Placard",
      },
      {
        emoji: "🚰",
        title: "Potable Water",
      },
    ],
    Symbols: [
      {
        emoji: "💘",
        title: "Heart with Arrow",
      },
      {
        emoji: "💝",
        title: "Heart with Ribbon",
      },
      {
        emoji: "💖",
        title: "Sparkling Heart",
      },
      {
        emoji: "💗",
        title: "Growing Heart",
      },
      {
        emoji: "💓",
        title: "Beating Heart",
      },
      {
        emoji: "💞",
        title: "Revolving Hearts",
      },
      {
        emoji: "💕",
        title: "Two Hearts",
      },
      {
        emoji: "💟",
        title: "Heart Decoration",
      },
      {
        emoji: "❣️",
        title: "Heart Exclamation",
      },
      {
        emoji: "💔",
        title: "Broken Heart",
      },
      {
        emoji: "❤️‍🔥",
        title: "Heart on Fire",
      },
      {
        emoji: "❤️‍🩹",
        title: "Mending Heart",
      },
      {
        emoji: "❤️",
        title: "Red Heart",
      },
      {
        emoji: "🧡",
        title: "Orange Heart",
      },
      {
        emoji: "💛",
        title: "Yellow Heart",
      },
      {
        emoji: "💚",
        title: "Green Heart",
      },
      {
        emoji: "💙",
        title: "Blue Heart",
      },
      {
        emoji: "💜",
        title: "Purple Heart",
      },
      {
        emoji: "🤎",
        title: "Brown Heart",
      },
      {
        emoji: "🖤",
        title: "Black Heart",
      },
      {
        emoji: "🤍",
        title: "White Heart",
      },
      {
        emoji: "💯",
        title: "Hundred Points",
      },
      {
        emoji: "💢",
        title: "Anger Symbol",
      },
      {
        emoji: "💬",
        title: "Speech Balloon",
      },
      {
        emoji: "👁️‍🗨️",
        title: "Eye in Speech Bubble",
      },
      {
        emoji: "🗨️",
        title: "Left Speech Bubble",
      },
      {
        emoji: "🗯️",
        title: "Right Anger Bubble",
      },
      {
        emoji: "💭",
        title: "Thought Balloon",
      },
      {
        emoji: "💤",
        title: "Zzz",
      },
      {
        emoji: "💮",
        title: "White Flower",
      },
      {
        emoji: "♨️",
        title: "Hot Springs",
      },
      {
        emoji: "💈",
        title: "Barber Pole",
      },
      {
        emoji: "🛑",
        title: "Stop Sign",
      },
      {
        emoji: "🕛",
        title: "Twelve O’Clock",
      },
      {
        emoji: "🕧",
        title: "Twelve-Thirty",
      },
      {
        emoji: "🕐",
        title: "One O’Clock",
      },
      {
        emoji: "🕜",
        title: "One-Thirty",
      },
      {
        emoji: "🕑",
        title: "Two O’Clock",
      },
      {
        emoji: "🕝",
        title: "Two-Thirty",
      },
      {
        emoji: "🕒",
        title: "Three O’Clock",
      },
      {
        emoji: "🕞",
        title: "Three-Thirty",
      },
      {
        emoji: "🕓",
        title: "Four O’Clock",
      },
      {
        emoji: "🕟",
        title: "Four-Thirty",
      },
      {
        emoji: "🕔",
        title: "Five O’Clock",
      },
      {
        emoji: "🕠",
        title: "Five-Thirty",
      },
      {
        emoji: "🕕",
        title: "Six O’Clock",
      },
      {
        emoji: "🕡",
        title: "Six-Thirty",
      },
      {
        emoji: "🕖",
        title: "Seven O’Clock",
      },
      {
        emoji: "🕢",
        title: "Seven-Thirty",
      },
      {
        emoji: "🕗",
        title: "Eight O’Clock",
      },
      {
        emoji: "🕣",
        title: "Eight-Thirty",
      },
      {
        emoji: "🕘",
        title: "Nine O’Clock",
      },
      {
        emoji: "🕤",
        title: "Nine-Thirty",
      },
      {
        emoji: "🕙",
        title: "Ten O’Clock",
      },
      {
        emoji: "🕥",
        title: "Ten-Thirty",
      },
      {
        emoji: "🕚",
        title: "Eleven O’Clock",
      },
      {
        emoji: "🕦",
        title: "Eleven-Thirty",
      },
      {
        emoji: "🌀",
        title: "Cyclone",
      },
      {
        emoji: "♠️",
        title: "Spade Suit",
      },
      {
        emoji: "♥️",
        title: "Heart Suit",
      },
      {
        emoji: "♦️",
        title: "Diamond Suit",
      },
      {
        emoji: "♣️",
        title: "Club Suit",
      },
      {
        emoji: "🃏",
        title: "Joker",
      },
      {
        emoji: "🀄",
        title: "Mahjong Red Dragon",
      },
      {
        emoji: "🎴",
        title: "Flower Playing Cards",
      },
      {
        emoji: "🔇",
        title: "Muted Speaker",
      },
      {
        emoji: "🔈",
        title: "Speaker Low Volume",
      },
      {
        emoji: "🔉",
        title: "Speaker Medium Volume",
      },
      {
        emoji: "🔊",
        title: "Speaker High Volume",
      },
      {
        emoji: "📢",
        title: "Loudspeaker",
      },
      {
        emoji: "📣",
        title: "Megaphone",
      },
      {
        emoji: "📯",
        title: "Postal Horn",
      },
      {
        emoji: "🔔",
        title: "Bell",
      },
      {
        emoji: "🔕",
        title: "Bell with Slash",
      },
      {
        emoji: "🎵",
        title: "Musical Note",
      },
      {
        emoji: "🎶",
        title: "Musical Notes",
      },
      {
        emoji: "💹",
        title: "Chart Increasing with Yen",
      },
      {
        emoji: "🛗",
        title: "Elevator",
      },
      {
        emoji: "🏧",
        title: "ATM Sign",
      },
      {
        emoji: "🚮",
        title: "Litter in Bin Sign",
      },
      {
        emoji: "🚰",
        title: "Potable Water",
      },
      {
        emoji: "♿",
        title: "Wheelchair Symbol",
      },
      {
        emoji: "🚹",
        title: "Men’s Room",
      },
      {
        emoji: "🚺",
        title: "Women’s Room",
      },
      {
        emoji: "🚻",
        title: "Restroom",
      },
      {
        emoji: "🚼",
        title: "Baby Symbol",
      },
      {
        emoji: "🚾",
        title: "Water Closet",
      },
      {
        emoji: "⚠️",
        title: "Warning",
      },
      {
        emoji: "🚸",
        title: "Children Crossing",
      },
      {
        emoji: "⛔",
        title: "No Entry",
      },
      {
        emoji: "🚫",
        title: "Prohibited",
      },
      {
        emoji: "🚳",
        title: "No Bicycles",
      },
      {
        emoji: "🚭",
        title: "No Smoking",
      },
      {
        emoji: "🚯",
        title: "No Littering",
      },
      {
        emoji: "🚱",
        title: "Non-Potable Water",
      },
      {
        emoji: "🚷",
        title: "No Pedestrians",
      },
      {
        emoji: "📵",
        title: "No Mobile Phones",
      },
      {
        emoji: "🔞",
        title: "No One Under Eighteen",
      },
      {
        emoji: "☢️",
        title: "Radioactive",
      },
      {
        emoji: "☣️",
        title: "Biohazard",
      },
      {
        emoji: "⬆️",
        title: "Up Arrow",
      },
      {
        emoji: "↗️",
        title: "Up-Right Arrow",
      },
      {
        emoji: "➡️",
        title: "Right Arrow",
      },
      {
        emoji: "↘️",
        title: "Down-Right Arrow",
      },
      {
        emoji: "⬇️",
        title: "Down Arrow",
      },
      {
        emoji: "↙️",
        title: "Down-Left Arrow",
      },
      {
        emoji: "⬅️",
        title: "Left Arrow",
      },
      {
        emoji: "↖️",
        title: "Up-Left Arrow",
      },
      {
        emoji: "↕️",
        title: "Up-Down Arrow",
      },
      {
        emoji: "↔️",
        title: "Left-Right Arrow",
      },
      {
        emoji: "↩️",
        title: "Right Arrow Curving Left",
      },
      {
        emoji: "↪️",
        title: "Left Arrow Curving Right",
      },
      {
        emoji: "⤴️",
        title: "Right Arrow Curving Up",
      },
      {
        emoji: "⤵️",
        title: "Right Arrow Curving Down",
      },
      {
        emoji: "🔃",
        title: "Clockwise Vertical Arrows",
      },
      {
        emoji: "🔄",
        title: "Counterclockwise Arrows Button",
      },
      {
        emoji: "🔙",
        title: "Back Arrow",
      },
      {
        emoji: "🔚",
        title: "End Arrow",
      },
      {
        emoji: "🔛",
        title: "On! Arrow",
      },
      {
        emoji: "🔜",
        title: "Soon Arrow",
      },
      {
        emoji: "🔝",
        title: "Top Arrow",
      },
      {
        emoji: "🛐",
        title: "Place of Worship",
      },
      {
        emoji: "⚛️",
        title: "Atom Symbol",
      },
      {
        emoji: "🕉️",
        title: "Om",
      },
      {
        emoji: "✡️",
        title: "Star of David",
      },
      {
        emoji: "☸️",
        title: "Wheel of Dharma",
      },
      {
        emoji: "☯️",
        title: "Yin Yang",
      },
      {
        emoji: "✝️",
        title: "Latin Cross",
      },
      {
        emoji: "☦️",
        title: "Orthodox Cross",
      },
      {
        emoji: "☪️",
        title: "Star and Crescent",
      },
      {
        emoji: "☮️",
        title: "Peace Symbol",
      },
      {
        emoji: "🕎",
        title: "Menorah",
      },
      {
        emoji: "🔯",
        title: "Dotted Six-Pointed Star",
      },
      {
        emoji: "♈",
        title: "Aries",
      },
      {
        emoji: "♉",
        title: "Taurus",
      },
      {
        emoji: "♊",
        title: "Gemini",
      },
      {
        emoji: "♋",
        title: "Cancer",
      },
      {
        emoji: "♌",
        title: "Leo",
      },
      {
        emoji: "♍",
        title: "Virgo",
      },
      {
        emoji: "♎",
        title: "Libra",
      },
      {
        emoji: "♏",
        title: "Scorpio",
      },
      {
        emoji: "♐",
        title: "Sagittarius",
      },
      {
        emoji: "♑",
        title: "Capricorn",
      },
      {
        emoji: "♒",
        title: "Aquarius",
      },
      {
        emoji: "♓",
        title: "Pisces",
      },
      {
        emoji: "⛎",
        title: "Ophiuchus",
      },
      {
        emoji: "🔀",
        title: "Shuffle Tracks Button",
      },
      {
        emoji: "🔁",
        title: "Repeat Button",
      },
      {
        emoji: "🔂",
        title: "Repeat Single Button",
      },
      {
        emoji: "▶️",
        title: "Play Button",
      },
      {
        emoji: "⏩",
        title: "Fast-Forward Button",
      },
      {
        emoji: "⏭️",
        title: "Next Track Button",
      },
      {
        emoji: "⏯️",
        title: "Play or Pause Button",
      },
      {
        emoji: "◀️",
        title: "Reverse Button",
      },
      {
        emoji: "⏪",
        title: "Fast Reverse Button",
      },
      {
        emoji: "⏮️",
        title: "Last Track Button",
      },
      {
        emoji: "🔼",
        title: "Upwards Button",
      },
      {
        emoji: "⏫",
        title: "Fast Up Button",
      },
      {
        emoji: "🔽",
        title: "Downwards Button",
      },
      {
        emoji: "⏬",
        title: "Fast Down Button",
      },
      {
        emoji: "⏸️",
        title: "Pause Button",
      },
      {
        emoji: "⏹️",
        title: "Stop Button",
      },
      {
        emoji: "⏺️",
        title: "Record Button",
      },
      {
        emoji: "⏏️",
        title: "Eject Button",
      },
      {
        emoji: "🎦",
        title: "Cinema",
      },
      {
        emoji: "🔅",
        title: "Dim Button",
      },
      {
        emoji: "🔆",
        title: "Bright Button",
      },
      {
        emoji: "📶",
        title: "Antenna Bars",
      },
      {
        emoji: "📳",
        title: "Vibration Mode",
      },
      {
        emoji: "📴",
        title: "Mobile Phone Off",
      },
      {
        emoji: "♀️",
        title: "Female Sign",
      },
      {
        emoji: "♂️",
        title: "Male Sign",
      },
      {
        emoji: "✖️",
        title: "Multiply",
      },
      {
        emoji: "➕",
        title: "Plus",
      },
      {
        emoji: "➖",
        title: "Minus",
      },
      {
        emoji: "➗",
        title: "Divide",
      },
      {
        emoji: "♾️",
        title: "Infinity",
      },
      {
        emoji: "‼️",
        title: "‼ Double Exclamation Mark",
      },
      {
        emoji: "⁉️",
        title: "⁉ Exclamation Question Mark",
      },
      {
        emoji: "❓",
        title: "Red Question Mark",
      },
      {
        emoji: "❔",
        title: "White Question Mark",
      },
      {
        emoji: "❕",
        title: "White Exclamation Mark",
      },
      {
        emoji: "❗",
        title: "Red Exclamation Mark",
      },
      {
        emoji: "〰️",
        title: "〰 Wavy Dash",
      },
      {
        emoji: "💱",
        title: "Currency Exchange",
      },
      {
        emoji: "💲",
        title: "Heavy Dollar Sign",
      },
      {
        emoji: "⚕️",
        title: "Medical Symbol",
      },
      {
        emoji: "♻️",
        title: "Recycling Symbol",
      },
      {
        emoji: "⚜️",
        title: "Fleur-de-lis",
      },
      {
        emoji: "🔱",
        title: "Trident Emblem",
      },
      {
        emoji: "📛",
        title: "Name Badge",
      },
      {
        emoji: "🔰",
        title: "Japanese Symbol for Beginner",
      },
      {
        emoji: "⭕",
        title: "Hollow Red Circle",
      },
      {
        emoji: "✅",
        title: "Check Mark Button",
      },
      {
        emoji: "☑️",
        title: "Check Box with Check",
      },
      {
        emoji: "✔️",
        title: "Check Mark",
      },
      {
        emoji: "❌",
        title: "Cross Mark",
      },
      {
        emoji: "❎",
        title: "Cross Mark Button",
      },
      {
        emoji: "➰",
        title: "Curly Loop",
      },
      {
        emoji: "➿",
        title: "Double Curly Loop",
      },
      {
        emoji: "〽️",
        title: "〽 Part Alternation Mark",
      },
      {
        emoji: "✳️",
        title: "Eight-Spoked Asterisk",
      },
      {
        emoji: "✴️",
        title: "Eight-Pointed Star",
      },
      {
        emoji: "❇️",
        title: "Sparkle",
      },
      {
        emoji: "©️",
        title: "Copyright",
      },
      {
        emoji: "®️",
        title: "Registered",
      },
      {
        emoji: "™️",
        title: "Trade Mark",
      },
      {
        emoji: "#️⃣",
        title: "# Keycap Number Sign",
      },
      {
        emoji: "*️⃣",
        title: "* Keycap Asterisk",
      },
      {
        emoji: "0️⃣",
        title: "0 Keycap Digit Zero",
      },
      {
        emoji: "1️⃣",
        title: "1 Keycap Digit One",
      },
      {
        emoji: "2️⃣",
        title: "2 Keycap Digit Two",
      },
      {
        emoji: "3️⃣",
        title: "3 Keycap Digit Three",
      },
      {
        emoji: "4️⃣",
        title: "4 Keycap Digit Four",
      },
      {
        emoji: "5️⃣",
        title: "5 Keycap Digit Five",
      },
      {
        emoji: "6️⃣",
        title: "6 Keycap Digit Six",
      },
      {
        emoji: "7️⃣",
        title: "7 Keycap Digit Seven",
      },
      {
        emoji: "8️⃣",
        title: "8 Keycap Digit Eight",
      },
      {
        emoji: "9️⃣",
        title: "9 Keycap Digit Nine",
      },
      {
        emoji: "🔟",
        title: "Keycap: 10",
      },
      {
        emoji: "🔠",
        title: "Input Latin Uppercase",
      },
      {
        emoji: "🔡",
        title: "Input Latin Lowercase",
      },
      {
        emoji: "🔢",
        title: "Input Numbers",
      },
      {
        emoji: "🔣",
        title: "Input Symbols",
      },
      {
        emoji: "🔤",
        title: "Input Latin Letters",
      },
      {
        emoji: "🅰️",
        title: "A Button (Blood Type)",
      },
      {
        emoji: "🆎",
        title: "AB Button (Blood Type)",
      },
      {
        emoji: "🅱️",
        title: "B Button (Blood Type)",
      },
      {
        emoji: "🆑",
        title: "CL Button",
      },
      {
        emoji: "🆒",
        title: "Cool Button",
      },
      {
        emoji: "🆓",
        title: "Free Button",
      },
      {
        emoji: "ℹ️",
        title: "ℹ Information",
      },
      {
        emoji: "🆔",
        title: "ID Button",
      },
      {
        emoji: "Ⓜ️",
        title: "Circled M",
      },
      {
        emoji: "🆕",
        title: "New Button",
      },
      {
        emoji: "🆖",
        title: "NG Button",
      },
      {
        emoji: "🅾️",
        title: "O Button (Blood Type)",
      },
      {
        emoji: "🆗",
        title: "OK Button",
      },
      {
        emoji: "🅿️",
        title: "P Button",
      },
      {
        emoji: "🆘",
        title: "SOS Button",
      },
      {
        emoji: "🆙",
        title: "Up! Button",
      },
      {
        emoji: "🆚",
        title: "Vs Button",
      },
      {
        emoji: "🈁",
        title: "Japanese “Here” Button",
      },
      {
        emoji: "🈂️",
        title: "Japanese “Service Charge” Button",
      },
      {
        emoji: "🈷️",
        title: "Japanese “Monthly Amount” Button",
      },
      {
        emoji: "🈶",
        title: "Japanese “Not Free of Charge” Button",
      },
      {
        emoji: "🈯",
        title: "Japanese “Reserved” Button",
      },
      {
        emoji: "🉐",
        title: "Japanese “Bargain” Button",
      },
      {
        emoji: "🈹",
        title: "Japanese “Discount” Button",
      },
      {
        emoji: "🈚",
        title: "Japanese “Free of Charge” Button",
      },
      {
        emoji: "🈲",
        title: "Japanese “Prohibited” Button",
      },
      {
        emoji: "🉑",
        title: "Japanese “Acceptable” Button",
      },
      {
        emoji: "🈸",
        title: "Japanese “Application” Button",
      },
      {
        emoji: "🈴",
        title: "Japanese “Passing Grade” Button",
      },
      {
        emoji: "🈳",
        title: "Japanese “Vacancy” Button",
      },
      {
        emoji: "㊗️",
        title: "Japanese “Congratulations” Button",
      },
      {
        emoji: "㊙️",
        title: "Japanese “Secret” Button",
      },
      {
        emoji: "🈺",
        title: "Japanese “Open for Business” Button",
      },
      {
        emoji: "🈵",
        title: "Japanese “No Vacancy” Button",
      },
      {
        emoji: "🔴",
        title: "Red Circle",
      },
      {
        emoji: "🟠",
        title: "Orange Circle",
      },
      {
        emoji: "🟡",
        title: "Yellow Circle",
      },
      {
        emoji: "🟢",
        title: "Green Circle",
      },
      {
        emoji: "🔵",
        title: "Blue Circle",
      },
      {
        emoji: "🟣",
        title: "Purple Circle",
      },
      {
        emoji: "🟤",
        title: "Brown Circle",
      },
      {
        emoji: "⚫",
        title: "Black Circle",
      },
      {
        emoji: "⚪",
        title: "White Circle",
      },
      {
        emoji: "🟥",
        title: "Red Square",
      },
      {
        emoji: "🟧",
        title: "Orange Square",
      },
      {
        emoji: "🟨",
        title: "Yellow Square",
      },
      {
        emoji: "🟩",
        title: "Green Square",
      },
      {
        emoji: "🟦",
        title: "Blue Square",
      },
      {
        emoji: "🟪",
        title: "Purple Square",
      },
      {
        emoji: "🟫",
        title: "Brown Square",
      },
      {
        emoji: "⬛",
        title: "Black Large Square",
      },
      {
        emoji: "⬜",
        title: "White Large Square",
      },
      {
        emoji: "◼️",
        title: "Black Medium Square",
      },
      {
        emoji: "◻️",
        title: "White Medium Square",
      },
      {
        emoji: "◾",
        title: "Black Medium-Small Square",
      },
      {
        emoji: "◽",
        title: "White Medium-Small Square",
      },
      {
        emoji: "▪️",
        title: "Black Small Square",
      },
      {
        emoji: "▫️",
        title: "White Small Square",
      },
      {
        emoji: "🔶",
        title: "Large Orange Diamond",
      },
      {
        emoji: "🔷",
        title: "Large Blue Diamond",
      },
      {
        emoji: "🔸",
        title: "Small Orange Diamond",
      },
      {
        emoji: "🔹",
        title: "Small Blue Diamond",
      },
      {
        emoji: "🔺",
        title: "Red Triangle Pointed Up",
      },
      {
        emoji: "🔻",
        title: "Red Triangle Pointed Down",
      },
      {
        emoji: "💠",
        title: "Diamond with a Dot",
      },
      {
        emoji: "🔘",
        title: "Radio Button",
      },
      {
        emoji: "🔳",
        title: "White Square Button",
      },
      {
        emoji: "🔲",
        title: "Black Square Button",
      },
    ],
    Flags: [
      {
        emoji: "🏁",
        title: "Chequered Flag",
      },
      {
        emoji: "🚩",
        title: "Triangular Flag",
      },
      {
        emoji: "🎌",
        title: "Crossed Flags",
      },
      {
        emoji: "🏴",
        title: "Black Flag",
      },
      {
        emoji: "🏳️",
        title: "White Flag",
      },
      {
        emoji: "🏳️‍🌈",
        title: "Rainbow Flag",
      },
      {
        emoji: "🏳️‍⚧️",
        title: "Transgender Flag",
      },
      {
        emoji: "🏴‍☠️",
        title: "Pirate Flag",
      },
      {
        emoji: "🇦🇨",
        title: "Flag: Ascension Island",
      },
      {
        emoji: "🇦🇩",
        title: "Flag: Andorra",
      },
      {
        emoji: "🇦🇪",
        title: "Flag: United Arab Emirates",
      },
      {
        emoji: "🇦🇫",
        title: "Flag: Afghanistan",
      },
      {
        emoji: "🇦🇬",
        title: "Flag: Antigua & Barbuda",
      },
      {
        emoji: "🇦🇮",
        title: "Flag: Anguilla",
      },
      {
        emoji: "🇦🇱",
        title: "Flag: Albania",
      },
      {
        emoji: "🇦🇲",
        title: "Flag: Armenia",
      },
      {
        emoji: "🇦🇴",
        title: "Flag: Angola",
      },
      {
        emoji: "🇦🇶",
        title: "Flag: Antarctica",
      },
      {
        emoji: "🇦🇷",
        title: "Flag: Argentina",
      },
      {
        emoji: "🇦🇸",
        title: "Flag: American Samoa",
      },
      {
        emoji: "🇦🇹",
        title: "Flag: Austria",
      },
      {
        emoji: "🇦🇺",
        title: "Flag: Australia",
      },
      {
        emoji: "🇦🇼",
        title: "Flag: Aruba",
      },
      {
        emoji: "🇦🇽",
        title: "Flag: Åland Islands",
      },
      {
        emoji: "🇦🇿",
        title: "Flag: Azerbaijan",
      },
      {
        emoji: "🇧🇦",
        title: "Flag: Bosnia & Herzegovina",
      },
      {
        emoji: "🇧🇧",
        title: "Flag: Barbados",
      },
      {
        emoji: "🇧🇩",
        title: "Flag: Bangladesh",
      },
      {
        emoji: "🇧🇪",
        title: "Flag: Belgium",
      },
      {
        emoji: "🇧🇫",
        title: "Flag: Burkina Faso",
      },
      {
        emoji: "🇧🇬",
        title: "Flag: Bulgaria",
      },
      {
        emoji: "🇧🇭",
        title: "Flag: Bahrain",
      },
      {
        emoji: "🇧🇮",
        title: "Flag: Burundi",
      },
      {
        emoji: "🇧🇯",
        title: "Flag: Benin",
      },
      {
        emoji: "🇧🇱",
        title: "Flag: St. Barthélemy",
      },
      {
        emoji: "🇧🇲",
        title: "Flag: Bermuda",
      },
      {
        emoji: "🇧🇳",
        title: "Flag: Brunei",
      },
      {
        emoji: "🇧🇴",
        title: "Flag: Bolivia",
      },
      {
        emoji: "🇧🇶",
        title: "Flag: Caribbean Netherlands",
      },
      {
        emoji: "🇧🇷",
        title: "Flag: Brazil",
      },
      {
        emoji: "🇧🇸",
        title: "Flag: Bahamas",
      },
      {
        emoji: "🇧🇹",
        title: "Flag: Bhutan",
      },
      {
        emoji: "🇧🇻",
        title: "Flag: Bouvet Island",
      },
      {
        emoji: "🇧🇼",
        title: "Flag: Botswana",
      },
      {
        emoji: "🇧🇾",
        title: "Flag: Belarus",
      },
      {
        emoji: "🇧🇿",
        title: "Flag: Belize",
      },
      {
        emoji: "🇨🇦",
        title: "Flag: Canada",
      },
      {
        emoji: "🇨🇨",
        title: "Flag: Cocos (Keeling) Islands",
      },
      {
        emoji: "🇨🇩",
        title: "Flag: Congo - Kinshasa",
      },
      {
        emoji: "🇨🇫",
        title: "Flag: Central African Republic",
      },
      {
        emoji: "🇨🇬",
        title: "Flag: Congo - Brazzaville",
      },
      {
        emoji: "🇨🇭",
        title: "Flag: Switzerland",
      },
      {
        emoji: "🇨🇮",
        title: "Flag: Côte d’Ivoire",
      },
      {
        emoji: "🇨🇰",
        title: "Flag: Cook Islands",
      },
      {
        emoji: "🇨🇱",
        title: "Flag: Chile",
      },
      {
        emoji: "🇨🇲",
        title: "Flag: Cameroon",
      },
      {
        emoji: "🇨🇳",
        title: "Flag: China",
      },
      {
        emoji: "🇨🇴",
        title: "Flag: Colombia",
      },
      {
        emoji: "🇨🇵",
        title: "Flag: Clipperton Island",
      },
      {
        emoji: "🇨🇷",
        title: "Flag: Costa Rica",
      },
      {
        emoji: "🇨🇺",
        title: "Flag: Cuba",
      },
      {
        emoji: "🇨🇻",
        title: "Flag: Cape Verde",
      },
      {
        emoji: "🇨🇼",
        title: "Flag: Curaçao",
      },
      {
        emoji: "🇨🇽",
        title: "Flag: Christmas Island",
      },
      {
        emoji: "🇨🇾",
        title: "Flag: Cyprus",
      },
      {
        emoji: "🇨🇿",
        title: "Flag: Czechia",
      },
      {
        emoji: "🇩🇪",
        title: "Flag: Germany",
      },
      {
        emoji: "🇩🇬",
        title: "Flag: Diego Garcia",
      },
      {
        emoji: "🇩🇯",
        title: "Flag: Djibouti",
      },
      {
        emoji: "🇩🇰",
        title: "Flag: Denmark",
      },
      {
        emoji: "🇩🇲",
        title: "Flag: Dominica",
      },
      {
        emoji: "🇩🇴",
        title: "Flag: Dominican Republic",
      },
      {
        emoji: "🇩🇿",
        title: "Flag: Algeria",
      },
      {
        emoji: "🇪🇦",
        title: "Flag: Ceuta & Melilla",
      },
      {
        emoji: "🇪🇨",
        title: "Flag: Ecuador",
      },
      {
        emoji: "🇪🇪",
        title: "Flag: Estonia",
      },
      {
        emoji: "🇪🇬",
        title: "Flag: Egypt",
      },
      {
        emoji: "🇪🇭",
        title: "Flag: Western Sahara",
      },
      {
        emoji: "🇪🇷",
        title: "Flag: Eritrea",
      },
      {
        emoji: "🇪🇸",
        title: "Flag: Spain",
      },
      {
        emoji: "🇪🇹",
        title: "Flag: Ethiopia",
      },
      {
        emoji: "🇪🇺",
        title: "Flag: European Union",
      },
      {
        emoji: "🇫🇮",
        title: "Flag: Finland",
      },
      {
        emoji: "🇫🇯",
        title: "Flag: Fiji",
      },
      {
        emoji: "🇫🇰",
        title: "Flag: Falkland Islands",
      },
      {
        emoji: "🇫🇲",
        title: "Flag: Micronesia",
      },
      {
        emoji: "🇫🇴",
        title: "Flag: Faroe Islands",
      },
      {
        emoji: "🇫🇷",
        title: "Flag: France",
      },
      {
        emoji: "🇬🇦",
        title: "Flag: Gabon",
      },
      {
        emoji: "🇬🇧",
        title: "Flag: United Kingdom",
      },
      {
        emoji: "🇬🇩",
        title: "Flag: Grenada",
      },
      {
        emoji: "🇬🇪",
        title: "Flag: Georgia",
      },
      {
        emoji: "🇬🇫",
        title: "Flag: French Guiana",
      },
      {
        emoji: "🇬🇬",
        title: "Flag: Guernsey",
      },
      {
        emoji: "🇬🇭",
        title: "Flag: Ghana",
      },
      {
        emoji: "🇬🇮",
        title: "Flag: Gibraltar",
      },
      {
        emoji: "🇬🇱",
        title: "Flag: Greenland",
      },
      {
        emoji: "🇬🇲",
        title: "Flag: Gambia",
      },
      {
        emoji: "🇬🇳",
        title: "Flag: Guinea",
      },
      {
        emoji: "🇬🇵",
        title: "Flag: Guadeloupe",
      },
      {
        emoji: "🇬🇶",
        title: "Flag: Equatorial Guinea",
      },
      {
        emoji: "🇬🇷",
        title: "Flag: Greece",
      },
      {
        emoji: "🇬🇸",
        title: "Flag: South Georgia & South Sandwich Islands",
      },
      {
        emoji: "🇬🇹",
        title: "Flag: Guatemala",
      },
      {
        emoji: "🇬🇺",
        title: "Flag: Guam",
      },
      {
        emoji: "🇬🇼",
        title: "Flag: Guinea-Bissau",
      },
      {
        emoji: "🇬🇾",
        title: "Flag: Guyana",
      },
      {
        emoji: "🇭🇰",
        title: "Flag: Hong Kong SAR China",
      },
      {
        emoji: "🇭🇲",
        title: "Flag: Heard & McDonald Islands",
      },
      {
        emoji: "🇭🇳",
        title: "Flag: Honduras",
      },
      {
        emoji: "🇭🇷",
        title: "Flag: Croatia",
      },
      {
        emoji: "🇭🇹",
        title: "Flag: Haiti",
      },
      {
        emoji: "🇭🇺",
        title: "Flag: Hungary",
      },
      {
        emoji: "🇮🇨",
        title: "Flag: Canary Islands",
      },
      {
        emoji: "🇮🇩",
        title: "Flag: Indonesia",
      },
      {
        emoji: "🇮🇪",
        title: "Flag: Ireland",
      },
      {
        emoji: "🇮🇱",
        title: "Flag: Israel",
      },
      {
        emoji: "🇮🇲",
        title: "Flag: Isle of Man",
      },
      {
        emoji: "🇮🇳",
        title: "Flag: India",
      },
      {
        emoji: "🇮🇴",
        title: "Flag: British Indian Ocean Territory",
      },
      {
        emoji: "🇮🇶",
        title: "Flag: Iraq",
      },
      {
        emoji: "🇮🇷",
        title: "Flag: Iran",
      },
      {
        emoji: "🇮🇸",
        title: "Flag: Iceland",
      },
      {
        emoji: "🇮🇹",
        title: "Flag: Italy",
      },
      {
        emoji: "🇯🇪",
        title: "Flag: Jersey",
      },
      {
        emoji: "🇯🇲",
        title: "Flag: Jamaica",
      },
      {
        emoji: "🇯🇴",
        title: "Flag: Jordan",
      },
      {
        emoji: "🇯🇵",
        title: "Flag: Japan",
      },
      {
        emoji: "🇰🇪",
        title: "Flag: Kenya",
      },
      {
        emoji: "🇰🇬",
        title: "Flag: Kyrgyzstan",
      },
      {
        emoji: "🇰🇭",
        title: "Flag: Cambodia",
      },
      {
        emoji: "🇰🇮",
        title: "Flag: Kiribati",
      },
      {
        emoji: "🇰🇲",
        title: "Flag: Comoros",
      },
      {
        emoji: "🇰🇳",
        title: "Flag: St. Kitts & Nevis",
      },
      {
        emoji: "🇰🇵",
        title: "Flag: North Korea",
      },
      {
        emoji: "🇰🇷",
        title: "Flag: South Korea",
      },
      {
        emoji: "🇰🇼",
        title: "Flag: Kuwait",
      },
      {
        emoji: "🇰🇾",
        title: "Flag: Cayman Islands",
      },
      {
        emoji: "🇰🇿",
        title: "Flag: Kazakhstan",
      },
      {
        emoji: "🇱🇦",
        title: "Flag: Laos",
      },
      {
        emoji: "🇱🇧",
        title: "Flag: Lebanon",
      },
      {
        emoji: "🇱🇨",
        title: "Flag: St. Lucia",
      },
      {
        emoji: "🇱🇮",
        title: "Flag: Liechtenstein",
      },
      {
        emoji: "🇱🇰",
        title: "Flag: Sri Lanka",
      },
      {
        emoji: "🇱🇷",
        title: "Flag: Liberia",
      },
      {
        emoji: "🇱🇸",
        title: "Flag: Lesotho",
      },
      {
        emoji: "🇱🇹",
        title: "Flag: Lithuania",
      },
      {
        emoji: "🇱🇺",
        title: "Flag: Luxembourg",
      },
      {
        emoji: "🇱🇻",
        title: "Flag: Latvia",
      },
      {
        emoji: "🇱🇾",
        title: "Flag: Libya",
      },
      {
        emoji: "🇲🇦",
        title: "Flag: Morocco",
      },
      {
        emoji: "🇲🇨",
        title: "Flag: Monaco",
      },
      {
        emoji: "🇲🇩",
        title: "Flag: Moldova",
      },
      {
        emoji: "🇲🇪",
        title: "Flag: Montenegro",
      },
      {
        emoji: "🇲🇫",
        title: "Flag: St. Martin",
      },
      {
        emoji: "🇲🇬",
        title: "Flag: Madagascar",
      },
      {
        emoji: "🇲🇭",
        title: "Flag: Marshall Islands",
      },
      {
        emoji: "🇲🇰",
        title: "Flag: North Macedonia",
      },
      {
        emoji: "🇲🇱",
        title: "Flag: Mali",
      },
      {
        emoji: "🇲🇲",
        title: "Flag: Myanmar (Burma)",
      },
      {
        emoji: "🇲🇳",
        title: "Flag: Mongolia",
      },
      {
        emoji: "🇲🇴",
        title: "Flag: Macao Sar China",
      },
      {
        emoji: "🇲🇵",
        title: "Flag: Northern Mariana Islands",
      },
      {
        emoji: "🇲🇶",
        title: "Flag: Martinique",
      },
      {
        emoji: "🇲🇷",
        title: "Flag: Mauritania",
      },
      {
        emoji: "🇲🇸",
        title: "Flag: Montserrat",
      },
      {
        emoji: "🇲🇹",
        title: "Flag: Malta",
      },
      {
        emoji: "🇲🇺",
        title: "Flag: Mauritius",
      },
      {
        emoji: "🇲🇻",
        title: "Flag: Maldives",
      },
      {
        emoji: "🇲🇼",
        title: "Flag: Malawi",
      },
      {
        emoji: "🇲🇽",
        title: "Flag: Mexico",
      },
      {
        emoji: "🇲🇾",
        title: "Flag: Malaysia",
      },
      {
        emoji: "🇲🇿",
        title: "Flag: Mozambique",
      },
      {
        emoji: "🇳🇦",
        title: "Flag: Namibia",
      },
      {
        emoji: "🇳🇨",
        title: "Flag: New Caledonia",
      },
      {
        emoji: "🇳🇪",
        title: "Flag: Niger",
      },
      {
        emoji: "🇳🇫",
        title: "Flag: Norfolk Island",
      },
      {
        emoji: "🇳🇬",
        title: "Flag: Nigeria",
      },
      {
        emoji: "🇳🇮",
        title: "Flag: Nicaragua",
      },
      {
        emoji: "🇳🇱",
        title: "Flag: Netherlands",
      },
      {
        emoji: "🇳🇴",
        title: "Flag: Norway",
      },
      {
        emoji: "🇳🇵",
        title: "Flag: Nepal",
      },
      {
        emoji: "🇳🇷",
        title: "Flag: Nauru",
      },
      {
        emoji: "🇳🇺",
        title: "Flag: Niue",
      },
      {
        emoji: "🇳🇿",
        title: "Flag: New Zealand",
      },
      {
        emoji: "🇴🇲",
        title: "Flag: Oman",
      },
      {
        emoji: "🇵🇦",
        title: "Flag: Panama",
      },
      {
        emoji: "🇵🇪",
        title: "Flag: Peru",
      },
      {
        emoji: "🇵🇫",
        title: "Flag: French Polynesia",
      },
      {
        emoji: "🇵🇬",
        title: "Flag: Papua New Guinea",
      },
      {
        emoji: "🇵🇭",
        title: "Flag: Philippines",
      },
      {
        emoji: "🇵🇰",
        title: "Flag: Pakistan",
      },
      {
        emoji: "🇵🇱",
        title: "Flag: Poland",
      },
      {
        emoji: "🇵🇲",
        title: "Flag: St. Pierre & Miquelon",
      },
      {
        emoji: "🇵🇳",
        title: "Flag: Pitcairn Islands",
      },
      {
        emoji: "🇵🇷",
        title: "Flag: Puerto Rico",
      },
      {
        emoji: "🇵🇸",
        title: "Flag: Palestinian Territories",
      },
      {
        emoji: "🇵🇹",
        title: "Flag: Portugal",
      },
      {
        emoji: "🇵🇼",
        title: "Flag: Palau",
      },
      {
        emoji: "🇵🇾",
        title: "Flag: Paraguay",
      },
      {
        emoji: "🇶🇦",
        title: "Flag: Qatar",
      },
      {
        emoji: "🇷🇪",
        title: "Flag: Réunion",
      },
      {
        emoji: "🇷🇴",
        title: "Flag: Romania",
      },
      {
        emoji: "🇷🇸",
        title: "Flag: Serbia",
      },
      {
        emoji: "🇷🇺",
        title: "Flag: Russia",
      },
      {
        emoji: "🇷🇼",
        title: "Flag: Rwanda",
      },
      {
        emoji: "🇸🇦",
        title: "Flag: Saudi Arabia",
      },
      {
        emoji: "🇸🇧",
        title: "Flag: Solomon Islands",
      },
      {
        emoji: "🇸🇨",
        title: "Flag: Seychelles",
      },
      {
        emoji: "🇸🇩",
        title: "Flag: Sudan",
      },
      {
        emoji: "🇸🇪",
        title: "Flag: Sweden",
      },
      {
        emoji: "🇸🇬",
        title: "Flag: Singapore",
      },
      {
        emoji: "🇸🇭",
        title: "Flag: St. Helena",
      },
      {
        emoji: "🇸🇮",
        title: "Flag: Slovenia",
      },
      {
        emoji: "🇸🇯",
        title: "Flag: Svalbard & Jan Mayen",
      },
      {
        emoji: "🇸🇰",
        title: "Flag: Slovakia",
      },
      {
        emoji: "🇸🇱",
        title: "Flag: Sierra Leone",
      },
      {
        emoji: "🇸🇲",
        title: "Flag: San Marino",
      },
      {
        emoji: "🇸🇳",
        title: "Flag: Senegal",
      },
      {
        emoji: "🇸🇴",
        title: "Flag: Somalia",
      },
      {
        emoji: "🇸🇷",
        title: "Flag: Suriname",
      },
      {
        emoji: "🇸🇸",
        title: "Flag: South Sudan",
      },
      {
        emoji: "🇸🇹",
        title: "Flag: São Tomé & Príncipe",
      },
      {
        emoji: "🇸🇻",
        title: "Flag: El Salvador",
      },
      {
        emoji: "🇸🇽",
        title: "Flag: Sint Maarten",
      },
      {
        emoji: "🇸🇾",
        title: "Flag: Syria",
      },
      {
        emoji: "🇸🇿",
        title: "Flag: Eswatini",
      },
      {
        emoji: "🇹🇦",
        title: "Flag: Tristan Da Cunha",
      },
      {
        emoji: "🇹🇨",
        title: "Flag: Turks & Caicos Islands",
      },
      {
        emoji: "🇹🇩",
        title: "Flag: Chad",
      },
      {
        emoji: "🇹🇫",
        title: "Flag: French Southern Territories",
      },
      {
        emoji: "🇹🇬",
        title: "Flag: Togo",
      },
      {
        emoji: "🇹🇭",
        title: "Flag: Thailand",
      },
      {
        emoji: "🇹🇯",
        title: "Flag: Tajikistan",
      },
      {
        emoji: "🇹🇰",
        title: "Flag: Tokelau",
      },
      {
        emoji: "🇹🇱",
        title: "Flag: Timor-Leste",
      },
      {
        emoji: "🇹🇲",
        title: "Flag: Turkmenistan",
      },
      {
        emoji: "🇹🇳",
        title: "Flag: Tunisia",
      },
      {
        emoji: "🇹🇴",
        title: "Flag: Tonga",
      },
      {
        emoji: "🇹🇷",
        title: "Flag: Turkey",
      },
      {
        emoji: "🇹🇹",
        title: "Flag: Trinidad & Tobago",
      },
      {
        emoji: "🇹🇻",
        title: "Flag: Tuvalu",
      },
      {
        emoji: "🇹🇼",
        title: "Flag: Taiwan",
      },
      {
        emoji: "🇹🇿",
        title: "Flag: Tanzania",
      },
      {
        emoji: "🇺🇦",
        title: "Flag: Ukraine",
      },
      {
        emoji: "🇺🇬",
        title: "Flag: Uganda",
      },
      {
        emoji: "🇺🇲",
        title: "Flag: U.S. Outlying Islands",
      },
      {
        emoji: "🇺🇳",
        title: "Flag: United Nations",
      },
      {
        emoji: "🇺🇸",
        title: "Flag: United States",
      },
      {
        emoji: "🇺🇾",
        title: "Flag: Uruguay",
      },
      {
        emoji: "🇺🇿",
        title: "Flag: Uzbekistan",
      },
      {
        emoji: "🇻🇦",
        title: "Flag: Vatican City",
      },
      {
        emoji: "🇻🇨",
        title: "Flag: St. Vincent & Grenadines",
      },
      {
        emoji: "🇻🇪",
        title: "Flag: Venezuela",
      },
      {
        emoji: "🇻🇬",
        title: "Flag: British Virgin Islands",
      },
      {
        emoji: "🇻🇮",
        title: "Flag: U.S. Virgin Islands",
      },
      {
        emoji: "🇻🇳",
        title: "Flag: Vietnam",
      },
      {
        emoji: "🇻🇺",
        title: "Flag: Vanuatu",
      },
      {
        emoji: "🇼🇫",
        title: "Flag: Wallis & Futuna",
      },
      {
        emoji: "🇼🇸",
        title: "Flag: Samoa",
      },
      {
        emoji: "🇽🇰",
        title: "Flag: Kosovo",
      },
      {
        emoji: "🇾🇪",
        title: "Flag: Yemen",
      },
      {
        emoji: "🇾🇹",
        title: "Flag: Mayotte",
      },
      {
        emoji: "🇿🇦",
        title: "Flag: South Africa",
      },
      {
        emoji: "🇿🇲",
        title: "Flag: Zambia",
      },
      {
        emoji: "🇿🇼",
        title: "Flag: Zimbabwe",
      },
      {
        emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        title: "Flag: England",
      },
      {
        emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        title: "Flag: Scotland",
      },
      {
        emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        title: "Flag: Wales",
      },
      {
        emoji: "🏴󠁵󠁳󠁴󠁸󠁿",
        title: "Flag for Texas (US-TX)",
      },
    ],
  };
  const categoryFlags = {
    People:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256 s26.629,132.668,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98 C485.371,388.668,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,472c-119.103,0-216-96.897-216-216S136.897,40,256,40 s216,96.897,216,216S375.103,472,256,472z"/> </g> </g> <g> <g> <path d="M368.993,285.776c-0.072,0.214-7.298,21.626-25.02,42.393C321.419,354.599,292.628,368,258.4,368 c-34.475,0-64.195-13.561-88.333-40.303c-18.92-20.962-27.272-42.54-27.33-42.691l-37.475,13.99 c0.42,1.122,10.533,27.792,34.013,54.273C171.022,389.074,212.215,408,258.4,408c46.412,0,86.904-19.076,117.099-55.166 c22.318-26.675,31.165-53.55,31.531-54.681L368.993,285.776z"/> </g> </g> <g> <g> <circle cx="168" cy="180.12" r="32"/> </g> </g> <g> <g> <circle cx="344" cy="180.12" r="32"/> </g> </g> <g> </g> <g> </g> <g> </g> </svg>',
    Nature:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 354.968 354.968" style="enable-background:new 0 0 354.968 354.968;" xml:space="preserve"> <g> <g> <path d="M350.775,341.319c-9.6-28.4-20.8-55.2-34.4-80.8c0.4-0.4,0.8-1.2,1.6-1.6c30.8-34.8,44-83.6,20.4-131.6 c-20.4-41.6-65.6-76.4-124.8-98.8c-57.2-22-127.6-32.4-200.4-27.2c-5.6,0.4-10,5.2-9.6,10.8c0.4,2.8,1.6,5.6,4,7.2 c36.8,31.6,50,79.2,63.6,126.8c8,28,15.6,55.6,28.4,81.2c0,0.4,0.4,0.4,0.4,0.8c30.8,59.6,78,81.2,122.8,78.4 c18.4-1.2,36-6.4,52.4-14.4c9.2-4.8,18-10.4,26-16.8c11.6,23.2,22,47.2,30.4,72.8c1.6,5.2,7.6,8,12.8,6.4 C349.975,352.119,352.775,346.519,350.775,341.319z M271.175,189.319c-34.8-44.4-78-82.4-131.6-112.4c-4.8-2.8-11.2-1.2-13.6,4 c-2.8,4.8-1.2,11.2,4,13.6c50.8,28.8,92.4,64.8,125.6,107.2c13.2,17.2,25.2,35.2,36,54c-8,7.6-16.4,13.6-25.6,18 c-14,7.2-28.8,11.6-44.4,12.4c-37.6,2.4-77.2-16-104-67.6v-0.4c-11.6-24-19.2-50.8-26.8-78c-12.4-43.2-24.4-86.4-53.6-120.4 c61.6-1.6,120.4,8.4,169.2,27.2c54.4,20.8,96,52,114,88.8c18.8,38,9.2,76.8-14.4,105.2 C295.575,222.919,283.975,205.719,271.175,189.319z"/> </g> </g> <g> </g> <g> </g> <g> </g> </svg>',
    "Food-dring":
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 295" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 295 295"> <g> <path d="M25,226.011v16.511c0,8.836,7.465,16.489,16.302,16.489h214.063c8.837,0,15.636-7.653,15.636-16.489v-16.511H25z"/> <path d="m271.83,153.011c-3.635-66-57.634-117.022-123.496-117.022-65.863,0-119.863,51.021-123.498,117.022h246.994zm-198.497-50.99c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm42,33c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm33.248-58c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm32.752,58c-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.693 8.25,8.25 0,4.557-3.693,8.25-8.25,8.25zm50.25-41.25c0,4.557-3.693,8.25-8.25,8.25-4.557,0-8.25-3.693-8.25-8.25 0-4.557 3.693-8.25 8.25-8.25 4.557,0 8.25,3.694 8.25,8.25z"/> <path d="m275.414,169.011h-0.081-254.825c-11.142,0-20.508,8.778-20.508,19.921v0.414c0,11.143 9.366,20.665 20.508,20.665h254.906c11.142,0 19.586-9.523 19.586-20.665v-0.414c0-11.143-8.444-19.921-19.586-19.921z"/> </g> </svg>',
    Activity:
      '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path id="XMLID_272_" d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-407.02 181.02c0-57.102 21.297-109.316 56.352-149.142 37.143 45.142 57.438 101.499 57.438 160.409 0 53.21-16.914 105.191-47.908 148.069-40.693-40.891-65.882-97.226-65.882-159.336zm88.491 179.221c35.75-48.412 55.3-107.471 55.3-167.954 0-66.866-23.372-130.794-66.092-181.661 39.718-34.614 91.603-55.606 148.301-55.606 56.585 0 108.376 20.906 148.064 55.396-42.834 50.9-66.269 114.902-66.269 181.872 0 60.556 19.605 119.711 55.448 168.158-38.077 29.193-85.665 46.574-137.243 46.574-51.698 0-99.388-17.461-137.509-46.779zm297.392-19.645c-31.104-42.922-48.088-95.008-48.088-148.309 0-59.026 20.367-115.47 57.638-160.651 35.182 39.857 56.567 92.166 56.567 149.384 0 62.23-25.284 118.665-66.117 159.576z"/></svg>',
    "Travel-places":
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <g><g><path d="M846.5,153.5C939,246.1,990,369.1,990,500c0,130.9-51,253.9-143.5,346.5C753.9,939,630.9,990,500,990c-130.9,0-253.9-51-346.5-143.5C61,753.9,10,630.9,10,500c0-130.9,51-253.9,143.5-346.5C246.1,61,369.1,10,500,10C630.9,10,753.9,61,846.5,153.5z M803.2,803.2c60.3-60.3,100.5-135.5,117-217.3c-12.9,19-25.2,26-32.9-16.5c-7.9-69.3-71.5-25-111.5-49.6c-42.1,28.4-136.8-55.2-120.7,39.1c24.8,42.5,134-56.9,79.6,33.1c-34.7,62.8-126.9,201.9-114.9,274c1.5,105-107.3,21.9-144.8-12.9c-25.2-69.8-8.6-191.8-74.6-225.9c-71.6-3.1-133-9.6-160.8-89.6c-16.7-57.3,17.8-142.5,79.1-155.7c89.8-56.4,121.9,66.1,206.1,68.4c26.2-27.4,97.4-36.1,103.4-66.8c-55.3-9.8,70.1-46.5-5.3-67.4c-41.6,4.9-68.4,43.1-46.3,75.6C496,410.3,493.5,274.8,416,317.6c-2,67.6-126.5,21.9-43.1,8.2c28.7-12.5-46.8-48.8-6-42.2c20-1.1,87.4-24.7,69.2-40.6c37.5-23.3,69.1,55.8,105.8-1.8c26.5-44.3-11.1-52.5-44.4-30c-18.7-21,33.1-66.3,78.8-85.9c15.2-6.5,29.8-10.1,40.9-9.1c23,26.6,65.6,31.2,67.8-3.2c-57-27.3-119.9-41.7-185-41.7c-93.4,0-182.3,29.7-255.8,84.6c19.8,9.1,31,20.3,11.9,34.7c-14.8,44.1-74.8,103.2-127.5,94.9c-27.4,47.2-45.4,99.2-53.1,153.6c44.1,14.6,54.3,43.5,44.8,53.2c-22.5,19.6-36.3,47.4-43.4,77.8C91.3,658,132.6,739,196.8,803.2c81,81,188.6,125.6,303.2,125.6C614.5,928.8,722.2,884.2,803.2,803.2z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g> </svg>',
    Objects:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 461.977 461.977" style="enable-background:new 0 0 461.977 461.977;" xml:space="preserve"> <g> <path d="M398.47,248.268L346.376,18.543C344.136,8.665,333.287,0,323.158,0H138.821c-10.129,0-20.979,8.665-23.219,18.543 L63.507,248.268c-0.902,3.979-0.271,7.582,1.775,10.145c2.047,2.564,5.421,3.975,9.501,3.975h51.822v39.108 c-6.551,3.555-11,10.493-11,18.47c0,11.598,9.402,21,21,21c11.598,0,21-9.402,21-21c0-7.978-4.449-14.916-11-18.47v-39.108h240.587 c4.079,0,7.454-1.412,9.501-3.975C398.742,255.849,399.372,252.247,398.47,248.268z"/> <path d="M318.735,441.977h-77.747V282.388h-20v159.588h-77.747c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h175.494 c5.522,0,10-4.477,10-10C328.735,446.454,324.257,441.977,318.735,441.977z"/> </g> <g> </g> <g> </g> <g> </g> </svg>',
    Symbols:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.487 30.486" style="enable-background:new 0 0 30.487 30.486;" xml:space="preserve"> <g> <path d="M28.866,17.477h-2.521V15.03h-2.56c0.005-2.8-0.304-5.204-0.315-5.308l-0.088-0.67L22.75,8.811 c-0.021-0.008-0.142-0.051-0.317-0.109l2.287-8.519L19,4.836L15.23,0.022V0l-0.009,0.01L15.215,0v0.021l-3.769,4.815L5.725,0.183 l2.299,8.561c-0.157,0.051-0.268,0.09-0.288,0.098L7.104,9.084l-0.088,0.67c-0.013,0.104-0.321,2.508-0.316,5.308h-2.56v2.446H1.62 l0.447,2.514L1.62,22.689h6.474c1.907,2.966,5.186,7.549,7.162,7.797v-0.037c1.979-0.283,5.237-4.838,7.137-7.79h6.474l-0.447-2.67 L28.866,17.477z M21.137,20.355c-0.422,1.375-4.346,6.949-5.907,7.758v0.015c-1.577-0.853-5.461-6.373-5.882-7.739 c-0.002-0.043-0.005-0.095-0.008-0.146l11.804-0.031C21.141,20.264,21.139,20.314,21.137,20.355z M8.972,15.062 c-0.003-1.769,0.129-3.403,0.219-4.298c0.98-0.271,3.072-0.723,6.065-0.78v-0.03c2.979,0.06,5.063,0.51,6.04,0.779 c0.09,0.895,0.223,2.529,0.219,4.298L8.972,15.062z"/> </g> <g> </g> <g> </g> <g> </g> </svg>',
    Flags:
      '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill-rule="evenodd"><g id="037---Waypoint-Flag" fill-rule="nonzero" transform="translate(0 -1)"><path id="Shape" d="m59.0752 28.5054c-3.7664123-1.873859-7.2507049-4.2678838-10.3506-7.1118 1.5923634-6.0211307 2.7737841-12.14349669 3.5361-18.3248.1788-1.44-.623-1.9047-.872-2.0126-.7016942-.26712004-1.4944908-.00419148-1.8975.6293-5.4726 6.5479-12.9687 5.8008-20.9053 5.0054-7.9985-.8-16.2506-1.6116-22.3684 5.4114-.85552122-1.067885-2.26533581-1.5228479-3.5837-1.1565l-.1377.0386c-1.81412367.5095218-2.87378593 2.391025-2.3691 4.2065l12.2089 43.6891c.3541969 1.2645215 1.5052141 2.1399137 2.8184 2.1435.2677318-.0003961.5341685-.0371657.792-.1093l1.0683-.2984h.001c.7485787-.2091577 1.3833789-.7071796 1.7646969-1.3844635.381318-.677284.4779045-1.478326.2685031-2.2268365l-3.7812-13.5327c5.5066-7.0807 13.18-6.3309 21.2988-5.52 8.1094.81 16.4863 1.646 22.64-5.7129l.0029-.0039c.6044387-.7534187.8533533-1.7315007.6826-2.6822-.0899994-.4592259-.3932698-.8481635-.8167-1.0474zm-42.0381 29.7446c-.1201754.2157725-.3219209.3742868-.56.44l-1.0684.2983c-.4949157.1376357-1.0078362-.1513714-1.1465-.646l-12.2095-43.6895c-.20840349-.7523825.23089143-1.5316224.9825-1.7428l.1367-.0381c.12366014-.0348192.25153137-.0524183.38-.0523.63429117.0010181 1.19083557.4229483 1.3631 1.0334l.1083.3876v.0021l6.2529 22.3755 5.8468 20.9238c.0669515.2380103.0360256.4929057-.0859.708zm40.6329-27.2925c-5.4736 6.5459-12.9707 5.7974-20.9043 5.0039-7.9033-.79-16.06-1.605-22.1552 5.1558l-5.463-19.548-2.0643-7.3873c5.5068-7.0794 13.1796-6.3119 21.3045-5.5007 7.7148.7695 15.6787 1.5664 21.7373-4.7095-.7467138 5.70010904-1.859683 11.3462228-3.332 16.9033-.1993066.7185155.0267229 1.4878686.583 1.9844 3.1786296 2.9100325 6.7366511 5.3762694 10.5771 7.3315-.0213812.2768572-.1194065.5422977-.2831.7666z"/></g></g></svg>',
  };

  const icons = {
    search:
      '<svg style="fill: #646772;" version="1.1" width="17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;" xml:space="preserve"> <g> <g> <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/> </g> </g> <g> </g> <g> </g> </svg>',
    close:
      '<svg style="height: 11px !important;" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M28.94,26,51.39,3.55A2.08,2.08,0,0,0,48.45.61L26,23.06,3.55.61A2.08,2.08,0,0,0,.61,3.55L23.06,26,.61,48.45A2.08,2.08,0,0,0,2.08,52a2.05,2.05,0,0,0,1.47-.61L26,28.94,48.45,51.39a2.08,2.08,0,0,0,2.94-2.94Z"/></svg>',
    move: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.006 512.006" xml:space="preserve"> <g> <g> <path d="M508.247,246.756l-72.457-72.465c-5.009-5.009-13.107-5.009-18.116,0c-5.009,5.009-5.009,13.107,0,18.116l50.594,50.594 H268.811V43.748l50.594,50.594c5.009,5.009,13.107,5.009,18.116,0c5.009-5.009,5.009-13.107,0-18.116L265.056,3.761 c-5.001-5.009-13.107-5.009-18.116,0l-72.457,72.457c-5.009,5.009-5.009,13.107,0,18.116c5.001,5.009,13.107,5.009,18.116,0 l50.594-50.594v199.27H43.744l50.594-50.594c5.009-5.009,5.009-13.107,0-18.116c-5.009-5.009-13.107-5.009-18.116,0L3.757,246.756 c-5.009,5.001-5.009,13.107,0,18.116l72.465,72.457c5.009,5.009,13.107,5.009,18.116,0c5.009-5.001,5.009-13.107,0-18.116 l-50.594-50.594h199.458v199.646l-50.594-50.594c-5.009-5.001-13.107-5.001-18.116,0c-5.009,5.009-5.009,13.107,0,18.116 l72.457,72.465c5,5,13.107,5,18.116,0l72.465-72.457c5.009-5.009,5.009-13.107,0-18.116c-5.009-5-13.107-5-18.116,0 l-50.594,50.594V268.627h199.458l-50.594,50.594c-5.009,5.009-5.009,13.107,0,18.116s13.107,5.009,18.116,0l72.465-72.457 C513.257,259.872,513.257,251.765,508.247,246.756z"/> </g> </g> <g> </g> </svg>',
  };
  for (const key in emojiObj) {
    if (emojiObj.hasOwnProperty.call(emojiObj, key)) {
      const categoryObj = emojiObj[key];

      categoriesHTML += `<li>
                    <p class=shh id=${key}>${categoryFlags[key]}</p>
                </li>`;

      emojiesHTML += `<div id=n1.${key} class="fg-emoji-picker-category-wrapper shh" >`;
      emojiesHTML += `<p class="fg-emoji-picker-category-title shh">${key}</p>`;
      categoryObj.forEach((ej) => {
        emojiesHTML += `<li  data-title="${ej.title.toLowerCase()}">
                            <p class="emor shh" title="${ej.title}" href="#">${
          ej.emoji
        }</p>
                        </li>`;
      });
      emojiesHTML += "</div>";
    }
  }

  const picker = `
  <div class="fg-emoji-container shh" id =fg-emoji-container.${id} >
      <nav class="fg-emoji-nav shh">
          <ul>
              ${categoriesHTML}
                 
                <li class="fg-picker-special-buttons shh">
                <p id="fg-emoji-picker-close-button">
                    ${icons.close} 
                    </p></li>
                  
              
          </ul>
      </nav>

      <div class="fg-emoji-picker-search shh">
          <input type="text" placeholder="Search" autofocus />
          
          <span class="fg-emoji-picker-search-icon shh">${icons.search}</sapn>
      </div>

      <div>
          <!--<div class="fg-emoji-picker-loader-animation shh">
              <div class="spinner shh">
                  <div class="bounce1 shh"></div>
                  <div class="bounce2 shh"></div>
                  <div class="bounce3 shh"></div>
              </div>
          </div>-->

          <ul class="fg-emoji-list v">
              ${emojiesHTML}
          </ul>
      </div>
  </div>
`;
  document.getElementById("em." + id).innerHTML = picker;
  //.log(document.getElementById("closeEmo." + id));

  document
    .getElementById(`fg-emoji-picker-close-button`)
    .addEventListener("click", () => {
      document.getElementById("em." + id).firstChild.remove();
    });
  cat.forEach((e) => {
    document.getElementById(e).addEventListener("click", () => {
      document.querySelector(".fg-emoji-list").scroll({
        behavior: "smooth",
        left: 0,
        top: document.getElementById(`n1.${e}`).offsetTop,
      });
    });
  });
  document.querySelectorAll(".emor").forEach((e) => {
    e.addEventListener("click", () => {
      document.getElementById("input." + id).value += e.innerHTML;
    });
  });

  window.addEventListener("mouseup", function (event) {
    var pol = document.querySelector(".emor");
    //.log(event.target.className.includes("shh"));
    if (!event.target.className.includes("shh")) {
      //.log(document.getElementById("em." + id).firstChild);
      document.getElementById("em." + id).children[0].remove();
      //.log(document.getElementById("em." + id));

      // pol.remove();
    }
  });
}
async function sendData(url, data, UserId, type, postId) {
  //.log("op2", postId);
  const form_data = new FormData();
  form_data.append("video", data);
  await fetch(url, {
    method: "POST",
    body: form_data,
  })
    .then((response) => response.json())
    .then((json) =>
      type === "comment"
        ? addComment(json.data.data, UserId, true, false, postId)
        : addReplay(json.data.data, UserId, true, false, postId)
    );

  // ...
}
async function editData(url, type, data) {
  //.log("dara", data);
  const form_data = new FormData();
  form_data.append("video", data);
  await fetch(url, {
    method: "POST",
    body: form_data,
  })
    .then((response) => response.json())
    .then((json) =>
      type === "comment"
        ? editCommentData(json.data.data.id, json.data.data)
        : editReplayData(json.data.data.id, json.data.data)
    );

  // ...
}
function editWithPhoto(id, src) {
  document.getElementById("imr." + id).style.display = "block";
  //.log(document.getElementById(`imr.${id}`));

  document.getElementById(
    "imr." + id
  ).innerHTML = `<img class="imgUploaded" id =imgUploaded.${id}  src=${src} />
  <img class="closed" id=closed.${id}  src="/images/close.png" />
  `;
  open(id);

  document.getElementById("closed." + id).addEventListener("click", () => {
    document.getElementById(`imr.${id}`).innerHTML = ``;
    document.getElementById(`imr.${id}`).style.display = "none";
    files.set(id, null);
    document.getElementById("file-input." + id).value = "";
  });
}

async function edit(id, type, x, data) {
  //.log("kkkkkkk", x);
  if (type === "replay") {
    await fetch(`http://127.0.0.1:3000/homepage/${type}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        replay: x,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        type === "replay"
          ? editData(
              `http://127.0.0.1:3000/homepage/upload/addReplay/${id}`,
              type,
              data
            )
          : editData(
              `http://127.0.0.1:3000/homepage/upload/addComment/${id}`,
              type,
              data
            );
        hide(id);
      });
  } else {
    await fetch(`http://127.0.0.1:3000/homepage/${type}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        comment: x,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        type === "replay"
          ? editData(
              `http://127.0.0.1:3000/homepage/upload/addReplay/${id}`,
              type,
              data
            )
          : editData(
              `http://127.0.0.1:3000/homepage/upload/addComment/${id}`,
              type,
              data
            );
        hide(id);
      });
  }
}
async function editCommentData(id, comment) {
  const comment2 = document.getElementById(`comment.${id}`);
  comment2.innerHTML = `
  <img
  src=${comment.user.image}
  alt=""
  width="50"
  height="50"
  style="border-radius:31px;"
/>
<div class="box" id =box2.${comment.id}>

<div class="info" id =info.${comment}>
<h5>${comment.user.firstName + " " + comment.user.lastName}</h5>
<p class="p1">${comment.user.bio}</p>
<p class="p2" id=p2.${comment.id}>${comment.comment}</p>
${
  comment.image !== null
    ? `<img src=
    ${
      comment.image
        ? `${comment.image.split(`public`)[1]}`
        : `images/comment/${Image}`
    } 
    width =100% height =auto class="upImages2" id=upImages.${comment.id}>`
    : `<p></p>`
}

</div>

  <div class="settingsAndDate">
    
    <div class="settings">
    <span id=edit.${comment.id}>
    Edit</span>
    <span id=delete.${comment.id}>
  Delete
  </span>
    </div>
  
    <div class="date">
     <span id=date.${comment.id}>${calcDate(comment.updatedAt)}</span>
     </div>

  </div>
</div>
`;
  editClickComment(id);
  deleteClickComment(comment);
}

async function editReplayData(id, replay) {
  //.log("kkjklklk", id, replay.image);

  //og("pare", parent.parentNode);
  const replay2 = document.getElementById(`box2.${id}`).parentNode;
  //.log(replay2);
  replay2.innerHTML = `
<img
src=${replay.user.image}
alt=""
width="50"
height="50"
class ="operr"

/>
<div class="box" id =box2.${replay.id}>
<div class="info">
<h5>${replay.user.firstName + " " + replay.user.lastName}</h5>
<p class="p1">${replay.user.bio}</p>
<p class="p2" id=p2.${replay.id}>${replay.reply}</p>
${
  replay.image !== null
    ? `<img src=
    ${
      replay.image
        ? `${replay.image.split(`public`)[1]}`
        : `images/replay/${Image}`
    } 
    width =100% height =auto class="upImages2 upImages3" id=upImages.${
      replay.id
    }>`
    : `<p></p>`
}
</div>
<div class="settingsAndDate">

  <div class="settings">
    <span id=edit.${replay.id}>Edit
  </span>
    <span id=delete.${replay.id}>
    Delete
</span>
    </div>
   <div class="date">
    <span id=date.${replay.id}>${calcDate(replay.updatedAt)}</span>
   </div>
</div>
</div>
`;
  editClick(id);
  deleteClick(replay);
}

async function hide(id) {
  document.getElementById(`imr.${id}`).innerHTML = ``;
  document.getElementById(`imr.${id}`).style.display = "none";
  files.set(id, null);
}
async function editClick(id) {
  document.getElementById(`edit.${id}`).addEventListener("click", () => {
    //.log(document.getElementById(`input.${id}`));
    document.getElementById("input." + id).value = document.getElementById(
      `p2.${id}`
    ).innerHTML;
    //.log(
    //   "look",
    //   document.getElementById(`p2.${id}`).nextElementSibling.className
    // );
    if (
      document.getElementById(`p2.${id}`).nextElementSibling.className !== ""
    ) {
      editWithPhoto(
        id,
        document.getElementById(`p2.${id}`).nextElementSibling.src
      );
    }

    document.getElementById("input." + id).focus();
    document.getElementById(`box2.${id}`).style.display = "none";
    document.getElementById(`feed.${id}`).style.display = "none";
    if (document.querySelector(".commentEdit")) {
      let id = document.querySelector(".commentEdit").id.split(".")[1];
      document.getElementById(`imr.${id}`).innerHTML = ``;
      document.getElementById(`imr.${id}`).style.display = "none";
      hideWhenClick(document.querySelector(".commentEdit").id.split(".")[1]);
    }
    document.getElementById(`commentShow.${id}`).style.display = "flex";
    document.getElementById(`commentShow.${id}`).className =
      "commentBox commentEdit replayEdit";
    document.getElementById(`esc.${id}`).className = "esc";
    document.getElementById("input." + id).focus();
    let beel = true;

    document.getElementById("input." + id).addEventListener("keyup", (e) => {
      if (e.keyCode === 13 && beel) {
        e.preventDefault();
        document.getElementById(`date.${id}`).innerHTML = "1s";
        document.getElementById(`p2.${id}`).innerHTML = document.getElementById(
          `input.${id}`
        ).value;
        // consle.log(
        //   "llllllllllll",
        //   document.getElementById(`input.${id}`).value
        // );

        edit(
          id,
          "replay",
          document.getElementById(`input.${id}`).value,
          files.get(id) !== null
            ? document.getElementById(`file-input.` + id).files[0]
            : null
        );

        document.getElementById(`box2.${id}`).style.display = "flex";
        document.getElementById(`feed.${id}`).style.display = "flex";
        document.getElementById(`commentShow.${id}`).style.display = "none";
        document.getElementById(`commentShow.${id}`).className = "commentBox";
        document.getElementById(`esc.${id}`).className = "hide";
        beel = false;
      } else if (e.keyCode === 27 && beel) {
        e.preventDefault();
        document.getElementById(`box2.${id}`).style.display = "flex";
        document.getElementById(`feed.${id}`).style.display = "flex";
        document.getElementById(`commentShow.${id}`).style.display = "none";
        document.getElementById(`commentShow.${id}`).className = "commentBox";
        document.getElementById(`esc.${id}`).className = "hide";
        beel = false;
        hide(id);
      }
    });
  });
}
async function deleteClick(replay) {
  document
    .getElementById(`delete.${replay.id}`)
    .addEventListener("click", () => {
      document.querySelector(".overlay").className = "overlay";
      document.getElementById("over").className = "confirmDelete";
      document.getElementById("over").innerHTML = `
     <div class="texts">
     <h5>Are You want to delete this comment ?</h5>
     <hr />
     <div class="comment commentDelete">
       <img
         src=${replay.user.image}
         alt=""
         width="50"
         height="50"
         style="border-radius: 31px"
       />
       <div class="box">
         <div class="info">
           <h5>${replay.user.firstName + " " + replay.user.lastName}</h5>
           <p class="p1">${replay.user.bio}</p>
           <p class="p2">
           ${replay.reply}
           </p>
         </div>

         <div class="settingsAndDate">
           <div class="date">
             <span>${calcDate(replay.updatedAt)}</span>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="buttons">
   <button id=yes class="bty1">Confirm</button>
   <button
     id =no
     style="
       color: orange;
       background-color: transparent;
       border: none;
       outline: none;
     "
   >
     Cancel
   </button>
 </div>
     
     `;
      document.body.style.overflow = "hidden";
      document.getElementById("yes").addEventListener("click", () => {
        let id = document
          .getElementById(`comment.${replay.commentId}`)
          .parentNode.id.split(".")[1];
        //.log("id", id);
        decComments(`comments.${id}`, 1);

        document.querySelector(".overlay").className = "overlay hide";
        document.getElementById("over").className = "hide";
        document.getElementById("over").innerHTML = ``;

        document.getElementById(`box2.${replay.id}`).parentNode.remove();
        // document.getElementById(`box2.${replay.id}`).innerHTML = ``;
        //.log("parent", document.getElementById(`box2.${replay.id}`));

        document.getElementById(`feed.${replay.id}`).innerHTML = ``;
        document.getElementById(`feed.${replay.id}`).remove();

        document.getElementById(`commentShow.${replay.id}`).innerHTML = ``;
        document.getElementById(`commentShow.${replay.id}`).remove();
        document.body.style.overflow = "auto";
        fetch(`http://127.0.0.1:3000/homepage/${replay}/${replay.id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then(async (json) => {});
      });
      document.getElementById("no").addEventListener("click", () => {
        document.querySelector(".overlay").className = "overlay hide";
        document.getElementById("over").className = "hide";
        document.getElementById("over").innerHTML = ``;
        document.body.style.overflow = "auto";
      });
    });
}
async function editClickComment(id) {
  document.getElementById(`edit.${id}`).addEventListener("click", () => {
    //.log(document.getElementById(`input.${id}`));
    document.getElementById("input." + id).value = document.getElementById(
      `p2.${id}`
    ).innerHTML;

    if (
      document.getElementById(`p2.${id}`).nextElementSibling.className !== ""
    ) {
      editWithPhoto(
        id,
        document.getElementById(`p2.${id}`).nextElementSibling.src
      );
    }
    if (document.querySelector(".commentEdit")) {
      let id = document.querySelector(".commentEdit").id.split(".")[1];
      document.getElementById(`imr.${id}`).innerHTML = ``;
      document.getElementById(`imr.${id}`).style.display = "none";
      hideWhenClick(document.querySelector(".commentEdit").id.split(".")[1]);
    }
    document.getElementById("input." + id).focus();
    document.getElementById(`box2.${id}`).style.display = "none";
    document.getElementById(`feed.${id}`).style.display = "none";
    let beel = true;
    document.getElementById(`commentShow.${id}`).style.display = "flex";
    document.getElementById(`commentShow.${id}`).className =
      "commentBox commentEdit";
    document.getElementById(`esc.${id}`).className = "esc";
    document.getElementById("input." + id).focus();
    //.log("yes");
    document.getElementById("input." + id).addEventListener("keyup", (e) => {
      if (e.keyCode === 13 && beel) {
        //.log("ops");

        e.preventDefault();
        document.getElementById(`date.${id}`).innerHTML = "1s";
        document.getElementById(`p2.${id}`).innerHTML = document.getElementById(
          `input.${id}`
        ).value;
        edit(
          id,
          "comment",
          document.getElementById(`input.${id}`).value,
          files.get(id) !== null
            ? document.getElementById(`file-input.` + id).files[0]
            : null
        );

        document.getElementById(`box2.${id}`).style.display = "flex";
        document.getElementById(`feed.${id}`).style.display = "flex";
        document.getElementById(`commentShow.${id}`).style.display = "none";
        document.getElementById(`commentShow.${id}`).className = "commentBox";
        document.getElementById(`esc.${id}`).className = "hide";
        beel = false;
      } else if (e.keyCode === 27 && beel) {
        e.preventDefault();
        document.getElementById(`box2.${id}`).style.display = "flex";
        document.getElementById(`feed.${id}`).style.display = "flex";
        document.getElementById(`commentShow.${id}`).style.display = "none";
        document.getElementById(`commentShow.${id}`).className = "commentBox";
        document.getElementById(`esc.${id}`).className = "hide";
        beel = false;
        hide(id);
      }
    });
  });
}
async function deleteClickComment(comment) {
  document
    .getElementById(`delete.${comment.id}`)
    .addEventListener("click", () => {
      document.querySelector(".overlay").className = "overlay";
      document.getElementById("over").className = "confirmDelete";
      document.getElementById("over").innerHTML = `
     <div class="texts">
     <h5>Are You want to delete this comment ?</h5>
     <hr />
     <div class="comment commentDelete">
       <img
         src=${comment.user.image}
         alt=""
         width="50"
         height="50"
         style="border-radius: 31px"
       />
       <div class="box">
         <div class="info">
           <h5>${comment.user.firstName + " " + comment.user.lastName}</h5>
           <p class="p1">${comment.user.bio}</p>
           <p class="p2">
           ${comment.comment}
           </p>
         </div>

         <div class="settingsAndDate">
           <div class="date">
             <span>${calcDate(comment.updatedAt)}</span>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="buttons">
   <button id=yes class="bty1">Confirm</button>
   <button
     id =no
     style="
       color: orange;
       background-color: transparent;
       border: none;
       outline: none;
     "
   >
     Cancel
   </button>
 </div>
     
     `;
      document.body.style.overflow = "hidden";
      document.getElementById("yes").addEventListener("click", () => {
        document.querySelector(".overlay").className = "overlay hide";
        document.getElementById("over").className = "hide";
        document.getElementById("over").innerHTML = ``;

        document.getElementById(`box2.${comment.id}`).parentNode.remove();
        // document.getElementById(`box2.${comment.id}`).innerHTML = ``;
        //.log("parent", document.getElementById(`box2.${comment.id}`));

        document.getElementById(`feed.${comment.id}`).innerHTML = ``;
        document.getElementById(`feed.${comment.id}`).remove();

        document.getElementById(`commentShow.${comment.id}`).innerHTML = ``;
        document.getElementById(`commentShow.${comment.id}`).remove();
        let num = 1;
        comment.postReplies.forEach((e) => {
          if (document.getElementById(`box2.${e.id}`)) {
            document.getElementById(`box2.${e.id}`).parentNode.remove();
            //.log("parent", document.getElementById(`box2.${e.id}`));

            document.getElementById(`feed.${e.id}`).innerHTML = ``;
            document.getElementById(`feed.${e.id}`).remove();

            document.getElementById(`commentShow.${e.id}`).innerHTML = ``;
            document.getElementById(`commentShow.${e.id}`).remove();
            num++;
          }
        });
        document.body.style.overflow = "auto";
        decComments(`comments.${comment.postId}`, num);
      });
      document.getElementById("no").addEventListener("click", () => {
        document.querySelector(".overlay").className = "overlay hide";
        document.getElementById("over").className = "hide";
        document.getElementById("over").innerHTML = ``;
        document.body.style.overflow = "auto";
      });
    });
}
async function hideWhenClick(id) {
  document.getElementById(`box2.${id}`).style.display = "flex";
  document.getElementById(`feed.${id}`).style.display = "flex";
  document.getElementById(`commentShow.${id}`).style.display = "none";
  document.getElementById(`commentShow.${id}`).className = "commentBox";
  document.getElementById(`esc.${id}`).className = "hide";
}
async function friends(data) {
  let users = "";
  //.log(data);
  for (let i = 0; i < data.length; i++) {
    let user = `
    <div class="user" id=${data[i].userId}>
    <img
      src=${data[i].user.image}
      width="40px"
      height="40px;"
      style="border-radius: 50%"
    />
    <div class="info2" style="margin-top: -2.5%">
      <h5 style="color: #2196f3">${
        data[i].user.firstName + " " + data[i].user.lastName
      }</h5>
      <p style="margin-top: -20px; color: #111111; font-size: small">
       ${data[i].user.bio}
      </p>
    </div>
    <i
      id=addFriend.${data[i].userId}
      class="fas fa-user-plus"
      style="margin-left: 10%; cursor: pointer"
    ></i>
  </div>

    `;
    users += user;
  }
  users += '<a href="/Network" class="seeAll">See More</a>';
  //.log(users);
  document.querySelector(".allUsers").innerHTML = users;

  for (let i = 0; i < data.length; i++) {
    let x = document.getElementById("addFriend." + data[i].userId);
    x.addEventListener("click", async () => {
      if (x.id !== "no") {
        await fetch(
          `http://127.0.0.1:3000/homepage/addFriend/${x.parentNode.id}`,
          {
            method: "POST",

            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => response.json())
          .then((json) => console.log(json));
        x.style.color = "white";

        x.setAttribute("id", "no");
        x.parentNode.setAttribute("id", "no");
      }
    });
  }
}
