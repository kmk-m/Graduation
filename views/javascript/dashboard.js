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
  posts(
    json.data.posts,
    json.data.User.image,
    json.data.userposts,
    json.data.User.firstName + json.data.User.lastName,
    json.data.User.bio
  );
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
const postEmojis = new Map();
const cantAdd = new Map();
const lastAction = new Map();
const numRec = new Map();
let emojis = 0;

function posts(posts, img, userposts, name, bio) {
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
    numRec.set(x.id, 0);
    for (let i = 0; i < 3; i++) {
      console.log(reactions[i]);
      if (reactions[i] == 0) break;
      if (isNaN(postEmojis.get(x.id))) postEmojis.set(x.id, 0);
      postEmojis.set(x.id, parseInt(postEmojis.get(x.id)) + 1);
      if (like === reactions[i] && !vslike) {
        numRec.set(x.id, numRec.get(x.id) + 1);
        if (!ForbeddinReaction.get(x.id)) {
          ForbeddinReaction.set(x.id, "like,");
        } else {
          ForbeddinReaction.set(x.id, ForbeddinReaction.get(x.id) + "like,");
        }
        vslike = true;
        let like1 = document.createElement("img");
        like1.className = `imo h${x.id}`;
        like1.setAttribute("id", "likepost." + x.id);
        a1.appendChild(like1);
        like1.src = "/images/like.gif";
        imgs.push(like1);
      } else if (love === reactions[i] && !vslove) {
        vslove = true;
        numRec.set(x.id, numRec.get(x.id) + 1);
        if (!ForbeddinReaction.get(x.id)) {
          ForbeddinReaction.set(x.id, "love,");
        } else {
          ForbeddinReaction.set(x.id, ForbeddinReaction.get(x.id) + "love,");
        }
        let love1 = document.createElement("img");
        love1.className = `imo h${x.id}`;
        love1.setAttribute("id", "lovepost." + x.id);

        a1.appendChild(love1);
        love1.src = "/images/love.gif";

        imgs.push(love1);
      } else if (sad === reactions[i] && !vssad) {
        if (!ForbeddinReaction.get(x.id)) {
          ForbeddinReaction.set(x.id, "sad,");
        } else {
          ForbeddinReaction.set(x.id, ForbeddinReaction.get(x.id) + "sad,");
        }
        numRec.set(x.id, numRec.get(x.id) + 1);

        vssad = true;
        let sad1 = document.createElement("img");
        sad1.setAttribute("id", "sadpost." + x.id);

        sad1.className = `imo h${x.id}`;
        a1.appendChild(sad1);
        sad1.src = "/images/sad.gif";
        imgs.push(sad1);
      } else if (angry === reactions[i] && !vsangry) {
        vsangry = true;
        if (!ForbeddinReaction.get(x.id)) {
          ForbeddinReaction.set(x.id, "angry,");
        } else {
          ForbeddinReaction.set(x.id, ForbeddinReaction.get(x.id) + "angry,");
        }
        numRec.set(x.id, numRec.get(x.id) + 1);

        let angry1 = document.createElement("img");
        angry1.className = `imo h${x.id}`;
        angry1.src = "/images/angry.gif";
        angry1.setAttribute("id", "angrypost." + x.id);
        a1.appendChild(angry1);
        imgs.push(angry1);
      }
    }

    //ps
    if (!ForbeddinReaction.get(x.id)) {
      ForbeddinReaction.set(x.id, "like,");
    } else {
      ForbeddinReaction.set(
        x.id,
        ForbeddinReaction.get(x.id).substring(
          0,
          ForbeddinReaction.get(x.id).length - 1
        )
      );
    }
    console.log("sds", ForbeddinReaction.get(x.id));

    const ps = userposts.filter((e) => {
      return e.postId == x.id;
    });

    if (ps.length > 0) {
      alreadyCliked.set(x.id, true);
      cantAdd.set(x.id, false);
      lastAction.set(x.id, ps[0].type);
    } else {
      alreadyCliked.set(x.id, false);
      cantAdd.set(x.id, true);
    }
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
      a2.setAttribute("id", "allComments2." + x.id);
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
            <img class="emoClick" src="/images/like.gif" id="likee.${x.id}" alt="">
            <p> Like</p>
          </div>
          <div class="hello emoClick" id =rec.${x.id}>
            <img class="emoClick" src="/images/love.gif" id="lovee.${x.id}" alt="">
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
      <img class="ht" src="/images/like.gif" id="like" alt="">
      <span class ="col1" style=color:blue> Like</span>   
      `;
      } else if (ps[0].type === "love") {
        document.getElementById("click." + x.id).innerHTML = `
        <img class="ht" src="/images/love.gif" id="like" alt="">
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
  <img  id="openImgUpload.${x.id}" src="/images/image.png" width="20" height="20" class="btn2" >
  <input type="file" id=imgupload${x.id} style="display:none" onchange="readURL(this);" class="imgh" /> 
  </div>
    `;
    let you = document.createElement("div");
    // you.setAttribute("id", "blah");
    // you.src = "http://placehold.it/180";
    // you.className = "yourImage";
    // you.alt = "your image";
    you.innerHTML = `
     <img id="blah${x.id}" src="http://placehold.it/180" class =yourImage alt="your image" />
     <input type="button" value="X" class="exit">
    `;
    // <img id="blah" src="http://placehold.it/180" class =yourImage alt="your image" />
    you.className = "hide";
    inputCom.className = "vis";
    inputCom.appendChild(you);
    comms.setAttribute("id", "comm" + x.id);
    comms.appendChild(inputCom);
    // comms.appendChild(you);
    videoCenter.appendChild(comms);

    //******************Start COmment */
    let comments = x.postComments;
    let commentsDiv = document.createElement("div");
    commentsDiv.className = "comments head";
    commentsDiv.setAttribute("id", "allComments." + x.id);
    videoCenter.appendChild(commentsDiv);

    comments.forEach((comment) => {
      const likes =
        parseInt(comment.like.like) +
        parseInt(comment.like.love) +
        parseInt(comment.like.sad) +
        parseInt(comment.like.angry);
      let comment3 = document.createElement("div");
      comment3.className = "comment3";
      let img2 = document.createElement("img");
      img2.src = comment.user.image;
      img2.alt = "profile";
      img2.className = "brof";
      comment3.appendChild(img2);
      let comment2 = document.createElement("div");
      comment2.className = "comment2";
      comment2.innerHTML = `
      <div class="info">
      <h4 style=text-transform: capitalize>${
        comment.user.firstName + " " + comment.user.lastName
      }</h4>
      <p style=text-transform: capitalize>${comment.user.bio}</p>
    </div>
    <div class="edits">
      <span>Edit</span>
      <span>Delete</span>
    </div>
    <div class="time">
      <span>1h</span>
    </div>
    <div class="contan">
      <p> ${comment.comment}</p>
    </div>
      `;
      comment3.appendChild(comment2);
      let rec = document.createElement("div");
      rec.className = "rec rec3";
      rec.innerHTML = `
      <p class="dr">Like</p>
      <p class="li">${likes}</p>
      <img src="/images/sad.png" alt="image">
      <p class="dr" id = reply.${comment.id}>Reply</p>
      <p class="li">${comment.postReplies.length}</p>
      <p class="li">Reply</p>
      `;
      comment3.appendChild(rec);
      let vos = document.createElement("div");
      vos.className = "vos head";
      vos.setAttribute("id", "comm" + comment.id);
      /*
      let you = document.createElement("div");
      you.innerHTML = `
       <img id="blah${x.id}" src="http://placehold.it/180" class =yourImage alt="your image" />
       <input type="button" value="X" class="exit">
      `;
      you.className = "youim";
      inputCom.className = "vis";
      inputCom.appendChild(you);      
       */
      vos.innerHTML = `
       <div class="ph">
       <img src=${img} class="im">
       </div>
       <div class="vis">
     <div class="com">
     <input id=input.${comment.id} class="inpu x adx" placeholder="Type any comment..">
     <div class="adx5">
     <img src="/images/emoticon.png" width="20" height="20" class="btn1 adx2" id="emo.${comment.id}">
     <img  id="openImgUpload.${comment.id}" src="/images/image.png" width="20" height="20" class="btn2" >
     <input type="file" id=imgupload${comment.id} style="display:none" onchange="readURL(this);" class="imgh" /> 
     </div>
     </div>
    
<div class =hide>
<img id="blah${comment.id}" src="http://placehold.it/180" class =yourImage alt="your image" />
<input type="button" value="X" class="exit">

</div>
      
       </div>
       
       `;

      comment3.appendChild(vos);

      // let you = document.createElement("div");
      // you.innerHTML = `
      //  <img id="blah${x.id}" src="http://placehold.it/180" class =yourImage alt="your image" />
      //  <input type="button" value="X" class="exit">
      // `;
      // you.className = "youim";
      // vos.appendChild(you);

      commentsDiv.appendChild(comment3);
      let num = document.getElementById("allComments2." + x.id).innerHTML;
      if (typeof num !== "undefined") {
        num = num.split(" ");
        num = parseInt(num[0]);
        num += 1;
        document.getElementById("allComments2." + x.id).innerHTML = `
        ${num} Comments
        `;
      }
      comment.postReplies.forEach((reply) => {
        const likes =
          parseInt(reply.like.like) +
          parseInt(reply.like.love) +
          parseInt(reply.like.sad) +
          parseInt(reply.like.angry);
        let comment3 = document.createElement("div");
        comment3.className = "comment3 reply2";
        let img2 = document.createElement("img");
        img2.src = reply.user.image;
        img2.alt = "profile";
        img2.className = "brof";
        comment3.appendChild(img2);
        let comment2 = document.createElement("div");
        comment2.className = "comment2";
        comment2.innerHTML = `
      <div class="info">
      <h4 style=text-transform: capitalize>${
        reply.user.firstName + " " + reply.user.lastName
      }</h4>
      <p >${reply.user.bio}</p>
    </div>
    <div class="edits">
      <span>Edit</span>
      <span>Delete</span>
    </div>
    <div class="time">
      <span>1h</span>
    </div>
    <div class="contan">
      <p> ${reply.reply}</p>
    </div>
      `;
        comment3.appendChild(comment2);
        let rec = document.createElement("div");
        rec.className = "rec rec3";
        rec.innerHTML = `
      <p class="dr">Like</p>
      <p class="li">${likes}</p>
      <img src="/images/sad.png" alt="image">
      <p class="dr" id = reply.${reply.id}>Reply</p>

      `;
        comment3.appendChild(rec);
        let vos = document.createElement("div");
        vos.className = "vos head";
        vos.setAttribute("id", "comm" + reply.id);
        vos.innerHTML = `
       <div class="ph">
       <img src=${img} class="im">
       </div>
       <div class="vis">
     <div class="com">
     <input id=input.${reply.id} class="inpu x adx" placeholder="Type any comment..">
     <div class="adx5">
     <img src="/images/emoticon.png" width="20" height="20" class="btn1 adx2" id="emo.${reply.id}">
     <img  id="openImgUpload.${reply.id}" src="/images/image.png" width="20" height="20" class="btn2" >
     <input type="file" id=imgupload${reply.id} style="display:none" onchange="readURL(this);" class="imgh" /> 
     </div>
     </div>
     <div class =hide>
<img id="blah${reply.id}" src="http://placehold.it/180" class =yourImage alt="your image" />
<input type="button" value="X" class="exit">
</div>
       </div>
       
       `;
        comment3.appendChild(vos);
        commentsDiv.appendChild(comment3);
      });
    });
    //******************End COMMENT */
  });
  let a = document.querySelectorAll(".action2");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", (e) => {
      let id = e.target.id;
      id = id.split(".")[1];
      if (!id) id = e.target.parentNode.id;
      id = id.split(".")[1];
      document.getElementById("allComments." + id).className = "comments";
      // //.log(document.getElementById(id));
      document.getElementById("comm" + id).className = "comms";
    });
  }

  let downhead = document.querySelectorAll(".dr");
  downhead.forEach((f) => {
    f.addEventListener("click", (e) => {
      let id = e.target.id.split(".")[1];
      document.getElementById("comm" + id).className = "vos";
    });
  });

  let acc = document.querySelectorAll(".action1");
  acc.forEach((ac) => {
    let id = ac.id.split(".")[1];
    let yy = document.getElementById("click." + id);
    let x = document.getElementById("like" + id);
    let y = x;

    // -------------------------- Default Delete --------------------------

    document.getElementById("click." + id).addEventListener("click", () => {
      document.getElementById("emojis." + id).className = "emoji";
      let forAction = [];
      if (ForbeddinReaction.get(id))
        forAction = ForbeddinReaction.get(id).split(",");
      let clickedType = "like";
      document.getElementById("contentt2." + id).className = "contentt2";
      // if (!alreadyCliked.get(id)) {
      //   //.log("hello");
      //   yy.innerHTML = `
      //   <img class="ht" src="/images/like.gif" id="like" alt="">
      //   <span class ="col1"> Like</span>
      //           `;
      //   alreadyCliked.set(id, true);
      // }
      // //.log(yy);

      // let x = postLikes.get(id);
      // if (isNaN(x)) x = 0;
      // x += 1;
      // //.log(x);
      // postLikes.set(id, x);
      // document.getElementById("like" + id).innerHTML = `${x} Users`;
      // cantAdd.set(id, false);
      // // default add
      // let forAction = [];
      // if (ForbeddinReaction.get(id))
      //   forAction = ForbeddinReaction.get(id).split(",");
      // if (
      //   postEmojis.get(id) < 3 ||
      //   typeof postEmojis.get(id) === "undefined"
      // ) {
      //   cantAdd.set(id, true);
      //   if (!forAction.includes("like")) {
      //     let a1 = document.getElementById("a1." + id);

      //     let small = document.createElement("img");
      //     small.className = `imo h${id}`;
      //     small.setAttribute("id", `likepost. + ${id}`);
      //     a1.appendChild(small);
      //     small.src = `/images/like.gif`;

      //     lastAction.set(id, "like");
      //   }
      // }
      //  alreadyCliked.set(id, true);
      //}
      if (
        parseInt(postLikes.get(id)) <= parseInt(forAction.length) ||
        (postLikes.get(id) <= numRec.get(id) && numRec.get(id) !== 0)
      ) {
        let a1 = document.getElementById("a1." + id);
        a1.removeChild(
          document.getElementById(`${lastAction.get(id)}post.${id}`)
        );
        // delete Word from string in js ?
        let toReplace = [];
        let toReplace2 = "";

        if (ForbeddinReaction.get(id))
          toReplace = ForbeddinReaction.get(id).split(",");
        for (let py = 0; py < toReplace.length; py += 1) {
          if (toReplace[py] !== lastAction.get(id)) {
            toReplace2 += toReplace[py];
            toReplace2 += ",";
          }
        }
        if (toReplace.length > 0) {
          toReplace2 = toReplace2.substring(0, toReplace2.length - 1);
        }
        console.log(toReplace2);
        ForbeddinReaction.set(id, toReplace2);
        numRec.set(id, numRec.get(id) - 1);
      }

      if (alreadyCliked.get(id)) {
        yy.innerHTML = `
      <i class="far fa-thumbs-up" aria-hidden="true"></i><span>Like</span></action>
      `;
        lastAction.set(id, "");
        let x = postLikes.get(id);
        x -= 1;

        if (x == 0) document.getElementById("like" + id).innerHTML = ``;
        else {
          document.getElementById("like" + id).innerHTML = `${x} Users`;
        }
        // delete word in js ?
        postLikes.set(id, x);
        cantAdd.set(id, true);
        alreadyCliked.set(id, false);
        // delete small
      }

      if (postEmojis.get(id) < 3) {
        //.log("clikedtype", clickedType);
        cantAdd.set(id, true);
        if (
          !forAction.includes(clickedType) &&
          lastAction.get(id) !== clickedType
        ) {
          let a1 = document.getElementById("a1." + id);

          let small = document.createElement("img");
          small.className = `imo h${id}`;
          small.setAttribute("id", `${clickedType}post. + ${id}`);
          a1.appendChild(small);
          small.src = `/images/${clickedType}.gif`;

          if (lastAction.get(id) !== "") {
            numRec.set(id, numRec.get(id) + 1);

            a1.removeChild(a1.children[a1.children.length - 2]);
          }
          lastAction.set(id, clickedType);
          //.log("hello2", lastAction.get(id));
          alreadyCliked.set(id, false);
        }
        // --------------------------Finish Default Delete --------------------------
        console.log(lastAction.get(id));
        console.log(ForbeddinReaction.get(id));

        alreadyCliked.set(id, false);

        // let postrec = postRec.get(id);
        // postRec.set(id, {
        //   like: map1.get(id) === "like.gif" ? postrec.like - 1 : postrec.like,
        //   love: map1.get(id) === "love.gif" ? postrec.love - 1 : postrec.love,
        //   sad: map1.get(id) === "sad.gif" ? postrec.sad - 1 : postrec.sad,
        //   angry:
        //     map1.get(id) === "angry.gif" ? postrec.angry - 1 : postrec.angry,
        // });

        let allPhotos = document.getElementById("a1." + id);

        for (let i = 0; i < allPhotos.children.length; i++) {
          let check = allPhotos.children[i].src.split("/");
          check = check[check.length - 1];
          if (check === "like.gif" && postRec.get(id).like === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          } else if (check === "love.gif" && postRec.get(id).love === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          } else if (check === "sad.gif" && postRec.get(id).sad === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          } else if (check === "angry.gif" && postRec.get(id).angry === 0) {
            allPhotos.removeChild(allPhotos.children[i]);
          }
        }
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
      let yy = document.getElementById("click." + id);
      let a1 = document.getElementById("a1." + id);
      let clickedType = e.target.src.split("/");
      clickedType = clickedType[clickedType.length - 1];
      let color;
      if (clickedType === "sad.gif") {
        clickedType = "sad";
        color = "yellow";
      } else if (clickedType === "angry.gif") {
        clickedType = "angry";
        color = "orange";
      } else if (clickedType === "love.gif") {
        color = "red";
        clickedType = "love";
      } else {
        color = "blue";
        clickedType = "like";
      }
      // lastAction.set(id, clickedType);
      alreadyCliked.set(id, true);
      if (cantAdd.get(id)) {
        let x = postLikes.get(id);
        if (isNaN(x)) x = 0;
        x += 1;
        postLikes.set(id, x);
        document.getElementById("like" + id).innerHTML = `${x} Users`;
        cantAdd.set(id, false);
      }
      let forAction = [];
      if (ForbeddinReaction.get(id))
        forAction = ForbeddinReaction.get(id).split(",");
      yy.innerHTML = `
      <img class="ht" src="/images/${clickedType}.gif" id=${clickedType} alt="">
      <span  style=color:${color} > ${clickedType}</span>         `;
      //.log("new image", postEmojis.get(id));

      if (postEmojis.get(id) < 3 || typeof postEmojis.get(id) === "undefined") {
        //.log("new image");

        if (
          !forAction.includes(clickedType) &&
          lastAction.get(id) !== clickedType
        ) {
          numRec.set(id, numRec.get(id) + 1);
          //.log("new image");
          let small = document.createElement("img");
          small.className = `imo h${id}`;
          small.setAttribute("id", `${clickedType}post.${id}`);
          a1.appendChild(small);
          small.src = `/images/${clickedType}.gif`;

          if (
            typeof lastAction.get(id) !== "undefined" &&
            lastAction.get(id) !== ""
          ) {
            //.log("deleted");
            a1.removeChild(a1.children[a1.children.length - 2]);
          }
          lastAction.set(id, clickedType);
          //.log(lastAction.get(id));
        } else if (
          forAction.includes(clickedType) &&
          lastAction.get(id) !== clickedType
        ) {
          if (lastAction.get(id) !== "") {
            //pp
            let toReplace = [];
            if (ForbeddinReaction.get(id))
              toReplace = ForbeddinReaction.get(id).split(",");
            for (let py = 0; py < toReplace.length; py += 1) {
              if (toReplace[py] === lastAction.get(id)) {
                toReplace.pop(py);
                break;
              }
            }
            let toReplace2 = "";
            for (let py = 0; py < toReplace.length - 1; py += 1) {
              toReplace2 += toReplace[py];
              toReplace2 += ",";
            }
            if (toReplace.length > 0) {
              toReplace2 += toReplace[toReplace.length - 1];
            }
            ForbeddinReaction.set(id, toReplace2);
            numRec.set(id, numRec.get(id) - 1);
            a1.removeChild(a1.children[a1.children.length - 1]);
          }
          lastAction.set(id, "");
        }
      }
    });
  }
  const todrop = document.querySelectorAll(".btn2");
  todrop.forEach((e) => {
    const id = e.id.split(".")[1];
    const exit = document.getElementById(`blah${id}`).parentNode.children[1];
    //.log("ht", exit);
    exit.addEventListener("click", () => {
      //.log(document.getElementById(`blah${id}`).parentNode.children[0]);
      document.getElementById(`blah${id}`).parentNode.children[0].className =
        "hide";
      document.getElementById(`blah${id}`).parentNode.children[1].className =
        "hide";
      document.getElementById(`blah${id}`).parentNode.className = "hide";
    });
    e.addEventListener("click", (ty) => {
      //.log("dropped");
      const id = ty.target.id.split(".")[1];
      //.log(document.getElementById(`imgupload${id}`));
      $(`#imgupload${id}`).trigger("click");
    });
  });
  // $("#OpenImgUpload").click(function () {
  //   $("#imgupload").trigger("click");
  // });

  let buttons = document.querySelectorAll(".btn1");
  buttons.forEach((x) => {
    x.addEventListener("click", (e) => {
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
  });

  // arr = document.querySelectorAll(".addcoment");
  // arr.forEach((xx) => {
  //   //.log("hrllo");

  //   //.log("e.target.id");
  //   //.log(xx);
  //   $(`#text.06a85b72-4266-11ed-ab26-0045e21c18f1`).emojioneArea({
  //     pickerPosition: "bottom",
  //   });
  // });
}
function func2() {
  $("textarea").emojioneArea({
    pickerPosition: "bottom",
  });
}
let message = document.getElementById("not12").addEventListener("click", () => {
  //.log("yes");
  window.location.href = "http://127.0.0.1:3000/chat";
});
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
