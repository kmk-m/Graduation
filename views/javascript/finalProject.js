fetch("http://127.0.0.1:3000/courses/4ecbb59f-4145-11ed-b8c1-0045e21c18f1/finalProject/data", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => requ(json.data));

function requ(json) {
  const par = json.Requirements.requirement.split(",");
  const p = document.createElement("p");
  for (let i = 0; i < par.length; i++) {

    p.innerHTML += `• ${par[i]} <br> <br>`;
  }
  const req = document.querySelector(".req");
  req.appendChild(p);

  // const lastSubmissionArray = json.lastSubmission;
  // const p2 = document.createElement("p");
  // p2.className = "par1";
  // const lastSubmissionParent = document.querySelector(".req3");
  // for (let i = 0; i < par2.length; i++) {
  //   p2.innerHTML += `${par2[i].link}`;
  //   req3.appendChild(p2);
  // }


}
