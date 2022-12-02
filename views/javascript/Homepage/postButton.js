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
document.getElementById("kill").addEventListener("click", async () => {
  let images = document.getElementById("file-input.user1").files;
  let videos = document.getElementById("file-input.user0").files;
  images.length > 0
    ? sendData(`http://127.0.0.1:3000/upload/addPost`, images[0], "image")
    : sendData(`http://127.0.0.1:3000/upload/addPost`, videos[0], "video");
});
async function sendData(url, data, type) {
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
