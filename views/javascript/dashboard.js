let access_token = document.cookie;
access_token.slice(access_token.indexOf("="));
let alreadyClicked = new Map();
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
  .then((json) => data(json));

function data(json) {
  if (json.code === "not has Interests") {
    window.location.href = "http://127.0.0.1:3000/interests";
  }
  hackathons(json.data.hackathons);
  posts(json.data.posts);
}

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

function posts(allPosts) {
  allPosts.forEach((x) => {
    addPost(x);
  });
}
function addPost(post) {
  post.userPost
    ? alreadyClicked.set(post.id, true)
    : alreadyClicked.set(post.id, false);
  let numberOfComments = post.postComments.length;
  post.postComments.forEach((x) => {
    numberOfComments += x.postReplies.length;
  });
  numberOfComments === 0 || post.upVote + post.downVote === 0
    ? (bool = false)
    : (bool = true);
  const parent = document.querySelector(".allPosts");
  const post2 = document.createElement("div");
  post2.className = "post";
  post2.innerHTML = `
  <p>
  ${post.content}
</p>
<video src=${post.link} controls=""></video> 
<div class="reactions">
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
  <div class="action3 action">
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
  <div class="collection">
    <img
    src="/images/camera.png"
    alt=""
    width="20"
    height="20"
  />
  <img
  id =btn.${post.id}
  src="/images/emoticon.png"
  alt=""
  width="20"
  height="20"
/>
  <span>
  </div>
</div>

<div class="allComments" id = post.${post.id}>

</div>
<!-- showmoare -->
<div id="showmore">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">ShowMore</span>
  </button>
</div>
<!-- end showmoare -->
  
  `;

  parent.appendChild(post2);
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
  const box = document.getElementById("box." + post.id);
  box.addEventListener("click", () => {
    document.getElementById("commentShow." + post.id).style.display = "flex";
    document.getElementById("post." + post.id).style.display = "block";
  });

  let button = document.getElementById(`btn.${post.id}`);
  button.addEventListener("click", (e) => {
    let id = e.target.id.split(".")[1];
    let inputId = `input.${id}`;

    new EmojiPicker({
      trigger: [
        {
          insertInto: ["#txt1", inputId],
          selector: ".btn1",
        },
      ],
      closeButton: true,
      dragButton: false,
    });
  });

  post.postComments.forEach((x) => {
    addComment(x);
  });
}
function addComment(comment) {
  console.log("hello", comment.upvote + comment.downvote);
  console.log(comment.updatedAt);
  comment.userPost
    ? alreadyClicked.set(comment.id, true)
    : alreadyClicked.set(comment.id, false);

  const parent = document.getElementById("post." + comment.postId);
  const comment2 = document.createElement("div");
  let countDownDate = new Date(comment.updatedAt).getTime();
  // Get Date Now
  let dateNow = new Date().getTime();
  countDownDate -= 7300000;

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
  console.log("times", days, hours, minutes, seconds);

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
<div class="box">

<div class="info">
<h5>${comment.user.firstName + " " + comment.user.lastName}</h5>
<p class="p1">${comment.user.bio}</p>
<p class="p2">${comment.comment}</p>
</div>

  <div class="settingsAndDate">

    <div class="settings">
      <span>Edit</span>
      <span>Delete</span>
    </div>
  
    <div class="date">
     <span>${date}</span>
     </div>

  </div>
</div>
`;
  const feedss = document.createElement("div");
  feedss.className = "feeds";
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
<input type="text" placeholder="Type Any Thing">
<div class="collection">
  <img
  src="/images/camera.png"
  alt=""
  width="20"
  height="20"
/>
<img
src="/images/emoticon.png"
alt=""
width="20"
height="20"
/>
<span>
</div>

`;
  parent.appendChild(comment2);
  parent.appendChild(feedss);
  parent.appendChild(commentBox);
  console.log(parent);

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
  box.addEventListener("click", () => {
    document.getElementById("commentShow." + comment.id).style.display = "flex";
  });

  comment.postReplies.forEach((x) => {
    addReplay(x);
  });
}

function addReplay(replay) {
  replay.userPost
    ? alreadyClicked.set(replay.id, true)
    : alreadyClicked.set(replay.id, false);

  let countDownDate = new Date(replay.updatedAt).getTime();
  countDownDate -= 7300000;
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = dateNow - countDownDate;
  // Get Time Units
  console.log("time", dateDiff);

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

  const parent = document.getElementById(
    "comment." + replay.commentId
  ).parentNode;
  console.log("pare", parent.parentNode);
  const replay2 = document.createElement("div");
  replay2.className = "comment replay";
  replay2.setAttribute("id", replay.id);
  replay2.innerHTML = `
  <img
  src=${replay.user.image}
  alt=""
  width="50"
  height="50"
  style="border-radius:31px;"
/>
<div class="box">
  <div class="info">
  <h5>${replay.user.firstName + " " + replay.user.lastName}</h5>
  <p class="p1">${replay.user.bio}</p>
  <p class="p2">${replay.reply}</p>
  </div>
  <div class="settingsAndDate">
    <div class="settings">
      <span>Edit</span>
      <span>Delete</span>
    </div>
     <div class="date">
      <span>${date}</span>
     </div>
  </div>
</div>
`;

  const feedss = document.createElement("div");
  feedss.className = "feeds feedsReplay";
  feedss.innerHTML = `
<div class="emojiClick" id=emo.${replay.id}>
  <img
  src=${
    replay.upvote > 0 ? (src = "/images/Love.gif") : (src = "/images/heart.png")
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
<input type="text" placeholder="Type Any Thing">
<div class="collection">
  <img
  src="/images/camera.png"
  alt=""
  width="20"
  height="20"
/>
<img
src="/images/emoticon.png"
alt=""
width="20"
height="20"
/>
<span>
</div>
`;
  parent.appendChild(replay2);
  parent.appendChild(feedss);
  parent.appendChild(commentBox);

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
    document.getElementById("commentShow." + replay.id).style.display = "flex";
  });
}

function func2() {
  $("input").emojioneArea({
    pickerPosition: "bottom",
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
