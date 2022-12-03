for (let i = 0; i < 2; i += 1) {
  let x = document.getElementById(`file-input.user${i}`);
  x.addEventListener("change", () => {
    let allFiles = x.files;
    let vis1 = false;
    let vis2 = false;
    let vis3 = false;
    document.getElementById("upload").className = "upload";
    for (const file of allFiles) {
      console.log(file);
      if (Math.floor(file.size / 1024 / 1024 > 5)) vis3 = true;
      if (file.type.includes("image")) vis1 == true;
      else if (file.type.includes("video")) vis2 = true;
    }
    if (
      i == 0 &&
      allFiles.length === 1 &&
      allFiles[0].type.includes("video") &&
      Math.floor(allFiles[0].size / 1024 / 1024) <= 5
    ) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(allFiles[0]);
      fileReader.addEventListener("load", function () {
        //.log(document.getElementById(`imr.${post.id}`));

        document.getElementById("upload").innerHTML = `
         <div
         style="width: 90%; display: flex; flex-direction: row-reverse;margin-left:10%" id="up"
       >
         <i
           class="fa-sharp fa-solid fa-xmark"
           style="
             color: red;
             margin-left: -10px;
             z-index: 10;
             cursor: pointer;
           "
         ></i>
         <video src=${this.result}#t=0.5 controls></video>
         
       </div> 
         `;
      });
    } else if (!vis2 && !vis3) {
      for (const file of allFiles) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener("load", async function () {
          //.log(document.getElementById(`imr.${post.id}`));
          const x = document.createElement("div");
          x.innerHTML = `
           
         <div
                style="width: 100px; display: flex; flex-direction: row-reverse"
              >
                <i
                  class="fa-sharp fa-solid fa-xmark"
                  style="
                    color: red;
                    margin-left: -10px;
                    z-index: 10;
                    cursor: pointer;
                  "
                ></i>
                <img src=${this.result} alt="image" width="100%" />
              </div>
           `;
          let parent = document.getElementById("upload");
          parent.appendChild(x);
          let allx = document.querySelectorAll(".fa-xmark");
          for (const j of allx) {
            j.addEventListener("click", (e) => {
              const Files = [];
              for (const file2 of allFiles) {
                if (file2 !== file) {
                  Files.push(file2);
                }
              }
              allFiles = Files;
              e.target.parentNode.remove();
            });
          }
        });
      }
    }
  });
}
