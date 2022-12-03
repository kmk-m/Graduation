let id;
document.getElementById("type").addEventListener("keyup", () => {
  console.log(document.getElementById("type").value.length);
  if (document.getElementById("type").value.length > 0) {
    document.getElementById("kill").style.color = "#2196f3";
  } else {
    document.getElementById("kill").style.color = "#DCDCDC";
  }
  const sampleTextarea = document.getElementById("type");
  sampleTextarea.addEventListener("input", () => {
    sampleTextarea.style.height = "20px";
    sampleTextarea.style.height = sampleTextarea.scrollHeight + "px";
  });
});
let button = document.getElementById("kill");

document.getElementById("kill").addEventListener("click", async () => {
  if (document.getElementById("type").value.length > 0) {
    let images = document.getElementById("file-input.user1").files;
    let videos = document.getElementById("file-input.user0").files;
    let img = document.createElement("img");
    img.src = "/images/load.gif";
    img.className = "uploading";
    document
      .querySelector(".inside")
      .insertBefore(img, document.querySelector(".inside").children[3]);
    document.querySelector(".inside").children[2].remove();
    images.length > 0
      ? send(images, "image", document.getElementById("type").value)
      : send(videos, "video", document.getElementById("type").value);
  }
});
async function sendData(url, data) {
  //.log("op2", postId);
  const form_data = new FormData();
  form_data.append("video", data);

  await fetch(url, {
    method: "POST",
    body: form_data,
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
async function send(data, type, content) {
  await fetch(`http://127.0.0.1:3000/homepage/post`, {
    method: "POST",
    body: JSON.stringify({
      content: content,
      video: type === "video" ? true : false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(async (json) => {
      for (let file of data) {
        id = json.data.id;
        await sendData(
          `http://127.0.0.1:3000/upload/addPost/${json.data.id}`,
          file
        );
      }
      document.getElementById("type").value = "";
      document.getElementById("upload").innerHTML = "";
      document
        .querySelector(".inside")
        .insertBefore(button, document.querySelector(".inside").children[3]);
      document.querySelector(".inside").children[2].remove();
      document.getElementById("kill").style.color = "#DCDCDC";
      document.getElementById("upload").className = "";
      await fetch(`http://127.0.0.1:3000/homepage/post/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(async (json) => {
          addPost(json.data, json.data.userId, true);
        });
      //   const post = {
      //     post:
      //   }
      //   addPost()
    });
}
